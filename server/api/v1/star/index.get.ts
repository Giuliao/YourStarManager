import { useGithubKit } from "@/composables/github";

export default defineEventHandler(async (event) => {
  const { queryStar } = useGithubKit("");
  let result: any;

  try {
    // ... Do whatever you want here
    result = await queryStar();
  } catch (err) {
    console.log("debug=>", err);
  }

  return result || "hello";
});
