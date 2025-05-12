<template>
  <section id="about" class="wrapper !bg-[#ffffff]">
    <div class="container pt-10 pb-[4.5rem] text-center">
      <div class="flex flex-wrap items-center">
        <div class="xl:w-5/12 w-full text-center lg:text-left px-4">
          <h1 class="text-[2rem] leading-[1.15] mb-5 mt-7">Who We Are</h1>
          <p class="text-[1.1rem] leading-[1.55] font-medium mb-4">
            RunnableWeb is a digital software agency specializing in
          </p>

          <h1 class="h-10 relative overflow-hidden">
            <transition name="slide" mode="out-in">
              <span
                :key="currentTextKey"
                class="block absolute text-[#5eb9f0] text-3xl"
              >
                {{ currentText }}
              </span>
            </transition>
          </h1>

          <p class="text-[1.1rem] leading-[1.55] font-medium mb-7">
            We combine proven technologies with modern development workflows to
            deliver scalable, high-quality solutions—fast. <br />
            We don't just build apps. We<strong> partner with you </strong> to
            design and deliver impactful software products that evolve with your
            business.
          </p>

          <a
            class="btn btn-lg btn-sky text-white bg-[#5eb9f0] rounded-full"
            href="#"
          >
            Get Started
          </a>
        </div>

        <div class="xl:w-7/12 w-full px-4">
          <figure>
            <img
              src="~/assets/img/illustrations/i21.png"
              srcset="~/assets/img/illustrations/i21@2x.png 2x"
              alt="image"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      texts: ["Cross-Platform", "Cloud-Connected", "AI-Accelerated"],
      currentIndex: 0,
      currentText: "Cross-Platform",
      currentTextKey: 0,
    };
  },
  mounted() {
    this.startTextRotation(3000);
  },
  methods: {
    startTextRotation(interval) {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentIndex];
        this.currentTextKey++;
      }, interval);
    },
  },
};
</script>
<style scoped>
.slide-enter-active {
  transition: all 1.2s ease;
}
.slide-leave-active {
  transition: opacity 0.1s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-from {
  opacity: 0;
}
.slide-leave-to {
  opacity: 0;
}
</style>
