<script lang="ts" setup>
const showCookie = ref(false);
const accept = useCookie("cookie");

const acceptCookie = () => {
  accept.value = true;
};

const handleShowCookie = () => {
  setTimeout(() => {
    showCookie.value = true;
  }, 500);
};

handleShowCookie();
</script>

<template>
  <div
    class="fixed left-0 bottom-0 z-40 transition duration-500 ease-in-out"
    :class="showCookie && !accept ? 'opacity-1' : 'opacity-0'"
    style="z-index: 9999"
  >
    <div
      class="fixed sm:left-4 bottom-0 md:bottom-5 rounded-lg bg-gray-100 shadow-2xl w-full sm:w-1/2 xl:w-1/4 max-w-[400px] overflow-hidden"
    >
      <div>
        <div class="relative overflow-hidden px-8 pt-8">
          <div
            width="80"
            height="77"
            class="absolute -top-10 -right-10 text-yellow-500"
          >
            <svg
              width="120"
              height="119"
              viewBox="0 0 120 119"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M6.38128 49.1539C3.20326 32.893 13.809 17.1346 30.0699 13.9566L70.3846 6.07751C86.6455 2.89948 102.404 13.5052 105.582 29.7661L113.461 70.0808C116.639 86.3417 106.033 102.1 89.7724 105.278L49.4577 113.157C33.1968 116.335 17.4384 105.729 14.2604 89.4686L6.38128 49.1539Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="text-2xl flex flex-col pb-4">
            <small>Cześć..</small>
            <span class="text-3xl font-bold">Używamy ciasteczek !</span>
          </div>
          <div class="pb-4 text-base">
            <!--googleoff: all-->
            <p>
              W naszym sklepie internetowym wykorzystujemy pliki cookies, aby
              ulepszać jakość świadczonych usług, dostosowywać zawartość do
              Waszych preferencji, a także personalizować i oceniać efektywność
              reklam prezentowanych w ramach sieci reklamowych. Możecie Państwo
              zarządzać plikami cookies, zmieniając ustawienia przeglądarki
              internetowej. Kontynuowanie korzystania ze sklepu bez zmiany
              ustawień przeglądarki oznacza zgodę na ich użycie. Szczegółowe
              informacje na temat cookies znajdą Państwo w naszej polityce
              prywatności.
              <NuxtLink :to="'/privacy-policy'"> Dowiedz się więcej. </NuxtLink>
            </p>
            <!--googleon: all-->
          </div>
        </div>
      </div>
      <div
        class="w-full flex justify-center items-center border-t border-solid border-gray-200"
      >
        <!--googleoff: all-->
        <button
          @click="acceptCookie"
          class="flex-1 px-4 py-3 text-gray-500 hover:text-white bg-emerald-300 hover:bg-emerald-400 duration-150"
        >
          Rozumiem
        </button>
        <!--googleon: all-->
      </div>
    </div>
  </div>
</template>
