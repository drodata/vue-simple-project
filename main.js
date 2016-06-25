import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// define some naive components
var Email = Vue.extend({
  template: '<p>drodata@foxmail.com</p>'
})
var Site = Vue.extend({
  template: '<p>http://drodata.com</p>'
})
var Blog = Vue.extend({
  template: '<p>http://notes.drodata.com</p>'
})

var App = Vue.extend(require('./components/App'))

var router = new VueRouter()
router.map({
  '/email': {
    component: Email
  },
  '/site': {
    component: Site
  },
  '/blog': {
    component: Blog
  }
})

router.start(App, '#app')
