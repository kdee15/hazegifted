<template>
  <section ref="component" class="o-component-hero-banner" v-bind:style="{'backgroundImage':'url('+component.fields.image.fields.file.url+')'}">
    <div class="container o-block-title h-100">
      <div class="row">
        <h1 class="col a-block-title">{{ component.fields.title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export default {

  props: ['component'],

  computed: {
    content() {

      const url = component.fields.image.fields.file.url;
      const width = component.fields.image.fields.file.details.image.width;
      const height = component.fields.image.fields.file.details.image.height;

      const siteBaseURL = process.env.SITE_BASE_URL;

      const options = {
        renderNode: {
          [INLINES.HYPERLINK]: (node, next) => {
            return `<a href="${node.data.uri}"${
              node.data.uri.startsWith(siteBaseURL) ? "" : ' target="_blank"'
            }>${next(node.content)}</a>`;
          },
          [BLOCKS.PARAGRAPH]: (node, next) => {
            return `<p class="a-body-copy">${next(node.content)}</p>`;
          },
        },
      };
      const rawRichTextField = this.component.fields.content;
      return documentToHtmlString(rawRichTextField, options);
    }
  }

}

</script>

<style lang="scss" scoped>

// BLOCK STYLE ++++++++++++++++++++++++++++++++++++++++++++

.o-component-hero-banner {

  // A.1. GLOBAL STYLE ------------------------------------

  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;

  .o-block-title { height: 100%;
    .row { height: 100%; }
  }

  h1 { color: white; text-shadow: 0 0 5px black; align-self: center; text-align: center; width: 100%; }

  // A.1. END ---------------------------------------------

  // B. MEDIA QUERIES -------------------------------------

  // B.1. GRACEFUL DEGRADATION -------------

  // B.1. END ------------------------------

  // B.2. PROGRESSIVE ENHANCEMENT ----------
  // 768px up
  @media ($sm-up) {
    height: 80vh;
  }

  // 991px up
  @media ($md-up) {}

  // 1200px up
  @media ($lg-up) {}

  // 1440px up
  @media ($xlg-up) {}

  // B.2. END ------------------------------

  // B. END -----------------------------------------------

}

// END: BLOCK STYLE +++++++++++++++++++++++++++++++++++++++

</style>
