// import request from '@/server/request';
import {billPet} from './billPetMock';
import request from "@/request/index";

export const searchColumns = [
    {
        label: '订单编号',
        prop: 'billID',
        clearable: true,
        placeholder: "请输入订单编号"
    },
    {
        label: '宠物ID',
        prop: 'petID',
        clearable: true,
      placeholder: "请输入宠物ID"
    },
    {
      label: '店铺名',
      prop: 'shopName',
      clearable: true,
      placeholder: "请输入店铺名"
    },
    {
        label: '下单日期',
        prop: 'working',
        clearable: true,
        placeholder: "选择日期",
        isTime: 'datetimerange'
    }
];

export const tableColumns = [
    {
        prop: 'salesOrderId',
        label: '订单号',
        width: 150,
        overflow: true
    },
    {
        prop: 'salesPetId',
        label: '宠物ID',
        width: 150,
        overflow: true
    },
    {
        prop: 'salesPetQuantity',
        label: '数量',
        width: 150,
        overflow: true
    },
    {
      prop: 'salesPetPrice',
      label: '价格',
      width: 150,
      overflow: true
    },
    {
        prop: 'userId',
        label: '用户Id',
        width: 150,
        overflow: true
    },
    {
        prop: 'userName',
        label: '用户名称',
        width: 150,
        overflow: true
    },
    {
        prop: 'userPhone',
        label: '用户电话',
        width: 150,
        overflow: true
    },
    {
        prop: 'userAddress',
        label: '用户地址',
        width: 150,
        overflow: true
    },
    {
        prop: 'userRemarks',
        label: '订单备注',
        width: 100,
        overflow: true
    },
    {
      prop: 'orderDate',
      label: '下单时间',
      width: 100,
      overflow: true
    },
    {
        prop: 'salesAllPrice',
        label: '订单总价',
        width: 100,
        overflow: true
    },
    {
        prop: 'isConfirm',
        label: '订单状态',
        width: 150,
        overflow: true,
        expandFunc: true,
        isMultiCell: true,
        render: (scope) => {
          let status = scope.row.isConfirm;
          if (parseInt(status) === 0) {
            return "未处理";
          } else if (parseInt(status) === 1) {
            return "已处理";
          }
          return "--";
        }
    },

 /*   {   // 场景： 后端字段是json字符串，需要前端解析其中某个字段
        prop: 'jsonStr',
        label: 'json解析',
        width: 150,
        overflow: true,
        expandFunc: true,
        isMultiCell: true,
        render: (scope) => {
            if (JSON.stringify(scope.row) !== '{}') {
                return JSON.parse(scope.row.jsonStr).json;
            }
            return "--";
        }
    },
    {   // 场景： 后端字段是数字0或1, 前端需要自己将数字转成汉字 比如0 待审核 1 已审核
        prop: 'status',
        label: '状态（0 1）',
        width: 150,
        overflow: true,
        expandFunc: true,
        isMultiCell: true,
        render: (scope) => {
            let status = scope.row.status;
            if( status === 0) {
                return "待审核";
            } else if(status === 1) {
                return "已审核";
            }
            return "--";
        }
    }*/
];

export const localService = {
/**
 * {
 *  page: 1,
 *  psize: 20,
 *  params: {}
 * }
 */
    get(data) {
      let petTable = {
          code: 0,
          data: []
        }
      ;
    //   localhost修改
        request.post("http://10.134.156.45:9090/petshop/operator/getOrders/AllPet",
          {_page: data.page, _limit: data.psize}).then(function (response){
            petTable.data = response.宠物订单;
          // alert(JSON.stringify(response.宠物订单));
          // alert(JSON.stringify(data));
        }); // 这里是实际发请求的地方
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(petTable);
            }, 1000);
        });
    }
};

export const options = {
    canCheck: false, // 是否可选择
    hasIndex: true, // 是否有序号
    checkFixed: 'left', // 选择固定位置
    indexFixed: 'left', // 表序号固定位置
    opW: 150,// 操作栏宽度
    autoRequest: true, // 自动请求
    startUpdate: Date.now()
};

// 以上配置文件可以根据业务需要分布配置在不同的文件里
