<script lang="ts" setup>
const props = defineProps({
  products: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <ul class="grid sm:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-7">
    <li v-for="product in products" :key="product.productId">
      <div
        class="max-w-2xl mx-auto relative transform hover:scale-102 hover:shadow-2xl transition duration-400 ease-in-out rounded-lg"
      >
        <div class="bg-white py-2 shadow-md rounded-lg max-w-sm">
          <img
            :data-src="
              product.thumbnailImage.mediaLangs[0].filePath
                ? product.thumbnailImage.mediaLangs[0].filePath
                : product.thumbnailImage.filePath
            "
            :alt="
              product.thumbnailImage.mediaLangs[0].altAttribute
                ? product.thumbnailImage.mediaLangs[0].altAttribute
                : product.thumbnailImage.altAttribute
            "
            class="lazyload mx-auto w-[100px] h-[100px] object-cover"
          />
          <div class="px-2 pb-5">
            <h3
              class="content card-text mb-3 text-center text-blue-900 font-600 text-sm tracking-tight h-[60px]"
            >
              {{ product.name }}
            </h3>
            <div class="text-center h-10">
              <div
                class="h-full relative flex flex-col justify-center items-center"
              >
                <span
                  v-if="product.oldPrice"
                  class="text-xs text-red-600 font-semibold ml-7 line-through absolute -top-1"
                >
                  {{ product.oldPrice }} zł
                </span>
                <span class="text-xl font-bold text-blue-500 block">
                  {{ product.price.toFixed(2) }} zł
                </span>
              </div>
            </div>
            <div class="pt-3">
              <NuxtLink
                :to="'/' + product.slug"
                class="block w-full text-center text-blue-900 rounded-xl font-600 bg-emerald-400 hover:bg-emerald-300/90 py-4 text-sm md:text-14px font-bold"
              >
                Sprawdź produkt!
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style>
.truncate {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
