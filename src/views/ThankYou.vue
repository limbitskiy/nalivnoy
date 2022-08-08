<script>
export default {
  name: "ThankYou",
};
</script>

<template>
  <main>
    <div class="small-container">
      <div class="section">
        <div class="title-box">
          <h2 class="section-title">
            {{ localize.tyTitle }}
          </h2>
          <p class="section-subtitle">
            {{ localize.tyMsg }}
          </p>
        </div>
        <div class="btn-group btn-center">
          <TheBtn @click="this.$router.push('/')">{{
            localize.homeBtn
          }}</TheBtn>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
</style>