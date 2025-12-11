<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { Button } from "@/components/ui/button";

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double: {{ counterStore.doubleCount }}</p>
    <Button @click="counterStore.increment">+1</Button>
  </div>
</template>
