import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index'
import Demo from './components/Demo'
import DemoIndex from './components/demo/Index'
import Pipeline from './components/Pipeline'
import PipelineIndex from './components/pipeline/Index'

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

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
router.map({
  '/': {
    component: Index
  },
  '/email': {
    component: Email
  },
  '/show/:category/:id': {
    name: 'show',
    component: {
      template: '<p>The category is {{$route.params.category}}</p>' +
        '<p>params: {{$route.params | json}}</p>'
    }
  },
  '/site': {
    component: Site
  },
  '/demo': {
    component: Demo,
    subRoutes: {
      '/': {
        component: DemoIndex
      }
    }
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
  },
  '/async': {
    component: function (resolve) {
      require(['./components/Async'], resolve)
    }
  },
  '/pipeline': {
    component: Pipeline,
    subRoutes: {
      '/': {
        component: PipelineIndex
      }
    }
  }
})

router.start(App, '#app')
