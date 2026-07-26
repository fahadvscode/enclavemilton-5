#!/usr/bin/env bash
# Run from enclave1 with production env (use sh -c wrapper — Node does not receive injected env):
#   mv .env.local .env.local.bak  # if it contains empty overrides
#   npx vercel env run -e production -- sh "../enclave landing page 4/scripts/sync-vercel-supabase-env.sh"
set -euo pipefail

SITE4="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SITE4"

for name in SUPABASE_URL NEXT_PUBLIC_SUPABASE_URL SUPABASE_SERVICE_ROLE_KEY; do
  val="${!name:-}"
  if [ -z "$val" ]; then
    echo "Missing $name" >&2
    exit 1
  fi
  for env in production preview development; do
    if npx vercel env update "$name" "$env" --value "$val" --yes 2>/dev/null; then
      echo "Updated $name ($env)"
    else
      npx vercel env add "$name" "$env" --value "$val" --yes
      echo "Added $name ($env)"
    fi
  done
done

echo "Done — Supabase env synced to enclavemilton-4."
