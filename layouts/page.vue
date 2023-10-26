<script lang="ts" setup></script>
<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNavbar ref="navbar" />
      </slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
