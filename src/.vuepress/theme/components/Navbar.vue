<template>
  <div class="header-wrapper">
    <header class="navbar">

      <div>
        <!-- <img style="display: inline-block; width: 20px" src="../assets/portal-icon.png" /> -->
        <router-link :to="$localePath" style="display: inline-block" class="home-link">
          <span ref="siteName" class="site-name" v-if="$siteTitle">
            <mark>{{ $siteTitle }}</mark>

            </span>
        </router-link>
      </div>

      <div class="header-links">
        <div>
          <NavLinks  />
        </div>
        <div>
          <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
          <SearchBox v-else-if="$site.themeConfig.search !== false" />
        </div>
      </div>
    </header>
    <!-- <img style="width: 300px; text-align: right" src="https://res.cloudinary.com/cloudimgts/image/upload/v1539822106/question-head.png" /> -->
  </div>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import AlgoliaSearchBox from "./AlgoliaSearchBox.vue";
import SearchBox from "./SearchBox.vue";
import NavLinks from "./NavLinks.vue";

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">

.navbar {
  line-height: 30px;
  padding: 29px

  a, span, img {
    background: #fff;
    display: inline-block;
    width: 100%;
  }
}

.header-links { 
  margin-top: 20px;
}

.site-name {
  color: black;
}
</style>
