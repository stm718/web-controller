<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        title: 'Web Controller'
      }
    }
  }
</script>

<style scoped>
  div{
      border: 1px solid blue
  }
  h1{
      color: blue
  }
</style>