<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as notícias do: {{ championship }}</h3>
            </div>
        </div>

        <router-view></router-view>

        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu clube é: {{ clubName }}</h2>
                </div>
                <div class="col-6">
                    <HcodeInput  />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HcodeInput from './HcodeInput'
import { mapGetters } from 'vuex'
// import { mapState } from 'vuex'

export default {
    components: {
        HcodeInput
    },
    props: {
        currentComponent: String,
    },
    //computed: mapState(['championship', 'clubName']),
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            clubName: 'getClubName'
        })
    }
}
</script>

<style scoped>

</style>
