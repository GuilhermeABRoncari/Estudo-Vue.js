<template>
    <section class="section-news">
        <div class="container">
            <div class="row div-news">
                <div class="col-6">
                    <img :src="require(`../assets/${notice.img}`)" :alt="notice.imgInfo" />
                </div>
                <div class="col-6">
                    <h2>{{ notice.title }}</h2>
                    <p>{{ notice.content }}</p>
                        <span>{{ formatDate(notice.date) }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Utils from './../mixins/UtilsMixin'

export default {
    computed: {
        notice() {
            return this.$store.getters.getNewsById(this.$route.params.idnotice)
        }
    },
    mixins: [Utils],
    beforeRouteEnter: (to, from, next) => {
        let params = to.params
        if (parseInt(params.idnotice) > 0) {
            next()
        } else {
            next('/')
        }
    }
}
</script>

<style scoped>
    h2 {
        cursor: auto;
        color: #000;
    }
</style>
