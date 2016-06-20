<template>
  <div class="demo-content">
    <p>Current Path: <code>{{$route.path}}</code></p>
    <p>Query: <code>{{$route.query | json}}</code></p>
    <p>Query: <code>{{$route.flag}}</code></p>
  </div>
</template>

<script>
</script>

<style scoped>
.v-link-active {
  color: #fff;
  background-color: #24b;
}
</style>
