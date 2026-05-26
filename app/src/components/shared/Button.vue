<script setup lang="ts">

const props = defineProps({
    type: {
        default: () => 'button'
    },
    disabled: {
        type: Boolean,
        default: () => false
    },
    label: {
        required: true,
        type: String
    },
    color: {
        type: String,
        default: () => 'text-white'
    },
    bg: {
        type: String,
        default: () => 'bg-green-800'
    },
    loading: {
        type: Boolean,
        default: () => false
    }
})
</script>
<template>
    <button class="button cursor-pointer py-3 px-5 rounded-lg shadow-xl" :class="[props.color, props.bg, loading ? 'is-loading' : '']" :disabled="props.disabled" :type="props.type">
        <p v-if="!loading">{{ props.label }}</p>
        <div v-if="loading" class="loading"></div>
    </button>
</template>

<style scoped>
.button {
    position: relative;
    min-width: 30px;
    min-height: 30px;
    &.is-loading {
        opacity: 0.75;
    }
}
.loading {
    width: 20px;
    height: 20px;
    padding: 5px 2px;
    border-top: 3px solid rgba(255, 255, 255, 0.5);
    border-left: 3px solid rgba(255, 255, 255, 1);
    border-bottom: 3px solid rgba(255, 255, 255, 1);
    border-right: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>