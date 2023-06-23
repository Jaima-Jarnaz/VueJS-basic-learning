<template lang="">
  <h2 class="heading">Lesson for Computed Properties</h2>
  <h3>Your Name {{ data.fullName }} {{ data.lastName }}</h3>
  <h3>Using computed : Your Name {{ fullName }}</h3>
</template>
<script>
import { reactive } from 'vue'

const data = reactive({
  fullName: 'Jaima',
  lastName: 'Mim'
})

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'computed',
  setup() {
    return { data }
  },
  //computed properties
  computed: {
    fullName() {
      return `${data.fullName} ${data.lastName}`
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
