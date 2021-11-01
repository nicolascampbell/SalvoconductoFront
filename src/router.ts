import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const FilmList = () => import('./views/FilmList.vue')
const CollectionList = () => import('./views/CollectionList.vue')
const Film = () => import('./views/Film.vue')
const Collection = () => import('./views/Collection.vue')
const NotFound = () => import('./views/NotFound.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Films',
    name: 'FilmList',
    component: FilmList
  },
  {
    path: '/Collections',
    name: 'CollectionList',
    component: CollectionList
  },
  {
    path: '/Films/:filmid',
    name: 'Film',
    component: Film,
    props: true
  },
  {
    path: '/Collections/:collectionId',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/:catchAll(.*)?',
    name: 'NotFound',
    component: NotFound
  }],
  scrollBehavior (to, from, savedPosition) {
    // So that when you go to another route it shows you the start of the page
    return { x: 0, y: 0 }
  }

})
