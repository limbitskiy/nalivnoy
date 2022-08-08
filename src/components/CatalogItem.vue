<template>
  <div class="prod-card">
    <img :src="'/images/' + product.gallery[0]" />
    <div class="prod-text">
      <h3 class="prod-title">
        {{ product.name[currentLang] }}
      </h3>
      <span v-if="product.canBuy"
        >{{ localize.priceForKg }} -
        <span class="prod-price">&#8372;{{ product.priceForKg }}</span></span
      >
      <router-link
        :to="{
          name: 'Product',
          params: { slug: product.slug },
        }"
      >
        <TheBtn>{{ localize.productDetails }}</TheBtn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog .prod-card {
  font-family: "Roboto", sans-serif;
  flex: 0 1 300px;
  text-align: center;
  // border: 1px solid var(--lightgrey-color);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  button {
    margin-top: 1rem;
    opacity: 0;

    &:hover {
      background-color: var(--accent-color2);
    }
  }

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    img {
      transform: scale(1.1);
    }

    .prod-text {
      transform: translateY(-50px);

      button {
        opacity: 1;
      }
    }
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    justify-self: center;
    transition: transform 0.3s ease;
  }

  .prod-title {
    font-weight: 500;
  }

  .prod-text {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    height: 150px;
    padding: 2.5rem 1rem 0;
    align-items: center;
    justify-content: center;
    background-color: white;
    transition: transform 0.3s ease;
  }

  .prod-price {
    font-size: var(--font-size-15);
    font-weight: 500;
    color: var(--accent-color2);
  }
}

.catalog-big .prod-card {
  flex: 0 1 510px;
}
</style>