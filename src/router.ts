import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FilmList from './views/FilmList.vue'
import CollectionList from './views/CollectionList.vue'
import Film from './views/Film.vue'
import Collection from './views/Collection.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: "/Films",
    name: "FilmList",
    component: FilmList
  },
  {
    path: "/Collections",
    name: "CollectionList",
    component: CollectionList
  },
  {
    path: "/Films/:filmid",
    name: "Film",
    component: Film,
    props:true,
  },
  {
    path: "/Collections/:collectionId",
    name: "Collection",
    component: Collection
  },]
})

