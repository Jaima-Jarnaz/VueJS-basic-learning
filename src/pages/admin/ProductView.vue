<template lang="">
  <div>
    <h1>Authors List</h1>
    <p v-if="authorsDataList.length === 0">There is no data available</p>
    <table class="p-list">
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Total Books</th>
        <th>Publication</th>
      </tr>

      <tr v-for="(item, index) in authorsDataList" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.totalBooks }}</td>
        <td>{{ item.publication }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
export default {
  name: 'product_view',
  data() {
    const authorsList = [
      {
        id: 1,
        name: 'Mony Sing',
        address: 'Karachi, Pakistan',
        totalBooks: 50,
        publication: 'Marina publications'
      },
      {
        id: 2,
        name: 'Sony Sing',
        address: 'Kashmir, India',
        totalBooks: 30,
        publication: 'Utahan'
      },
      {
        id: 3,
        name: 'Angelina',
        address: 'UK',
        totalBooks: 10,
        publication: 'Marina publications'
      },
      {
        id: 4,
        name: 'Sunny Sing',
        address: 'Karachi, Pakistan',
        totalBooks: 10,
        publication: 'Utahan'
      }
    ]
    return {
      authorsDataList: authorsList
    }
  }
}
</script>

<style>
.p-list {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.p-list td,
.p-list th {
  border: 1px solid #ddd;
  padding: 8px;
}

.p-lists tr:nth-child(even) {
  background-color: #f2f2f2;
}

.p-list tr:hover {
  background-color: #ddd;
}

.p-list th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #96abf9;
  color: white;
}
</style>
