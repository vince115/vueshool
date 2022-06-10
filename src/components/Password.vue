<script setup>
import {ref, computed} from 'vue'
const password= ref('')
const minLength = ref(10)
const emit = defineEmits(['passwordSubmit'])
const handleSubmit= computed(()=>{
   emit('passwordSubmit',password.value)
   
})

const error = (password.length < minLength.value) 
?`${minLength.value}`
:`Password must be at least ${minLength.value} characters.`

</script>
<template>
    <input type="password" v-model="password" />
    <button id="btn123" @click="handleSubmit" :disabled="password.length < minLength ">Submit</button>
    <label>{{ password }}</label>
    <br/>
   
    <div v-if="error">{{ error }}</div>
</template>