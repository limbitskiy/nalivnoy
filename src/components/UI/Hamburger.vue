<script>
export default {
  name: "Hamburger",
};
</script>

<template>
  <button>
    <i class="fa fa-bars" aria-hidden="true"></i>
  </button>
</template>

<style lang="scss" scoped>
button {
  color: var(--accent-color2);
  background-color: white;
  font-size: 22px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
}
</style>