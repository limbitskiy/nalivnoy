<script>
export default {
  name: "HtmlOutput",
  props: ["data"],
};
</script>

<template>
  <div v-html="this.data"></div>
</template>

<style lang="scss" scoped>
div {
  line-height: 1.5;
}
</style>