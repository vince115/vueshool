<script setup lang="ts">
import {ref, computed} from 'vue'
const password = ref('')
const minLength = ref(10)
const emit = defineEmits(['passwordSubmit'])

const handleSubmit = ()=>{
   emit('passwordSubmit',password.value)
}

const error = computed(() => {
    return password.value.length < minLength.value
    ? `Password must be at least ${minLength.value} characters.` 
    : ``
})
</script>
<template>
    <input type="password" v-model="password" />
    <button id="btn123" @click="handleSubmit" >Submit</button>
    <label>{{ password }}</label>
    <br/> 
    <div v-if="error">{{ error }}</div>
</template>