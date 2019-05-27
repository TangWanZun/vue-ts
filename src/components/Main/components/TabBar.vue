<template>
  <div class="tab-bar-body">
	  <div class="body  app-scroll-none">
		  <!-- <el-tag closable type="info" v-for="(item,index) in 1" :key="index">我的名字是一个很</el-tag> -->
		  <div class="tag">
			  我的名字是一个很
		  </div>
	  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TabBar extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-bar-body{
	width:100%;
	height: 100%;
}
.body{
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	overflow: auto;
	padding:0 15px;
	.tag{
		.app-h5;
		border:1px solid rgba(0, 0, 0, 0.1);
		padding:5px 10px;
		border-radius: 3px;
	}
}
</style>
