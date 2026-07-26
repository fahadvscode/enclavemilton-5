/** Fallback API when Supabase env vars are missing — forwards Site E leads into the same `enclave` table. */
export const DEFAULT_REGISTRATION_FORWARD_URL =
  "https://www.enclavemilton.com/api/register";

export function getRegistrationForwardUrl() {
  const custom = process.env.REGISTRATION_FORWARD_URL?.trim();
  return custom || DEFAULT_REGISTRATION_FORWARD_URL;
}
