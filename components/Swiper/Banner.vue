<template>
  <div
    class="swipper-banner mt-2 max-w-[1200px] h-[400px] banner-shadow rounded-t-xl mx-auto"
  >
    <Swiper
      :modules="modules"
      :slidesPerView="1"
      :centeredSlides="true"
      :spaceBetween="30"
      :navigation="true"
      :virtual="true"
      class="mySwiper"
      @swiper="setSwiperRef"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        :virtualIndex="index"
        class="rounded-t-xl"
        ><img width="1200" height="400" class="rounded-t-xl" :src="slide.img"
      /></SwiperSlide>
    </Swiper>
    <ul
      class="bg-white text-lg p-3 flex justify-center gap-20 items-center banner-shadow-button rounded-b-xl"
    >
      <li
        @click="slideTo(1)"
        class="cursor-pointer px-4 py-2 bg-transparent outline-none hover:coursor-pointer"
      >
        Slide 1
      </li>
      <li
        @click="slideTo(2)"
        class="cursor-pointer px-4 py-2 bg-transparent outline-none"
      >
        Slide 250
      </li>
      <li
        @click="slideTo(3)"
        class="cursor-pointer px-4 py-2 bg-transparent outline-none"
      >
        Slide 500
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import { Pagination, Navigation, Virtual } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Create array with 500 slides
    const slides = ref([
      {
        img: "/assets/banner/tlo-banner.webp",
        value: 1,
      },
      {
        img: "/assets/logo.webp",
        value: 2,
      },
    ]);
    let swiperRef = null;
    let appendNumber = 500;
    let prependNumber = 1;

    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0);
    };
    const append = () => {
      slides.value = [...slides.value, "Slide " + ++appendNumber];
    };
    const prepend = () => {
      slides.value = [
        `Slide ${prependNumber - 2}`,
        `Slide ${prependNumber - 1}`,
        ...slides.value,
      ];
      prependNumber -= 2;
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };
    return {
      slides,
      swiperRef: null,
      appendNumber,
      prependNumber,
      setSwiperRef,
      slideTo,
      append,
      prepend,
      modules: [Pagination, Navigation, Virtual],
    };
  },
};
</script>

<style>
.swipper-banner .swiper {
  border-top-left-radius: 0.75rem !important;
  border-top-right-radius: 0.75rem !important;
}

.banner-shadow {
  -webkit-box-shadow: 0px 0px 13px 1px #94a3b8;
  -moz-box-shadow: 0px 0px 13px 1px #94a3b8;
  box-shadow: 0px 0px 13px 1px #94a3b8;
}

.banner-shadow-button {
  -webkit-box-shadow: 0px 0px 13px 1px #94a3b8;
  -moz-box-shadow: 0px 0px 13px 1px #94a3b8;
  box-shadow: 0px 0px 13px 1px #94a3b8;
}

.append-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
}

.append-buttons button {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  position: relative;
}

.append-buttons button:not(:last-child)::after {
  content: "|";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #ccc;
}
</style>
