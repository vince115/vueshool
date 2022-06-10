<script setup >
import {ref} from 'vue'
const count= ref(0)

// const emit = defineEmits<{
//   (e:'increment', count:number):void
// }>()

const emit = defineEmits(['increment'])
const handleClick=()=>{
   count.value++
   emit('increment',count.value)
}
</script>
<template>
<button @click="handleClick">Increment</button>
{{count}}
</template>