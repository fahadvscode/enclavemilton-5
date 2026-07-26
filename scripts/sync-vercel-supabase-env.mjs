/**
 * Run from enclave1 with production env injected:
 *   cd "../The Enclave landing page 1"
 *   npx vercel env run -e production -- node "../enclave landing page 4/scripts/sync-vercel-supabase-env.mjs"
 */
import { execFileSync } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const site4Root = join(dirname(fileURLToPath(import.meta.url)), "..");

const vars = [
  "SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
];

const environments = ["production", "preview", "development"];

for (const name of vars) {
  const value = process.env[name]?.trim();
  if (!value) {
    console.error(`Missing ${name} in environment (run via enclave1 vercel env run).`);
    process.exit(1);
  }

  for (const env of environments) {
    try {
      execFileSync(
        "npx",
        ["vercel", "env", "update", name, env, "--value", value, "--yes"],
        { cwd: site4Root, stdio: "pipe" }
      );
      console.log(`Updated ${name} (${env})`);
    } catch {
      execFileSync(
        "npx",
        ["vercel", "env", "add", name, env, "--value", value, "--yes"],
        { cwd: site4Root, stdio: "pipe" }
      );
      console.log(`Added ${name} (${env})`);
    }
  }
}

console.log("Done — Supabase env synced to enclavemilton-4.");
