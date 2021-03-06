import { createWebHistory, createRouter } from "vue-router";
import WorkSpace from "../src/components/taskList/WorkSpace";

const routes = [
  { path: "/", redirect: "/1/general" },
  {
    path: "/:id/:slug",
    component: WorkSpace,
    name: "category.name",
    props: (route) => ({ categoryId: parseInt(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
