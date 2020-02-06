<template>
    <div class="login-bar tx-center">
        <div class="login-main">
            <div id="logo">
                <router-link to="/home"><img src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png" alt=""></router-link>
            </div>
           <div class="top">
               <div class="login-nav">
                   <div class="nav-bar clear-box">
                       <ul id="login-bar-ul">
                           <li v-on:click=" click1()" id="click1" class="login-bar-ul-li">免密登录</li>
                           <li  v-on:click="click2()" id="click2">密码登录</li>
                       </ul>
                   </div>
               </div>

                       <div class="login-photo">
                   <span>中国 + 86 <div class="country-div">
                       <i class="fa fa-angle-right fa-rotate-270"></i>
                       <i class="fa fa-angle-right fa-rotate-90"></i>

                   </div></span><input type="text" placeholder="手机号">
                       </div>
                       <div class="login-message">
                           <span>请输入6位短信验证码</span>
                           <span><a href="" class="clear-box">获取短信验证码</a></span>
                       </div>
                       <div class="login-code">
                           <span class="clear-box">接收语音验证码</span>
                       </div>



               <div class="login-btn">
                   <input type="submit" value="注册/登录">
               </div>
               <div class="login-bottom clear-box" >
                   <p>未注册手机验证后自动登录</p>
                   <span>注册即代表同意《知乎协议》《隐私保护指引》<span ><a href="">注册机构号</a></span></span>

               </div>
           </div>
            <div class="center clear-box" >
                <span>社交账号登录</span>
                <div class="center-ul clear-box">
                    <ul>
                        <li>微信</li>
                        <li>QQ</li>
                        <li>微博</li>
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
            return{};
        },

        created() {},
        methods:{
            click2(){
                document.getElementById('click2').style = 'border-bottom:3px solid #0084ff;font-weight: bold;'
                document.getElementById('click1').style = 'border-bottom:none'
            },
            click1(){
                document.getElementById('click1').style = 'border-bottom:3px solid #0084ff;font-weight: bold;'
                document.getElementById('click2').style = 'border-bottom:none'
            }
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
            padding-left:10px;
            padding-right:10px;

        }
        .login-nav{

            height: 57px;
            .nav-bar{
                margin-top: 10px;
                height: 48px;
                line-height: 48px;
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
                    text-decoration: underline;
                }
                ul li:visited{
                    border-bottom: 3px solid #0084ff;
                    font-weight: bold;
                }
                ul li:last-child{
                    margin-left:3%;

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
                margin-left:7%;
                margin-top: 16px;
                line-height: 20px;
                display: flex;
                flex-direction: column;
                border-right: 1px solid #eee;
                border-radius: 0;
                position: relative;
                i:first-child{
                    position: absolute;
                    top: -4px;
                    left: 4px;
                }
                i:last-child{
                    position: absolute;
                    top: 4px;
                    left: 5px;
                }
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
            margin-left: -10px;
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
            .center-ul{
               margin-left: 20px;
               flex: 0 0 60%;

            }
            ul{
                width: 100%;
                display: inline-block;
                margin-top: 0px;
            }
            ul li{
                float: right;
                margin-left:10%;
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
</style>
