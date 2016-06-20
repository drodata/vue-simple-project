<template>
  <div class="navi">
    <a v-link="{path: '/', exact: true}">Home</a>
    <a v-link="{name: 'show', params: {category: 'php', id: 3}, exact: true}">Show PHP</a>
    <a v-link="{path: '/demo', exact: true}">Demo</a>
  </div>
</template>

<script>
</script>

<style scoped>
.v-link-active {
  color: red;
}
</style>
