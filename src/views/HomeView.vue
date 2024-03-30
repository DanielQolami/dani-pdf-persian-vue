<script setup lang="ts">
import { usePDF } from '@/composables/usePDF';

const { jsPDFPersian } = usePDF();
</script>

<template>
  <main class="main">
    <button class="pdf-btn" @click="jsPDFPersian">Click to make PDF</button>
  </main>
</template>

<style scoped>
.main {
  display: grid;
  place-content: center;
  min-height: 100dvh;
}
.pdf-btn {
  padding: 1rem 1.5rem;
  background-color: turquoise;
  border-radius: 0.25rem;
  cursor: pointer;
}
.pdf-btn:hover {
  filter: brightness(1.2)
}
</style>
