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
        <el-button type="primary" size="mini" @click="handleCheck(scope)">拒绝</el-button>
      </template>
    </JsonTable>
  </div>

</template>

<script>
import JsonTable from "@/components/JsonTable/index.vue";
import {reactive, getCurrentInstance} from "vue";
import {searchColumns, tableColumns, localService, options} from "@/components/JsonTable/billProConfig";
import request from "@/request/index";
import {ElMessage, ElMessageBox} from "_element-plus@1.0.2-beta.71@element-plus";
export default {
  name: "ProBill",
  setup(props, {emit}) {
    let {ctx} = getCurrentInstance();
    let tabOptions = reactive(options);
    function handlechange(params) {
      console.log(params);
    }
    function handleCheck(val) {
      console.log(val, 'check');
    }

    function handleDeliver(val) {
      // let obj = [];
      // obj = val.scope.store.states.data._value;

      // alert(JSON.stringify(val2));
      //
      // console.log(val2.data);
      // alert(val2.data);


      // alert(JSON.stringify(obj));
      // console.log(val);

      let data = {
        // orderId: obj.salesOrderId
        orderId: 1
      };
      // localhost修改
      request.post('http://localhost:9090/petshop/operator/confirmOrder/products',data).then(function (response) {
        let status = response.status;
        if (status == 200) {
          // tabOptions.startUpdate = Date.now(); // 更新列表
        }else{
          ElMessage('操作成功！');
        }
        this.$routes.replace({
          path: 'petBillBack'
        });

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
    //     request.post('http://localhost:9090/petshop/supplier/confirmOrder/product',data);
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
  components: {
    JsonTable
  }
};
</script>

<!--<script>-->
<!--export default {-->
<!--  name: "PetBill"-->
<!--};-->
<!--</script>-->

<style scoped>

</style>
