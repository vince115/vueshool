<script setup>
import {ref} from 'vue'
const key= ref('C')
const metaKey= ref(true)
</script>

<template>
    <input @kdeydown.meta.c.exact.prevent="captureCopy" v-model="input"/>
</template>