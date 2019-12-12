import Vue from 'vue'
import Router from 'vue-router'
import Library from './views/Library.vue'
import Categories from "./views/Categories.vue";
import Artists from "./views/Artists.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "library",
      component: Library
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories
    },
    {
      path: "/artists",
      name: "artists",
      component: Artists
    },
    {
      path: "/library",
      name: "library",
      component: Library
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
