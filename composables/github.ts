import { createNodeMiddleware, Octokit } from "octokit";

export function useGithubKit(token: string) {
  const octokit = new Octokit({
    auth: token,
  });
  const config = useRuntimeConfig();
  console.log("client ID=>", config.githubClientID);

  const queryStar = async () => {
    await octokit.request(
      `POST /applications/${config.githubClientID}/token`,
      {
        client_id: config.githubClientID,
        access_token: config.githubSecret,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
  };

  return {
    queryStar,
  };
}
