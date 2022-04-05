import { createHash } from "https://deno.land/std@0.77.0/hash/mod.ts";

const devHash = createHash("sha256");
devHash.update("dev");

export default {
  hash: Deno.env.get("GITHUB_SHA") || Deno.env.get("CF_PAGES_COMMIT_SHA") ||
    devHash.toString(),
  date: new Date().toUTCString(),
};
