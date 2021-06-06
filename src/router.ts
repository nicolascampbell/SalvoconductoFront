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
    path: "/Salvoconducto-front/",
    name: 'Home',
    component: Home
  },
  {
    path: "/Salvoconducto-front/Films",
    name: "FilmList",
    component: FilmList
  },
  {
    path: "/Salvoconducto-front/Collections",
    name: "CollectionList",
    component: CollectionList
  },
  {
    path: "/Salvoconducto-front/Films/:filmId",
    name: "Film",
    component: Film,
    props:true,
  },
  {
    path: "/Salvoconducto-front/Collections/:collectionId",
    name: "Collection",
    component: Collection
  },]
})

