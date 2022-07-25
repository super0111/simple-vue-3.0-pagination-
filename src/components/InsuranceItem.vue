<template>
  <el-card class="box-card">
    <div class="insurance-item">
      <div class="item insurance-item-field">
        <div class="insurance-item-field-header">
          <p>Partner</p>
          <i class="el-icon-info"></i>
        </div>
        <div class="insurance-item-field-content">
          <img src="@/assets/images/nexus_mutual.3dcaf968.png" width="20px" height="20px" />
          <h5>Nexus</h5>
        </div>
      </div>
      <div class="item insurance-item-field">
        <div class="insurance-item-field-header">
          <p>Network</p>
          <i class="el-icon-info"></i>
        </div>
        <div class="insurance-item-field-content">
          <img src="@/assets/images/net_logo_eth.8325c259.svg" width="25px" height="25px" />
          <h5>Ethereum</h5>
        </div>
      </div>
      <div class="item insurance-item-field">
        <div class="insurance-item-field-header">
          <p>Capacity</p>
          <i class="el-icon-info"></i>
        </div>
        <div class="insurance-item-field-content">
          <h5>5.4M USD</h5>
        </div>
      </div>
      <div class="item insurance-item-field">
        <div class="insurance-item-field-header">
          <p>Annualized Price</p>
          <i class="el-icon-info"></i>
        </div>
        <div class="insurance-item-field-content">
          <div class="flex-column">
            <h5>0.92%</h5>
            <p class="insurance-text-disabled">$0.45</p>
          </div>
        </div>
      </div>
      <div class="item insurance-item-field">
        <div class="insurance-item-field-button-group">
          <el-button><a href="#/insurance-detail" class="text-default">detail</a></el-button>
          <el-button type="primary"><a href="#/insurance-buy" class="text-primary">select</a></el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
  export default {
    name: 'InsuranceItem',

  }
</script>
<style lang="less" scoped>
.box-card {
  margin-left: 0px;
  margin-right: 0px;
}
.insurance-item-field-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
p {
  margin-right: 6px;
}
h5 {
  margin-left: 5px;
}
i {
  color: rgb(89, 92, 99);
  font-size: 18px;
}
.insurance-item-field-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .insurance-text-disabled {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(95, 96, 98);
    margin-top: 5px;
  }
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.insurance-item {
  padding: 24px 0px;

  display: flex;
  justify-content: space-between;

  &-field {
    &-header {
      padding: 12px;
      
      p {
        font-size: 16px;
      }
    }
    &-content {
      padding: 12px;
    }
    &-button-group {
      padding-top: 56px;
    }
  }
}
.el-button {
  text-transform: uppercase;
}
</style>