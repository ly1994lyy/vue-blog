import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/category",
        name: "CategoryList",
        component: () => import("../views/CategoryList.vue"),
      },
      {
        path: "/category/create",
        name: "CreateCategory",
        component: () => import("../views/CategoryEdit.vue"),
      },
      {
        path: "/category/edit/:id",
        name: "CreateCategory",
        props: true,
        component: () => import("../views/CategoryEdit.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
