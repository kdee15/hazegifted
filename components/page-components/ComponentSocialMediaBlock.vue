<template>
  <section ref="component" class="o-component-social-media">
    <div class="container">
      <div class="row">
        <h2>{{ component.fields.title }}</h2>
      </div>
      <div v-if="component.fields.cards.length > 0" class="row no-gutters o-profile-list">
          <div
            class="o-item-profile"
            v-for="card in component.fields.cards"
            :key="card.sys.id"
          >
            <SubcomponentCard :card="card"></SubcomponentCard>
          </div>
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

}

</script>

<style lang="scss">

.o-component-social-media {

  h2 { color: black; align-self: center; text-align: center; width: 100%; margin-bottom: 30px; }

  // A.2. PROFILE LIST ------------------------------------
  .o-profile-list { display: flex; flex-wrap: wrap; justify-content: center;
    .o-item-profile { flex: 1 1 50%;
      .a-card-link { display: block;
        img { filter: grayscale(1); opacity: 0.4; transition: 0.3s; margin: 0 auto; display: block; }
        &:hover {
          img { filter: grayscale(0); opacity: 1; transition: 0.3s; }
        }
      }
      .m-card-image { padding: 25px;
      }
      .m-card-body { display: none; }
    }
  }
  // A.2. END ---------------------------------------------

  // B. MEDIA QUERIES -------------------------------------

  // B.1. GRACEFUL DEGRADATION -------------


  // B.1. END ------------------------------

  // B.2. PROGRESSIVE ENHANCEMENT ----------
  // 768px up
  @media ($sm-up) {}

  // 991px up
  @media ($md-up) {

    .o-profile-list {
      .o-item-profile { flex: 1 1 25%; }
    }

  }

  // 1200px up
  @media ($lg-up) {}

  // 1440px up
  @media ($xlg-up) {}

  // B.2. END ------------------------------

  // B. END -----------------------------------------------

}


</style>

<style lang="scss" scoped>

// BLOCK STYLE ++++++++++++++++++++++++++++++++++++++++++++

.o-component-social-media {

  // A.1. GLOBAL STYLE ------------------------------------

  padding: 80px 0;
  background-color: white;

  * { color: black; }

  // A.1. END ---------------------------------------------

  // A.2. PROFILE LIST ------------------------------------
  .o-profile-list {

  }
  // A.2. END ---------------------------------------------

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

