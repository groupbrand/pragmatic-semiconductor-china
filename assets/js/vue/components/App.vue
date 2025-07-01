<template>
  <div class="app">
    <component :is="component" :config="config" />
  </div>
</template>

<script>
import NewsSearch from "./NewsSearch.vue";
import EventsSearch from "./EventsSearch.vue";
import SitesSearch from "./SitesSearch.vue";

export default {
  name: "App",
  components: {
    NewsSearch,
    EventsSearch,
    SitesSearch,
  },
  props: {
    component: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
