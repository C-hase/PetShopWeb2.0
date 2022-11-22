// import request from '@/server/request';
import {storePet} from './storePetMock';
import request from "@/request/index";

export const searchColumns = [
  {
    label: '宠物ID',
    prop: 'petID',
    clearable: true,
    placeholder: "请输入宠物ID"
  },
  {
    label: '宠物名',
    prop: 'petName',
    clearable: true,
    placeholder: "请输入宠物名"
  },
];

export const tableColumns = [
    {
        prop: 'stockPetId',
        label: '宠物ID',
        width: 150,
        overflow: true
    },
    {
        prop: 'specie',
        label: '宠物种类',
        width: 150,
        overflow: true
    },
    {   // 图片预览
        prop: 'url',
        label: '宠物图片',
        width: 150,
        imgW: 300, // 设置该项表示预览图片
        expandFunc: true // 是否有扩展功能，启用表格列插槽
    },
    {
        prop: 'color',
        label: '宠物毛色',
        width: 150,
        overflow: true
    },
    {
      prop: 'health',
      label: '健康程度',
      width: 150,
      overflow: true
    },
    {
      prop: 'price',
      label: '宠物价格',
      width: 150,
      overflow: true
    },
    {
        prop: 'quantity',
        label: '库存数量',
        width: 150,
        overflow: true
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
      request.post("http://10.134.156.45:9090/petshop/supplier/getStock/pet",
        {_page: data.page, _limit: data.psize}).then(function (response){
        petTable.data = response.宠物库存;
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
