<script lang="ts" setup>

const model = defineModel();
const props = defineProps({
    'type': {
        default: () => 'text'
    }
});

const updateModel = (value: any) => {
    console.log(value)
    model.value = value.target.value
}
</script>

<template>
    <div class="form-field rounded-xl bg-black">
        <input style="width: 100%;" @input="updateModel" :type="props.type" />
    </div>
</template>