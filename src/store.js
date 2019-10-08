import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    goodInCart:[]
  },
  mutations: {
    addToCart(state,good) {
      var findGood = state.goodInCart.find(function(item){
        return good.id == item.id
      });

      // console.log(findGood);

      if(!findGood) {
        // good.count = 1; 
        Vue.set(good, 'count', 1);
        state.goodInCart.push(good);
      }else {
        if(findGood.count < 5) findGood.count++;
        findGood.count++; 
      }
    },
    sub:function(state,id) {
      var findGood = state.goodInCart.find(function(good) {
        return good.id == id;
      })
      if(findGood) {
        if(findGood.count > 1) findGood.count--;
      }
       localStorage.setItem('goodInCart',JSON.stringify(this.goodInCart));
    },
    add:function(state,id) {
      var findGood = state.goodInCart.find(function(good) {
        return good.id == id;
      })
      if(findGood) {
        if(findGood.count < 5) findGood.count++;
      }
    }
  },
  actions: {

  }
})
