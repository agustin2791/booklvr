<script setup lang="ts">

</script>

<template>

  <router-view />
</template>


<style scoped>
.ad-container {
  padding: 20px;
}

.banner-ad {
  height: 60px;
  background-color: #f0f0f0;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.ad-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 200px;
}

.ad-controls button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.ad-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.ad-controls button:hover:not(:disabled) {
  background-color: #0056b3;
}

.ad-status {
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 5px;
}
</style>