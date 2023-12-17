// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: [
    "@/assets/css/main.css",
  ],
  runtimeConfig: {
    githubSecret: process.env.GITHUB_SECRET,
    githubClientID: process.env.GITHUB_CLIENT_ID,
    githubAppID: process.env.GITHUB_APP_ID,
  },
});
