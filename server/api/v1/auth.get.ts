import { App, Octokit } from "octokit";
export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  if (code) {
    // exchange the code for a token with your backend.
    // If you use https://github.com/octokit/oauth-app.js
    // the exchange would look something like this
    const config = useRuntimeConfig(event);
    const app = new App({
      appId: config.githubAppID,
      privateKey: config.githubSecret,
      oauth: {
        clientId: config.githubClientID,
        clientSecret: config.githubSecret,
      },
    });

    let login = "";
    try {
      const { token } = await app.oauth.createToken({
        code: code as string,
      }) as any;

      const octokit = new Octokit({ auth: token as string });
      const {
        data: { login },
      } = await octokit.request("GET /user");
      console.log(token);
    } catch (err) {
      console.log("debug=>", err);
    }

    return login;
  }
  return {
    "msg": "please return",
  };
});
