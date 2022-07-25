<template>
  <div class="home">
    <!-- banner -start -->


    <div class="banner">
      <div class="banner-content">
        <div class="banner-content-item banner-content-item-left">
          <div class="banner-des-box">
            <h1>CaptainSafu, an open aggregator platform for DeFI Insurance</h1>
            <h3>Get insured, provide protection</h3>
            <div class="banner-button-wrapper">

              <div class="banner-button">
                <a target="_blank" href="#">Testnet in July</a>
              </div>

            </div>
          </div>
        </div>
        <div class="banner-content-item banner-content-item-right">
          <div class="banner-img">
            <img src="../assets/images/banner-bg-2@2x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- banner end -->
    <!-- content start -->
    <div class="contnet">
      <div class="pages-wrapper content-wrapper">
        <div class="content-item">
          <el-card class="box-card">
            <div class="content-item-box">
              <h3>CaptainSafu Vaults</h3>
              <p>Become a coverage provider. Provide capital in a CaptainSafu's vaults and earn X% APY on USD for covering the community.</p>
              <div class="img-box">
                <img src="../assets/images/content-img-01@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
        <div class="content-item">
          <a href="#/insurances">
            <el-card class="box-card">
              <div class="content-item-box">
                <h3>Buy Protection</h3>
                <p>CaptainSafu is an Insurance aggregator platform for whoever wants to purchase a cover. We make the purchase easier between all insurance plateform. </p>
                <div class="img-box">
                  <img src="../assets/images/content-img-02@2x.png" alt="">
                </div>
              </div>
            </el-card>
          </a>
        </div>
        <div class="content-item">
          <el-card class="box-card">
             <div class="content-item-box">
              <h3>Dynamic insurance allocation</h3>
              <p>Captain Safu allows you to dilute your insurance benefits in the event of an almost full pool. In one transaction you can insure your funds through different protocols .</p>
              <div class="img-box">
                <img src="../assets/images/content-img-03@2x.png" alt="">
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <!-- content end -->

    <div class="we-do-wrapper">
      <div class="pages-wrapper we-do-content">
        <h1>CaptainSafu Roadmap</h1>
        <div class="we-do-list-wrapper">
          <ul class="we-do-list">
            <li v-for="(roadmapItem, index) in roadmap" :key="index">
              <div class="title">{{roadmapItem.time}}</div>
              <ul class="we-do-item-list">
                <li v-for="item in roadmapItem.list" :key="item">{{item}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <mechanism/>
    <!-- footer end -->
  </div>
</template>

<script>

 import mechanism from '../components/mechanism'

  export default {
  name: 'Home',
  components:{
    mechanism,
  },
 data() {
   return {
     roadmap: [
       {
         time: '2022Q1',
         list: ['Whitepaper V0.1 release']
       },
       {
         time: '2022Q3',
         list: ['MVP', 'Liquidity Bootstrapping']
       },
       {
         time: '2022Q4',
         list: ['Alpha release: Capital Mining; Cover purchasing; Leveraged Staking; Claim payment']
       },
       {
         time: '2022Q5',
         list: ['Mainnet V1.0 release']
       },
     ]
   }
  }
}
</script>

<style lang="less" scoped>
.home {
  .tips {
    background: #fff;

    &-wrapper {
      width: 1184px;
      margin: 0 auto;
      padding: 20px 0;

      p {
        color: red;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }
  .banner {
    color: rgba(255, 255, 255, 0.6);
    padding: 120px 0;
    background-color: #1B2532;
    display: flex;
    justify-content: center;
    text-align: center;

    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &-item-left {
        width: 60%;

        .banner-des-box {
          text-align: left;
          padding: 0 100px;

          h1 {
            color: #fff;
            font-size: 46px;
            line-height: 1.2;
          }

          h3 {
            color: #fff;
            font-size: 32px;
            line-height: 1.2;
            opacity: 0.4;
            margin-top: 30px;
            font-weight: normal;
          }

          .banner-button-wrapper {
            margin-top: 120px;
            display: flex;

            .banner-button {
              color: #fff;
              cursor: pointer;
              width: 190px;
              height: 52px;
              font-size: 18px;
              line-height: 50px;
              text-align: center;
              border-radius: 5px;
              border: 1px solid #fff;
              margin-right: 24px;

              a {
                color: #fff;
                text-decoration: none;
              }

              &:hover {
                color: #1DBF92;
                border: 1px solid #1DBF92;

                a {
                  color: #1DBF92;
                }
              }
            }
          }
        }
      }
      &-item-right {
        width: 40%;

        .banner-img {
          img {
            width: 100%;
            max-width: 586px;
          }
        }
      }
    }
  }

  .contnet {
    background-color: #F5F6F7;
    padding: 100px 0;
    
        h3 {
          color: #256b94 !important;
          font-weight: 700;
        }
        p {
          color: #075f7a !important;
        } 
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;

    .content-item {
      width: 400px;
      .box-card:hover {
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        cursor: pointer;
      }
      .content-item-box {
        height: 430px;
        padding: 30px 10px 10px;
        position: relative;
        .img-box {
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 0;

          img {
            width: 240px;
          }
        }

        h3 {
          color: #1B2532;
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        p {
          color: #1B2532;
          opacity: 0.4;
          font-size: 14px;
          line-height: 1.5;
        }
      }

    }
  }

  .we-do-wrapper {
    color: #fff;
    padding: 80px 0;
    background-color: #00111b;

    .we-do-content {
      h1, h2 {
        text-align: center;
        margin-bottom: 40px;
      }
      h2 {
        color: #13c7fd;
        margin: 30px 0 40px;
      }

      .we-do-list-wrapper {
        display: flex;
        justify-content: center;
      }
      .we-do-list {
        width: 40%;

        .title {
          color: #13c7fd;
          padding-left: 42px;
        }

        .we-do-item-list {
          padding: 8px 0 28px 60px;
          margin: 10px 0 0 8px;
          border-left: 2px solid #13c7fd;

          >li {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 15px;
            list-style-type: disc;
          }
        }
      }
    }
  }

  .team-wrapper {
    padding: 50px 0;

    .title {
      font-size: 34px;
      text-align: center;
      padding-bottom: 40px;
      font-weight: bold;

    }
    .team-content-list {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 33.33%;
        .list-item {
          padding: 0 10px;

          .content-item-box {
            min-height: 300px;
            padding: 30px 10px 10px;

            h3 {
              font-size: 20px;
              line-height: 1.5;
              margin-bottom: 10px;
            }

            h4 {
              color: #1B2532;
              opacity: 0.6;
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 20px;
            }

            p {
              color: #1B2532;
              opacity: 0.5;
              font-size: 14px;
              line-height: 1.5;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
  }

}
</style>
