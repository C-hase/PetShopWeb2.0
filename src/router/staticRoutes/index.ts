import Wrapper from '@/layout/components/Wrapper/index.vue';
import Home from '@/views/Home.vue';
import Self from '@/views/Self.vue';
import Store from '@/views/Store.vue';
import Bill from '@/views/Bill.vue';
import PetBill from "@/views/OperatorPetBill.vue";
import ProBill from "@/views/OperatorProBill.vue";

import PetStore from "@/views/PetStore.vue";
import ProStore from "@/views/ProStore.vue";

// import Vue from 'vue';
// import VueRouter from 'vue-router';


/**
 *
 * 路由配置规则：
 *
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu name
 *  meta:{},额外信息，icon为menu中的icon
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 *
 */


export const staticRoutes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [],
    meta: {
      icon: 'el-icon-s-home'
    }
  },
  // {
  //   path: '/self',
  //   name: '个人中心',
  //   component: Self,
  //   children: [],
  //   meta: {
  //     icon: 'el-icon-orange'
  //   }
  // },
  // {
  //   path: '/store',
  //   name: '库存管理',
  //   redirect:'/store/petStore',
  //   component: Store,
  //   children: [
  //     {
  //       path:'petStore',
  //       name:'宠物库存',
  //       component:PetStore,
  //       query: { openstatusId: 0 },
  //       children: [],
  //       meta: {
  //         icon: ''
  //       }
  //     },{
  //       path:'proStore',
  //       name:'宠物用品库存',
  //       component:ProStore,
  //       query: { openstatusId: 1 },
  //       children: [],
  //       meta: {
  //         icon: ''
  //       }
  //     },
  //   ],
  //   meta: {
  //     icon: 'el-icon-orange'
  //   }
  // },
  {
    path: '/bill',
    name: '用户订单管理',
    redirect:'/bill/petBill',
    component: Bill,
    children: [
      {
        path:'petBill',
        name:'宠物订单',
        component:PetBill,
        query: { openstatusId: 0 },
        children: [],
        meta: {
          icon: ''
        }
      },
      {
        path:'proBill',
        name:'宠物用品订单',
        component:ProBill,
        query: { openstatusId: 1 },
        children: [],
        meta: {
          icon: ''
        }
      },
    ],
    meta: {
      icon: 'el-icon-orange'
    }
  },
];
