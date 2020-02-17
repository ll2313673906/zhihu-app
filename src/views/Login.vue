<template>
    <div class="login-bar tx-center">
        <div class="login-main">
            <div id="logo">
                <router-link to="/home/recommoned"><img src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png" alt=""></router-link>
            </div>
            <form action="#">
                <div class="top">
                    <div class="login-nav">
                        <div class="nav-bar clear-box">
                            <ul id="nav">
                                <li  v-on:click="click1()" id="click1" class="active">免密登录</li>
                                <li  v-on:click="click2()" id="click2">密码登录</li>
                                <li ><svg width="52" height="52" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><defs><path id="id-3938311804-a" d="M0 0h48a4 4 0 0 1 4 4v48L0 0z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="id-3938311804-b" fill="#fff"><use xlink:href="#id-3938311804-a"></use></mask><use fill="#0084FF" xlink:href="#id-3938311804-a"></use><image width="52" height="52" mask="url(#id-3938311804-b)" xlink:href="data:image/png;base64,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"></image></g></svg></li>
                            </ul>
                        </div>
                    </div>
                    <div id="content" >
                        <li style="display: block" id="content-photo-login">
                            <div class="login-photo">

                            <div id="country-select" >
                                <select v-model="selectedCountry" id="selectCountry"  size="5px">
                                    <option  class="select-item" v-for="(item,index) in countrysList" :key="index"> {{ item.name }} {{ item.code }}</option>
                                </select>

                            </div>
                           <div id="country-default" v-on:click="countryClick()">
                               <span id="item">
                                {{selectedCountry}}
                               </span>
                             </div>
                              <div id="photo">
                                  <svg class="Zi Zi--Select Select-arrow" fill="currentColor" viewBox="0 0 24 24" width="4" height="24"><path d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z" fill-rule="evenodd"></path></svg>
                                <div class="photo-right"> <input type="text" placeholder="手机号"></div>
                              </div>
                            </div>
                            <div class="login-message">
                                <span><input type="text" placeholder="请输入6位短信验证码" style="border: none;outline: none"></span>
                                <span><a href="" class="clear-box">获取短信验证码</a></span>
                            </div>
                            <div class="login-code">
                                <span class="clear-box">接收语音验证码</span>
                            </div>
                        </li>
                        <li id="content-account-login">
                            <div class="login-photo">
                                <input type="tel" placeholder="手机号或者邮箱">
                            </div>
                            <div class="login-message">
                                <input type="text" placeholder="密码">
                            </div>
                            <div class="login-code">
                                <a href="#">海外手机号登录</a>
                                <span>忘记密码？</span>
                            </div>

                        </li>

                    </div>
                    <div class="login-btn">
                        <input type="submit" value="注册/登录">
                    </div>

                    <div class="login-bottom clear-box" >
                        <p>未注册手机验证后自动登录</p>
                        <span>注册即代表同意《知乎协议》《隐私保护指引》<span ><a href="">注册机构号</a></span></span>

                    </div>
                </div>

            </form>
            <div class="center clear-box" >
                <span class="fist-item">社交账号登录</span>
                <div class="center-ul clear-box">
                    <ul>
                        <li><i class="fa fa-commenting green-icon"></i><span>微信</span></li>
                        <li><i class="fa fa-qq blue-icon" ></i><span>QQ</span></li>
                        <li><i class="fa fa-weibo red-icon"></i><span>微博</span></li>
                    </ul>
                </div>
            </div>
            <div class="bottom">
                <div class="bottom-content">
                    下载知乎App
                </div>
            </div>
            <div class="footer">
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        name: "login",

        data() {
            return{
                countrysList: [],
                selectedCountry: '中国+86',

            };

        },
        created() {
            this.axios.get('/api/countrys').then(res => {
                this.countrysList = res.data.data.data;
            })
            function item() {
                var optionItem = document.getElementById('item');
                var countryselect = document.getElementById('country-select')
                if (optionItem != null){
                    countryselect.style.display = 'none'
                }
            }
        },
        methods:{
            click1(){
                document.getElementById('click1').style = 'border-bottom:3px solid #0084ff;font-weight: bold;'
                document.getElementById('click2').style = 'border-bottom:none'
                document.getElementById('content-account-login').style.display = 'none'
                document.getElementById('content-photo-login').style.display = 'block'
                document.getElementById('country-default').style.display = 'block';
                document.getElementById('country-select').style.display = 'none';
            },
            click2(){
                document.getElementById('click2').style = 'border-bottom:3px solid #0084ff;font-weight: bold;'
                document.getElementById('click1').style = 'border-bottom:none'
                document.getElementById('content-photo-login').style.display = 'none'
                document.getElementById('content-account-login').style.display = 'block';
            },

            countryClick(){
                document.getElementById('country-select').style.display = 'block';

            },

        }
    }


</script>

<style lang="scss" scoped>
    @import "../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
    @import "../assets/css/basic.css";

