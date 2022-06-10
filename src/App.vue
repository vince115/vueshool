<script setup>
import {ref,reactive} from 'vue'
import {computed} from 'vue'
import './assets/main.css'

import MyCounter from './components/Counter.vue'
import MyInput from './components/Input.vue'
import MyFormC from './components/FormC.vue'
import MyPassword from './components/Password.vue'
import MyShow from './components/Show.vue'

const header = ref('Shopping List App')

const items0 = ref({
  'item-1':{id:1,label:"10 party hats"},
  'item-2':{id:2,label:"2 board games"},
  'item-3':{id:3,label:"20 cups"}
})
const items= ref([
  {id:1,label:"10 party hats"},
  {id:2,label:"2 board games"},
  {id:3,label:"20 cups"}
])
const items2= ref([
  {id:1,label:"10 party hats"},
  {id:2,label:"2 board games"},
  {id:3,label:"20 cups"}
])


const newItemPriority = ref("low")
const newItemHighPriority=ref(false)
const iceCreamFlavors =ref([])

const newItem =ref("")
const newItem2 =ref("")
const newItem3 =ref("")
//#7
const items3=ref([])
const saveItem=()=>{
  items3.value.push({id:items3.value.length+1,label:newItem3.value})
  newItem3.value= ""
}
const editing3=ref(false)
const doEdit=(e)=>{
  editing3.value = e
  newItem3.value = ""
}

//#8
const items8=ref([])
const newItem8 =ref("")
const editing8=ref(false)
const newItem8HighPriority=ref(false)
const saveItem8=()=>{
  items8.value.push({id:items8.value.length+1,label:newItem8.value})
  newItem8.value= ""
}
const doEdit8=(e)=>{
  editing8.value = e
  newItem8.value = ""
}

//#9
const editing9 = ref(false)
const items9=ref([
  {id:1,label:"10 party hats", purchased:true, highPriority:false},
  {id:2,label:"2 board games", purchased:true, highPriority:false},
  {id:3,label:"20 cups", purchased:false, highPriority:true}
])
const newItem9= ref("")
const newItem9HighPriority=ref(false)
const saveItem9=()=>{
  items9.value.push(
    {
      id:items9.value.length+1,
      label:newItem9.value,
      highPriority:newItem9HighPriority.value
    })
  newItem9.value= ""
  newItem9HighPriority.value = ""
}
const doEdit9=(e)=>{
  editing9.value = e
  newItem9.value = ""
}
const togglePurchased =(item)=>{
  item.purchased =!item.purchased
}

//------------------------#10

const characterCount10 =computed(()=>{
  return newItem10.value.length
})
const editing10 = ref(false)
const items10=ref([
  {id:1,label:"10 party hats", purchased:true, highPriority:false},
  {id:2,label:"2 board games", purchased:true, highPriority:false},
  {id:3,label:"20 cups", purchased:false, highPriority:true}
])
const newItem10= ref("")
const newItem10HighPriority =ref(false)
const saveItem10=()=>{
  items10.value.push(
    {
      id:items10.value.length+1,
      label:newItem10.value,
      highPriority:newItem10HighPriority.value
    })
  newItem10.value= ""
  newItem10HighPriority.value = ""
}
const doEdit10=(e)=>{
  editing10.value = e
  newItem10.value = ""
}
const togglePurchased10 =(item)=>{
  item.purchased =!item.purchased
}
const reversendItems10 =computed(()=>{
  //reversed array
  return [...items10.value].reverse()
})

//------------------------#11
const state11=reactive({count:0})
const msg11 =ref('Hello World')
const increment11 =()=>{
  state11.count++
} 
//--------------componentss
const counterValue = (count)=>{
  console.log(count)
}
const inputValue =(text)=>{
  console.log(text)
}
const formValue =(form)=>{
  console.log(113,form)
}
const passwordValue =(password)=>{
  console.log(114,password)
}
</script>

