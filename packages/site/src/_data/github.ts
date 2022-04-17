interface Branch {
  name: string;
}

interface Repository {
  id: number;
  name: string;
  owner: string;
  last_update: number;
  stats: {
    license: string | null;
    size: number;
    fork: "yes" | "no";
  };
  branches: Branch[];
  description: string | null;
  url: string;
}

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const repositories = (await (await fetch("https://api.github.com/users/xHyroM/repos")).json()).map((repository: any) =>
  new Object({
    id: repository.id,
    owner: repository.owner.login,
    name: repository.name,
    last_update: new Date(repository.updated_at).getTime(),
    stats: {
      size: formatBytes(repository.size * 1000),
      license: repository?.license?.spdx_id ?? "?",
      fork: repository.fork ? "yes" : "no",
    },
    description: repository.description,
    url: repository.svn_url,
  })
) as Repository[];

for (const repository of repositories) {
  const branches = await (await fetch(`https://api.github.com/repos/xHyroM/${repository.name}/branches`)).json();

  repository.branches = branches.map((branch: Branch) => 
    new Object({
      name: branch.name,
      url: `https://github.com/${repository.owner}/${repository.name}/tree/${branch.name}/`
    })
  )
}

repositories.sort((a, b) => b.last_update - a.last_update)

export default {
  repositories: repositories,
};
