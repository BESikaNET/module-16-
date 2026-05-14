<template>
  <component
    v-if="iconPath"
    class="svg-icon"
    :is="iconPath"
    :width="width"
    :height="height"
  />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const icons = import.meta.glob("@/assets/svg-icons/*.svg");

const iconPath = computed(() => {
  if (!props.name) {
    return null;
  }

  const iconKey = Object.keys(icons).find((key) =>
    key.endsWith(`/${props.name}.svg`)
  );

  return iconKey ? defineAsyncComponent(icons[iconKey]) : null;
});
</script>
