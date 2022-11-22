<template>
  <div>
    <JsonTable
      :searchColumns="searchColumns"
      :tableColumns="tableColumns"
      :service="localService"
      :options="tabOptions"
      @onformchange="handlechange"
      @rowselectchange="handleRowSelectChange"
    >
      <template v-slot:under-search-slot>
        <div>
          <el-button size="mini" type="primary">刷新</el-button>
        </div>
      </template>
      <template v-slot:op="scope">
        <el-button type="primary" size="mini" @click="handleDeliver(scope)">确认</el-button>
        <el-button type="primary" size="mini" @click="handleCheck(scope)">查看</el-button>
      </template>
    </JsonTable>
  </div>

</template>

<script>
import {getCurrentInstance, reactive} from "vue";
import {ElMessage, ElMessageBox} from 'element-plus';
import {localService, options, searchColumns, tableColumns} from "@/components/JsonTable/billPetConfig";
import JsonTable from "@/components/JsonTable";
import request from "@/request/index";

export default {
  name: "PetBill",
  setup(props, {emit}) {
    let {ctx} = getCurrentInstance();
    let tabOptions = reactive(options);
    function handlechange(params) {
      console.log(params);
    }
    function handleCheck(val) {
      console.log(val, 'check');
    }
    function handleDeliver(val){
      let obj = val.scope.store.states.data._value;
        ElMessageBox.confirm('是否确定发货', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = {
            orderId:obj.salesOrderId
          };
          if(parseInt(obj.isDelivery) === 0){
            request.post('http://10.134.156.45:9090/petshop/supplier/confirmOrder/pet',data).then(function (response){
              let status = response.status;
              if(status == 200){
                ElMessage('发货成功！');
                // tabOptions.startUpdate = Date.now(); // 更新列表
                this.$routes.replace({
                  path:'petBillBack'
                });
              }
            });
          }else {
            ElMessage('不可重复发货！');
          }
        }).catch(() => {
          ElMessage('发货失败！');
        });
    }

    // function handleDeliver(val) {
    //   console.log(val, 'deliver');
    //   ctx.$confirm('是否确定发货', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     let data = {
    //       orderId:val.tableColumns.salesOrderId
    //     };
    //     request.post('http://localhost:9090/petshop/supplier/confirmOrder/pet',data);
    //     tabOptions.startUpdate = Date.now(); // 更新列表
    //     ctx.$message({
    //       type: 'success',
    //       message: '发货成功!'
    //     });
    //   }).catch(() => {
    //     ctx.$message({
    //       type: 'info',
    //       message: '已取消发货'
    //     });
    //   });

    // }
    function handleRowSelectChange(val) {
      console.log(val, 'selectList');
    }

    return {
      searchColumns,
      tableColumns,
      handlechange,
      localService,
      tabOptions,
      handleCheck,
      handleDeliver,
      handleRowSelectChange
    };
  },
  // computed: {
  //   key() {
  //     return this.$route.fullPath;
  //   },
  // },
  // watch: {
  //   '$route'(to, from) {
  //     //刷新参数放到这里里面去触发就可以刷新相同界面了
  //     this.getStatus(this.$route.path);
  //   }
  // },
  components: {
    JsonTable
  }
};
</script>

<style scoped>

</style>
