<script setup>
import {ref} from 'vue'

const value = ref('')
const emit = defineEmits(['focus-lost'])
const  handleBlur=(event)=> {
    if (event.relatedTarget.tagName === 'BUTTON') {
         emit('focus-lost')
    }
} 
</script>
<template>
<form>
 <input type="text" v-model="value" @blur="handleBlur" />
    <button>Submit</button>
</form>
</template>