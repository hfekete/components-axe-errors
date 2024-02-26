<script setup lang="ts">
const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt',
  'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref(people[0])
</script>

<template>
  <div>
    <h1>Example page for uselect menu issues</h1>
    <label for="example-select-menu">Example country select</label>
    <USelectMenu id="example-select-menu" v-model="selected" :options="people" />
  </div>
</template>
