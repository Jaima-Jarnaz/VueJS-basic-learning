<template lang="">
  <h2 class="heading">Lesson for Reactivity</h2>
  <h3>Count {{ count }} by {{ person.name }}</h3>
  <button class="button" @click="count++">Click me</button>
</template>
<script>
import { ref, reactive } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'reactivity',
  setup() {
    //using ref
    const count = ref(0)

    //using reactive
    const person = reactive({
      name: 'Omi',
      age: 25
    })

    return {
      count,
      person
    }
  }
}
</script>
<style>
.button {
  padding: 12px;
  font-size: 15px;
  color: white;
  background-color: #d50909;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: 10px;
}
.heading {
  color: #04aa6d;
}
</style>
