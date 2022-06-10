<script setup>
import {ref} from 'vue'
const text= ref('')
const emit = defineEmits(['text-submit'])
const handleSubmit=()=>{

   emit('text-submit',text.value)

}
</script>
<template>
    <input type="text" v-model="text" />
    <button id="btn123" @click="handleSubmit">Submit</button>
    <label>{{text}}</label>
</template>