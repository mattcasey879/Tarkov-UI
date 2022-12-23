import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage";
import TradersItem from '../components/TradersItem';
import TraderDetail from '../views/TraderDetail'

const routes = [
  { 
  path: "/", name: "landing", component: LandingPage 
}, 
{
  path: '/traders', name: 'traders', component: TradersItem 
},
{
  path: '/traders/:name', name: 'traderDetail', component: TraderDetail
}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
