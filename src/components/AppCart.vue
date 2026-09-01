<script lang="ts" setup>
type Product = {
  id: string
  name: string
  price: number
}

type Products = Array<Product>

type ComponentProps = {
  products: Products
}

defineProps<ComponentProps>()
</script>

<template>
  <ul v-for="{ id, name, price } in products" :key="id">
    <li>Name: {{ name }}, Price: {{ price }}</li>
  </ul>
</template>
