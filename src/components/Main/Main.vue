<template>
  <div class="main">
    <div class="main-header"></div>
    <div class="main-body">
      <div class="line line-main" :class="{'line-main-show':lineMainShow}">
        <!-- 主树菜单 -->
        <line-main
          :router-line="routerLine"
          :line-main-show="lineMainShow"
          :main-tree-index="mainTreeIndex"
          @on-click-item="onClickMainItem"
        ></line-main>
      </div>
      <div class="line line-tree">
        <!-- 次级树菜单 -->
        <line-secondary
          :router-line="routerLine"
          :line-main-show="lineMainShow"
          :main-tree-index="mainTreeIndex"
          @on-back="lineMainShow = true"
          @on-click-item="onClickSecondaryItem"
        ></line-secondary>
      </div>
      <div class="line line-page">
        <div class="tab-bar">
          <!-- 顶部标签页 -->
          <tab-bar @on-click-tab="onClickTab" @on-close="onCloseTab"></tab-bar>
        </div>
        <div class="line-page-body">
          <keep-alive :include="cacheList">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
//引入顶部栏
import TabBar from "./components/TabBar.vue";
//左侧主要内容栏
import LineMain from "./components/LineMain.vue";
//左侧次要内容栏
import LineSecondary from "./components/LineSecondary.vue";
import { find } from "../../library/util";
import $config from "../../$config";

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
  // 获取当前的路由
  get newRoute(): any {
    return this.$route;
  }

  //缓存的页面名称列表
  get cacheList(): string[] {
    let tabList: any[] = this.$store.state.app.navTabBerList;
    return tabList.map((item, index) => {
      return (item = item.name);
    });
  }

  //是否已经开启了主树
  lineMainShow: boolean = false;
  //当前主树上的选择索引
  mainTreeIndex: number = 0;

  /**
   * 这里需要监控整个路由
   */
  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(newRoute: any) {
    let tabList: any[] = this.$store.state.app.navTabBerList;
    let index = find(tabList, "name", newRoute.name);
    if (index < 0) {
      //表示不存在这个tag标签
      //需要添加到这个tag标签中
      tabList.push(newRoute);
      this.$store.commit("app/setNavTabBerList", tabList);
    }
  }
  /**
   * 当前页面启动
   */
  created(): void {
    this.$store.commit("app/setNavTabBerList", [
      {
        name: $config.homeName,
        meta: {
          title: "首页"
        }
      }
    ]);
  }
  /**
   * 点击左侧主要树按钮
   */
  onClickMainItem(index: number) {
    this.mainTreeIndex = index;
    //关闭主树
    this.lineMainShow = false;
  }
  /**
   * 点击左侧 次要树  item 的时候
   */
  onClickSecondaryItem(item: any) {
    this.$router.push({
      name: item.id
    });
  }
  /**
   * 点击顶部页签
   */
  onClickTab(route: any) {
    // console.log(route)
    this.$router.push({
      name: route.name
    });
  }
  /**
   * 点击关闭顶部页签
   */
  onCloseTab(route: any) {
    let tabList: any[] = this.$store.state.app.navTabBerList;
    let index = find(tabList, "name", route.name);
    //当前页签必须是存在状态的时候
    if (index >= 0) {
      if (route.name == this.newRoute.name) {
        //表示关闭的页签正好为当前路由的页签的时候
        //展示当前关闭页签的前一个页签
        this.$router.push({
          name: tabList[index - 1 >= 0 ? index - 1 : 0].name
        });
      }
      //删除当前页签
      tabList.splice(index, 1);
      this.$store.commit("app/setNavTabBerList", tabList);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@headerHeight: 1px;
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
