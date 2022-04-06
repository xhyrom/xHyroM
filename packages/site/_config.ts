import lume from "https://deno.land/x/lume@v1.7.2/mod.ts";
import postcss from "https://deno.land/x/lume@v1.7.2/plugins/postcss.ts";
import codeHighlight from "https://deno.land/x/lume@v1.7.2/plugins/code_highlight.ts";
import resolveUrls from "https://deno.land/x/lume@v1.7.2/plugins/resolve_urls.ts";
import esbuild from "https://deno.land/x/lume@v1.7.2/plugins/esbuild.ts";
import date from "https://deno.land/x/lume@v1.7.2/plugins/date.ts";

const site = lume(
  {
    src: "./src",
    server: {
      page404: "./404/",
    },
  },
);

site
  .ignore("README.md")
  .ignore("scripts")
  .copy("info.txt", "./info.txt")
  .copy("static", ".")
  .use(resolveUrls())
  .use(codeHighlight())
  .use(postcss())
  .use(date())
  .use(esbuild({
    extensions: [".js", ".ts"],
  }))
  .scopedUpdates(
    (path) => path.endsWith(".css"),
    (path) => path.endsWith(".png") || path.endsWith(".jpg"),
  )
  .filter("slice", (arr, length) => arr.slice(0, length));

export default site;
