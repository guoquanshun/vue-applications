<template>
  <div class="home">
    <h1>this is home page</h1>
    <button @click="showData">打印</button><br>
    <input type="text" v-model.lazy='price' v-money='money'>
    <span>{{price}}</span><br>
    <div v-show="show" v-click-outside='onClickOutside'>
      hide me when click outside
    </div>
    <br>
    <div v-clampy="3">{{content}}</div>
  </div>
</template>

<script>
import { VMoney } from 'v-money';
import clampy from '@clampy-js/vue-clampy'
import Vue from 'vue';

Vue.use(clampy);

export default {
  name: 'Home',
  registerVuex: true,
  directives: {
    clampy,
    money: VMoney,
  },
  data: () => {
    return {
        price: 12300000.45,
        money: {
          decimal: '.',
          thousands: ',',
          prefix: '￥',
          // suffix: ' #',
          precision: 2,
          masked: false /* doesn't work with directive */
        },
        show: true,
        content: 'Long text to clamp hereLong text to clamp hereLong text to clamp hereLong text to clamp hereLong text to clamp here'
    }
  },
  methods: {
    showData() {
      console.log(this.$store.state.Home.homeData);
    },
    onClickOutside() {
      this.show = false
    }
  },
  mounted() {
    console.log('this is ', this.$options.directives.clampy);
  }
}
</script>
