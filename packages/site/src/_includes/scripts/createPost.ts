/// <reference lib="dom" />

import { clearForm } from './clearForm.ts';

export const createPostForm = (
  event: any,
  method: string | null,
  action: string | null,
) => {
  if (!event || !method || !action) return;
  event?.preventDefault();

  const formdata = new FormData();

  const title = document.querySelector("#title") as HTMLInputElement;
  const description = document.querySelector(
    "#description",
  ) as HTMLInputElement;
  const content = document.querySelector("#content") as HTMLTextAreaElement;

  const adminName =
    (document.querySelector("#adminName") as HTMLInputElement)?.value ||
    localStorage.getItem("adminName") || "bad";
  const adminPass =
    (document.querySelector("#adminPass") as HTMLInputElement)?.value ||
    localStorage.getItem("adminPass") || "bad";

  if (!title || !description || !content) {
    console.log("Error: Form elements not found");
    return;
  }

  formdata.append("title", title?.value);
  formdata.append("description", description?.value);
  formdata.append("content", content?.value);
  formdata.append("adminName", adminName);
  formdata.append("adminPass", adminPass);

  clearForm(document.querySelector("form") as HTMLFormElement);

  fetch(action, {
    method,
    body: formdata,
  })
    .then(() => {
      console.log("Blog post has been created.");
    })
    .catch((e) => {
      console.error(e);
    });
};

createPostForm(null, null, null);
