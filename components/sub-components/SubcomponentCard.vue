<template>
  <div ref="card" class="o-card">
    <a class="a-card-link" v-bind:href="card.fields.link" target="_blank">
      <figure class="m-card-image">
        <img
          :src="card.fields.cardImage.fields.file.url"
          :alt="card.fields.title"
          class="a-image"
          :width="card.fields.cardImage.fields.file.details.image.width"
          :height="card.fields.cardImage.fields.file.details.image.height" />
      </figure>
      <div class="m-card-body">
        <h4 class="a-card-title">{{ card.fields.title }}</h4>
      </div>
      <div>

      </div>
    </a>
  </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  props: ["card"],

  computed: {
    content() {
      const rawRichTextField = this.card.fields.content;
      return documentToHtmlString(rawRichTextField);

      const imgUrl = card.fields.cardImage.fields.file.url;
      const width = card.fields.cardImage.fields.file.details.image.width;
      const height = card.fields.cardImage.fields.file.details.image.height;

    }
  }

};
</script>

<style lang="scss" scoped>

// BLOCK STYLE ++++++++++++++++++++++++++++++++++++++++++++

.o-card {

  // A.1. GLOBAL STYLE ------------------------------------

  .m-card-image { margin: 0; padding: 0;
    img { max-width: 100%; height: auto; }
  }

  // A.1. END ---------------------------------------------

  // B. MEDIA QUERIES -------------------------------------

  // B.1. GRACEFUL DEGRADATION -------------

  // B.1. END ------------------------------

  // B.2. PROGRESSIVE ENHANCEMENT ----------
  // 768px up
  @media ($sm-up) {  }

  // 991px up
  @media ($md-up) {  }

  // 1200px up
  @media ($lg-up) {  }

  // 1440px up
  @media ($xlg-up) {  }

  // B.2. END ------------------------------

  // B. END -----------------------------------------------

}

// END: BLOCK STYLE +++++++++++++++++++++++++++++++++++++++

</style>
