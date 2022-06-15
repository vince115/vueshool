<script setup lang="ts">
import {ref} from 'vue'

const description = ref('')
const emit = defineEmits(['textareaSubmit'])
const handleClick=()=>{
   emit('textareaSubmit', description.value) 
}
</script>

<template>
<form >
<textarea v-model="description" ref="description" ></textarea>
<button @click.prevent="handleClick">Send</button>
</form>
</template>