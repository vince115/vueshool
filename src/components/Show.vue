<script setup>
import {ref} from 'vue'
// const show = ref({
//         type: Boolean,
//         default: true
// })
const show = ref(true)
const greeting = ref('Hello')
</script>
<template>
{{show}}
    <div v-if="show">{{ greeting }}</div>
</template>