<template>
  <div class="insurances-container">
    <div class="insurances-container-header">
      <h3>Buy Cover</h3>
      <p>Easily find, compare and select the right cover. <a href="#">Learn more <i class="el-icon-right"></i> </a></p>
    </div>
    <div class="insurances-body">
      <div class="insurances-body-content">
        <InsuranceSearchBar />
        <div v-show="loading">Loading...</div>
        <div v-show="!loading" class="insurances-body-content-insurance-list">
          <InsuranceItem />
          <InsuranceItem />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InsuranceSearchBar from '../components/InsuranceSearchBar.vue'
  import InsuranceItem from '../components/InsuranceItem.vue'
  // import axios from 'axios'
  export default {
    name: 'Insurances',
    components: {
      InsuranceSearchBar,
      InsuranceItem,
    },
    async mounted() {
      // setTimeout(() => this.loading = false, 1000)
      this.loading = false;
      console.log(this.$store.getters.getIndex)
      // await this.$store.dispatch('increment');
      this.$store.dispatch('increment');
      console.log(this.$store.getters.getIndex)

      
      // await this.$http.getCoverList(data)
      // .then (response => {
      //   console.log(response)
      // })
      // .catch(error => {
      //   console.log(error)
      // })
    },
    data() {
      return {
        loading: true,
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .insurances {
    &-container {
      // display: flex;
      padding: 24px 96px;
      p {
        font-size: 14px;
        margin-top: 18px;
      }
    }
    &-body {
      padding: 12px 0px;

      &-content {
        padding: 12px 0px;
      }
    }
  }
</style>