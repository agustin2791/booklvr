<script lang="ts" setup>

const model = defineModel();
const props = defineProps({
    disabled: {
        type: Boolean,
        default: () => false
    }
});

const updateModel = (value: any) => {
    console.log(value)
    model.value = value.target.value
}
</script>

<template>
    <div class="rounded-lg shadow-xl border border-slate-300">
        <textarea rows="7" class="p-3" style="width: 100%;" @input="updateModel" :disabled="props.disabled"></textarea>
    </div>
</template>