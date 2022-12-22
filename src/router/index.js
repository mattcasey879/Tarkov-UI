import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage";
import TradersItem from '../views/TradersItem'

const routes = [
  { 
  path: "/", name: "landing", component: LandingPage 
}, 
{
  path: '/traders', name: 'traders', component: TradersItem 
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
