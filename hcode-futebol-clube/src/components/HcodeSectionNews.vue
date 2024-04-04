<template>
<section>
    <div class="container">
        <HcodeSectionNewsIndividual
            v-for="notice in news"
            :key="notice.id"
            :img-name="notice.img"
            :img-info="notice.imgInfo"
            :news-title="notice.title"
            :news-date="notice.date"
        >
            <template v-slot:title>
                <h2>{{ notice.title }}</h2>
            </template>
            <p>{{ notice.content | truncate(200)}}</p>
        </HcodeSectionNewsIndividual>
    </div>
</section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
export default {
    components: {
        HcodeSectionNewsIndividual
    },
    data() {
        return {
            news: []
        }
    },
    created() {
        this.news = [
            {
                id: 1,
                title: 'Começaram os treinos para a nova temporada',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique blanditiis dolor eum odit consequuntur provident, odio nostrum facere ducimus exercitationem reprehenderit repellat repellendus omnis temporibus nobis amet dignissimos. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, labore neque! Recusandae aliquam ducimus voluptatibus praesentium veniam, esse dicta aspernatur, est consequatur repudiandae aperiam, repellendus libero. Enim soluta voluptate sint?',
                date: '2024-04-01',
                img: 'news1.jpg',
                imgInfo: 'Noticia 1'
            },
            {
                id: 2,
                title: 'Jogo de quarta termina empatado',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique blanditiis dolor eum odit consequuntur provident, odio nostrum facere ducimus exercitationem reprehenderit repellat repellendus omnis temporibus nobis amet dignissimos. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, labore neque! Recusandae aliquam ducimus voluptatibus praesentium veniam, esse dicta aspernatur, est consequatur repudiandae aperiam, repellendus libero. Enim soluta voluptate sint?',
                date: '2024-04-03',
                img: 'news2.jpg',
                imgInfo: 'Noticia 2'
            },
            {
                id: 3,
                title: 'A inauguração do novo estádio foi um sucesso',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique blanditiis dolor eum odit consequuntur provident, odio nostrum facere ducimus exercitationem reprehenderit repellat repellendus omnis temporibus nobis amet dignissimos. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, labore neque! Recusandae aliquam ducimus voluptatibus praesentium veniam, esse dicta aspernatur, est consequatur repudiandae aperiam, repellendus libero. Enim soluta voluptate sint?',
                date: '2024-04-05',
                img: 'news3.jpg',
                imgInfo: 'Noticia 3'
            }
        ]
    }
}
</script>

<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>