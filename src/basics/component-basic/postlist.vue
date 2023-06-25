<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>Post author name : {{ dataName }}</p>
  <h1 class="bg-blue-500 text-white p-4">Hello world!</h1>
  <h2>All post lists</h2>
  <table id="posts">
    <thead>
      <th>Title</th>
      <th>Post</th>
    </thead>
    <tbody v-for="item in posts" :key="item.id">
      <td>{{ item.title }}</td>
      <td>{{ item.body }}</td>
    </tbody>
  </table>
</template>

<script>
//defineProps(['title'])

export default {
  //props that will receive from parent
  props: {
    posts: {
      type: Array,
      required: true
    },
    dataName: String
  },
  setup(props) {
    return props
  }
}
</script>
<style>
#posts {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#posts td,
#posts th {
  border: 1px solid #ddd;
  padding: 8px;
}

#posts tr:nth-child(even) {
  background-color: #f2f2f2;
}

#posts tr:hover {
  background-color: #ddd;
}

#posts th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
