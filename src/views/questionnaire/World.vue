<template>
  <div class="home">
    <div>
      <el-card>
        <div class="body">
          <div class="body-item  body-item-left">
            <div class="title">海报生成预览</div>
            <div class="page-box">
              <div class="page-img">
                <img :src="posterImage" alt srcset>
              </div>
              <div class="page-con">
                <div class="page-left">
                  <div class="page-headimg">
                    <img src="@/assets/tx.png" alt>
                  </div>
                  <div class="page-name">微信名称</div>
                </div>
                <div class="page-right">
                  <div class="page-qr">
                    <img src="@/assets/qr.jpg" alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="body-item">
            <div class="title">海报设置</div>
              <upload-img></upload-img>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UploadImg from "@/components/UploadImg/index"

@Component({
  components: {
    "upload-img":UploadImg
  }
})
export default class QuestionnaireWorld extends Vue {
  //当前汽车的图片
  posterImage: string = "https://vip.sap-unis.com/wxpc//wxapp/img/bjxdysld.jpg";
}
</script>

<style lang="less" scoped>
// 演示图片效果
.page-box {
  width: 200px;
  height: 300px;
  border-radius: 2px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .page-img {
    width: 100%;
    height: 175px;
    overflow: hidden;
    position: relative;
    > img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .page-con {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    .page-left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 50%;
      .page-headimg {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: 10px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .page-name {
        font-size: 15px;
        text-align: center;
      }
    }
    .page-right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .page-qr {
        width: 88px;
        height: 88px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.body {
  display: flex;
  .body-item {
    .title {
      .app-h3;
      margin-bottom: 15px;
    }
  }
  .body-item-left{
    margin-right: 20px;
  }
}
</style>
