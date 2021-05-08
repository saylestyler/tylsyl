<template>
  <div>
    <div v-if="selectedTags.length > 0" class="filtered-heading">
      <h2>Filtered by {{ selectedTags.join(',') }}</h2>
      <div @click="resetTags" class="btn clear-filter-btn">Clear filter</div>
    </div>

    <ul class="blog-list">
      <li v-for="(item, index) in filteredList" class="blog-list__item">
        <!-- <BlogPostPreview
          v-show="index >= currentPage * pageSize && index < (currentPage + 1) * pageSize"
          :item="item"
        /> -->
        <BlogPostPreview :item="item" />
        <ul v-for="tag in item.frontmatter.tags" class="blog-list__tags">
          <li>
            <div class="blog-list__tags" @click="addTag(tag)">{{ tag }}</div>
          </li>
        </ul>
      </li>
    </ul>

    <div class="pagination">
      <button
        v-show="currentPage > 0"
        @click="previousPage"
        class="button--pagination"
        type="button"
      >
        Previous
      </button>
      <button
        v-show="currentPage < totalPages - 1"
        @click="nextPage"
        class="button--pagination"
        type="button"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostList',
  props: {
    pages: {
      type: Array,
      default: []
    },
    pageSize: {
      type: Number,
      default: 200
    },
    startPage: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      currentPage: Math.ceil(this.startPage / this.pageSize),
      selectedTags: []
    }
  },
  computed: {
    filteredList() {
      if (this.pages) {
        // it is included in pages... does it have all this
        return this.pages.filter(item => {
          // must have blog: true in FM
          const isBlogPost = !!item.frontmatter.blog
          // must be dated < Date()
          const isReadyToPublish = new Date(item.frontmatter.date) <= new Date()
          const hasTags = !!item.frontmatter.tags && this.selectedTags.every(tag => item.frontmatter.tags.includes(tag))

          let isCurrentLocale = true
          if (this.$site.locales) {
            const localePath = this.$route.path.split('/')[1] || ''
            isCurrentLocale = item.relativePath.startsWith(localePath)
          }

          if (
            !isBlogPost ||
            !isReadyToPublish ||
            (this.selectedTags.length > 0 && !hasTags) ||
            !isCurrentLocale
          ) {
            return false
          }

          return true
        }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    },

    totalPages() {
      return Math.ceil(this.filteredList.length / this.pageSize)
    }
  },

  mounted() {
    this.currentPage = Math.min(
      Math.max(this.currentPage, 0),
      this.totalPages - 1
    )
  },

  methods: {
    nextPage() {
      this.currentPage =
        this.currentPage >= this.totalPages - 1
          ? this.totalPages - 1
          : this.currentPage + 1
    },
    previousPage() {
      this.currentPage = this.currentPage < 0 ? 0 : this.currentPage - 1
    },
    addTag(tag) {
      const tagExists = this.selectedTags.some(item => {
        return item === tag
      })

      if (!tagExists) {
        this.selectedTags = this.selectedTags.concat(tag)
      }
    },
    removeTag(tag) {
      this.selectedTags.filter(t => t != tag)
    },
    resetTags() {
      this.selectedTags = []
    }
  }
}
</script>

<style scoped>
/* red fake apache server file lol */
/* .blog-list__item {
  list-style-type: none;
  padding-top: 5px;
  background-image: url('./../theme/assets/red-document-icon.png');
  background-repeat: no-repeat;
  background-position: 0% 24px;
} */

.blog-list__item {
  list-style-type: none;
}

/* dreaded browser */
ul.blog-list {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

ul.blog-list:first-child {
  margin-top: 20px;
}

.blog-list__tags {
  margin-bottom: 15px;
  list-style: none;
  display: inline-block;
  padding: 3px;
  font-size: 14px;
  margin: 5px;
  border: none;
  background: #4dfbc0;
  cursor: pointer;

  /* text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  text-align: center;
  transition: background 250ms ease-in-out,
              transform 150ms ease;
              */
  -webkit-appearance: none;
  -moz-appearance: none;
}

.blog-list__tags:first-child {
  margin: 0px;
  padding: 0px;
}

/* .blog-list {
  padding: 0;
  margin: 0;
}


.button--pagination {
  background-color: #32c8cf;
  border-radius: 4px;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--pagination:hover {
  background-color: #fff;
  border: 1px solid #32c8cf;
  border-radius: 4px;
  color: #32c8cf;
}

.clear-filter-btn {
  align-self: center;
  margin-left: 20px;
}

.filtered-heading {
  display: flex;
}

.pagination {
  text-align: center;
} */
</style>
