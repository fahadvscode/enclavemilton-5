/**
 * Copy Supabase env vars from enclave1 → enclavemilton-4 via Vercel API (no values logged).
 * Run: node scripts/copy-supabase-env-vercel-api.mjs
 */
import { readFileSync } from "fs";
import { homedir } from "os";
import { join } from "path";

const SOURCE_PROJECT = "prj_X3orQPTRsZF8LzFOnStRCc2LX8WO"; // enclave1
const TARGET_PROJECT = "prj_5litNXlxS8UC8ORRL2EDS33dwMmB"; // enclavemilton-4
const KEYS = ["SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"];
const TARGET_ENVS = ["production", "preview", "development"];

function loadToken() {
  const paths = [
    join(homedir(), ".local/share/com.vercel.cli/auth.json"),
    join(homedir(), "Library/Application Support/com.vercel.cli/auth.json"),
  ];
  for (const p of paths) {
    try {
      const data = JSON.parse(readFileSync(p, "utf8"));
      const token = data.token ?? data.credentials?.[0]?.token;
      if (token) return token;
    } catch {
      /* try next */
    }
  }
  throw new Error("Vercel CLI auth token not found. Run: npx vercel login");
}

async function api(token, path, options = {}) {
  const res = await fetch(`https://api.vercel.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const text = await res.text();
  let body;
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    body = { raw: text };
  }
  if (!res.ok) {
    throw new Error(`${options.method ?? "GET"} ${path} → ${res.status}: ${text.slice(0, 200)}`);
  }
  return body;
}

async function getSourceValues(token) {
  const data = await api(token, `/v9/projects/${SOURCE_PROJECT}/env?decrypt=true`);
  const map = new Map();
  for (const e of data.envs ?? []) {
    if (KEYS.includes(e.key) && e.value) {
      map.set(e.key, e.value);
    }
  }
  for (const k of KEYS) {
    if (!map.get(k)) throw new Error(`Missing ${k} on source project enclave1`);
  }
  return map;
}

async function getTargetEnv(token) {
  const data = await api(token, `/v9/projects/${TARGET_PROJECT}/env`);
  return data.envs ?? [];
}

async function upsertEnv(token, key, value, targetEnv, existing) {
  const match = existing.find(
    (e) => e.key === key && (e.target ?? []).some((t) => t === targetEnv || t?.target === targetEnv)
  );

  if (match) {
    await api(token, `/v9/projects/${TARGET_PROJECT}/env/${match.id}`, {
      method: "PATCH",
      body: JSON.stringify({ value, target: [targetEnv], type: match.type ?? "encrypted" }),
    });
    console.log(`Updated ${key} (${targetEnv})`);
    return;
  }

  await api(token, `/v9/projects/${TARGET_PROJECT}/env`, {
    method: "POST",
    body: JSON.stringify({
      key,
      value,
      type: key.startsWith("NEXT_PUBLIC_") ? "plain" : "encrypted",
      target: [targetEnv],
    }),
  });
  console.log(`Added ${key} (${targetEnv})`);
}

async function main() {
  const token = loadToken();
  const values = await getSourceValues(token);
  let existing = await getTargetEnv(token);

  for (const targetEnv of TARGET_ENVS) {
    for (const key of KEYS) {
      await upsertEnv(token, key, values.get(key), targetEnv, existing);
      existing = await getTargetEnv(token);
    }
  }

  console.log("Supabase env copied to enclavemilton-4.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
