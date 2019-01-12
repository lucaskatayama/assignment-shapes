import Vue from "vue";
import Router from "vue-router";
import Canvas from "./views/Canvas.vue";

Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: "/canvas",
      name: "canvas",
      component: Canvas
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      children: [
        {
          path: "",
          redirect: { name: "about/app" }
        },
        {
          path: "app",
          name: "about/app",
          component: () =>
            import(/* webpackChunkName: "application" */ "./views/about/Application.vue")
        },
        {
          path: "tech",
          name: "about/tech",
          component: () =>
            import(/* webpackChunkName: "application" */ "./views/about/Technologies.vue")
        },
        {
          path: "author",
          name: "about/author",
          component: () =>
            import(/* webpackChunkName: "author" */ "./views/about/Author.vue")
        },
        {
          path: "*",
          redirect: { name: "about/app" }
        }
      ]
    },
    {
      path: "*",
      redirect: { name: "canvas" }
    }
  ]
});
