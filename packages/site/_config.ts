import lume from "https://deno.land/x/lume@v1.13.2/mod.ts";
import postcss from "https://deno.land/x/lume@v1.13.2/plugins/postcss.ts";
import parcelCss from "https://deno.land/x/lume@v1.13.2/plugins/parcel_css.ts";
import codeHighlight from "https://deno.land/x/lume@v1.13.2/plugins/code_highlight.ts";
import resolveUrls from "https://deno.land/x/lume@v1.13.2/plugins/resolve_urls.ts";
import esbuild from "https://deno.land/x/lume@v1.13.2/plugins/esbuild.ts";
import date from "https://deno.land/x/lume@v1.13.2/plugins/date.ts";
import { readingTime } from "./plugins/readingTime.ts";
import { htmlMinifier } from "./plugins/htmlMinifier.ts";

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
  .copy("info.txt", "./info.txt")
  .copy("static", ".")
  .loadAssets([".ts"])
  .use(resolveUrls())
  .use(codeHighlight())
  .use(postcss())
  .use(parcelCss())
  .use(date())
  .use(esbuild({
    options: {
      bundle: true,
      keepNames: true,
      minify: false,
      minifyWhitespace: true,
      minifySyntax: true,
      platform: "browser",
    },
  }))
  .use(htmlMinifier())
  .scopedUpdates(
    (path) => path.endsWith(".css"),
    (path) => path.endsWith(".png") || path.endsWith(".jpg"),
  )
  // Filters
  .filter("readingTime", (pageOrContent) => {
    if (!pageOrContent) {
      throw new Error(
        `Passed falsy value to readingTime filter: ${pageOrContent}`,
      );
    }

    return readingTime(pageOrContent);
  })
  .filter("slice", (arr, length) => arr.slice(0, length));

export default site;
