<template>
  <div class="insurance-detail">
    <div class="insurance-detail-header">
      <h3>insurance detail</h3>
    </div>
    <div class="insurance-detail-body">
      <el-row>
        <el-col :span="12">
          <InsuranceDetailItem
            title="Cover type: Protocol, Hacks & Failures"
            content="In case the user has financial loss due to failure of the protocol caused by code, governance and oracle failures."
          />
          <InsuranceDetailItem
            title="Exclusions: "
            content="Phishing & malware at individual customer, rug pulls, secret key theft of individual customers."
          />
          <InsuranceDetailItem
            title="Inclusions: "
            content="Code Failure & hacks, Economic & Governance attacks, oracle failures."
          />
          <InsuranceDetailItem
            title="Payment: "
            content=" Single upfront payment"
          />
          <InsuranceDetailItem
            title=" wNXM arbitrage discount: "
            content="When buying a cover from Nexus Mutual an arbitrage opportunity is used by buying wNXM at market price to buy the cover leading to an "
          />
          <InsuranceDetailItem
            title="Available Currencies: "
            content="DAI, ETH"
          />
          <InsuranceDetailItem
            title="Covered chains: "
            content=' In case the hack happens on \"covered chain\" the claim will be paid out in accordance to the policy. It does not matter on which chain the cover is purchased'
          />
          <InsuranceDetailItem
            title="Available cover period: "
            content="30-365 days, specify per day."
          />
        </el-col>
        <el-col :span="12">
          <InsuranceDetailItem
            title="Claim definition: "
            content="100% of the covered assets will be returned in case it is proven there is a material loss of funds for the holder or the system."
          />
          <InsuranceDetailItem
            title="Requirements: "
            content="  Cryptographic evidence that links impacted account to the claimer"
          >
            <p>Loss of funds needs to be material</p>
            <p>Submit claim within 35 days of cover period ending</p>
          </InsuranceDetailItem>
          <InsuranceDetailItem
            title="ETH 2.0"
            content=''
          >
            <p>Remaining capacity: 5,314,798 DAI</p>
            <p>Active cover amount: 0 DAI</p>
            <p>Active cover amount: 149 ETH</p>
          </InsuranceDetailItem>
          <InsuranceDetailItem
            title="Nexus Mutual platform data"
            content="Active cover amount: 50562 ETH"
          >
            <p>Active cover amount: 50562 ETH</p>
            <p>Covers sold: 7653 </p>
          </InsuranceDetailItem>
          <InsuranceDetailItem
            title="Cost"
            content=""
          >
            <div class="d-flex justify-content-between">
              <p>Covered Amount: </p>
              <span>100 DAI</span>
            </div>
            <div class="d-flex justify-content-between">
              <p>Annualized Price: </p>
              <span>0.90 %</span>
            </div>
            <div class="d-flex justify-content-between">
              <p>Cover for: </p>
              <span>180 days</span>
            </div>
            <div class="d-flex justify-content-between">
              <p>Until: </p>
              <span>Jan 20th</span>
            </div>
            <div class="d-flex justify-content-between">
              <p>Price: </p>
              <span> $0.45 </span>
            </div>
            <div class="d-flex justify-content-between">
              <p>Gas Price: </p>
              <span> ~0.0060 ETH  ~ DAI </span>
            </div>
            <div class="d-flex justify-content-between">
              <p> Inclusive Price: </p>
              <span>DAI</span>
            </div>
          </InsuranceDetailItem>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button class="back-btn"><a class="back-text" href="#/insurances">back</a></el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import InsuranceDetailItem from '../components/InsuranceDetailItem.vue'
export default {
  name: 'InsuranceDetail',
  components: {
    InsuranceDetailItem,
  }
}
</script>
<style lang="less">
.insurance-detail {
  padding: 24px 96px;
  &-header {
    * {
      text-transform: capitalize;
    }
  }
  .back-text {
    color: rgb(4, 22, 46);
  }
  .back-btn:hover {
    .back-text {
      color: white;
    }
    color: white;
    background-color: rgb(6, 65, 113);
  }
}
</style>