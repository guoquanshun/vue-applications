<template>
  <div class="home">
    <h1>this is home page</h1>
    <button @click="showData">打印</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  registerVuex: true,
  methods: {
    showData() {
      console.log(this.$store.state.Home.homeData);
    }
  }
}
</script>
