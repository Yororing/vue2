import Vue from "vue";
import VeuRouter from "vue-router";
import BoardPractice from "../views/BoardPractice.vue";
import GridSystem from "../views/GridSystem.vue";

Vue.use(VeuRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: BoardPractice,
  },
  {
    path: "/grid-system",
    name: "GridSystem",
    component: GridSystem,
  },
];

const router = new VeuRouter({
  mode: "history",
  routes,
});

export default router;
