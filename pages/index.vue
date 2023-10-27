<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: "page",
});

const config = useRuntimeConfig().public;
const $gtm = useGTM();
$gtm.enable();

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Olmag.pl - Zaopatrzenie magazynu",
  url: "https://olmag.pl",
  currenciesAccepted: "PLN",
  logo: {
    "@type": "ImageObject",
    url: "https://olmag.pl/assets/logo.webp",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Polna 6",
    addressLocality: "Przytoczna",
    addressRegion: "Lubuskie",
    postalCode: "66-340",
    addressCountry: "PL",
  },
  telephone: "(48) 698-304-621",
  email: "sklep@olmag.pl",
  openingHours: "Mo-Fr 07:30-17:00",
  sameAs: [],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://olmag.pl/szukaj?query={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}));

useHead({
  link: [{ rel: "canonical", href: "https://olmag.pl/" }],
});
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection class="section__welcome text-emerald-400">
        <div class="bg-cover bg-no-repeat bg-blue-900 bg-center h-full">
          <div class="container mx-auto py-2">
            <header class="text-center mt-2">
              <h1 class="text-sm md:text-2xl md:font-bold">
                Olmag.pl - zaopatrzenie magazynów.
              </h1>
              <h2 class="text-sm my-4 md:text-2xl md:font-semibold">
                Odkryj magazynowanie na wyższym poziomie – sprawdź nasze
                pojemniki magazynowe i drabiny aluminiowe już dziś!
              </h2>
            </header>
          </div>
        </div>
      </PageSection>
      <!-- <PageSection>
        <SwiperBanner />
      </PageSection> -->
    </PageBody>
  </PageWrapper>
</template>
