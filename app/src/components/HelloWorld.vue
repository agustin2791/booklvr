<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Search from './Search.vue'
import RecList from './recommend/RecList.vue'
import { useRecommendation } from '../stores/recommendation'
defineProps<{ msg: string }>()

const recommend = useRecommendation()
const search_count = ref(0)
const searching = ref(false)

const hasResults = () => {
  search_count.value += 1
  searching.value = true
}
onMounted(() => {
  searching.value =  Object.keys(recommend.rec_result).length > 0
})
</script>

<template>
  <div class="flex flex-wrap justify-items-center w-half h-full">
    <div class="flex-auto w-full" :class="[searching ? 'lg:w-1/2' : 'lg:w-full']">
      <img src="../assets/book_recommendation_logo_1.svg" alt="logo for the application" class="logo-header"/>
      <p class="text-2xl text-weight-800">Welcome, we are here to recommend books</p>
      <Search @searched="hasResults" />
    </div>
    <div class="flex-grow w-full lg:w-1/2 lg:max-h-screen lg:overflow-y-scroll">
      <RecList v-if="searching" />
    </div>
  </div>

</template>

<style scoped>
.logo-header {
  width: 30%;
  height: 30%;
  min-width: 180px;
  min-height: 180px;
  margin: 5px auto;
}
</style>
