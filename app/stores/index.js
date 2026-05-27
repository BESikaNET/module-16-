export const useStore = defineStore("index", () => {
  const navActive = ref(false);
  const modal = reactive({});

  const getModal = computed(() => Object.values(modal).some((item) => item));

  const closeModal = (name) => {
    if (name) modal[name] = false;
  };

  const openModal = (name) => {
    if (name) modal[name] = true;
  };

  return {
    navActive,
    modal,
    getModal,
    closeModal,
    openModal,
  };
});
