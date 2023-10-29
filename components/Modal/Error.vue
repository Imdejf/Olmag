<script lang="ts" setup>
import { defineEmits } from "vue";

const emits = defineEmits(["update:value"]);

function updateValue() {
  emits("update:value", false);
}
</script>
<template>
  <div
    class="fixed w-full h-full top-0 z-10 overflow-hidden flex items-center justify-center"
  >
    <div
      class="bg-gray-300/60 absolute w-full h-full"
      @click="updateValue"
    ></div>
    <div class="bg-white rounded-lg p-8 text-center md:w-2/4 z-10">
      <p class="mb-2 font-bold">Szanowny Użytkowniku</p>
      <p>
        Pragniemy przeprosić za niedogodności, jakie napotkałeś podczas
        składania zamówienia w naszym systemie. <br />Rozumiemy, jak frustrujące
        mogą być takie sytuacje i chcielibyśmy zadośćuczynić za wszelkie
        kłopoty. <br />
        W ramach przeprosin chcielibyśmy przyznać Ci rabat na koszt transportu w
        wysokości:
      </p>
      <p class="font-bold text-emerald-400 text-4xl my-3">7%</p>
      <p>
        Mamy nadzieję, że to ten gest będzie dla Ciebie satysfakcjonujący i
        ponownie zaufasz naszym usługom. Aby odebrać rabat a zarazem złożyć
        zamówienie prosimy o kontakt z naszym zespołem pod numerem:
      </p>
      <p class="font-bold text-emerald-400 text-4xl my-3">+48 698 304 621</p>

      <p>Z poważaniem,</p>
      <p class="font-bold">Zespół Olmag.pl</p>
      <div class="mt-5">
        <button
          @click="updateValue"
          class="items-center rounded border-2 w-full border-emerald-400 px-8 py-3 text-emerald-400 hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring duration-400"
        >
          <span class="text-md font-semibold"> Zamknij </span>

          <Icon
            name="material-symbols:arrow-right-alt-rounded"
            class="w-6 h-6"
          />
        </button>
      </div>
    </div>
  </div>
</template>
