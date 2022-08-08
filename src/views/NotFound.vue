<template>
  <div class="section small-container">
    <div class="title-box">
      <h2 class="section-title">
        <!-- {{ localize.notFoundTitle }} -->
        not found
      </h2>
      <router-link to="/">
        <p class="section-subtitle">
          <!-- {{ localize.notFoundSubtitle }} -->
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
