export const postTemplate = [
  "---",
  "title: '{{title}}'",
  "description: '{{description}}'",
  "date: {{date}}",
  "---",
  "",
  "{{content}}",
].join("\n");
