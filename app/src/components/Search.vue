<script lang="ts" setup>
import { ref } from 'vue';
import TextAreaField from './shared/TextAreaField.vue';
import Button from './shared/Button.vue';
import { useRecommendation } from '../stores/recommendation';

const emit = defineEmits(['searched'])
const recommend = useRecommendation()
const prompt = ref('')
const is_loading = ref(false)

const search = async () => {
    is_loading.value = true
    await recommend.getRecommendations(prompt.value)
    emit('searched')
    is_loading.value = false
}
</script>

<template>
    <!-- <div><InputField v-model="book" /></div> -->
    <ion-loading trigger="is_loading" message="Thinking..."></ion-loading>
    <div class="m-5">
        <p>We are here to recommend books! Write below anything that you are looking for. It can be as simple as writing "Lord of the rings" or more detail prompt like: "fiction books that are western but with vampires, ghouls, werewolfs or any other type of mythical creatures."</p>
    </div>
    <div class="m-2"><TextAreaField v-model="prompt" :disabled="is_loading" /></div>
    <div><Button @click="search" label="Search" :loading="is_loading" :disabled="is_loading" /></div>
</template>