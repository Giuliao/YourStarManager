import { Octokit } from "octokit";

export default defineEventHandler(async (event) => {
  const octokit = new Octokit({});
  let result: any;
  try {
    // ... Do whatever you want here
    result = await octokit.request(
      "POST /applications/{client_id}/token",
      {
        client_id: "Iv1.8a61f9b3a7aba766",
        access_token: "e72e16c7e42f292c6912e7710c838347ae178b4a",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
  } catch (err) {
    console.log("debug=>", err);
  }

  return result || "hello";
});
