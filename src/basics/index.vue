<template lang="">
  <section class="container">
    <h1 class="title">Lesson for VueJS</h1>
    <section class="contents-topic">
      <Reactivity />
    </section>
  </section>
</template>
<script>
import Reactivity from './reactivity/reactivity.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'basics',
  components: { Reactivity }
}
</script>
<style>
.container {
  text-align: center;
}

.title {
  font-size: 20px;
  color: red;
}

.contents-topic {
  margin-top: 20px;
  width: 60%;
  display: inline-block;
  padding: 30px 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
