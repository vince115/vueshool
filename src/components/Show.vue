<script setup lang="ts">
interface Props{
    show: boolean,
    greeting?: string
}
withDefaults(defineProps<Props>(), {
    show: true,
    greeting: 'Hello',
}) 
</script>
<template>
    <div class="greeting" v-if="show">{{ greeting }}</div>
</template>