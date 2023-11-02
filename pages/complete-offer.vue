<script lang="ts" setup>
definePageMeta({
  layout: "page",
});
</script>
<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle
        :textNav="[{ text: 'Realizacja oferty', slug: 'complete-offer' }]"
      >
      </PageTitle>
    </PageHeader>
    <PageBody>
      <div class="bg-white container mx-auto rounded-xl shadow-2xl p-10 mb-10">
        <h1 class="text-center text-3xl font-semibold text-blue-900">
          Zrealizuj ofertę
        </h1>
        <img
          src="/assets/content/agreement.webp"
          width="250"
          height="250"
          class="mx-auto mt-10"
        />
        <p class="text-md text-center my-5 font-bold">
          Poprzez nasz system szybko zrealizujesz ofertę jedyne co musisz zrobić
          to podać numer oferty a następnie wypełnić formularz do zamówienia.
        </p>
        <div class="text-center">
          <VForm
            class="mx-auto max-w-xs"
            :validation-schema="schema"
            :initial-values="initialValues"
            v-slot="{ meta: formMeta, errors: formErrors }"
            @submit="handleSubmit"
            @invalid-submit="invalidHandleLogin"
          >
            <FormVTextInput
              type="text"
              name="offerNumber"
              label="offerNumber"
              placeholder="Numer oferty"
              :debug="debug"
              leftIcon=""
            />
            <button
              class="w-full px-6 py-2.5 bg-emerald-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-500 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-500 active:shadow-lg transition duration-150 ease-in-out"
            >
              Zrealizuj ofertę
            </button>
          </VForm>
        </div>
      </div>
    </PageBody>
  </PageWrapper>
</template>
