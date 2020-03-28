<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showData">打印</button>
  </div>
</template>
<script>
  export default {
    name: 'About',
    registerVuex: true,
    methods: {
      showData() {
        console.log(this.$store.state.About.loginData);
      }
    }
  }
</script>