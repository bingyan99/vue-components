<template>
  <div>
    <tab-panels
      v-model="nowTab"
      :tab="list"
      tabActiveColor="#3356d9"
      @nowTab="(val) => nowTab = val"
      >
      <tab-panel label="item1">
        <p>买入</p>
        <div>迪萨鲁大师的后果大概是昆德拉过圣诞节啊单身狗大概是肯德基啊是德国大概是看</div>
        <div>迪萨鲁大师的后果大概是昆德拉过圣诞节啊单身狗大概是肯德基啊是德国大概是看</div>
      </tab-panel>
      <tab-panel label="item2">
        <p>卖出</p>
        <div>迪萨鲁大师的后果大概是昆德拉过圣诞节啊单身狗大概是肯德基啊是德国大概是看</div>
        <div>迪萨鲁大师的后果大概是昆德拉过圣诞节啊单身狗大概是肯德基啊是德国大概是看</div>
      </tab-panel>
      <tab-panel label="item3">
        <p>买卖</p>
        <div>迪萨鲁大师的后果大概是昆德拉过圣诞节啊单身狗大概是肯德基啊是德国大概是看</div>
        <div>迪萨鲁大师的后果大概是昆德拉过圣诞节啊单身狗大概是肯德基啊是德国大概是看</div>
      </tab-panel>
    </tab-panels>
  </div>
</template>

<script>
import tabPanels from '../components/tab-panels/tab-panels'
import tabPanel from '../components/tab-panels/tab-panel'
export default {
  data () {
    return {
      list: [{
        label: 'item1',
        value: '买入'
      }, {
        label: 'item2',
        value: '卖出'
      }, {
        label: 'item3',
        value: '买卖'
      }],
      nowTab: 'item1'
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {
    tabPanels,
    tabPanel
  },
  filters: {

  }
}
</script>

<style scoped lang="less">
.tab {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  &_bar {
    display: flex;
    height: 1rem;
    line-height: 1rem;

    p {
      flex: 1;
      text-align: center;
    }
  }
  &_slide {
    height: 3px;
    background: blue;
  }
}
</style>
