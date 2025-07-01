<template>
  <div class="posts-search">
    <div class="posts-search__form">
      <div class="form">
        <!-- <div v-if="keywordSearch" class="search-bar-container">
          <div class="search-bar-container__col1">
            <div class="search-icon"></div>
          </div>
          <div class="search-bar-container__col2">
            <input
              class="keywords"
              type="text"
              placeholder="Enter keyword"
              v-model="params.search"
            />
          </div>
          <div class="search-bar-container__col3">
            <a
              class="button button--search"
              :disabled="loading"
              @click="filterPosts"
              >Search</a
            >
          </div>
        </div> -->
      </div>

      <div class="filters-container">
        <div class="filters-container__col1">
          <ul class="filters">
            <li>
              <div
                class="name"
                :class="this.selectedCategories == '0' ? 'active' : ''"
                @click="filterPosts(0)"
              >
                All
              </div>
            </li>
            <li v-for="category in categories" :key="category.id">
              <div
                class="name"
                :class="category.id == this.selectedCategories ? 'active' : ''"
                @click="filterPosts(category.id)"
                v-html="category.name"
              ></div>
            </li>
          </ul>
        </div>
        <div class="filters-container__col1"></div>
      </div>
    </div>

    <div v-if="total == 0 && !loading" class="posts-search__no-results">
      There are no upcoming events. Check out our past events below.
    </div>

    <TransitionGroup
      name="stagged-fade"
      tag="div"
      class="posts-search__post-results"
    >
      <template v-for="(post, index) in posts" :key="index">
        <div class="events-lister-container">
          <div class="events-lister-container__col1">
            <div v-if="post.event_category" class="card-tag">
              {{ post.event_category }}
            </div>

            <p v-if="post.item_date" class="card-details">
              {{ post.item_date }}
            </p>
            <p v-if="post.duration" class="card-details">
              {{ post.duration }}
            </p>

            <p v-if="post.location" class="card-details">
              {{ post.location }}
            </p>
            <p v-if="post.item_time" class="card-details">
              {{ post.item_time }}
            </p>
          </div>

          <div class="events-lister-container__col2">
            <a
              :href="post.post_link.post_link"
              :target="post.external_url_link ? '_blank' : ''"
            >
              <h2 class="subheading" v-html="post.title"></h2>
            </a>
          </div>

          <div class="events-lister-container__col3">
            <a
              :target="post.external_url_link ? '_blank' : ''"
              :class="
                post.external_url_link
                  ? 'buttonV2--icon buttonV2--icon--small buttonV2--icon--small--external-link'
                  : 'buttonV2--icon buttonV2--icon--small buttonV2--icon--small--arrow-right'
              "
              class="buttonV2"
              :href="post.post_link.post_link"
              >View</a
            >
          </div>
        </div>
      </template>
    </TransitionGroup>

    <div v-if="loading" class="posts-search__loading-spinner"></div>

    <div v-if="this.paginationType != 'loadMore'" class="pagination-wrapper">
      <searchPagination
        v-if="this.totalPages > 1"
        v-model="params.page"
        :page-count="totalPages"
        :page-range="3"
        :margin-pages="2"
        :click-handler="paginationCallback"
        :prev-text="''"
        :next-text="''"
        :container-class="'pagination'"
        :page-class="'pagination__item'"
        :next-link-class="'pagination__next'"
        :prev-link-class="'pagination__prev'"
      ></searchPagination>
    </div>

    <div
      v-if="!loading && this.paginationType == 'loadMore' && showMore"
      class="posts-search__load-more"
    >
      <div
        @click="getMorePosts"
        class="buttonV2 buttonV2--icon buttonV2--icon--plus"
      >
        Load more
      </div>
    </div>
  </div>
</template>

<script>
import SearchPagination from "./SearchPagination.vue";

export default {
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    SearchPagination,
  },
  data() {
    return {
      posts: [],

      params: {
        page: 1,
        per_page: 12,
        orderby: "date",
        order: "desc",
      },
      keywords: "",
      categories: [],
      selectedCategories: "0",
      loading: false,
      total: 0,
      totalPages: 0,
      staggerDelay: 50,
      paginationType: "loadMore",
      keywordSearch: false,
    };
  },
  mounted() {
    if (this.config.paginationType) {
      this.paginationType = this.config.paginationType;
    }

    this.getCategories();
    this.getPosts();
  },
  computed: {
    showMore() {
      return this.params.page < this.totalPages || this.loading;
    },
    showing() {
      return (
        "<span>" +
        ((this.params.page - 1) * this.params.per_page +
          1 +
          "</span> to <span>" +
          ((this.params.page - 1) * this.params.per_page +
            this.params.per_page) +
          "</span> of <span>" +
          this.total +
          "</span> results")
      );
    },
  },
  methods: {
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    async getCategories() {
      this.loading = true;

      await this.axios
        .get("event_categories", { perPage: -1 })
        .then((response) => {
          this.categories = response.data;
        });

      this.loading = false;
    },
    async getPosts() {
      this.loading = true;

      const params = { ...this.params };
      //console.log(params);

      await this.axios
        .get("past_events", {
          params,
        })
        .then((response) => {
          const posts = [];

          //console.log(response);

          response.data.forEach((post) => {
            if (post.title) {
              console.log(post.title);
              posts.push({
                title: post.title,
                item_date: post.item_date,
                item_time: post.item_time,
                location: post.location,
                duration: post.duration,
                external_url_link: post.external_url_link,
                post_link: post.post_link,
                event_category: post.category,
              });
            }

            if (post.statsTotal) {
              this.total = parseInt(post.statsTotal, 10);
            }

            if (post.statsTotalPages) {
              this.totalPages = parseInt(post.statsTotalPages, 10);
            }
          });
          this.posts = this.posts.concat(posts);
          console.log(this.total);
          console.log(this.totalPages);
        });

      //animationsV2();
      this.loading = false;
    },
    async getMorePosts() {
      this.params.page += 1;
      this.loading = true;

      const params = { ...this.params };

      await this.axios
        .get("past_events", {
          params,
        })
        .then((response) => {
          const morePosts = [];

          response.data.forEach((post) => {
            if (post.title) {
              console.log(post.title);
              morePosts.push({
                title: post.title,
                item_date: post.item_date,
                item_time: post.item_time,
                location: post.location,
                duration: post.duration,
                external_url_link: post.external_url_link,
                post_link: post.post_link,
                event_category: post.category,
              });
            }
          });
          this.posts = this.posts.concat(morePosts);
        });

      this.loading = false;
    },
    filterPosts(categoryID = 0) {
      this.posts = [];

      if (this.isNumeric(categoryID)) {
        this.selectedCategories = categoryID;
      }

      if (this.selectedCategories !== 0) {
        this.params.event_categories = this.selectedCategories;
      } else {
        delete this.params.event_categories;
      }

      this.params.page = 1;

      this.getPosts();
    },
    filterPaginationPosts() {
      this.posts = [];
      this.getPosts();
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    onEnter(el) {
      const delay = el.dataset.index * this.staggerDelay;
      setTimeout(() => {
        el.style.opacity = 1;
      }, delay);
    },
    onLeave(el) {
      el.style.display = "none";
    },
    paginationCallback(pageNumber) {
      this.params.page = pageNumber;
      this.filterPaginationPosts();
    },
  },
};
</script>
