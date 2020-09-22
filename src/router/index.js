import Vue from "vue";
import VueRouter from "vue-router";
import BoardIndex from "../views/board/Index.vue"
import BoardList from "../views/board/_router/List.vue"
import BoardAddForm from "../views/board/_router/AddForm.vue"
import BoardDetails from "../views/board/_router/Details.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/board',
    alias: '/',
    name: 'boardIndex',
    component: BoardIndex,
    children: [
      {
        path: 'list',
        alias: '/',
        component: BoardList
      },
      {
        path: 'posting',
        name: 'boardPosting',
        component: BoardAddForm,
        props: true
      },
      {
        path: ':boardIdx',
        name: 'boardDetails',
        component: BoardDetails,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
