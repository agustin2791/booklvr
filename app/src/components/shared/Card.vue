<script lang="ts" setup>


</script>
<template>
    <div class="rounded-lg shadow-xl my-8 p-10 border border-slate-200">
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>