<template>
  <section class="wrapper !bg-[#ffffff]">
    <div
      class="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center"
    >
      <div
        class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 !mb-[4.5rem] items-center"
      >
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 max-w-full xl:!order-2 lg:!order-2"
        >
          <figure class="m-0 p-0">
            <img
              class="img-auto"
              src="~/assets/img/illustrations/i21.png"
              srcset="~/assets/img/illustrations/i21@2x.png 2x"
              alt="image"
            />
          </figure>
        </div>
        <!-- /column -->
        <div
          class="md:w-10/12 md:!ml-[8.33333333%] lg:!ml-0 lg:w-5/12 xl:!ml-0 xl:w-5/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 max-w-full text-center lg:text-left xl:text-left"
        >
          <h1
            class="xl:!text-[2.7rem] !text-[calc(1.395rem_+_1.74vw)] !leading-[1.15] !mb-5 md:mx-[-1.25rem] lg:mx-0 !mt-7"
          >
            A digital agency
            <br class="xl:!hidden lg:!hidden md:!hidden" />specializing on
            <br />
            <br class="xl:!hidden lg:!hidden md:!hidden" /><span
              class="rotator-fade !text-[#5eb9f0]"
            >
              {{ currentText }}
            </span>
          </h1>
          <p class="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-7">
            We are an award winning design agency that strongly believes in the
            power of creative ideas.
          </p>
          <span
            ><a
              class="btn btn-lg btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem] !mr-2"
              >Get Started</a
            ></span
          >
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <!-- <HomeClients></HomeClients> -->
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- /.overflow-hidden -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      texts: ["mobile design", "web design", "graphic design"],
      currentIndex: 0,
      currentText: "web design",
    };
  },
  mounted() {
    this.startTextRotation(2000); // Change text every 2 seconds
  },
  methods: {
    startTextRotation(interval) {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentIndex];
      }, interval);
    },
  },
};
</script>

<style scoped>
div {
  font-size: 24px;
  text-align: center;
}
</style>
