<template>
  <figure>
    <img :src="image" />
    <figcaption
      ref="caption"
      :class="{ open: descOpen }"
      :style="this.captionStyle"
    >
      <slot></slot>
    </figcaption>
    <span @click="descOpen = !descOpen"
      >{{ localize.readMore }}<i class="fas fa-arrow-right"></i
    ></span>
  </figure>
</template>

<script>
export default {
  name: "AboutItem",
  data() {
    return {
      descOpen: false,
      captionMargin: 32,
      scrollHeight: null,
    };
  },
  props: ["image"],
  computed: {
    captionStyle() {
      return (
        "--caption-style:" +
        parseInt(this.scrollHeight + this.captionMargin) +
        "px"
      );
    },
  },
  mounted() {
    this.scrollHeight = this.$refs.caption.scrollHeight;
  },
};
</script>

<style lang="scss" scoped>
figure {
  flex: 0 1 400px;

  img {
    width: 100%;
  }
}

figcaption {
  font-family: "Roboto", sans-serif;
  color: var(--medium-grey-color);
  margin-block: 1rem;
  overflow: hidden;
  max-height: 6.5ch;
  transition: max-height 0.3s ease;

  &.open {
    max-height: var(--caption-style);
  }
}

span {
  font-size: var(--font-small);
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }

  &:hover i {
    transform: translateX(5px);
  }
}

i {
  font-size: 12px;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}
</style>