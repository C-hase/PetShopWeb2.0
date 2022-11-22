<template>
  <div class="home">
<!--    <h2>欢迎使用宠物电子商店管理系统-宠物商家端</h2>-->
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
  </div>
</template>

<script lang="ts">
import { ref, reactive, provide } from "vue";
import variable from "@/style/variable.less";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useRouter } from "vue-router";
import { useTheme } from "@/composition/useThemeApi";


import request from "@/request/index";
export default {
  setup() {
    const themeApi = useTheme();
    const router = useRouter();
    let variables = reactive(variable);
    const envName = reactive({ title: process.env.VUE_APP_TITLE});
    const mockData = reactive({data:{}});
    function jumpToInner() {
      router.push({
        path: "/inner"
      });
    }
    function loadData() {
      request.get('http://localhost:3001/api/wans').then((data: any) => {
        console.log(data, 'ddasd');
        mockData.data = data.result;
      });
    }
    provide("obj", envName); // 向子孙组件传递参数

    return {
      envName,
      variables,
      themeApi,
      jumpToInner,
      loadData,
      mockData
    };
  },
  components: {
  }
};
</script>
<style lang="less">
.home {
  // text-align: center;
  line-height: 24px;
  width: 80vw;
  height: 80vh;
  background: url(~@/assets/petshop.webp);
  background-repeat: no-repeat;
  background-size: cover;
  filter:blur(1px);
}
.height {
  height: 999px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
