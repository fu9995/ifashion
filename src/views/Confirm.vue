<template>
    <div class="confirm">
        <div class="confirm-main">
            <div class="address">
                <h3>收货地址</h3>
                <div class="address-item">
                    <p>河南省-开封市-上帝之巅</p>
                    <p>河南省-开封市-上帝之巅</p>
                    <p>河南省-开封市-上帝之巅</p>
                </div>
            </div>

            <div class="method">
                <h3>支付方式</h3>
                <div class="address-item">
                    <p><span>微信</span> <img src="../assets/images/微信.png" alt=""></p>
                    <p><span>支付宝</span> <img src="../assets/images/支付宝认证.png" alt=""></p>
                    <p><span>银联</span> <img src="../assets/images/支付平台-银联.png" alt=""></p>
                </div>
            </div>

            <div class="list">
                <h3>商品列表</h3>
                <div class="list-item">
                    <div class="pic">
                        <img src="../assets/images/avatar-1.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">商品名称</div>
                        <p>再来哦！</p>
                    </div>
                    <div class="nums">
                        <span>x3</span>
                        <span>254</span>
                    </div>
                </div>
                <div class="list-item">
                    <div class="pic">
                        <img src="../assets/images/avatar-1.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">商品名称</div>
                        <p>再来哦！</p>
                    </div>
                    <div class="nums">
                        <span>x3</span>
                        <span>254</span>
                    </div>
                </div>
                <div class="list-item">
                    <div class="pic">
                        <img src="../assets/images/avatar-1.jpg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">商品名称</div>
                        <p>再来哦！</p>
                    </div>
                    <div class="nums">
                        <span>x3</span>
                        <span>254</span>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="prices">总价: ￥ <span>3241</span></div>
            <div class="btn">去支付</div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            addresses:[
                {
                    "id":1,
                    "address":"河南省-开封市-上帝之巅"
                },
                {
                    "id":2,
                    "address":"河南省-开封市-太平天国"
                },
                {
                    "id":3,
                    "address":"河南省-开封市-密西西比"
                }
            ]
        }
    },
}
</script>
<style>
.confirm{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #f7f7f7;
}
.confirm .confirm-main{
    flex: 1;
    overflow: scroll;
}
.confirm .confirm-main .address,.method{
    width:96%;
    height:200px;
    background: #fff;
    margin:10px 2%;
}
.confirm .confirm-main .address h3,.method h3{
    width:92%;
    height:50px;
    border-bottom:1.5px solid #eee;
    line-height: 50px;
    font-size: 18px;
    margin-left: 4%;
}
.confirm .confirm-main .address p,.method p{
    width:92%;
    height:50px;
    border-bottom:1px solid #eee;
    line-height: 50px;
    font-size: 15px;
    margin-left: 4%;
    color:#333;
}
.confirm .confirm-main .method p span{
    display: block;
    float: left;
}
.confirm .confirm-main .method p img{
    width:35px;
    margin:8px 0 0 20px;
}
.confirm .confirm-main .list{
    width:96%;
    height:350px;
    background: #fff;
    margin:10px 2%;
}
.confirm .confirm-main .list h3{
    width:92%;
    height:50px;
    border-bottom:1.5px solid #eee;
    line-height: 50px;
    font-size: 18px;
    margin-left: 4%;
}
.confirm .confirm-main .list .list-item{
    width:92%;
    height:100px;
    border-bottom:1px solid #eee;
    font-size: 15px;
    margin-left: 4%;
    color:#333;
}
.confirm .confirm-main .list .list-item .pic{
    width:60px;
    height:60px;
    float: left;
    margin:20px 20px 20px 0;
    background: lightblue;
}
.confirm .confirm-main .list .list-item .pic img{
    width:100%;
    height:100%;
}
.confirm .confirm-main .list .list-item .text{
    width:45%;
    height:60px;
    margin-top:20px;
    float: left;
}
.confirm .confirm-main .list .list-item .text .name,p{
    width:100%;
    font-size: 16px;
    color:#666;
}
.confirm .confirm-main .list .list-item .text p{
    margin-top:20px;
}
.confirm .confirm-main .list .list-item .nums{
    width:30%;
    height:30px;
    margin-top:35px;
    float: left;
    font-size: 16px;
}
.confirm .confirm-main .list .list-item .nums span{
    margin-right: 40px;
    color:#666;
}

.confirm footer{
    width:100%;
    height:50px;
    background: #666;
}
.confirm footer .prices{
    width:75%;
    height:100%;
    line-height: 50px;
    text-indent: 1.5em;
    font-size: 16px;
    color:#fff;
    float: left;
}
.confirm footer .btn{
    width:25%;
    height:100%;
    float: right;
    background: #72d472;
    color:#fff;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
}
</style>