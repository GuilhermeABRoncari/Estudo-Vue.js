<template>
  <div id="app">
    <HcodeHeader
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />
    <HcodeSection/>
    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader'
import HcodeFooter from './components/HcodeFooter'
import HcodeSection from './components/HcodeSection'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['changeChampionship']),
    changeComponent(value) {
      switch (value) {
        case 'home':
          default:
          this.currentSectionComponent = 'HcodeSectionBanner'
          break
        case 'news':
          this.currentSectionComponent = 'HcodeSectionNews'
          break
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>