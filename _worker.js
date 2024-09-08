export { onRequest } from "@cloudflare/next-on-pages/api";

export const config = {
  runtime: "edge",
  regions: ["cle1"],
  compatibility_flags: ["nodejs_compat"],
};