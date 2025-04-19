<template>
  <div id="projects" class="overflow-hidden">
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

      <UCarousel v-slot="{ item }" arrows :items="items" v-model="current">
        <img
          :src="item.image"
          width="540"
          height="540"
          class="rounded-lg mx-auto"
        />

        <!-- Content Section -->
        <div class="text-center mt-4 px-4">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2 md:text-3xl">
            {{ item.title }}
          </h3>

          <p
            class="text-gray-600 text-sm leading-relaxed mx-auto max-w-prose md:text-base"
          >
            {{ item.description }}
          </p>
        </div>
      </UCarousel>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const items = [
  {
    image: "/images/projects/DELIVERY.png?random=1",
    title: "Tower Internal Project",
    description:
      "A secure enterprise-grade application for managing internal processes and technical operations.",
  },
  {
    image: "/images/projects/DELIVERY.png?random=2",
    title: "jOrder",
    description:
      "A scalable white-label delivery SaaS platform for providers to manage and dispatch orders with ease.",
  },
  {
    image: "/images/projects/DELIVERY.png?random=3",
    title: "Nidan Internal Projects",
    description:
      " A suite of tools for internal analytics, resource management, and workflow automation.",
  },
];

const current = ref(0);
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % items.length;
  }, 1000); // 3 seconds interval
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