<template>
<div class="card">
  <MyCounter @increment="counterValue"/>
  <hr/>
  <MyInput @text-submit="inputValue"/>
  <hr/>
  <MyPassword @passwordSubmit="passwordValue"/>
  <hr/>
  <MyFormC @formSubmit ="formValue"/>
  <hr/>
  <MyShow  />
</div>
<br/>
<div class="card">
 <!-- <h1>{{header || 'Welcome'}}</h1> -->
 <h1>{{header}}</h1>
 <!-- <input v-model="newItem" type="text" placeholder="Add an item"/>
<p>{{newItem}}</p> -->

<input v-model.trim="newItem" type="text" placeholder="Add an item">
Priority: 
<!-- <label>
  <input type="radio" v-model="newItemPriority" value="low"/>
Low
</label>
<label>
  <input type="radio" v-model="newItemPriority" value="high"/>
High
</label> -->
<select v-model="newItemPriority">
  <option value="low">Low</option>
  <option value="high">High</option>
</select>
<br/>
<p>{{newItemPriority}}</p>
<hr/>
<label>
  <input type="checkbox" v-model="newItemHighPriority">
  High Priority
</label>
<br/>
<p>{{newItemHighPriority}}</p>

<hr>

<label>
  <input type="checkbox" value="vanilla" v-model="iceCreamFlavors">Vanilla
</label>
<label>
  <input type="checkbox" value="chocolate" v-model="iceCreamFlavors">Chocolate
</label>
<label>
  <input type="checkbox" value="strawberry" v-model="iceCreamFlavors">Strawberry
</label>
<br/>
<p>{{iceCreamFlavors}}</p>
<hr/>
<p>items</p>
<ul>
    <!-- <li v-for="item in items" :key="item.id">{{item.label}}</li> -->
    <li v-for="({id,label},index) in items" :key="id">{{index}}. {{label}}</li>
 </ul>
</div>
<br/>

<!--#6-->
<div class="card">
  <h3> #6 Methods in Vue with the Composition API </h3>
<form class="add-item-form"
v-on:submit.prevent="items2.push({id: items2.length +1 ,label: newItem2})" 
>
  <input v-model.trim="newItem2"
  type="text" 
  placeholder="Add an item"/>

  <button 
  
  class="btn btn-primary">Save Item</button>


</form>

<p>items2</p>
<ul>
    <li v-for="({id,label},index) in items2" :key="id">{{index}}. {{label}}</li>
 </ul>


</div>

<br/>
<!--#7-->
<div class="card">
<h3> #7 Conditionals in Vue </h3>

<button v-if="editing3" class="btn" @click="doEdit(false)">
  Cancel
</button>
<button v-else class="btn btn-primary" @click="doEdit(true)">
  Add Item
</button>

<form 
  class="add-item-form"
  v-if="editing3"
  @submit.prevent="saveItem" 
>
<!-- v-on:submit.prevent="items3.push({id: items3.length +1 ,label: newItem3})" -->
<!-- v-on:@submit.prevent="saveItem"  -->
  <!-- <input 
  v-model.trim="newItem3"
  type="text" 
  placeholder="Add an item3"/> -->
  <input v-model.trim="newItem3"
  type="text" 
  placeholder="Add an item"/>
  <button class="btn btn-primary">Save Item</button>
</form>

<ul>
    <li v-for="({id,label},index) in items3" :key="id">{{index}}. {{label}}</li>
</ul>

 <p v-if="!items3.length">Nothing to see here</p>
</div>
<br/>
<!--#8-->
<div class="card">
<h3> #8 HTML Attribute Binding in Vue </h3>
<button v-if="editing8" class="btn" @click="doEdit8(false)">
  Cancel
</button>
<button v-else class="btn btn-primary" @click="doEdit8(true)">
  Add Item
