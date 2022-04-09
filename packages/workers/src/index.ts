import { Router } from "itty-router";
import { handleOptions } from "./handlers/handleOptions";
import { errorHandler } from "./utils/errorHandler";
import { numberPad } from "./utils/numberPad";
import { postTemplate } from "./utils/postTemplate";
import { sendResponse } from "./utils/sendResponse";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

const router = Router();

router.get("/", () => {
  return sendResponse({
    status: 200,
    message: "Hello World!",
  });
});

router.put("/post", async (request) => {
  const formData = await request.formData?.();

  const content = formData.get("content");
  const title = formData.get("title");
  const description = formData.get("description");
  const adminName = formData.get("adminName");
  const adminPass = formData.get("adminPass");

  if (
    (
      adminName !== admin_name &&
      adminPass !== admin_pass
    ) ||
    (
      adminName !== admin_name
    ) ||
    (
      adminPass !== admin_pass
    )
  ) {
    return sendResponse({
      status: 401,
      message: "Unauthorized",
    });
  }

  if (!content) {
    return sendResponse({
      status: 400,
      message: "Content is required.",
    });
  }

  if (!title) {
    return sendResponse({
      status: 400,
      message: "Title is required.",
    });
  }

  if (!description) {
    return sendResponse({
      status: 400,
      message: "Description is required.",
    });
  }

  let template = postTemplate;

  const date = new Date();
  const fileName = `${title.toLowerCase().replace(/ /g, "-")}.md`;

  template = template
    .replace("{{title}}", title)
    .replace("{{description}}", description)
    .replace(
      "{{date}}",
      `${date.getFullYear()}-${numberPad(date.getMonth() + 1)}-${
        numberPad(date.getDate())
      }`,
    )
    .replace("{{content}}", content);

  const res = await fetch(
    `https://api.github.com/repos/xHyroM/xHyroM/contents/packages/site/src/blog/posts/${fileName}`,
    {
      method: "PUT",
      headers: {
        "Authorization": `token ${github_token}`,
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "Cloudflare Workers (github.com/xHyroM/xHyroM)",
      },
      body: JSON.stringify({
        message: `New blog post ${title} 🚀`,
        content: btoa(template),
        branch: "master",
      }),
    },
  ).catch((e) => e);

  return sendResponse({
    status: 200,
    posted: res.ok,
    output: (await res.text()),
    content,
    title,
    file_name: fileName,
    template,
    encoded: btoa(template),
  });
});

router.all("*", (request) => {
  if (request.method === 'OPTIONS') {
    return handleOptions();
  }

  return sendResponse(
    {
      status: 404,
      message: "Not Found",
    },
    {
      status: 404,
    },
  );
})

addEventListener("fetch", (event) =>
  event.respondWith(
    router
      .handle(event.request)
      .catch(errorHandler),
  ));
