<template>
  <main :data-sb-object-id="page.__id">
    <h1 data-sb-field-path="title">{{ page.title }}</h1>
  </main>
</template>

<script setup lang="ts">
import { contentChangeEmitter } from "~~/utils/emitter";

const route = useRoute();
const { data: page, refresh } = await useAsyncData(() =>
  $fetch('/api/page', {
    method: 'post',
    body: '/' + ([...route.params.slug] || []).join('/'),
  })
);

contentChangeEmitter.on('change', () => {
      console.log(`There was a change!`);
      refresh();
    })
</script>
