<template>
  <div class="tab-panel">
    <slot>
    </slot>
  </div>
</template>
<script>

export default {
  name: 'tab-panel',
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      default () {
        return this.label
      }
    }
  },
  mounted () {
    this.$parent.addPanel(this)
  },
  destroyed () {
    this.$parent.removePanel(this)
  }
}
</script>
<style lang="less" scoped>
  .tab-panel {
    width: 100%;
    flex: 1 0 auto;
  }
</style>
