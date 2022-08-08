<template>
  <div class="product-props">
    <h3 class="details-subtitle">Характеристики:</h3>
    <table class="props-table">
      <tr v-for="(propkey, propvalue) in product.props" :key="propvalue">
        <td>{{ propvalue }}</td>
        <td>{{ propkey }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PropsTable",
  props: { product: { required: true } },
};
</script>

<style lang="scss" scoped>
.product-props {
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;

  h3 {
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #e8e8e8;
  }

  th {
    padding: 5px;
    text-align: left;
    font-weight: normal;
    background: #e5e2e2;
  }
  td {
    width: 50%;
    padding: 10px;
    border-top: 1px #e5e5e5 solid;
    &:first-child {
      border-right: 1px #e5e5e5 solid;
    }
  }
}
</style>