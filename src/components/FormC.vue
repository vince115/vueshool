<script setup>
import {ref,reactive} from 'vue'

//const formValue = ref([])
// const form = reactive({
//     email: '',
//     description: '',
//     city: '',
//     subscribe: false,
//     interval: ''
// })

const form =ref({
    email: '',
    description: '',
    city: '',
    subscribe: false,
    interval: ''
})


const emit = defineEmits(['formSubmit'])
const handleSubmit=()=>{
     emit('formSubmit',form.value)
}

</script>
<template>
  <form @submit.prevent="handleSubmit"  >
    <input type="email" v-model="form.email"  placeholder="email"/>
    <br/>
    <textarea v-model="form.description"></textarea>
    <br/>
    <select v-model="form.city">
      <option value="new-york">New York</option>
      <option value="moscow">Moscow</option>
    </select>
    <br/>
    <input type="checkbox" v-model="form.subscribe" />
    <br/>
    <input type="radio" value="weekly" v-model="form.interval" />
    <input type="radio" value="monthly" v-model="form.interval" />
    <br/>
    <button type="submit" >Submit</button>
  </form>
  {{form}}
</template>