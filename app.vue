<script lang="ts" setup>
const isScriptReady = ref(false);

setTimeout(() => {
  isScriptReady.value = true;
}, 5000);

watchEffect(() => {
  if (isScriptReady.value) {
    useHead({
      script: [
        {
          src: "https://www.czater.pl/assets/modules/chat/js/chat.js",
          async: true,
          tagPosition: "bodyClose",
        },
        {
          innerHTML: `
              window.$czater = {
                tok: "5d4c696e9ee36d71ff6f20f8c5a2dc3ef0e3c4fe",
                domain: "https://www.czater.pl/",
                login: undefined,
                email: undefined,
              };
            `,
          tagPosition: "bodyClose",
        },
      ],
    });
  }
});
</script>

<template>
  <Html lang="pl">
    <Body class="text-blue-900 overflow-x-hidden font-nunito bg-gray-50">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
