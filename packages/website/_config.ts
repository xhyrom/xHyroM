import lume from "https://deno.land/x/lume@v1.7.2/mod.ts";
import postcss from "https://deno.land/x/lume@v1.7.2/plugins/postcss.ts";
import codeHighlight from "https://deno.land/x/lume@v1.7.2/plugins/code_highlight.ts";
import resolveUrls from "https://deno.land/x/lume@v1.7.2/plugins/resolve_urls.ts";
import esbuild from "https://deno.land/x/lume@v1.7.2/plugins/esbuild.ts";

const site = lume(
  {
    src: './src'
  }
);

site
  .ignore("README.md")
  .ignore("scripts")
  .copy("static", ".")
  .use(resolveUrls())
  .use(codeHighlight())
  .use(postcss())
  .use(esbuild({
    extensions: [".js"],
  }))
  .scopedUpdates(
    (path) => path.endsWith(".css"),
    (path) => path.endsWith(".png") || path.endsWith(".jpg"),
  )
  .filter("slice", (arr, length) => arr.slice(0, length))

export default site;