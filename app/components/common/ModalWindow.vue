<template>
  <ClientOnly>
    <teleport to="body">
      <div v-if="isActive" class="modal-window" @click.self="close">
        <div class="modal-window__wrapper">
          <div class="modal-window__container">
            <h2 class="modal-window__title" v-html="title"></h2>

            <div class="modal-window__sticky-close">
              <button
                type="button"
                title="Закрыть"
                class="modal-window__x-btn x-btn"
                @click="close"
              >
                <SvgIcon class="x-btn__icon" name="x" width="40" height="40" />
              </button>
            </div>

            <slot />
          </div>
        </div>
      </div>
    </teleport>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
});

const store = useStore();

const isActive = computed(() => {
  return props.name ? !!store.modal[props.name] : false;
});

const close = () => {
  if (props.name) store.closeModal(props.name);
};

onMounted(() => {
  const handler = (e) => {
    if (e.key === "Escape") close();
  };
  window.addEventListener("keydown", handler);
  onUnmounted(() => window.removeEventListener("keydown", handler));
});
</script>

<style lang="less">
.modal-window {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 110;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
}

.modal-window__wrapper {
  position: relative;
  max-width: 1240px;
  width: 100%;
  max-height: calc(100vh - 60px);
  padding: 30px;
  overflow-y: auto;
}

.modal-window__sticky-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  transform: translate(50%, -50%);
}

.modal-window__container {
  position: relative;
  background: rgba(222, 222, 222, 1);
  padding: 30px 170px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
}

/* Responsive horizontal paddings: default reduced at breakpoints */
@media (max-width: 1439px) {
  .modal-window__container {
    padding: 30px 135px;
  }
}

@media (max-width: 799px) {
  .modal-window__container {
    padding: 30px 40px;
  }
}

@media (max-width: 399px) {
  .modal-window__container {
    padding: 30px 20px;
  }
}

.modal-window__title {
  display: inline-block;
  margin: 0;
  width: min(100%, 600px);
  box-sizing: border-box;
  padding: 10px 18px;
  background: @black;
  color: @white;
  font-family: @font2;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  left: 90px;
  transform: translateY(-50%);
  z-index: 1;
}

@media (max-width: 799px) {
  .modal-window__title {
    width: min(450px, 75%); /* do not exceed 75% of the form width */
    left: 40px; /* small left offset */
  }
}

@media (max-width: 399px) {
  .modal-window__title {
    width: min(100%, 225px);
    left: 16px;
    padding: 8px 12px;
    font-size: 14px;
  }
}

.modal-window__x-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: @black;
  color: @white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.x-btn__icon {
  width: 25px;
  height: 25px;
  display: block;
  color: currentColor;
}
</style>
