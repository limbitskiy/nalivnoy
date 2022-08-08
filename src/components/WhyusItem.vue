<template>
  <div class="w-item">
    <div class="w-icon">
      <img :src="icon" />
    </div>
    <div class="w-text">
      <p><slot name="title"></slot></p>
      <p><slot name="body"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyusItem",
  props: ["icon"],
};
</script>

<style lang="scss" scoped>
.w-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 2rem;

  &:nth-child(2n) {
    background-color: #dae9ff;
  }

  &:nth-child(2n - 1) {
    background-color: #fcdfdf;
  }

  p:first-child {
    font-size: var(--font-xsmall);
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  p:last-child {
    font-size: var(--font-small);
    color: var(--medium-grey-color);
  }
}
</style>