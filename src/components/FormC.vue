<script setup lang="ts">
import {ref, reactive} from 'vue'
interface Props {
  email :string,
  description:string,
  city:string,
  subscribe: boolean,
  interval: string
}

withDefaults(defineProps<Props>(), {
    email: '',
    description: '',
    city: '',
    subscribe: false,
    interval: ''
})

const form =ref({
    email: '',
    description: '',
    city: '',
    subscribe: false,
    interval: ''
})

const emit = defineEmits(['formSubmit'])
const handleSubmit=()=>{
     emit('formSubmit', form.value)
}
</script>
<template>
  <form @submit.prevent="handleSubmit"  >
    <input type="email" v-model="form.email"  placeholder="email"/>
    <br/>
    <textarea v-model="form.description"></textarea>
    <br/>
     <select @change="form.city = ($event.target as HTMLSelectElement).value" >
      <option value="newyork">New York</option>
      <option value="moscow">Moscow</option>
    </select>
    <br/>
    <input  v-model="form.subscribe" type="checkbox" />
    <br/>
    <input  v-model="form.interval" type="radio" value="weekly"/>
    <input  v-model="form.interval" type="radio" value="monthly" />
    <br/> 
    <button type="submit" >Submit</button>
  </form>
  {{form}}
</template>
