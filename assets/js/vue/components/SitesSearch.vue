<template>
  <div class="site-search-container">
    <div class="site-search-container__form">
      <div class="search-bar-container">
        <div class="search-bar-container__col1">
          <div class="search-mag"></div>
          <input
            class="keywords"
            type="text"
            placeholder="Search pragmaticsemi.com"
            v-model="params.search"
            @keyup.enter="filterPosts"
          />
        </div>
        <div class="search-bar-container__col2">
          <button
            v-if="!this.searchPerformed"
            aria-label="Search"
            class="buttonV2 buttonV2--tall buttonV2--yellow desktop-only"
            @click="filterPosts"
            @keyup.enter="filterPosts"
          >
            Search
          </button>

          <div
            v-if="!this.searchPerformed"
            aria-label="Search"
            class="circle-buttonV2 circle-buttonV2--medium circle-buttonV2--medium--arrow-right circle-buttonV2--solid-yellow-solid-black circle-buttonV2--inline mobile-only"
            @click="filterPosts"
            @keyup.enter="filterPosts"
          ></div>

          <a
            v-if="this.searchPerformed"
            aria-label="Reset Search"
            class="search-reset"
            @click="resetSearch"
            @keyup.enter="resetSearch"
          ></a>
        </div>
      </div>
    </div>

    <div
      v-if="!loading && !searchPerformed"
      class="site-search-container__quick-links"
    >
      <div class="links-container">
        <div class="links-container__col1">
          <h2 class="label">Popular searches</h2>

          <ul class="popular-searches">
            <li v-for="term in popularSearchTerms" :key="term">
              <a
                class="name"
                @click="filterPopularTerm(term)"
                v-html="term"
              ></a>
            </li>
          </ul>

          <h2 class="label">The very latest</h2>
          <div class="article-container">
            <div class="data-container">
              <div class="data-container__col1">
                <p class="card-details">
                  {{ this.latestArticle.formatted_date }}
                </p>
                <p class="card-details">
                  {{ this.latestArticle.mins_read }} min read
                </p>
              </div>
              <div class="data-container__col2">
                <div class="card-tag">
                  {{ this.latestArticle.post_category }}
                </div>
              </div>
            </div>

            <a
              :href="latestArticle.post_link"
              :target="
                latestArticle.post_link_type != 'internal' ? '_blank' : ''
              "
              rel="noopener noreferrer"
            >
              <p class="title">{{ this.latestArticle.post_title }}</p>
            </a>
          </div>
        </div>
        <div class="links-container__col2">
          <h2 class="label">Quick links</h2>

          <div class="quick-links-container">
            <a
              v-for="link in quickLinks"
              :key="link"
              class="quick-link-container"
              :href="link.link"
              :target="link.external_link ? '_blank' : ''"
              rel="noopener noreferrer"
            >
              <div class="quick-link-container__col1">
                {{ link.button_text }}
              </div>
              <div class="quick-link-container__col2">
                <div
                  :class="
                    link.external_link
                      ? 'circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--external-link'
                      : 'circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--arrow-right'
                  "
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="total != 0 && !loading && searchPerformed"
      class="site-search-container__results-info"
    >
      Showing <span>{{ this.total }}</span> results
    </div>

    <div
      v-if="total == 0 && !loading && searchPerformed"
      class="site-search-container__no-results"
    >
      There are no results that match the criteria above. Please try another
      search.
    </div>

    <TransitionGroup
      name="stagged-fade"
      tag="div"
      class="site-search-container__results"
      v-if="!loading && searchPerformed"
    >
      <template v-for="(post, index) in posts" :key="index">
        <a
          :target="post.post_link.post_link_type != 'internal' ? '_blank' : ''"
          rel="noopener noreferrer"
          :href="post.post_link.post_link"
        >
          <div class="content result-container">
            <div class="result-container__col1">
              <div v-if="post.category != ''" class="card-tag">
                {{ post.category }}
              </div>

              <h2 v-html="post.title"></h2>
            </div>

            <div class="result-container__col2">
              <div
                :class="
                  post.post_link.post_link_type != 'internal'
                    ? 'circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--external-link'
                    : 'circle-buttonV2 circle-buttonV2--responsive circle-buttonV2--responsive--small circle-buttonV2--responsive--small--arrow-right'
                "
              ></div>
            </div>
          </div>
        </a>
      </template>
    </TransitionGroup>

    <div v-if="loading" class="site-search-container__loading-spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {
      posts: [],
      params: {
        page: 1,
        per_page: 12,
        //orderby: "relevance",
        orderby: "title",
        order: "desc",
      },
      keywords: "",
      popularSearchTerms: [],
      quickLinks: [],
      latestArticle: [],
      loading: false,
      total: 0,
      totalPages: 0,
      staggerDelay: 50,
      searchPerformed: false,
    };
  },
  mounted() {
    this.getPopularSearchTerms();
    this.getQuickLinks();
    this.getLatestArticle();
  },
  computed: {},
  methods: {
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    async getPopularSearchTerms() {
      this.loading = true;

      await this.axios
        .get("site_search_popular_search_terms", { perPage: -1 })
        .then((response) => {
          this.popularSearchTerms = response.data;
        });

      this.loading = false;
    },
    async getQuickLinks() {
      this.loading = true;

      await this.axios
        .get("site_search_quick_links", { perPage: -1 })
        .then((response) => {
          this.quickLinks = response.data;
        });

      this.loading = false;
    },
    async getLatestArticle() {
      this.loading = true;

      await this.axios
        .get("site_search_latest_article", { perPage: -1 })
        .then((response) => {
          this.latestArticle = response.data;
        });

      this.loading = false;
    },
    async getPosts() {
      this.loading = true;

      const params = { ...this.params };
      //console.log(params);

      await this.axios
        .get("site_search", {
          params,
        })
        .then((response) => {
          const posts = [];
          this.total = 0;
          this.totalPages = 0;

          response.data.forEach((post) => {
            if (post.title) {
              posts.push({
                title: post.title,
                post_type: post.post_type,
                post_link: post.post_link,
                category: post.category,
              });
            } else {
              if (post.statsTotal) {
                //console.log("statsTotal: " + post.statsTotal);
                this.total = parseInt(post.statsTotal, 10);
              }

              if (post.statsTotalPages) {
                //console.log("statsTotal: " + post.statsTotalPages);
                this.totalPages = parseInt(post.statsTotalPages, 10);
              }
            }
          });

          this.posts = this.posts.concat(posts);
        });

      this.loading = false;
    },
    trackevent(code) {
      this.$gtag.event("search: " + code);
      console.log("search: " + code);
    },
    filterPosts() {
      this.posts = [];
      this.searchPerformed = true;
      this.trackevent(this.params.search);
      this.params.page = 1;
      this.getPosts();
    },
    filterPopularTerm($term) {
      this.posts = [];
      this.params.search = $term;
      this.trackevent(this.params.search);
      this.searchPerformed = true;
      this.params.page = 1;
      this.getPosts();
    },
    resetSearch() {
      this.posts = [];
      this.params.search = "";
      this.searchPerformed = false;
      this.params.page = 1;
    },

    beforeEnter(el) {
      el.style.opacity = 0;
      console.log("enter");
    },
    onEnter(el) {
      const delay = el.dataset.index * this.staggerDelay;
      setTimeout(() => {
        el.style.opacity = 1;
        console.log("set");
      }, delay);
    },
    onLeave(el) {
      el.style.display = "none";
      console.log("leave");
    },
  },
};
</script>
