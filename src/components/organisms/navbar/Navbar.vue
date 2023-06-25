<template lang="">
  <nav class="o-navbar" id="myTopnav">
    <ul class="o-navbar__menu">
      <li><router-link class="link" :to="{ name: 'index' }">Home</router-link></li>
      <li><router-link class="link" :to="{ name: 'product_create' }">Create</router-link></li>
      <li><router-link class="link" :to="{ name: 'product_view' }">View</router-link></li>
      <li><router-link class="link" :to="{ name: 'about' }">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar'
}
</script>

<style scoped>
.o-navbar {
  background-color: #96abf9;
  padding: 20px;
}
.o-navbar__menu {
  list-style: none;
  display: flex;
  justify-content: center;
}

.link {
  color: #f2f2f2;
  text-align: center;
  padding: 18px;
  text-decoration: none;
  font-size: 20px;
  text-decoration: none;
  transition: 0.5s all ease-in-out;
}

.link:hover {
  background-color: #ddd;
  color: black;
}

.link.active {
  background-color: #99b5e9;
  color: white;
}
</style>
