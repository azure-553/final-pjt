<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { watch, onMounted, onUnmounted, ref } from "vue";

const title = useTitle("ThRead | 당신의 감정을 읽는 AI 서재");

const isHidden = useDocumentVisibility();

function useDocumentVisibility() {
  const hidden = ref(document.hidden);
  const onVisibilityChange = () => (hidden.value = document.hidden);
  onMounted(() =>
    document.addEventListener("visibilitychange", onVisibilityChange)
  );
  onUnmounted(() =>
    document.removeEventListener("visibilitychange", onVisibilityChange)
  );
  return hidden;
}

watch(isHidden, (hidden) => {
  if (hidden) {
    title.value = "🥺 아직 읽지 않은 위로가 있어요";
  } else {
    title.value = "ThRead | 당신의 감정을 읽는 AI 서재";
  }
});
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983; /* 현재 활성화된 링크 색상 */
}
</style>
