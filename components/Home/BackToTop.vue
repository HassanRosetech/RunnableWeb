<template>
  <div>
    <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
      ⬆
    </button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 300; // Show button after 300px scroll
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background: #5eb9f0;
  color: #fff;
  border: 1px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
}
.scroll-to-top:hover {
  background: transparent;
}
</style>
