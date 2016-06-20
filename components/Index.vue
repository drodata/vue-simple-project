<template>
  <div class="app">
    <app-header></app-header>
    <app-navi></app-navi>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppNavi from './AppNavi.vue'
import AppContent from './AppContent.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppNavi,
    AppContent,
    AppFooter
  }
}
</script>


<style>
</style>
