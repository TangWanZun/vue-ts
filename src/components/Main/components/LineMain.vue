<template>
  <div class="line-main-body">
    <div class="menu">
      <div
        class="item"
        v-for="(item,index) in routerLine"
        :key="item.id"
        :class="{'item-select':mainTreeIndex==index}"
		@click="onClickItem(index)"
      >{{item.text}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LineMain extends Vue {
  // 菜单列表
  @Prop({ type: Array, default: [] }) readonly routerLine!: object[];
  //是否已经收起了左侧的主树列表
  @Prop({ type: Boolean }) readonly lineMainShow!: boolean;
  //当前主树上的选择索引
  @Prop({ type: Number }) readonly mainTreeIndex!: number;
  /**
   * 点击item的时候
   */
  onClickItem(index:number){
	  this.$emit("on-click-item",index)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.line-main-body {
  width: 200px;
  overflow: hidden;
  .menu {
    .item {
      padding: 13px 15px;
      user-select: none;
      transition: 0.3s;
      text-align: center;
      .app-h4;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05) ;
      }
	}
	// 被选择的 item
	.item-select{
		background-color: rgba(0, 0, 0, 0.1) ;
	}
  }
}
</style>
