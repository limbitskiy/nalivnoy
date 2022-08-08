<template>
  <div class="title-box">
    <h2 class="section-title">
      <slot></slot>
    </h2>
  </div>
  <div class="catalog catalog-small" v-if="size === 'small'">
    <CatalogItem
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      :index="index"
    />
  </div>
  <div class="catalog catalog-big" v-if="size === 'big'">
    <CatalogItem
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      :index="index"
    />
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem.vue";
export default {
  name: "Catalog",
  components: { CatalogItem },
  props: {
    products: {
      required: true,
    },
    size: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  > a {
    text-decoration: none;
  }
}
</style>