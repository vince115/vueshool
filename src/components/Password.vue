<script setup>
import {ref, computed, watch} from 'vue'
const password = ref('')
const minLength = ref(10)
const emit = defineEmits(['passwordSubmit'])
const error =ref('') 

const handleSubmit = computed(()=>{
   emit('passwordSubmit',password.value)
})

const handleLength = watch(()=>{
    if (password.value.length < minLength.value) {
       error.value=`Password must be at least ${minLength.value} characters.`       
    }else{
       error.value=``
    }
})
</script>
<template>
    <input type="password" v-model="password" />
    <!-- <button id="btn123" @click="handleSubmit" :disabled="password.length < minLength ">Submit</button> -->
    <button id="btn123" @click="handleSubmit"  @change="handleLength">Submit</button>
    <label>{{ password }}</label>
    <br/> 
    <div v-if="error">{{ error }}</div>
</template>