<script lang="ts" setup>
import { useApplication } from "~/stores/application";
const application = useApplication();
</script>
<template>
  <section id="navbar-banner" class="header__banner">
    <slot name="banner" />
  </section>
</template>
