import Inner from "@/views/Inner.vue";
import NotFound from '@/views/NotFound.vue';
import Login from "@/views/Login.vue";
import PetBillBack from "@/views/PetBillBack.vue";
import ProBillBack from "@/views/ProBillBack.vue";
const defaultRoutes: any = [
  {
    path: "/inner",
    name: "内部页面",
    component: Inner,
    meta: {
      activePath: '/'  // 打开非Menu页面选择当前激活menu
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path:'/petBillBack',
    name:'宠物订单返回',
    component:PetBillBack,
    children: [],
    meta: {
      icon: ''
    }
  },
  {
    path:'/proBillBack',
    name:'宠物用品订单返回',
    component:ProBillBack,
    children: [],
    meta: {
      icon: ''
    }
  },
];

export default defaultRoutes;
