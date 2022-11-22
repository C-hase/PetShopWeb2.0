<template>
  <div style="background-color:#FCFCFC;font-family:'宋体';height:100%;">
    <div>
      <my-bread level1='个人中心' level2='修改密码' :level3="levelName"></my-bread>
    </div>
    <div style="margin-top:25px;margin-left:80px">
      <el-row :gutter="10">
        <el-col :span="2">
          <div style="background-color:#FFEBCD;width:60px;height:60px;display:inline-block;border-radius:50%;overflow:hidden;">
            <el-image :src="src" style="width:60px;height:60px;"></el-image>
          </div>
          <div style="margin-top:5px;margin-left:6px;"><span>王某某</span></div>
          <div style="margin-top:50px;margin-left:1px;"><el-button type="text" style="font-size:18px;color:#4D4D4D;"  @click="infomationClick()">个人信息<span style="color:#B0E0E6;" v-show="infomationShow" class="el-icon-s-promotion"></span></el-button></div>
          <div style="margin-top:5px;margin-left:1px;"><el-button type="text" style="font-size:18px;color:#4D4D4D;" @click="passwordClick()">修改密码<span style="color:#B0E0E6;" v-show="passwordShow" class="el-icon-s-promotion"></span></el-button></div>
        </el-col>

        <el-col :span="21">
          <el-row :gutter="10" style="margin-top:20px">
            <el-col :span="2"><div style="text-align:right;"><span>账号：</span></div></el-col>
            <el-col :span="5">0000000000</el-col>
          </el-row>
          <!-- 个人信息 -->
          <el-row v-show="infomationShow">
            <el-card style="margin-top:30px;width:1024px">
                  <el-row :gutter="24" style="margin-top:20px;">
                    <el-col :span="8"><div style="text-align:right;"><span>姓名：</span></div></el-col>
                    <el-col :span="16">王某某</el-col>
                  </el-row>
                  <el-row :gutter="24" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>手机号：</span></div></el-col>
                    <el-col :span="16">17125463265</el-col>
                  </el-row>
                  <el-row :gutter="24" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>电子邮箱：</span></div></el-col>
                    <el-col :span="16">2036128127@qq.com</el-col>
                  </el-row>
                  <el-row :gutter="24" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>部门：</span></div></el-col>
                    <el-col :span="16">某某管理中心</el-col>
                  </el-row>
                  <el-row :gutter="24" style="margin-top:30px;">
                    <el-col :span="8"><div style="text-align:right;"><span>职位：</span></div></el-col>
                    <el-col :span="16">部门负责人</el-col>
                  </el-row>>
            </el-card>
          </el-row>
          <!-- 修改密码 -->
          <el-row v-show="passwordShow">
            <el-card style="margin-top:30px;width:1024px">
              <el-form :model="personalForm">
                <el-row :gutter="12" style="margin-top:20px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>账号：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="account">
                      <el-input type="text" v-model="personalForm.account" placeholder="请输入您的账号" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>手机号：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="phone_num">
                      <el-input type="text" v-model="personalForm.phoneNum" placeholder="绑定的手机号" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>密码：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="password1">
                      <el-input type="password" show-password v-model="personalForm.password1" placeholder="请输入新的密码" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>确认密码：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="password2">
                      <el-input type="password" show-password v-model="personalForm.password2" placeholder="请再次输入新的密码" ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:1px;">
                  <el-col :span="6">
                    <div style="text-align:right;"><span>验证码：</span></div>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item prop="verification">
                      <el-input type="text" v-model="personalForm.verification" placeholder="验证码" ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="1">
                    <el-button type="primary" size="medium" @click="sendMsg()" :disabled="isDisabled">{{ buttonName }}</el-button>
                  </el-col>
                </el-row>
                <el-row :gutter="12" style="margin-top:10px;">
                  <el-col :span="17" style="text-align:center;">
                    <el-button type="primary" round size="medium" @click="submit()">修改</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-card>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import yu from '@/assets/yu.png';

export default {
  data(){
    return {
      src:yu,
      levelName:'',
      isCollapse:false,
      infomationShow:false,
      passwordShow:false,
      buttonName:"发送短信",
      isDisabled:false,
      time:60,
      personalForm:{
        account:"",
        phoneNum:"",
        verification:"",
        password1:"",
        password2:"",
      }
    };
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(key);
      console.log(keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    infomationClick(){    //个人信息事件
      this.infomationShow = true;
      this.passwordShow = false;
    },

    passwordClick(){     //密码事件
      this.infomationShow = false;
      this.passwordShow = true;
    },
    sendMsg() {    //时间按钮
      let me = this;
      me.isDisabled = true;
      let interval = window.setInterval(function() {
        me.buttonName = "(" + me.time + ")秒";
        --me.time;
        if(me.time < 0) {
          me.buttonName = "重新发送";
          me.time = 60;
          me.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
      //获取短信验证码
      // this.$http.get('/?phone_num=' + this.personalForm.phone_num).then(res => {
      //     this.$message.success("短信已发送,请查收")
      // })
    },
    submit(){  //提交
      if(this.personalForm.account === ""){
        this.$message.warning("账号不能为空");
      }else if(this.personalForm.phoneNum === ""){
        this.$message.warning("手机号不能为空");
      }else if(this.personalForm.password1 === ""){
        this.$message.warning("密码不能为空");
      }else if(this.personalForm.password2 === ""){
        this.$message.warning("密码不能为空");
      }else if(this.personalForm.verification === ""){
        this.$message.warning("验证码不能为空");
      }else{
        if(this.personalForm.password1 === this.personalForm.password2){
          this.$message.success("修改成功");
          // const params = {
          //     account:this.personalForm.account,
          //     phone_num:this.personalForm.phone_num,
          //     password1:this.personalForm.password1,
          //     password2:this.personalForm.password2,
          //     verification:this.personalForm.verification,
          // }
          // console.log(params)
          // this.$http.post('',params).then(res => {
          //     console.log(res)
          // })
        }else{
          this.$message.warning("两次输入的密码不一致,请重新输入");
        }

      }
    },

  }
};
</script>

<style>
.name{ text-align: right; }
.value{ text-align: left; }
</style>

<!--<script>-->
<!--export default {-->

<!--};-->
<!--</script>-->
<!--<style lang="less">-->
<!--    .txt{-->
<!--      text-align: center;-->
<!--    }-->
<!--</style>-->
