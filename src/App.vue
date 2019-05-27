<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  created() {
    //应用启动获取数据
    //获取后台传递的菜单权限
    this.$store.dispatch("app/getRouterList");
  }
}
</script>

<style lang="less">
</style>
