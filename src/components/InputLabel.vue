<script setup lang="ts">

interface Props {
  modelValue: string
  label: string
}
withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: ''
})
const emit = defineEmits(['update:modelValue'])
const handleInput=(event)=> {
         emit('update:modelValue', event.target.value)
       
}
</script>
<template>
<label  class="text-input">
{{label}}
<input 
    type="text" 
    :value="modelValue" 
    @input="handleInput"
     />
</label>
<!-- @input="$emit('update:modelValue', $event.target.value)" -->
</template>