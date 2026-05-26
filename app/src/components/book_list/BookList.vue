<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLibrary } from '../../stores/library';
import { useRoute } from 'vue-router';

const library = useLibrary()
const route = useRoute()
const has_list = ref(false)

onMounted(async () => {
    const search_for = route.params.title as string
    console.log(route.params)
    has_list.value = await library.getBookList(search_for)
})
</script>
<template>
    <div v-if="!has_list">No Books Found</div>
    <div v-for="(b, idx) in library.book_list" :key="idx">
        {{ b }}
    </div>
</template>