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
  template: '<div class="blog">'
    + '<h2>Blog</h2>'
    + '<router-view></router-view>'
    + '</div>'
})
var About = Vue.extend({
  template: '<p>This is about component in blog component</p>'
})
var Contact = Vue.extend({
  template: '<p>This is contact component in blog component</p>'
})

var App = Vue.extend({})

var router = new VueRouter()
router.map({
  '/email': {
    component: Email
  },
  '/site': {
    component: Site
  },
  '/blog': {
    component: Blog,
    subRoutes: {
      '/about': {
        component: About
      },
      '/contact': {
        component: Contact
      }
    }
  }
})

router.start(App, '#app')
