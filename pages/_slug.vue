<template>
  <div>
    <LazyNuxtDynamic
      v-for="(component, index) in page.fields.components"
      :key="index"
      :name="componentName(component)"
      :component="component"
      hydration="WhenVisible"
    />
  </div>
</template>

<script>

export default {

  async asyncData({ params, store, redirect }) {
    const slug = params.slug;
    const page = await store.dispatch('page/getPageBySlug', slug);
    if (typeof page === 'undefined') {
      redirect('/404');
    }
    return { page };
  },

  methods: {
    componentName(component) {
      return (
        component.sys.contentType.sys.id.charAt(0).toUpperCase() +
        component.sys.contentType.sys.id.slice(1)
      );
    },
  },

};

</script>

