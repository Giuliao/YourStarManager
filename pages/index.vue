<script setup lang="ts">
const config = useRuntimeConfig();

console.log("index");

const githubAuthLink = `https://github.com/login/oauth/authorize?client_id=${config.githubClientID}&redirect_uri=http://localhost:8080/oauth/redirect`;
</script>

<template>
  <UCard>
    <UContainer class="flex justify-between">
      <div></div>
      <ULink
        :to="githubAuthLink"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >
        登录
      </ULink>
    </UContainer>
  </UCard>
</template>
