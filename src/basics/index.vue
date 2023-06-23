<!-- eslint-disable vue/multi-word-component-names -->
<template lang="">
  <section class="container">
    <h1 class="title">Learning VueJS Basics</h1>
    <section class="contents-topic">
      <Reactivity />
    </section>
    <section class="contents-topic">
      <Computed />
    </section>
    <section class="contents-topic">
      <ComponentBasics />
    </section>
    <section class="contents-topic">
      <h2 class="heading">Slots</h2>
      <SlotExample>Server Error</SlotExample>
    </section>
    <section class="contents-topic">
      <h2 class="heading">Slots with name attribute</h2>
      <BaseLayout>
        <!-- One way of passing named slot -->
        <template v-slot:header> This is from header </template>
        It is main data
        <!-- Another way of passing named slot using # -->
        <template #footer>
          <div>This is for footer</div>
        </template>
      </BaseLayout>
    </section>
  </section>
</template>

<script>
import Reactivity from './reactivity/reactivity.vue'
import Computed from './computed-properties/computed.vue'
import ComponentBasics from './component-basic/posts.vue'
import SlotExample from './slots/slots-content.vue'
import BaseLayout from './slots/base-structure.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'basics',
  components: { Reactivity, Computed, ComponentBasics, SlotExample, BaseLayout }
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
.heading {
  color: #04aa6d;
}
</style>
