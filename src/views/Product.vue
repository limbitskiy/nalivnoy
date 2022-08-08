<template>
  <main>
    <div class="container">
      <div class="section">
        <div class="details">
          <div class="gallery">
            <img
              class="enlarged"
              v-if="this.enlargedImage"
              :src="/images/ + this.enlargedImage"
            />
            <video
              class="enlarged"
              v-if="this.enlargedVideo"
              :src="/images/ + this.enlargedVideo"
              controls
              autoplay
            />
            <div class="thumbnails">
              <img
                v-for="(picture, index) in product.gallery"
                :key="index"
                :src="'/images/' + picture"
                alt="product gallery thumbnail"
                @click="enlargeImageThumbnail(picture)"
              />
              <video
                v-for="(video, index) in product.videos"
                :key="index"
                :src="'/images/' + video"
                alt="product gallery video thumbnail"
                @click="enlargeVideoThumbnail(video)"
              />
            </div>
          </div>

          <div class="description">
            <div class="before-desc" v-if="product.canBuy">
              <h3>{{ product.name[currentLang] }}</h3>
              <p class="price">
                {{ product.prices[packingSelected] * this.quantity }} грн
              </p>
              <div class="packing-select">
                <p>
                  <b>{{ localize.packing }}:</b>
                </p>
                <select v-model="packingSelected" @change="this.quantity = 1">
                  <option
                    v-for="(price, packing) in product.prices"
                    :key="packing"
                  >
                    {{ packing }}
                  </option>
                </select>
              </div>
              <form class="quantity-and-buy">
                <TheBtn
                  class="incr-decr"
                  @click.prevent="
                    this.quantity > 1 ? this.quantity-- : this.quantity
                  "
                  >-</TheBtn
                >
                <input
                  class="quantity-input"
                  disabled="disabled"
                  type="tel"
                  :value="this.quantity"
                />
                <TheBtn
                  class="incr-decr"
                  @click.prevent="
                    this.quantity < 99 ? this.quantity++ : this.quantity
                  "
                  >+</TheBtn
                >
              </form>
              <div class="btn-group product-btn-group">
                <TheBtn @click="addToCart">{{ localize.buyBtn }}</TheBtn>
                <TheBtn
                  @click="this.$router.push({ path: '/', hash: '#catalog' })"
                  >Назад</TheBtn
                >
              </div>
            </div>

            <div class="product-desc">
              <HtmlOutput :data="product.desc[currentLang]" />
            </div>

            <PropsTable
              :product="product"
              v-if="Object.keys(product.props).length > 0"
            />

            <div class="after-props">
              <HtmlOutput :data="product.afterProps" />
            </div>
          </div>
        </div>
        <Related />
      </div>
    </div>
  </main>
</template>

<script>
import Related from "@/components/Related.vue";
import PropsTable from "@/components/PropsTable.vue";
import HtmlOutput from "@/components/HtmlOutput.vue";

export default {
  name: "Product",
  data() {
    return {
      enlargedImage: null,
      enlargedVideo: null,
      packingSelected: null,
      quantity: 1,
    };
  },
  components: {
    Related,
    PropsTable,
    HtmlOutput,
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        id: this.product.id,
        quantity: this.quantity,
        packing: this.packingSelected,
        price: this.product.prices[this.packingSelected] * this.quantity,
        uniqueId: this.product.id + this.packingSelected,
      });
      this.$store.state.sidebarOpen = "true";
    },
    enlargeImageThumbnail(img) {
      this.enlargedVideo = null;
      this.enlargedImage = img;
    },
    enlargeVideoThumbnail(video) {
      this.enlargedImage = null;
      this.enlargedVideo = video;
    },
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    product() {
      return this.$store.state.products.find(
        (product) => product.slug === this.slug
      );
    },
  },
  created() {
    this.enlargedImage = this.product.gallery[0];
    this.packingSelected = Object.keys(this.product.prices)[0];
  },
};
</script>

<style lang="scss" scoped>
.details {
  display: grid;
  gap: 1rem;
}

.gallery {
  .enlarged {
    width: 100%;
    max-height: 65vh;
    object-fit: contain;
    padding: 1rem;
  }

  .thumbnails {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    * {
      cursor: pointer;
      width: 80px;
      height: 80px;
      border: 1px solid rgb(221, 221, 221);
      transition: border-color 0.2s ease;

      &:hover {
        opacity: 0.5;
        border-color: var(--accent-green);
      }
    }
  }
}

.before-desc {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: var(--font-bigger);
  }

  select,
  input {
    height: 2rem;
    border: 1px solid var(--lightgrey-color);
  }

  select {
    padding-inline: 0.5rem;
    margin-top: 0.5rem;
  }

  .price {
    font-size: var(--font-big);
  }

  .quantity-and-buy {
    display: flex;
    gap: 0.5rem;

    .incr-decr {
      cursor: pointer;
      width: 2rem;
      padding: 0;
      background-color: transparent;
      color: var(--grey-color);
      border: 1px solid var(--lightgrey-color);
    }

    .quantity-input {
      background-color: rgb(221, 221, 221);
      width: 2rem;
      text-align: center;
    }
  }
}

.product-desc {
  margin-block: 2rem;
}

@media (min-width: 850px) {
  .details {
    grid-template-columns: 1fr 2fr;
  }
}
</style>