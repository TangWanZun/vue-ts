<template>
  <div class="tab-bar-body">
	  <div class="body  app-scroll-none">
		  <!-- <el-tag closable type="info" v-for="(item,index) in 1" :key="index">我的名字是一个很</el-tag> -->
		  <div class="tag" v-for="(item) in navTabBerList" :key="item.name" :class="{'tag-show':item.name==routeItem.name}" @click="onClickTab(item)">
			  <div class="tag-cir" ></div>
			  <div class="tag-text">{{item.meta.title}}</div>
			  <div class="tag-close" @click.stop="onClickClose(item)" v-if="homePageName!=item.name"><i class="el-icon-close"></i></div>
		  </div>
	  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import $config from '../../../$config';

@Component
export default class TabBar extends Vue {
	//获取全部的tab 列
	get navTabBerList():any[]{
		return this.$store.state.app.navTabBerList
	}
	// 获取当前的路由
	get routeItem():any{
		return this.$route
	}
	//首页页面name
	get homePageName():string{
		return $config.homeName
	}
	/**
	 * 当点击了页签的时候
	 */
	onClickTab(route:any){
		this.$emit('on-click-tab',route);
	}
	/**
	 * 当点击了关闭按钮的时候
	 */
	onClickClose(route:any){
		this.$emit('on-close',route);
	}
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
	padding:0 10px;
	background-color: rgba(0, 0, 0, 0.05);
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15)  inset;
	.tag{
		.app-h5;
		.app-flex-center;
		height: 34px;
		border:1px solid rgba(0, 0, 0, 0.1);
		padding:5px 10px;
		border-radius: 3px;
		background-color: white;
		user-select: none;
		margin-right: 5px;
		// 前面的圆点
		.tag-cir{
			width: 14px;
			height: 14px;
			border:1px solid rgba(0, 0, 0, 0.1);
			border-radius: 100%;
			margin-right: 5px;
		}
		.tag-text{
			margin-right: 5px;
		}
		.tag-close{
			width:16px;
			height: 16px;
			border-radius: 100%;
			.app-flex-center;
			cursor: pointer;
			&:hover{
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}
	// 表示为当前tab 页
	.tag-show{
		.tag-cir{
			background-color: @mainColor;
		}
	}
}
</style>
