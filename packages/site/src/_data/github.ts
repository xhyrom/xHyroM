interface Repository {
  id: number;
  name: string;
  stats: {
    license: string | null;
    size: number;
    fork: "yes" | "no";
  };
  description: string | null;
  url: string;
}

const repositories =
  await (await fetch("https://api.github.com/users/xHyroM/repos")).json();

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export default {
  repositories: repositories.map((repository: any) =>
    new Object({
      id: repository.id,
      name: repository.name,
      stats: {
        size: formatBytes(repository.size * 1000),
        license: repository?.license?.spdx_id ?? "?",
        fork: repository.fork ? "yes" : "no",
      },
      description: repository.description,
      url: repository.svn_url,
    })
  ) as Repository[],
};
