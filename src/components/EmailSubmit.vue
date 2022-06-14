<script setup lang="ts">
import {ref} from 'vue'
interface Props{
    email: string
}
withDefaults(defineProps<Props>(), {
    email: ''
})
const email=ref('')
const emit = defineEmits(['submit'])
const submit=()=>{
  emit('submit', email.value)  
}
</script>

<template>
  <div>
    <input type="email" v-model="email" />
    {{email}}
    <button @click="submit">Submit</button>
  </div>
</template>