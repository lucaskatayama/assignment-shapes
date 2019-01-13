import Vue from "vue";
import Router from "vue-router";
import Canvas from "./views/Canvas.vue";
import About from "./views/About.vue";
import AboutApplication from "./views/about/Application.vue";
import AboutTech from "./views/about/Technologies.vue";
import AboutAuthor from "./views/about/Author.vue";
import AboutGeometry from "./views/about/Geometry.vue";

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
      component: About,
      children: [
        {
          path: "",
          redirect: { name: "about/app" }
        },
        {
          path: "app",
          name: "about/app",
          component: AboutApplication
        },
        {
          path: "tech",
          name: "about/tech",
          component: AboutTech
        },
        {
          path: "math",
          name: "about/geometry",
          component: AboutGeometry
        },
        {
          path: "author",
          name: "about/author",
          component: AboutAuthor
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
