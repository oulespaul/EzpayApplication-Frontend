import Vue from 'vue'
import Router from 'vue-router'

//ShopPage
import Index from '@/views/home/Index'
import Register from '@/views/home/Register'
import Navbarweb from '@/views/home/Navbarweb'
import Login from '@/views/home/Login';

//ManageList
import Profile from '@/views/managelist/Profile';
import Product from '@/views/managelist/Product';
import ProductAdd from '@/views/managelist/ProductAdd';
import ProductKeep from '@/views/managelist/ProductKeep';
import Security from '@/views/managelist/Security';
import HistoryDay from '@/views/managelist/HistoryDay';
import HistoryMonth from '@/views/managelist/HistoryMonth';
import HistoryAll from '@/views/managelist/HistoryAll';
import ProductEdit from '@/views/managelist/ProductEdit';

//Admin
import IndexAdmin from '@/views/admin/IndexAdmin';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        //ShopPage
        { path: '/', name: 'index', component: Index },
        { path: '/register', name: 'register', component: Register },
        { path: '/navbarweb', name: 'navbarweb', component: Navbarweb },
        { path: '/login', name: 'login', component: Login },

        //ManageList
        { path: '/profile', name: 'profile', component: Profile },
        { path: '/product', name: 'product', component: Product },
        { path: '/productadd', name: 'productadd', component: ProductAdd },
        { path: '/productkeep', name: 'productkeep', component: ProductKeep },
        { path: '/security', name: 'security', component: Security },
        { path: '/historyday', name: 'historyday', component: HistoryDay },
        { path: '/historymonth', name: 'historymonth', component: HistoryMonth },
        { path: '/historyall', name: 'historyall', component: HistoryAll },

        //Product
        { path: '/productedit', name: 'productedit', component: ProductEdit },

        //Admin
        { path: '/indexadmin', name: 'indexadmin', component: IndexAdmin },
    ]
})

export default router;