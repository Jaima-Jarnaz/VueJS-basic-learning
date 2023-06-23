<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2 class="heading">Lesson for Components Basic</h2>
  <PostList :posts="state.items" dataName="Tum" />
  <div>
    <h2 class="heading">Dynamic Components</h2>
    <div class="tabs">
      <button
        :class="['tab-button', { active: currentTab == tab }]"
        v-for="(_, tab) in tabs"
        :key="tab"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue'
import PostList from './postlist.vue'
import ProvideInject from '../provide/provide-inject.vue'
import Watchers from '../watchers/watchers-view.vue'

//props define for ComponentBasic component
//defineProps(['title'])

export default {
  components: { PostList },
  setup() {
    const state = reactive({
      items: [],
      error: null,
      loading: false
    })

    // Fetch data on component mount

    onMounted(async () => {
      state.loading = true
      try {
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()

        state.items = data.slice(0, 5)
        state.loading = false
      } catch (error) {
        state.error = error
      }
    })

    //dynamic components
    const tabs = {
      ProvideInject,
      Watchers
    }

    const currentTab = ref(ProvideInject)

    return { state, currentTab, tabs }
  }
}
</script>

<style>
/* Variable declarations */
:root {
  --green: #04aa6d;
  --white: #ffffff;
  --lightgray: #b9d1d11f;
  --blacklight: #bee6d75e;
}
.heading {
  color: var(--green);
  padding: 12px;
}
.tabs {
  padding: 15px;
  background-color: var(--lightgray);
  border-bottom: 1px solid var(--green);
}
.tab-button {
  border: none;
  padding: 1rem 6rem;
  cursor: pointer;
  background-color: var(--blacklight);
  font-weight: bold;
  transition: background-color ease 0.3s;
}
.tab-button.active {
  border-bottom: 2px solid var(--green);
}
</style>
