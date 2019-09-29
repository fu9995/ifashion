<template>
  <div class="car">
    <h3>购物车</h3>

    <div class="car-items" v-if="goodInCart.length>0">
      <div class="item" v-for="(item,index) in goodInCart" :key="index">
        <div class="pic">
          <img :src="item.pic" alt="">
        </div>
        <div class="text">
          <div class="title">{{item.name}}</div>
          <div class="price">单价:<span>￥{{item.price}}</span></div>
          <div class="jiajian">
            <button class="sub" @click="sub(item.id)">-</button>
            <div class="num">{{item.count}}</div>
            <button class="add" @click="add(item.id)">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <img src="../assets/images/没有更多.png" alt="">
      <p>您的购物车还是空的哦！</p>
    </div>

    <footer>
      <div class="count">
        <p class="counts">总数: <span>{{total}}</span></p>
        <p class="prices">总价: <span>{{totalprice}}</span></p>
      </div>
      <button><a href="/confirm">去结算</a></button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodInCart:[]
    }
  },
  computed: {
    total:function() {
      return this.goodInCart.reduce(function(t,good) {return t+good.count}, 0)
    },
    totalprice:function() {
      return this.goodInCart.reduce(function(t,good) {return t+good.count*good.price}, 0)
    }
  },
  methods: {
    sub:function(id) {
      var findGood = this.goodInCart.find(function(good,index) {
        return good.id == id;
      })
      if(findGood) {
        if(findGood.count > 1) findGood.count--;
      }
       localStorage.setItem('goodInCart',JSON.stringify(this.goodInCart));
    },
    add:function(id) {
      var findGood = this.goodInCart.find(function(good,index) {
        return good.id == id;
      })
      if(findGood) {
        if(findGood.count < 5) findGood.count++;
      }
       localStorage.setItem('goodInCart',JSON.stringify(this.goodInCart));
    }
  },
  mounted:function() {
    this.goodInCart = localStorage.getItem("goodInCart")? JSON.parse(localStorage.getItem("goodInCart")) : [];
  }
}
</script>
<style>
.car{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.car h3{
  width:100%;
  height:60px;
  line-height: 60px;
  text-indent: .5em;
}
.car .empty{
  flex: 1;
}
.car .empty img{
  width:30%;
  height:auto;
  margin:50px 35% 0 35%;
}
.car .empty p{
  width:100%;
  height:30px;
  margin-top:30px;
  font-size: 16px;
  text-align: center;
}
.car .car-items{
  flex: 1;
  margin:0 10px;
  overflow: scroll;
}
.car .car-items .item{
  margin:0px 0 30px 0;
  display: flex;
}
.car .car-items .item .pic{
  width:25%;
  margin-right: 15px;
}
.car .car-items .item .pic img{
  width:100%;
}
.car .car-items .item .text{
  line-height: 30px;
  width:75%;
}
.car .car-items .item .text .title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.car .car-items .item .text .price{
  width:120px;
  margin-top:30px;
}
.car .car-items .item .text .price>span{
  color:red;
}
.car .car-items .item .text .jiajian{
  width:100px;
  height:30px;
  float: right;
  margin-top:-30px;
}
.car .car-items .item .text .jiajian button{
  width:25px;
  height:25px;
  border-radius: 50%;
  border:1px solid #338ac0;
  color:#338ac0;
  background-color: #fff;
  float: left;
}
.car .car-items .item .text .jiajian .add{
  background: #338ac0;
  color:#fff;
}
.car .car-items .item .text .jiajian .num{
  width:40px;
  height:25px;
  text-align: center;
  font-size: 12px;
  float: left;
}

footer{
  width:100%;
  height:50px;
  background-color: #666;
}
footer .count{
  width:70%;
  height:100%;
  float: left;
}
footer .count p{
  line-height: 50px;
  font-size: 15px;
  color:#fff;
  text-indent: 1em;
}
footer .count .counts{
  width:40%;
  height:100%;
  float: left;
}
footer .count .prices{
  width:60%;
  height:100%;
  float: left;
}
footer button{
  width:30%;
  height:100%;
  background-color: #57e692;
  color:#fff;
  font-size: 15px;
  border:0;
  float: left;
}
footer button a{
  color:#fff;
}
</style>