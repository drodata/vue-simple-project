<template>
  <div class="app">
    <app-header></app-header>
    <app-navi></app-navi>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppNavi from './AppNavi.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppNavi,
    AppFooter
  }
}
</script>


<style>
</style>
