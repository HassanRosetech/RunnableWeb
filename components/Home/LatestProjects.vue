<template>
  <div class="overflow-hidden">
    <div
      class="container pt-14 xl:pt-7 lg:pt-7 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24"
    >
      <div class="flex flex-wrap mx-[-15px]">
        <div
          class="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center"
        >
          <h2
            class="!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]"
          >
            Latest Projects
          </h2>
          <h3
            class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-10"
          >
            Check out some of our awesome projects with creative ideas and great
            design.
          </h3>
        </div>
        <!-- /column -->
      </div>

      <UCarousel v-slot="{ item }" arrows :items="items">
        <img :src="item" width="540" height="540" class="rounded-lg" />
      </UCarousel>
      <!-- /.row -->

      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
    <div class="divider !text-[#f0f8fe] mx-[-0.5rem]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path
          fill="currentColor"
          d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
        />
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
const items = [
  "https://picsum.photos/640/640?random=1",
  "https://picsum.photos/640/640?random=2",
  "https://picsum.photos/640/640?random=3",
  "https://picsum.photos/640/640?random=4",
  "https://picsum.photos/640/640?random=5",
  "https://picsum.photos/640/640?random=6",
];
</script>
