<script setup lang="ts">
import {ref} from 'vue'
const count = ref(0);
const increment=()=> {
 return count.value++
} 
//return { count, increment}
</script>

<template>
  <p class="paragraph">Times clicked: {{ count }}</p>
  <button @click.prevent="increment">increment</button>
</template>
