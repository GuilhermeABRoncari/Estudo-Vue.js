<template>
<section>
    <div class="container">
        <HcodeSectionNewsIndividual
            img-name="news1.jpg"
            img-info="Noticia 1"
            news-title="Começaram os treinos para a nova temporada"
            news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique blanditiis dolor eum odit consequuntur provident, odio nostrum facere ducimus exercitationem reprehenderit repellat repellendus omnis temporibus nobis amet dignissimos. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, labore neque! Recusandae aliquam ducimus voluptatibus praesentium veniam, esse dicta aspernatur, est consequatur repudiandae aperiam, repellendus libero. Enim soluta voluptate sint?"
            news-date="Postado em 01/04/2024"
        />
        <HcodeSectionNewsIndividual
            img-name="news2.jpg"
            img-info="Noticia 2"
            news-title="Jogo de quarta termina empatado"
            news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique blanditiis dolor eum odit consequuntur provident, odio nostrum facere ducimus exercitationem reprehenderit repellat repellendus omnis temporibus nobis amet dignissimos. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, labore neque! Recusandae aliquam ducimus voluptatibus praesentium veniam, esse dicta aspernatur, est consequatur repudiandae aperiam, repellendus libero. Enim soluta voluptate sint?"
            news-date="Postado em 03/04/2024"
        />
        <HcodeSectionNewsIndividual
            img-name="news3.jpg"
            img-info="Noticia 3"
            news-title="A inauguração do novo estádio foi um sucesso"
            news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique blanditiis dolor eum odit consequuntur provident, odio nostrum facere ducimus exercitationem reprehenderit repellat repellendus omnis temporibus nobis amet dignissimos. Dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, labore neque! Recusandae aliquam ducimus voluptatibus praesentium veniam, esse dicta aspernatur, est consequatur repudiandae aperiam, repellendus libero. Enim soluta voluptate sint?"
            news-date="Postado em 05/04/2024"
        />
    </div>
</section>
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual'
export default {
    components: {
        HcodeSectionNewsIndividual
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