</button>
<a v-bind:href="newItem8">Dynamic Link</a>
<form 
  class="add-item-form"
  v-if="editing8"
  @submit.prevent="saveItem8" 
>
  <input 
    v-model.trim="newItem8"
    type="text" 
    placeholder="Add an item"/>
  <label>
    <input type="checkbox" v-model="newItem8HighPriority">
    High Priority
  </label>
  <button 
    :disabled="newItem8.length < 6 "
    class="btn btn-primary">Save Item</button>
</form>
<ul>
    <li v-for="({id,label},index) in items8" :key="id">{{index}}. {{label}}</li>
</ul>
 <p v-if="!items8.length">Nothing to see here</p>
</div>
<br/>
<!--#9-->
<div class="card">
<h3> #9 Dynamic CSS Classes with Vue </h3>
<button v-if="editing9" class="btn" @click="doEdit9(false)">
  Cancel
</button>
<button v-else class="btn btn-primary" @click="doEdit9(true)">
  Add Item
</button>
<form 
  class="add-item-form"
  v-if="editing9"
  @submit.prevent="saveItem9" 
>
  <input 
    v-model.trim="newItem9"
    type="text" 
    placeholder="Add an item"/>
  <label>
    <input type="checkbox" v-model="newItem9HighPriority">
    High Priority
  </label>
  <button 
    :disabled="newItem9.length < 6 "
    class="btn btn-primary">Save Item</button>
</form>
<ul>
    <!-- <li 
    v-for="({id,label,purchased, highPriority},index) in items9" 
    @click="togglePurchased(items[index])"
    :key="id"
    class="static-class"
    :class="{
      strikeout: purchased, 
      priority: highPriority,
      }"
    >
    {{label}}
    </li>-->
     <li  
    v-for="(item,index) in items9" 
    @click="togglePurchased(item)"
    :key="item.id"
    class="static-class"
    :class="{
      strikeout: item.purchased, 
      priority: item.highPriority,
      }"
    >
    {{item.label}}
    </li>

     <!-- <li v-for="({id,label,purchased, highPriority},index) in items9" 
    :key="id"
    class="static-class"
    :class="[
      purchased? 'strikeout text-gray':'underlined',
      highPriority ?'priority':''
      ]"
    >
    {{label}}
    </li> -->
</ul>
 <p v-if="!items9.length">Nothing to see here</p>
</div>

<br/>

<!--#10-->
<div class="card">
<h3> #10 Computed Properties in Vue with the Composition API </h3>
<button v-if="editing10" class="btn" @click="doEdit10(false)">
  Cancel
</button>
<button v-else class="btn btn-primary" @click="doEdit10(true)">
  Add Item
</button>
<form 
  class="add-item-form"
  v-if="editing10"
  @submit.prevent="saveItem10" 
>
  <input 
    v-model.trim="newItem10"
    type="text" 
    placeholder="Add an item"/>
  <label>
    <input type="checkbox" v-model="newItem10HighPriority">
    High Priority
  </label>
  <button 
    :disabled="newItem10.length < 6 "
    class="btn btn-primary">Save Item</button>
</form>
<p>
  {{characterCount10}} / 200
</p>
<ul>
    <li 
    v-for="(item,index) in reversendItems10" 
    @click="togglePurchased10(item)"
    :key="item.id"
    class="static-class"
    :class="{
      strikeout: item.purchased, 
      priority: item.highPriority,
    }"
    >
    {{item.label}}
    </li>
</ul>
 <p v-if="!items10.length">Nothing to see here</p>
</div>
<br/>

<!--#11-->
<div class="card">
<h3> #11 Reactivity Fundamentals </h3>
<p>{{ state11.count }}</p>
<!-- <button class="btn btn-primary" @click="state11.count++"> -->
<button class="btn btn-primary" @click="increment11"> 
  Increase Count 
</button>
<br/>
<p>{{ msg11 }}</p>
<input v-model="msg11">
</div>

</template>

