<script lang="ts" setup>
import { ref } from "vue";
import { useCart } from "~/stores/cart";
import type { CartDTO, CartItemDTO } from "~/types/ShoppingCart/Cart";
// compiler macro
definePageMeta({
  layout: "cart",
});

const isLoaded = ref(false);
const itemsBrandList = ref([]);
const orderNote = ref("");
const cart = useCart();

const currentCart = computed(() => {
  return cart.cart;
});

const sortItemsByBrand = (cartToSort: CartDTO) => {
  const itemsByBrand = [];
  let index = 0;

  cartToSort?.items?.forEach((item) => {
    const brandId = item.brandId;
    const brandName = item.brand?.name;
    let brandIndex = -1;

    for (let i = 0; i < itemsByBrand.length; i++) {
      if (itemsByBrand[i].brandId === brandId) {
        brandIndex = i;
        break;
      }
    }

    if (brandIndex === -1) {
      itemsByBrand.push({ brandId, brandName, items: [] });
      brandIndex = index;
      index++;
    }

    itemsByBrand[brandIndex].items.push(item);
  });

  itemsBrandList.value = itemsByBrand;
};

const addOrderNote = async () => {
  await cart.addOrderNoteToCart(orderNote.value);
};

async function removeItem(id: string) {
  await cart.removeFromCart(id);
  sortItemsByBrand(cart.cart);
}

if (process.client) {
  await cart.getCartDetail(true);
}

onMounted(async () => {
  if (useCookie("dsCustomer").value) {
    sortItemsByBrand(cart.cart);
    isLoaded.value = true;
  }
});
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <BannerSteps :value="1" />
    </PageHeader>
    <PageBody>
      <div
        v-show="
          (currentCart?.items?.length === 0 || !currentCart) &&
          isLoaded === true
        "
      >
        <FormCheckoutEmptyCart />
      </div>
      <div
        v-show="currentCart?.items?.length > 0"
        class="container mx-auto py-5 px-2"
      >
        <div>
          <h2 class="text-xl font-semibold">Twój koszyk</h2>
        </div>
        <PageSection>
          <div class="flex flex-col md:flex-row gap-5 w-full mt-5">
            <div class="md:w-2/3">
              <div v-for="(item, index) in itemsBrandList">
                <GridCheckout
                  :currentNumberShipment="index + 1"
                  :cartId="currentCart.id"
                  :numberShipments="Object.keys(itemsBrandList).length"
                  :item="item"
                  :removeItemMethod="removeItem"
                />
              </div>
            </div>
            <div
              class="md:w-1/3 bg-slate-200 h-min sticky !top-31 rounded-lg border-1 border-slate-300 shadow-xl text-blue-800 p-5"
            >
              <div class="mb-5">
                <span class="text-lg font-semibold">Twoje zamówienie:</span>
              </div>
              <div>
                <div class="border-b-2 border-gray-300">
                  <div class="flex justify-between">
                    <span>Wartość koszyka (netto):</span>
                    <span>{{ currentCart?.subTotal?.toFixed(2) }} zł</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Wartość koszyka (brutto):</span>
                    <span>{{ currentCart?.subTotalGross?.toFixed(2) }} zł</span>
                  </div>
                  <div class="flex mt-3 justify-between">
                    <span>Dostawa (netto):</span>
                    <span
                      >{{ currentCart?.shippingAmount?.toFixed(2) }} zł</span
                    >
                  </div>
                  <div class="flex mb-3 justify-between">
                    <span>Dostawa (brutto):</span>
                    <span
                      >{{
                        currentCart?.shippingAmountGross?.toFixed(2)
                      }}
                      zł</span
                    >
                  </div>
                </div>
                <div class="flex my-3 justify-between">
                  <span class="self-center text-lg font-500"
                    >Razem do zapłaty</span
                  >
                  <span class="font-semibold text-2xl"
                    >{{ currentCart?.orderTotal?.toFixed(2) }} zł</span
                  >
                </div>
              </div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Wiadomość do sprzedawcy</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Informacje dodatkowe..."
                v-model="orderNote"
              ></textarea>
              <NuxtLink
                class="!block items-center !px-0 mt-3 text-center justify-center rounded-md border border-transparent bg-green-400 py-3 text-base font-medium text-white shadow-sm hover:text-white hover:bg-green-500"
                text="Złóż zamówienie"
                @click="addOrderNote"
                to="onestep"
              ></NuxtLink>
              <div class="my-3">
                <span>Skorzystaj z rabatu:</span>
              </div>
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class="appearance-none border-b-2 border-emerald-200 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  style="background: transparent"
                  type="text"
                  placeholder="Kod rabatowy"
                  aria-label="Full name"
                />
                <button
                  class="flex-shrink-0 bg-emerald-400 hover:bg-emerald-500 border-emerald-400 hover:border-emerald-500 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Aktywuj
                </button>
              </div>
              <div class="w-full mt-2">
                <span class="block text-center">Masz pytania?</span>
              </div>
              <div class="flex mt-2">
                <NuxtLink
                  class="!block items-center w-full py-4 !px-0 text-center justify-center rounded-md border border-transparent bg-blue-900 text-14px font-800 text-orange-400 shadow-md hover:text-orange-400 hover:bg-blue-800"
                  text="Zadzwoń do nas"
                  to="/contact"
                ></NuxtLink>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
