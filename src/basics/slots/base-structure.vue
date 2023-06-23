<template>
  <h1>Basic template structure using Slots</h1>
  <header class="header">
    <slot name="header"></slot>
  </header>
  <main><slot /></main>
  <footer><slot name="footer" /></footer>
</template>
<script>
export default {}
</script>
<style></style>
