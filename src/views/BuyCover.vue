<template>
  <div class="cover-container">
    <div class="title-field">
      <h3>Buy Cover</h3>
    </div>
    <div class="cover-body">
      <!-- <el-container> -->
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <div class="cover-body-item">
                <div class="header">
                  <p>cover type</p>
                </div>
                <div class="content">
                  <h5>protocol</h5>
                </div>
              </div>
              <div class="cover-body-item">
                <div class="header">
                  <p>cover partner</p>
                </div>
                <div class="content">
                  <h5>
                    nexus 
                    <img src="@/assets/images/nexus_mutual.3dcaf968.png" width="15px" height="15px" />
                    mutual
                  </h5>
                </div>
              </div>
              <div class="cover-body-item">
                <div class="header">
                  <p>from</p>
                </div>
                <div class="content">
                  <h5>sunday jul 24, 2022</h5>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <div class="cover-body-item">
                <div class="header">
                  <p>cover protocol</p>
                </div>
                <div class="content">
                  <h5>ETH 2.0</h5>
                </div>
              </div>
              <div class="cover-body-item">
                <div class="header">
                  <p>cover on chain</p>
                </div>
                <div class="content">
                  <img src="@/assets/images/net_logo_eth.8325c259.svg" width="25px" height="25px" />
                  <h5>ethereum</h5>
                </div>
              </div>
              <div class="cover-body-item">
                <div class="header">
                  <p>until</p>
                </div>
                <div class="content">
                  <h5>monday aug 21, 2022</h5>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <p class="text-uppercase py-12">cover amount</p>
          <el-input />
        </el-row>
        <el-row>
          <el-button-group class="cover-currency-button-group">
            <el-button>eth</el-button>
            <el-button>dai</el-button>
          </el-button-group>
        </el-row>
        <el-row>
          <el-button type="primary">buy</el-button>
          <el-button><a href="#/insurances" class="text-default">cancel</a></el-button>
        </el-row>
      <!-- </el-container> -->
    </div>
  </div>
</template>

<script>
  // import InsuranceSearchBar from '../components/InsuranceSearchBar.vue'
  // import InsuranceItem from '../components/InsuranceItem.vue'
  export default {
    name: 'BuyCover',
    components: {
      // InsuranceSearchBar,
      // InsuranceItem,
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .cover {
    &-container {
      // display: flex;
      padding: 24px 96px;
      .title-field {
        width: 60%;
        margin: auto;
        margin-bottom: 15px;
        h3 {
          color: #3165af;
        }
      }
    }
    &-body {
      padding: 12px 30px;
      background: #FFFFFF;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      width: 60%;
      margin: auto;
      p {
        font-size: 14px;
      }
      &-item {
        padding: 12px 0px;

        .header {
          padding: 8px 0px;
          p {
            color:  #a1a1a5;
            text-transform: uppercase;
          }
        }
        .content {
          padding: 8px 0px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img {
            margin-right: 10px;
          }
          h5 {
            text-transform: capitalize;
            display: flex;
            align-items: center;
            img {
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
  .el-row {
    margin: 12px 0px !important;
  }
</style>