import type { Page } from "https://deno.land/x/lume@v1.7.2/core.ts";

export const readingTime = (
  pageOrContent: Page | string,
) => {
  const page: string = typeof pageOrContent === "string"
    ? pageOrContent
    : (pageOrContent as any).data.content;

  if (typeof page !== "string") return "0 minutes";

  const content = page.replace(/(<([^>]+)>)/gi, "");
  const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g);
  const count = matches ? matches.length : 0;

  const time = `${Math.ceil(count / 250)} min`;

  return time;
};
