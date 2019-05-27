<template>
  <div class="hello">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <div>{{msg}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  input:string="Hello World"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
