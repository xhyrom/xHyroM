import type { Site } from "https://deno.land/x/lume@v1.7.2/core.ts";
import { Language, minify } from "https://deno.land/x/minifier/mod.ts";

export const htmlMinifier = () => {
    return (site: Site) => {
        site.process(['.html'], (page) => {
            page.content = minify(Language.HTML, page.content as string);
        })
    }
}