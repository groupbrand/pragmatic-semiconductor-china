<template>
  <div class="news-search">
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
                :class="0 == this.selectedCategories ? 'active' : ''"
                @click="filterPosts(0)"
              >
                全部
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
        <div class="filters-container__col2">
          <div class="select-year-container">
            <select
              aria-label="{{ this.config.text_strings['Select Year'] }}"
              id="year"
              name="year"
              class="filter-input"
              @change="filterPostsbyYear()"
              v-model="this.selectedYear"
            >
              <option value="0">
                {{ config.text_strings["Select Year"] || "選擇年份" }}
              </option>
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div
        v-if="this.paginationType != 'loadMore' && total != 0 && !loading"
        class="posts-search__results-info"
      >
        {{ this.config.text_strings["Showing"] }}
        <span>
          {{ (this.params.page - 1) * this.params.per_page + 1 }}
          -
          {{
            (this.params.page - 1) * this.params.per_page + this.params.per_page
          }}
        </span>
        of <span> {{ this.total }} </span>
        {{ this.config.text_strings["results"] }}
      </div>

      <div
        v-if="this.paginationType == 'loadMore' && total != 0 && !loading"
        class="posts-search__results-info"
      >
        {{ this.config.text_strings["Showing"] }} <span>{{ this.total }}</span>
        {{ this.config.text_strings["results"] }}
      </div>
    </div>

    <div v-if="total == 0 && !loading" class="posts-search__no-results">
      {{ this.config.text_strings["no results message"] }}
    </div>

    <TransitionGroup
      name="stagged-fade"
      tag="div"
      class="posts-search__results"
    >
      <template v-for="(post, index) in posts" :key="index">
        <div class="posts-search__post">
          <div class="news-item-container news-item-container--yellow">
            <div class="content-container">
              <div class="data-container">
                <div class="data-container__col1">
                  <p class="card-details">
                    {{ post.customFields.formatted_date }}
                  </p>
                  <p class="card-details">
                    {{ post.customFields.mins_read }}
                    {{ this.config.text_strings["min read"] }}
                  </p>
                </div>
                <div class="data-container__col2">
                  <div v-if="post.customFields.post_category" class="card-tag">
                    {{ post.customFields.post_category }}
                  </div>
                </div>
              </div>
              <a :href="post.customFields.post_link">
                <h3 class="card-title">{{ post.title }}</h3>
              </a>
            </div>

            <div class="image-container">
              <img
                v-if="post.customFields.featured_image_src"
                :src="post.customFields.featured_image_src"
                :srcset="post.customFields.featured_image_srcset"
                sizes="(max-width: 480px) 100vw, 50vw"
                :alt="post.customFields.featured_image_alt"
                loading="lazy"
              />
              <a
                v-if="post.customFields.post_link_type == 'internal'"
                class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--arrow-right buttonV2--yellow-black-important"
                :href="post.customFields.post_link"
                >{{ this.config.text_strings["Read"] }}</a
              >
              <a
                v-if="post.customFields.post_link_type != 'internal'"
                target="_blank"
                rel="noopener noreferrer"
                class="buttonV2 buttonV2--icon buttonV2--icon--small buttonV2--icon--small--external-link buttonV2--yellow-black-important"
                :href="post.customFields.post_link"
                >{{ this.config.text_strings["Read"] }}</a
              >
            </div>
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
        {{ this.config.text_strings["load more"] }}
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
      categories: [],
      years: [],
      params: {
        page: 1,
        per_page: 12,
        orderby: "date",
        order: "desc",
      },
      keywords: "",
      selectedCategories: "0",
      selectedYear: "0",
      loading: false,
      total: 0,
      totalPages: 0,
      staggerDelay: 50,
      paginationType: "loadMore",
      keywordSearch: false,
    };
  },
  mounted() {
    console.log(this.config.text_strings);
    if (this.config.paginationType) {
      this.paginationType = this.config.paginationType;
      // console.log(this.paginationType);
    }

    if (this.config.defaultCategoryID) {
      if (this.isNumeric(this.config.defaultCategoryID)) {
        this.selectedCategories = this.config.defaultCategoryID;
      }
      if (this.selectedCategories !== 0) {
        this.params.categories = this.selectedCategories;
      } else {
        delete this.params.categories;
      }

      if (this.selectedYear !== 0) {
        this.params.year = this.selectedYear;
      } else {
        delete this.params.year;
      }
    }

    this.getYears();
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

      await this.axios.get("categories", { perPage: -1 }).then((response) => {
        this.categories = response.data;
      });

      this.loading = false;
    },
    async getYears() {
      this.loading = true;

      await this.axios.get("news_years", { perPage: -1 }).then((response) => {
        this.years = response.data;
      });

      this.loading = false;
    },
    async getPosts() {
      this.loading = true;

      const params = { ...this.params };
      console.log(params);

      await this.axios
        .get("posts", {
          params,
        })
        .then((response) => {
          const posts = [];

          response.data.forEach((post) => {
            posts.push({
              title: post.title.rendered,
              excerpt: post.excerpt.rendered,
              date: post.formatted_date,
              customFields: post.custom_fields,
            });
          });
          this.posts = this.posts.concat(posts);
          this.total = parseInt(response.headers["x-wp-total"], 10);
          this.totalPages = parseInt(response.headers["x-wp-totalpages"], 10);
        });

      //animationsV2();
      this.loading = false;
    },
    async getMorePosts() {
      this.params.page += 1;
      this.loading = true;

      const params = { ...this.params };

      await this.axios
        .get("posts", {
          params,
        })
        .then((response) => {
          const morePosts = [];

          response.data.forEach((post) => {
            morePosts.push({
              link: post.link,
              title: post.title.rendered,
              excerpt: post.excerpt.rendered,
              date: post.formatted_date,
              customFields: post.custom_fields,
            });
          });
          this.posts = this.posts.concat(morePosts);
        });

      this.loading = false;
    },
    filterPostsbyYear() {
      this.posts = [];
      this.params.page = 1;

      if (this.selectedYear !== 0) {
        this.params.year = this.selectedYear;
      } else {
        delete this.params.year;
      }

      console.log(this.selectedYear);
      this.getPosts();
    },
    filterPosts(categoryID = 0) {
      this.posts = [];

      if (this.isNumeric(categoryID)) {
        this.selectedCategories = categoryID;
      }

      if (this.selectedCategories !== 0) {
        this.params.categories = this.selectedCategories;
      } else {
        delete this.params.categories;
      }
      console.log(this.params);

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
      // history.pushState(
      //   this.params.page,
      //   'null',
      //   window.location.pathname + '?pl=' + this.params.page,
      // );

      // // Jump to search results.
      // let top = document.getElementById('results-top').offsetTop;
      // window.scrollTo(0, top - 300);

      this.filterPaginationPosts();
    },
  },
};
</script>
