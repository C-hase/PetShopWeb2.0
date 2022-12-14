
# Vue3.0 ElementPlus

## Project setup
```
npm install
```

## Start Mock Server
```
npm run mock
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

以下为组件使用示例 以及配置项示例

```
<JsonTable
    :searchColumns="searchColumns"
    :tableColumns="tableColumns"
    :service="localService"
    :options="tabOptions"
    @onformchange="handlechange"
    @rowselectchange="handleRowSelectChange"
    >
    <!-- 查询表单与表格中间插槽 -->
    <template v-slot:under-search-slot>
        <div>
            <el-button size="mini" type="primary">新增</el-button>
        </div>
    </template>
    <!-- 操作栏插槽 -->
    <template v-slot:op="scope">
        <el-button type="danger" size="mini" @click="handleDelete(scope)">删除</el-button>
        <el-button type="primary" size="mini" @click="handleCheck(scope)">查看</el-button>
    </template>
</JsonTable>
```
Props:
`searchColumns`: 表单查询属性配置
`tableColumns`: 查询结果行字段配置
`service`: 请求，主要是配置查询请求
`options`: 表格设置
`onformchange`: 表单查询项change事件监听 参数为查询属性
`rowselectchange`: 带有select的表格选择时的select监听事件 参数为当前选中项

#### 表单查询属性：searchColumns Array

配置项说明：

`label`: String 表单项显示名称
`prop`: String 表单项属性（传给后端的字段）
`clearable`: Boolean 表单项内容是否可清除
`placeholder`: String 表单项placeholder
`isSelect`: Boolean 是否是select框（默认是input）
`options`: Array Select框和Cascader的options
`isCascader`: Boolean 是否是级联
`isTime`: String [date, datetimerange] 日期 或者日期时间范围（默认时间是Date格式内部已做转换处理为YYYY-MM-DD HH:MM:SS格式 如果需要时间戳格式可在组件源码中自行修改）

配置示例：
```
[
    {
        label: '姓名',
        prop: 'name',
        clearable: true,
        placeholder: "请输入姓名"
    },
    {
        label: '性别',
        prop: 'sex',
        clearable: true,
        placeholder: "请选择",
        isSelect: true,
        options: [
            {
                prop: 'male',
                name: '男'
            },
            {
                prop: 'female',
                name: '女'
            }
        ]
    },
    {
        label: '技能',
        prop: 'skill',
        clearable: true,
        placeholder: "请选择",
        isCascader: true,
        options: [
              {
                value: "basic",
                label: "Basic",
                children: [
                {
                    value: "layout",
                    label: "Layout 布局"
                },
                {
                    value: "color",
                    label: "Color 色彩"
                },
                {
                    value: "typography",
                    label: "Typography 字体"
                },
                {
                    value: "icon",
                    label: "Icon 图标"
                },
                {
                    value: "button",
                    label: "Button 按钮"
                }
                ]
            }
        ]
    },
    {
        label: '出生日期',
        prop: 'born',
        clearable: true,
        placeholder: "选择日期",
        isTime: 'date',
        valueFormat: '',
        defaultTime: []
    }
]
```


#### table表格各属性：
1. options Object 表格展现形式配置

配置项说明：
`canCheck`: Boolean 表格是否可勾选
`hasIndex`: Boolean 表格是否有序号
`checkFixed`: String [left right] 勾选checkbox固定位置
`indexFixed`: String [left right] 序号固定位置
`opW`: Number 操作栏宽度（当操作栏按钮较多时需要较宽宽度，默认为150）
`autoRequest`: Boolean 是否进入页面执行一次数据请求 默认为false
`startUpdate`: Date.now() // 监听该项有变化时更新请求
配置示例：
```
{
    canCheck: true, // 是否可选择
    hasIndex: true, // 是否有序号
    checkFixed: 'left', // 选择固定位置
    indexFixed: 'left', // 表序号固定位置
    opW: 150,// 操作栏宽度
    autoRequest: true, // 自动请求(第一次加载默认请求)
    startUpdate: Date.now()
}
```
2. tableColumns 查询结果行字段配置
属性：tableColumns Array

配置项说明：
`prop`: String 对应后端返回表格数据字段
`label`: String 表格当前列名称
`width`: Number 当前列宽度
`expandFunc`: Boolean 是否有扩展功能（扩展功能包括图片预览，重写数据等等，当传递imgW，isMultiCell，render时该属性必传）
`imgW`: Number 图片预览时传递此参数，为预览图片宽度（图片默认是以tooltip展示的）
`isMultiCell`: Boolean 是否要重写数据（场景：后端返回json字符串，前端需要取其中某一个属性，或者后端给的是0，1这样的标识，需要前端转义为汉字 是 或者否）
`render`: Function 配合isMultiCell使用参数为当前表格的行数据，可以return可渲染数据，可以参考配置示例

配置示例
```
[
    {
        prop: 'name',
        label: '姓名',
        width: 150,
        overflow: true
    },
    {
        prop: 'age',
        label: '年龄',
        width: 150,
        overflow: true
    },
    {   // 图片预览
        prop: 'avatar',
        label: '头像',
        width: 150,
        imgW: 300, // 设置该项表示预览图片
        expandFunc: true // 是否有扩展功能，启用表格列插槽
    },
    {
        prop: 'sex',
        label: '性别',
        width: 150,
        overflow: true
    },
    {
        prop: 'born',
        label: '出生日期',
        width: 150,
        overflow: true
    },
    {
        prop: 'phone',
        label: '电话',
        width: 150,
        overflow: true
    },
    {
        prop: 'zip',
        label: '邮编',
        width: 150,
        overflow: true
    },
    {
        prop: 'province',
        label: '省份',
        width: 150,
        overflow: true
    },
    {
        prop: 'city',
        label: '市区',
        width: 150,
        overflow: true
    },
    {
        prop: 'address',
        label: '地址',
        width: 150,
        overflow: true
    },
    {
        prop: 'loc',
        label: '工位',
        width: 150,
        overflow: true
    },
    {
        prop: 'createUser',
        label: '创建人',
        width: 150,
        overflow: true
    },
    {
        prop: 'auditUser',
        label: '审核人',
        width: 150,
        overflow: true
    },
    {
        prop: 'order',
        label: '订单号',
        width: 150,
        overflow: true
    },
    {   // 场景： 后端字段是json字符串，需要前端解析其中某个字段
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
    }
]
```

#### 请求接口配置属性

service Obejct
属性用于请求接口的配置，用于在组件内属性部进行表格数据的请求 默认是一个对象，get是默认的请求，参数为如下格式
```
{
    page: 1,
    psize: 2,
    params: {
        name: 'leilei',
        age: 18
    }
}
```

```
export const localService = {
/**
 * {
 *  page: 1,
 *  psize: 20,
 *  params: {}
 * }
 */
    get(data) {
        console.log(data);
        // return axios.get(url, data); 这里是实际发请求的地方
        return new Promise((resolve, reject) => {
            resolve({
                data: {
                    code: 0,
                    data: {
                        totalCount: 1,
                        list: tableData
                    }
                }
            });
        });
    }
};
```
##### 2021-04-06周二
增加登录界面

主要变化文件如下图

![image.png](https://upload-images.jianshu.io/upload_images/17538702-a1c6540d90e96e19.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

由于之前组件设计问题，导致登录界面不太好加，所以找了一个比较trick的方案。将登录路由添加到页面中。
```
<template>
  <div>
    <router-view v-if="$route.path === '/login'"></router-view>
    <layout v-else></layout>
  </div>
</template>
```


持续更新中。。。比较慢。。。