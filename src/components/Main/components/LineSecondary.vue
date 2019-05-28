<template>
  <div class="line-secondary-body">
    <div class="line-tree-header">
      <div
        class="line-tree-header-item line-tree-header-buttom"
        v-show="!lineMainShow"
        @click="onBack"
      >
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="line-tree-header-item line-tree-header-title">{{routerLine[mainTreeIndex].text}}</div>
      <div class="line-tree-header-item line-tree-header-buttom">
        <i class="el-icon-search"></i>
      </div>
    </div>
    <!-- 主要内容 -->
    <div class="menu">
      <div
        class="item"
        v-for="(item) in routerLine[mainTreeIndex].list"
        :key="item.id"
        :class="{'item-select':secondaryTreeId==item.id}"
		@click="onClickItem(item)"
      >
        <i class="el-icon-s-opportunity"></i>
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import {find} from "@/library/util"

@Component
export default class LineSecondary extends Vue {
  // 菜单列表
  @Prop({ type: Array, default: [] }) readonly routerLine!: any[];
  //是否已经收起了左侧的主树列表
  @Prop({ type: Boolean }) readonly lineMainShow!: boolean;
  //当前主树上的选择索引
  @Prop({ type: Number }) readonly mainTreeIndex!: number;
  //当前副级id
  // secondaryTreeId:string|undefined = 'integralMallHome';
  get secondaryTreeId():string|undefined{
    return this.$route.name
  }
//   @Watch("mainTreeIndex", { immediate: true })
//   dataChange() {
//     let routerName: string = this.routerLine[this.mainTreeIndex].list[
//       this.secondaryTreeIndex
//     ].id;
//     this.$router.replace({
//       name: routerName
//     });
//   }

//   @Watch("secondaryTreeId", { immediate: false })
//   dataChange2() {
// 	let routerName:string = this.routerLine[this.mainTreeIndex];
//     this.$router.replace({
//       name: routerName
//     });
//   }

  created() {
  }
  /**
   * 点击后退按钮的时候
   */
  onBack() {
    this.$emit("on-back");
  }

  /**
   * 点击item
   */
  onClickItem(item:any){
	// this.secondaryTreeId = item.id;
	// let list:any[] = this.routerLine[this.mainTreeIndex].list;
  // find(list,'id',item.id);
  this.$emit("on-click-item",item)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.line-secondary-body {
  .line-tree-header {
    height: 40px;
    font-size: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .line-tree-header-item {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
    }
    // 标题
    .line-tree-header-title {
      flex-grow: 1;
    }
    // 按钮
    .line-tree-header-buttom {
      transition: 0.3s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  //   主要内容
  .menu {
    .item {
      padding: 8px 10px;
      .app-h4;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    // 被选择的 item
    .item-select {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
