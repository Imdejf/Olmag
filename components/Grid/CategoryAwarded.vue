<script lang="ts" setup>
const props = defineProps({
  categories: {
    type: Object,
    default: null,
  },
});
</script>

<template>
  <ul class="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-7 my-8">
    <li v-for="category in categories" :key="category.categoryId">
      <NuxtLink
        :to="'/category/' + category.slug"
        class="group relative block w-full md:w-56 h-[250px]"
      >
        <span
          class="absolute inset-0 border-2 rounded-3xl border-dashed border-gray-400"
        ></span>

        <div
          class="relative flex flex-col h-full transform items-end rounded-3xl bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        >
          <div
            class="w-full items-center group-hover:h-1px h-3/5 flex justify-center group-hover:opacity-0 group-hover:h-0"
          >
            <img
              :data-src="
                category.thumbnailImage.mediaLangs[0].filePath
                  ? category.thumbnailImage.mediaLangs[0].filePath
                  : category.thumbnailImage.filePath
              "
              :alt="
                category.thumbnailImage.mediaLangs[0].altAttribute
                  ? category.thumbnailImage.mediaLangs[0].altAttribute
                  : category.thumbnailImage.altAttribute
              "
              height="90"
              width="90"
              class="lazyload"
            />
          </div>
          <div
            class="px-2 pb-4 m-auto group-hover:h-1px transition-opacity h-2/5 group-hover:absolute group-hover:opacity-0"
          >
            <h3
              class="mt-4 group-hover:h-1px text-sm md:text-base font-600 text-center group-hover:opacity-0"
            >
              {{
                category.categoriesLang[0].name
                  ? category.categoriesLang[0].name
                  : category.name
              }}
            </h3>
          </div>
          <div
            class="absolute text-center w-full h-full opacity-0 transition-opacity group-hover:relative group-hover:opacity-100"
          >
            <h3 class="mt-4 text-sm md:text-base font-600">
              {{
                category.categoriesLang[0].name
                  ? category.categoriesLang[0].name
                  : category.name
              }}
            </h3>
            <template
              v-if="
                category.categoriesLang[0].description || category.description
              "
            >
              <div
                class="visible-text text-xs md:text-sm mt-2"
                v-html="
                  category.categoriesLang[0].description
                    ? category.categoriesLang[0].description
                    : category.description
                "
              ></div>
            </template>
          </div>
          <div
            class="w-full h-1/5 bg-blue-900 text-emerald-300 text-center text-xs rounded-b-3xl"
          >
            <span class="my-3 inline-block"
              >{{ category.productCategoryCount }} produktów</span
            >
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
