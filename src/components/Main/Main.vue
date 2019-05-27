<template>
  <div class="main">
    <div class="main-header"></div>
    <div class="main-body">
      <div class="line line-main" :class="{'line-main-show':lineMainShow}">
        <line-main
          :router-line="routerLine"
          :line-main-show="lineMainShow"
          :main-tree-index="mainTreeIndex"
          @on-click-item="onClickMainItem"
        ></line-main>
      </div>
      <div class="line line-tree">
        <line-secondary
          :router-line="routerLine"
          :line-main-show="lineMainShow"
          :main-tree-index="mainTreeIndex"
					@on-back="lineMainShow = true"
        ></line-secondary>
      </div>
      <div class="line line-page">
        <div class="tab-bar">
          <tab-bar></tab-bar>
        </div>
        <div class="line-page-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//引入顶部栏
import TabBar from "./components/TabBar.vue";
//左侧主要内容栏
import LineMain from "./components/LineMain.vue";
//左侧次要内容栏
import LineSecondary from "./components/LineSecondary.vue";

@Component({
  components: {
    "tab-bar": TabBar,
    "line-main": LineMain,
    "line-secondary": LineSecondary
  }
})
export default class Main extends Vue {
  //获取菜单列表
  get routerLine(): object {
    let routerList = this.$store.state.app.routerList;
    if (routerList) {
      return routerList;
    } else {
      return [];
    }
  }
  //是否已经开启了主树
  lineMainShow: boolean = false;
  //当前主树上的选择索引
  mainTreeIndex: number = 0;
  /**
   * 当前页面启动
   */
  created(): void {}
  /**
   * 点击左侧主要树按钮
   */
  onClickMainItem(index: number) {
    this.mainTreeIndex = index;
    //关闭主树
    this.lineMainShow = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@headerHeight: 60px;
// 头部信息
.main-header {
  height: @headerHeight;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.1);
  position: relative;
}
.main-body {
  height: ~"calc( 100vh - @{headerHeight} )";
  width: 100vw;
  display: flex;
  align-items: stretch;
  .line {
    // border: 1px solid;
    height: 100%;
    background-color: white;
  }
  // 用于存放最大类的
  .line-main {
    width: 25px;
    flex-shrink: 0;
    transition: width 0.3s;
  }
  .line-main-show {
    width: 200px;
  }
  // 用于存放次级类树
  .line-tree {
    width: 250px;
    flex-shrink: 0;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  .line-page {
    width: 0;
    flex-grow: 1;
    box-shadow: 0px 8px 8px 2px rgba(0, 0, 0, 0.1);
    // 表示的是标题栏
    .tab-bar {
      height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      width: 100%;
      //   background-color: red;
    }
    .line-page-body {
      padding: 10px;
    }
  }
}
</style>
