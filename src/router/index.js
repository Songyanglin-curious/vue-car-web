import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () =>
    import( "../views/index/index.vue"),
    children: [
      {
        path:"/user",
        name:"User",
        component: () =>import("../views/user/index.vue")
      },
      {
        path:"/safe",
        name:"Safe",
        component: () =>import("../views/safe/index.vue")
      },
      {
        path:"/changePassword",
        name:"ChangePassword",
        component: () =>import("../views/password/index.vue")
      },
      {
        path:"/setFundPassword",
        name:"SetFundPassword",
        component: () =>import("../views/setFundPassword/index.vue")
      },
    ]
  },

  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
