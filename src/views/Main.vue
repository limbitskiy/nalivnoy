<template>
  <main>
    <div class="cta">
      <h1>
        {{ localize.jTitle }}
      </h1>
    </div>

    <div class="container">
      <div class="section">
        <Catalog
          v-if="productsLoaded"
          :products="this.mainCatalog"
          :size="(size = 'small')"
          >Каталог</Catalog
        >
      </div>
      <div>
        <Catalog
          v-if="productsLoaded"
          :products="this.secondCatalog"
          :size="(size = 'big')"
          >{{ localize.readyChoices }}</Catalog
        >
      </div>
    </div>

    <div class="section">
      <div class="title-box">
        <h2 class="section-title">
          {{ localize.aboutTitle }}
        </h2>
        <p class="section-subtitle">
          {{ localize.aboutSubtitle }}
        </p>
      </div>
      <div class="about-body">
        <AboutItem :image="'/images/about1.jpg'">
          {{ localize.about1 }}
        </AboutItem>
        <AboutItem :image="'/images/about2.jpg'">
          {{ localize.about2 }}
        </AboutItem>
        <AboutItem :image="'/images/about3.jpg'">
          {{ localize.about3 }}
        </AboutItem>
      </div>
    </div>

    <div class="w-body">
      <WhyusItem :icon="'/images/w-icon1.png'">
        <template v-slot:title>{{ localize.wOneTitle }}</template>
        <template v-slot:body>{{ localize.wOneDesc }}</template>
      </WhyusItem>

      <WhyusItem :icon="'/images/w-icon2.png'">
        <template v-slot:title>{{ localize.wTwoTitle }}</template>
        <template v-slot:body>{{ localize.wTwoDesc }}</template>
      </WhyusItem>

      <WhyusItem :icon="'/images/w-icon3.png'">
        <template v-slot:title>{{ localize.wThreeTitle }}</template>
        <template v-slot:body>{{ localize.wThreeDesc }}</template>
      </WhyusItem>
    </div>
  </main>
</template>

<script>
import Catalog from "@/components/Catalog.vue";
import AboutItem from "@/components/AboutItem.vue";
import WhyusItem from "@/components/WhyusItem.vue";

export default {
  name: "Main",
  components: { Catalog, AboutItem, WhyusItem },
  computed: {
    productsLoaded() {
      return this.$store.state.productsLoaded;
    },
    products() {
      return this.$store.state.products;
    },
    mainCatalog() {
      return this.products.filter((product) => product.id < 4);
    },
    secondCatalog() {
      return this.products.filter((product) => product.id > 3);
    },
  },
};
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--hero-image);
  gap: 2em;
  padding: 7rem 1rem;
  color: white;

  h1 {
    font-size: clamp(1.5rem, calc(1.5rem + 2vw), 3rem);
    color: var(--grey-color);
    max-width: min-content;
    line-height: 3rem;
    background-color: white;
    padding: 2rem;
  }

  li {
    font-size: clamp(1rem, calc(1rem + 1vw), 1.5rem);
    font-weight: 500;
    line-height: 2rem;
  }
}

.about-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;

  > p {
    max-width: 50vw;
  }
}

.w-body {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .cta {
    align-items: flex-start;
    padding: 10rem;

    h1 {
      max-width: 25ch;
      text-align: left;
    }

    li {
      margin-left: 4em;
      line-height: 2.6rem;
    }
  }

  .w-body {
    flex-direction: row;
  }
}
</style>