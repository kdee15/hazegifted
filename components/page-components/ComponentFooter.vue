<template>
  <section ref="component" class="o-component-footer">
    <div class="container">
      <div class="row">
        <p>{{ copy1 }} <a class="a-text-link" href="http://www.kdee.co.za" target="_blank">kdee</a></p>
        <p>{{ copy2 }}</p>
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

  data() {
    return {
      copy1: 'Site built by',
      copy2: '© Copyright 2021',
    }
  }
}

</script>

<style lang="scss" scoped>

// BLOCK STYLE ++++++++++++++++++++++++++++++++++++++++++++

.o-component-footer {

  .row { justify-content: center; padding: 50px 0;
    p { display: block; width: 100%; text-align: center; margin: 0 auto 15px; }
    .a-text-link { color: white; font-weight: 600;
      &:hover { color: #CCC; }
    }
  }

  // A.1. GLOBAL STYLE ------------------------------------

  // A.1. END ---------------------------------------------

  // B. MEDIA QUERIES -------------------------------------

  // B.1. GRACEFUL DEGRADATION -------------

  // B.1. END ------------------------------

  // B.2. PROGRESSIVE ENHANCEMENT ----------
  // 768px up
  @media ($sm-up) {}

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
