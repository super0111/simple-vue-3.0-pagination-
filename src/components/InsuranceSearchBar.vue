<template>
  <div class="insurance-search">
    <el-select v-model="protocolValue" placeholder="Cover Protocol">
      <el-option
        v-for="item in protocolOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input placeholder="Amount" v-model="amount" />
    <el-select v-model="currencyValue" placeholder="Currency">
      <el-option
        v-for="item in currencyOptions"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    <el-input placeholder="Days" class="insurance-search-days" v-model="days" />
    <el-button icon="el-icon-search" style="font-weight: bold"></el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  
  export default {
    name: 'InsuranceSearchBar',
    data() {
      return {
        // options: [{
        //   value: 'Option1',
        //   label: 'Option1'
        // }, {
        //   value: 'Option2',
        //   label: 'Option2'
        // }, {
        //   value: 'Option3',
        //   label: 'Option3'
        // }, {
        //   value: 'Option4',
        //   label: 'Option4'
        // }, {
        //   value: 'Option5',
        //   label: 'Option5'
        // }],
        protocolOptions: [],
        currencyOptions: [ 'USD', 'ETH' ],
        protocolValue: 'lInch',
        currencyValue: 'USD',
        amount: 1000,
        days: 180,
      }
    },
    async mounted () {
      console.log(this.$store.getters.getProtocolList)
      this.protocolOptions = this.$store.getters.getProtocolList.map(item => ({ label: item, value: item}));

      const url = 'https://api.insurace.io/ops/v1/getProductList'
      const body = {
        // code: 'dRsOlTd0UDcMkcCtunc7exPLz3eVnwikjNV4sebGalfq1qWpEzECQg==',
        "chain": 'ETH',
        "amount": '1000',
        "coverCurrency": 'USD',
        "coverDays": '180',
      }
      const options = {
        params: {
          code: 'dRsOlTd0UDcMkcCtunc7exPLz3eVnwikjNV4sebGalfq1qWpEzECQg==',
        }
      }
      console.log(this.$http)
      await axios.post(url, body, options)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))

    }
  }
</script>
<style lang="less" scoped>
  .insurance {
    &-search {
      display: flex;
      gap: 24px;
      padding: 12px 0px;

      input {
        width: auto;
      }
      .el-input {
        width: auto !important;
      }
      &-days {
        max-width: 120px;
      }
    }
  }
</style>