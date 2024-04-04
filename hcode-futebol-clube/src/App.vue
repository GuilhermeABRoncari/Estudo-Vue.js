<template>
  <div id="app">
    <HcodeHeader
      @select-championship="changeChampionship"
      @change-component="changeComponent"
    />
    <HcodeSection
      :championship="championship"
      :current-component="currentSectionComponent"
    />
    <HcodeFooter />
  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader'
import HcodeFooter from './components/HcodeFooter'
import HcodeSection from './components/HcodeSection'
export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection
  },
  data() {
    return {
      championship: 'Campeonato Brasileiro',
      currentSectionComponent: 'HcodeSectionBanner'
    }
  },
  methods: {
    changeChampionship(value) {
      this.championship = value
    },
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