<template>
  <div class="home">
    <div class="header">
      <img src="../assets/images/avatar.jpg" alt="">
    </div>
    <div class="text">
      <p class="title">爱时尚精品屋</p>
      <p class="tip">公告:欢迎光临,流行爆款库存有限请尽早下单..</p>
    </div>

    <div class="nav">
      <div class="nav-item" v-for="(item,index) in navList" :key="index" :class="{active: index==currentIndex }" @click="sort(index)">{{item}}</div>

    </div>

    <div class="list">
      <div class="good" v-for="(item,index) in goodList" :key="index">
        <div class="pic">
          <img :src="item.pic" alt="">
        </div>
        <div class="tex">
          <div class="name">{{item.name}}</div>
          <div class="buyCount">已售:{{item.buyCount}}件</div>
          <div class="price">单价:¥{{item.price}}</div>
        </div>
        <div class="btn" @click="addToCart(item)">加入购物车</div>
      </div>
    </div>

    <a href="/car">
      <div class="cart">
        <img src="../assets/images/cart.png" alt="">
        <div class="num">{{total}}</div>
      </div>
    </a>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'home',
  data:function(){
    return {
      goodInCart:[],
      currentIndex:0,
      navList:['价格升序↑','价格降序↓','销量升序↑','销量降序↓'],
      goodList:[]
    }
  },
  computed:{
    total:function() {
      return this.goodInCart.reduce(function(t,i){ return t+i.count },0);
    }
  },
  methods:{
    sort:function(index) {
      this.currentIndex = index;
      if(index==0) {
        this.goodList.sort(function(goodA,goodB){
          return goodA.price - goodB.price;
        });
      }else if(index == 1) {
        this.goodList.sort(function(goodA,goodB){
          return goodB.price - goodA.price;
        });
      }else if(index == 2) {
        this.goodList.sort(function(goodA,goodB){
          return goodA.buyCount - goodB.buyCount;
        });
      }else {
        this.goodList.sort(function(goodA,goodB){
          return goodB.buyCount - goodA.buyCount;
        });
      }
    },
    addToCart:function(good) {
      var goodInCart = localStorage.getItem("goodInCart")? JSON.parse(localStorage.getItem("goodInCart")) : [];

      var findGood = goodInCart.find(function(item){
        return good.id == item.id
      });

      // console.log(findGood);

      if(!findGood) {
        good.count = 1; 
        goodInCart.push(good);
      }else {
        findGood.count++; 
      }

      this.goodInCart = goodInCart;
      // console.log(goodInCart);
    
      localStorage.setItem('goodInCart',JSON.stringify(goodInCart));
    }
  },
  mounted:function() {
    axios.get("https://yantianfeng.com/api/goodList").then((res)=>{
      // console.log(res.data);
      this.goodList = res.data.goodList;
    });
     this.goodInCart = localStorage.getItem("goodInCart")? JSON.parse(localStorage.getItem("goodInCart")) : [];
    
  }
}
</script>

<style>
 .home{
  width:100%;
  height:100%;
  overflow: scroll;
}
.home .header{
  width:100%;
  height:200px;
  background: url('../assets/images/banner-2.png');
  background-size: cover;
  background-position-x:center;
  position: relative;
}
.home .header img{
  width:80px;
  height:80px;
  border-radius: 50%;
  position: absolute;
  bottom:-40px;
  left:50%;
  margin-left: -40px;
}
.home .text{
  margin:40px 0;
  line-height: 40px;
  text-align: center;
}
.home .text .title{
  font-size: 20px;
  font-weight: bold;
}
.home .text .tip{
  color:#666;
  font-size: 14px;
}
.home .nav{
  display: flex;
  justify-content: space-between;
  margin:20px;
  padding:20px 0;
  border-bottom:1px solid #f0f0f0;
}
.home .nav .nav-item.active{
  color:red;
}
.home .list{
  margin:20px;
}
.home .list .good{
  margin:20px 0;
  display: flex;
  position: relative;
}
.home .list .good .pic{
  width:30%;
  margin-right: 15px;
}
.home .list .good .pic img{
  width:100%;
}
.home .list .good .tex{
  line-height: 30px;
  width:70%;
}
.home .list .good .tex .name{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home .list .good .btn{
  position: absolute;
  right:0;
  bottom:0;
  background-color: red;
  color:#fff;
  padding:5px 15px;
  font-size: 14px;
}
.home .list .good .btn:active{
  opacity: 0.6;
}
.home .cart{
  width:60px;
  height:60px;
  border-radius: 50%;
  background-color: lightskyblue;
  position: fixed;
  bottom:80px;
  right:20px;
}
.home .cart img{
  width:30px;
  height:30px;
  margin:15px;
}
.home .num{
  width:18px;
  height:18px;
  border-radius: 50%;
  background: red;
  color:#fff;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  margin:-65px 0 0 42px;
}
</style>
