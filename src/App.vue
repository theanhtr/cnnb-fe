<template>
  <div class="app-layout flex-column">
    <div class="toast-group">
      <tta-toast
        v-for="toast in $store.state.toasts"
        :key="toast.id"
        :type="toast.type"
        @clickCloseToast="closeToast(toast.id)"
      >
        {{ toast.text }}</tta-toast
      >
    </div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layout/header/TheHeader.vue";
import TheFooter from "./components/layout/footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheHeader,
  },
  methods: {
    /**
     * xử lý xóa 1 toast
     * @author: TTANH (01/07/2023)
     * @param {string} id id của toast
     */
    closeToast(id) {
      try {
        this.$store.commit("removeToast", { id: id });
      } catch (error) {
        console.log("🚀 ~ file: App.vue:36 ~ closeToast ~ error:", error);
      }
    },
  },
};
</script>

<style>
@import url(./css/main.css);
.app-layout {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
