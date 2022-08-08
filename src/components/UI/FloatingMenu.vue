<template>
  <div class="menu">
    <div class="menu-inner">
      <slot></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingMenu",
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  right: 5rem;
  display: grid;
  place-items: center;
  width: 18rem;
  height: 18rem;
}

.menu-inner {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  width: max-content;
  height: max-content;
}
</style>