.login-bar{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background:url("https://student-manage-ll.oss-cn-beijing.aliyuncs.com/logo/logo1/596755264779622642.png")no-repeat;

    #logo{
        margin-top: 87px;
        width: 100%;
        height: 136px;
       position: relative;
        img{
            width: 118px;
            height: 78px;
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    span{
        color: #8590a6;;
    }
    .login-main{
        width: 400px;
        height: 900px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        div{
            width: 100%;

        }
        .top{
            height: 355px;
            background: #fff;
            padding-left:20px;
            padding-right:20px;

        }
        .login-nav{

            height: 57px;
            .nav-bar{
                margin-top: 10px;
                height: 48px;
                line-height: 48px;
                position: relative;
               ul{
                  padding-top: 10px;
                   padding-left: 0;
               }
                ul #click1{
                    border-bottom:3px solid #0084ff;
                    font-weight: bold;
                }
                ul li:active{
                    border-bottom: 3px solid #0084ff;
                    font-weight: bold;
                }
                ul li:visited{
                    border-bottom: 3px solid #0084ff;
                    font-weight: bold;
                }
                ul li:nth-child(2){
                    margin-left:30px;
                }
                ul li:last-child{
                  position: absolute;
                    margin: -10px 328px;

                }
            }
        }
        .login-photo{
            display: flex;
            border-bottom: 1px solid #eee;
            height: 48px;
            color: gray;
            line-height: 48px;
            span:first-child{
                width: 80px;


            }
            .country-div{
                width: 20px;
                height:20px;
                margin-left:2px;
                margin-top: 16px;
                line-height: 20px;
                display: flex;
                border-right: 1px solid #eee;
                border-radius: 0;
                position: relative;
                display: inline-block;

            }
            span:first-child{
                width: 100px;
                display: flex;
            }
            span:nth-child(2){
                margin-left: 10px;
                color: #eee;
            }
           input[type=text]{
               margin-left: 5%;
               border: none;
               outline: none;
           }
        }
        .login-message{
            height: 48px;
            padding-top: 10px;
            border-bottom: 1px solid #eee;
            span a{
               float: right;
            }
        }
        .login-code{
            height: 48px;
            padding-top: 10px;
            span{
                float: right;
            }
        }
        .login-btn{
            margin-top: 10px;
            height: 48px;
            padding-top: 10px;
            input[type=submit]{
                width: 100%;
                height: 36px;
                border: none;
                background: #0084ff;
                color: #ffffff;
                border-radius: 3px;
                cursor: pointer;
            }
        }
        .login-bottom{
            padding: 2px 10px 10px;
            margin-top: 30px;
            background: #eee;
            font-size: 13px ;
            line-height:6px;
            height: 65px;
            width: 400px;
            margin-left: -20px;
            color:grey;
            justify-content: space-between;

            span a{
                float: right;
                color: #0084ff;
            }
        }
        .center{
            line-height: 47px;
            height:47px ;
            margin-top: 10px;
            background:#Fff;
            display: flex;
            padding-left: 10px;
            padding-right: 10px;
            .fist-item{
                width: 190px;
            }
            .center-ul{
               margin-left: 10px;
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 48px;
                display: inline-block;
                margin-top: -13px;
                ul li{
                    margin-left: 12px;
                    span{
                        margin-left:5px;
                    }
                    .green-icon{
                        color:rgb(96, 200, 77);
                        font-size: 19px;
                    }
                    .blue-icon {
                        font-size: 20px;
                        color:rgb(80, 200, 253);

                    }
                    .red-icon {
                        color:rgb(251, 102, 34);
                        font-size: 19px;
                    }
                }
            }


        }
        .bottom{
            height: 47px;
            background:#fff;
            margin-top: 10px;
            text-align: center;
            line-height: 47px;
            color: #0084ff;
        }

    }
}
    #content li{
        width: 100%;
        height: 100%;
        display: none;
    }
    #content-account-login{
        input{
            background:none;
            border: none;
            outline: none;
        }
    }
    a{
        color: #175199;;
    }

    #country-select{
        position: fixed;
        width: 200px;
        height: 460px;
        margin:17px -15px;
        display: none;
       background: #fff;
        z-index: 55;
        border-radius: 4px;
       box-shadow:-1px -1px 1px 1px rgb(235, 235, 224);
       color: #8590a6;


    }
    #country-default{
        display: flex;
        flex-direction: row;
        width: 110px;

        #item{

            width: 100%;
        }
    }
    .Zi{
        width:30px;
        display: inline-block;
        margin: 10px 20px;

    }
    #photo{
        position: absolute;
        display: flex;
        flex-direction: row;
        margin-left:90px;
        height: 40px;
        line-height: 40px;
        margin-top:5px;
        padding-left: 1px;
        input[type=text]{

        }

    }
    .photo-right{
        margin-left:-11px;
        height: 30px;
        line-height: 30px;
        width: 120px;
        border-left: 1px solid #eee;
        margin-top:6px;
      padding-left: -31px;
    }
    #country-select2{
        width: 100%;
        height: 100%;


    }
    .select-item{
        width: 100%;
        padding-top: 10px;
        padding-left: 18px;
        height: 40px;
        line-height: 40px;
        color: #8590a6;

    }
    .select-item:hover{
        cursor: pointer;
        background: #eee;

    }
    #selectCountry{
        background: #fff;
        border: none;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        height: 100%;

    }
</style>
