<template>
<div>
  <div class="tab" v-if="tab && tab.length">
    <div class="tab-bar">
      <div class="tab-bar-item" v-for="item in tab" :key="item.label" @click="tabClick(item.label)">
        <span :id="`tab_${item.label}`" :style="{'color': item.label === value ? tabActiveColor : ''}">{{item.value}}</span>
      </div>
    </div>
    <div class="tab-scroll" ref="tabScroll" :style="{'background': tabActiveColor}"></div>
  </div>
  <div class="tab-panels" ref="panels">
    <div class="tab-panels-group" ref="panelsGroup">
      <slot></slot>
    </div>
  </div>
</div>

</template>
<script>
export default {
  name: 'tab-panels',
  props: {
    value: {
      type: [String, Number]
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    tab: {
      type: Array
    },
    tabActiveColor: {
      type: String,
      default: '#3356d9'
    }
  },
  computed: {
    isActive () {
      return this.$parent.value === this.value
    }
  },
  created () {
    this.panels = []
  },
  mounted () {
    this._move(this.value)
    this.tabClick(this.value)
  },
  methods: {
    tabClick (value) {
      if (!this.tab || !this.tab.length) return
      const curTabWidth = document.getElementById(`tab_${value}`) && (document.getElementById(`tab_${value}`).getBoundingClientRect().width + 10)
      const itemLeft = (window.innerWidth / this.tab.length - curTabWidth) / 2
      const curIndex = this.panels.findIndex(panel => panel.value === value)
      const tabScroll = this.$refs.tabScroll
      this.$nextTick(() => {
        tabScroll.style.transform = `translateX(${window.innerWidth / this.tab.length * curIndex + itemLeft}px)`
        tabScroll.style.width = `${curTabWidth}px`
        setTimeout(() => {
          tabScroll.style.transition = 'all .3s linear'
        }, 100)
      })
      this.$emit('nowTab', value)
    },
    _move (value) {
      const curIndex = this.panels.findIndex(panel => panel.value === value)
      if (curIndex === -1) {
        return
      }
      const panelsGroup = this.$refs.panelsGroup
      const distance = -(curIndex * 100)
      panelsGroup.style.transform = `translateX(${distance}%)`
    },
    addPanel (panel) {
      this.panels.push(panel)
    },
    removePanel (panel) {
      const index = this.panels.indexOf(panel)
      if (index > -1) this.panels.splice(index, 1)
    }
  },
  watch: {
    value (newV) {
      this._move(newV)
      this.tabClick(newV)
    }
  }
}
</script>
<style lang="less" scoped>
  .tab {
    position: relative;
    &-bar {
      display: flex;
      justify-content: space-between;
      margin-bottom: .2rem;

      &-item {
        flex: 1;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        border: 1px solid #e0e0e1;
      }
    }
    &-scroll {
      position: absolute;
      height: .05rem;
      bottom: 0;
    }
  }

  .tab-panels {
    position: relative;
    overflow: hidden;
  }
  .tab-panels-group{
    display: flex;
    transition: all .3s cubic-bezier(.86, 0, .07, 1);
  }
</style>
