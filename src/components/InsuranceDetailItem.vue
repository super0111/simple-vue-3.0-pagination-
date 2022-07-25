<template>
  <div class="detail-item">
    <div class="detail-item-header">
      <p class="detail-item-title">{{title}}</p>
    </div>
    <div class="detail-item-content">
      <p class="detail-item-text">{{content}}</p>
      <slot />
    </div>
  </div>
</template>
<script>

export default {
  name: 'InsuranceDetailItem',
  props: {
    title: String,
    content: [String, Array],
  },
  mounted() {
    console.log(typeof this.content, this.content);
  }
}
</script>
<style lang="less" scoped>
  .detail-item {
    .detail-item-header {
      margin-top: 20px;
      .detail-item-title {
        font-size: 16px;
        font-weight: 700;
        color: rgb(1, 7, 7);
        margin-bottom: 5px;
        text-decoration: underline dotted;
        text-decoration-color: rgb(27, 81, 106);
        text-decoration-thickness: 0.5px;
        text-underline-offset: 3px;
      }
    }
    .detail-item-text {
      font-size: 15px;
      font-weight: 600;
      color: rgb(48, 56, 56);
    }
  }
</style>