<script setup lang="ts">
import { useRecommendation } from '../../stores/recommendation';
import { computed } from 'vue';
import RecItem from './RecItem.vue';

const recommend = useRecommendation()

const rec_options = computed(() => {
    return Object.keys(recommend.rec_result) as Array<keyof typeof recommend.rec_result>
})
</script>
<template>
    <div v-for="(o, index) in rec_options" :key="index" class="p-2">
        <div v-for="(b, idx) in recommend.rec_result[o]" :key="idx">
            <RecItem :book="b" />
        </div>

    </div>
</template>