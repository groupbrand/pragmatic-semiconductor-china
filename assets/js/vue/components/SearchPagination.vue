<template>
  <ul :class="containerClass">
    <li
      v-if="firstLastButton"
      :class="[pageClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        :class="pageLinkClass"
        @click="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
        :tabindex="firstPageSelected() ? -1 : 0"
        v-html="firstButtonText"
      ></a>
    </li>

    <li
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        @click="prevPage()"
        @keyup.enter="prevPage()"
        :class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        v-html="prevText"
      ></a>
    </li>

    <li
      v-for="page in pages"
      :key="page.id"
      :class="[
        pageClass,
        page.selected ? activeClass : '',
        page.disabled ? disabledClass : '',
        page.breakView ? breakViewClass : '',
      ]"
    >
      <a
        v-if="page.breakView"
        :class="[pageLinkClass, breakViewLinkClass]"
        tabindex="0"
        ><slot name="breakViewContent">{{ breakViewText }}</slot></a
      >
      <a v-else-if="page.disabled" :class="pageLinkClass" tabindex="0">{{
        page.content
      }}</a>
      <a
        v-else
        @click="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
        :class="pageLinkClass"
        tabindex="0"
        >{{ page.content }}</a
      >
    </li>

    <li
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextClass, lastPageSelected() ? disabledClass : '']"
    >
      <a
        @click="nextPage()"
        @keyup.enter="nextPage()"
        :class="nextLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        v-html="nextText"
      ></a>
    </li>

    <li
      v-if="firstLastButton"
      :class="[pageClass, lastPageSelected() ? disabledClass : '']"
    >
      <a
        @click="selectLastPage()"
        @keyup.enter="selectLastPage()"
        :class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        v-html="lastButtonText"
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    forcePage: {
      type: Number,
      default: undefined,
    },
    clickHandler: {
      type: Function,
      default: () => {},
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    marginPages: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
      default: "Prev",
    },
    nextText: {
      type: String,
      default: "Next",
    },
    breakViewText: {
      type: String,
      default: "…",
    },
    containerClass: {
      type: String,
      default: "",
    },
    pageClass: {
      type: String,
      default: "",
    },
    pageLinkClass: {
      type: String,
      default: "",
    },
    prevClass: {
      type: String,
      default: "",
    },
    prevLinkClass: {
      type: String,
      default: "",
    },
    nextClass: {
      type: String,
      default: "",
    },
    nextLinkClass: {
      type: String,
      default: "",
    },
    breakViewClass: {
      type: String,
      default: "",
    },
    breakViewLinkClass: {
      type: String,
      default: "",
    },
    activeClass: {
      type: String,
      default: "active",
    },
    disabledClass: {
      type: String,
      default: "disabled",
    },
    firstLastButton: {
      type: Boolean,
      default: false,
    },
    firstButtonText: {
      type: String,
      default: "First",
    },
    lastButtonText: {
      type: String,
      default: "Last",
    },
    hidePrevNext: {
      type: Boolean,
      default: false,
    },
  },
  beforeUpdate() {
    if (this.forcePage === undefined) return;
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage;
    }
  },
  computed: {
    selected: {
      get: function () {
        return this.innerValue;
      },
      set: function (newValue) {
        this.innerValue = newValue;
      },
    },
    pages: function () {
      let items = {};
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1,
          };
          //console.log("pages" + page.selected);
          items[index] = page;
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2);

        let setPageItem = (index) => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1,
          };
          items[index] = page;
        };

        let setBreakView = (index) => {
          let breakView = {
            disabled: true,
            breakView: true,
          };

          items[index] = breakView;
        };

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i);
        }

        // 2nd - loop thru selected range
        let selectedRangeLow = 0;
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange;
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
        }

        for (
          let i = selectedRangeLow;
          i <= selectedRangeHigh && i <= this.pageCount - 1;
          i++
        ) {
          setPageItem(i);
        }

        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1);
        }

        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        }

        // 3rd - loop thru high end of margin pages
        for (
          let i = this.pageCount - 1;
          i >= this.pageCount - this.marginPages;
          i--
        ) {
          setPageItem(i);
        }
      }
      return items;
    },
  },
  data() {
    return {
      innerValue: 1,
    };
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return;
      this.innerValue = selected;
      this.$emit("input", selected);
      this.clickHandler(selected);
    },
    prevPage() {
      if (this.selected <= 1) return;

      this.handlePageSelected(this.selected - 1);
    },
    nextPage() {
      if (this.selected >= this.pageCount) return;

      this.handlePageSelected(this.selected + 1);
    },
    firstPageSelected() {
      return this.selected === 1;
    },
    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0;
    },
    selectFirstPage() {
      if (this.selected <= 1) return;

      this.handlePageSelected(1);
    },
    selectLastPage() {
      if (this.selected >= this.pageCount) return;

      this.handlePageSelected(this.pageCount);
    },
  },
};
</script>
