<script lang="ts" setup>
// compiler macro
const propsInput = defineProps({
  size: {
    type: String,
    default: "md",
  },
  validate: {
    type: String,
    default: "md",
  },
  value: {
    type: Boolean,
    required: false,
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  fontSize: {
    type: Number,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: String,
    default: "",
  },
  debug: {
    type: Boolean,
    default: false,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  visable: {
    type: Boolean,
    default: true,
  },
  css: {
    type: String,
    required: false,
  },
  nipActive: {
    type: Boolean,
    default: false,
  },
});
const emitInput = defineEmits(["update:modelValue"]);
const slots = useSlots();

const nip = ref("");

// list styles
const paddingStyles = reactive<{
  [key: string]: string;
}>({
  xs: "px-2 py-1.5",
  sm: "px-4 py-1.9",
  md: "px-6 py-2",
  lg: "px-8 py-4",
});
const fontSizeStyles = reactive<{
  [key: string]: string;
}>({
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-sm",
});

// states
const modelValue = useSyncProps<string>(propsInput, "modelValue", emitInput);
const havePreEl = computed(
  () =>
    typeof slots.prefix !== "undefined" ||
    typeof slots["prefix-disabled"] !== "undefined"
);
const haveSuEl = computed(() => typeof slots.suffix !== "undefined");
const selectedBorderStyle = computed(() => "focus:bg-white");
const selectedOnHoverBorderStyle = computed(
  () => "focus:border-gray-400 focus:outline-none"
);
const selectedPaddingStyle = computed(
  () => paddingStyles[propsInput.size] || paddingStyles.md
);
const selectedFontSizeStyle = computed(
  () => fontSizeStyles[propsInput.size] || fontSizeStyles.md
);
</script>

<template>
  <div :class="`text-input-container  relative flex`">
    <div
      v-if="slots['prefix-disabled']"
      :class="`flex rounded-l  bg-gray-100 text-gray-500 border-1 ${selectedBorderStyle}`"
    >
      <slot name="prefix-disabled" />
    </div>
    <div
      v-if="slots.prefix"
      :class="`flex rounded-l  border ${selectedBorderStyle}`"
    >
      <slot name="prefix" />
    </div>

    <div class="text-field my-2 w-full">
      <span
        v-show="textarea"
        :class="` ${leftIcon ? 'ml-6' : ''} ${selectedFontSizeStyle} `"
        >{{ placeholder }}</span
      >
      <VField
        :as="textarea ? 'textarea' : ''"
        :name="name"
        :v-validate="validate"
        :class="
          textarea
            ? `flex rounded-l  bg-gray-100 text-gray-500 border-1 border ${selectedBorderStyle} ${css}`
            : ''
        "
        v-slot="{ field, meta, errors }"
      >
        <input
          v-show="!nipActive"
          required
          v-bind="field"
          :class="` w-full bg-gray-100  ${css} ${
            !meta.valid && meta.touched == true
              ? 'border-red-300'
              : 'border-gray-300'
          } ${
            visable == true ? '' : 'pointer-events-none bg-orange-300 '
          } ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
          :type="type"
        />
        <input
          v-show="nipActive"
          required
          v-bind="field"
          :class="` w-full border-1  bg-gray-100  ${css} ${
            !meta.valid && meta.touched == true
              ? 'border-red-300'
              : 'border-gray-300'
          } ${
            visable == true ? '' : 'pointer-events-none bg-gray-300'
          } ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
          :type="type"
          pattern="\d{3}-\d{3}-\d{2}-\d{2}"
          maxlength="13"
          oninput="this.value=this.value.replace(/[^\d]/g,'').replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2-$3-$4')"
        />
        <span
          :class="`absolute color text-gray-400 top-2 left-1 is-left ${
            leftIcon == '' ? 'hidden' : ''
          }`"
        >
          <Icon :name="leftIcon" class="h-5 w-5" />
        </span>
        <span class="icon is-small is-right" v-if="meta.valid && meta.touched">
          <i class="fas fa-check has-text-success"></i>
        </span>
        <span
          class="absolute color text-gray-400 top-2 right-2 is-left"
          v-else-if="!meta.valid && meta.touched"
        >
          <span
            ><Icon name="majesticons:close" class="text-red-500 w-4 h-4"
          /></span>
        </span>
        <VErrorMessage
          :name="name"
          as="div"
          class="help text-red-600 text-sm"
        />
        <div class="debug" v-if="debug">
          <pre>{{ errors }}</pre>
          <pre>{{ meta }}</pre>
        </div>
      </VField>
      <!-- <label
        v-show="!textarea"
        :class="` ${leftIcon ? 'ml-6' : ''} ${selectedFontSizeStyle}`"
        >{{ placeholder }}</label
      > -->
      <div class="text-container">
        <label
          v-show="!textarea"
          :class="` ${leftIcon ? 'ml-6' : ''} ${
            fontSize ? 'text-sm' : selectedFontSizeStyle
          }`"
          class="text w-max"
        >
          {{ placeholder }}
        </label>
      </div>
    </div>
    <div
      v-if="slots.suffix"
      :class="`flex rounded-r border  ${selectedBorderStyle}`"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>
