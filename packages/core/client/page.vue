<script lang="ts" setup>
import { store } from '@koishijs/client'
</script>

<template>
  <k-layout main="page-profile">
    <k-content v-if="store.user">
      TODO……
    </k-content>
  </k-layout>
</template>
