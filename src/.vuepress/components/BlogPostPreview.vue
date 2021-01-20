<script>
export default {
  name: 'BlogPostPreview',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.item.frontmatter.date)
      const options = {
        year: 'numeric',
        month: 'long'
      }

      return dateFormat.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<template>
  <section>
    <router-link :to="item.path">
      <h3 class="blog-post__title">{{ item.frontmatter.title }}</h3>
    </router-link>
    <time class="date-modified">date modified: {{ formatPublishDate }}</time>
    <!-- <p v-if="item.frontmatter.excerpt">{{ item.frontmatter.excerpt }}</p> -->
  </section>
</template>

<style scoped>
.date-modified {
  font-size: 14px;
  padding-left: 5px;
  padding-bottom: 20px;
}

.blog-post__title {
  font-family: 'Times New Roman', Times, serif;
  text-decoration: underline;
  font-size: 18px;
  padding-left: 23px;
  margin-bottom: 10px;
}

/* .blog-post__button {
  margin-bottom: 1.5rem;
  display: inline-block;
}

.button {
  border: 2px solid #0008f9;
  border-radius: 4px;
  color: #0008f9;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.tag-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 25px;
}

.tag-list__item {
  margin-left: 10px;
}

.tag-list__item:first-child {
  margin-left: 0;
}

.tag-list__btn {
  padding: 5px;
  font-size: 0.9rem;
  background-color: #fff;
} */
</style>
