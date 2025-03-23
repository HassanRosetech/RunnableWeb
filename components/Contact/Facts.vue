<template>
  <section
    id="facts"
    class="wrapper image-wrapper bg-auto no-overlay bg-image !text-center bg-map bg-[center_center] bg-no-repeat !bg-scroll relative z-[0]"
    data-image-src=""
  >
    <div
      class="container pt-0 pb-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 xl:pb-32 lg:pb-32 md:pb-32"
    >
      <div class="flex flex-wrap mx-[-15px]">
        <div
          class="lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
        >
          <h3
            class="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8 xl:!px-14"
          >
            We are trusted by over 5000+ clients. Join them now and grow your
            business.
          </h3>
        </div>
        <!-- /.row -->
      </div>
      <!-- /column -->
      <div class="flex flex-wrap mx-[-15px]">
        <div
          class="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto"
        >
          <div
            class="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
          >
            <div
              class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
            >
              <h3
                class="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#3f78e0]"
              >
                <HomeCounter :targetValue="7518" />
              </h3>
              <p class="text-[0.8rem] font-medium !mb-0">Completed Projects</p>
            </div>
            <!--/column -->
            <div
              class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
            >
              <h3
                class="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#3f78e0]"
              >
                <HomeCounter :targetValue="5472" />
              </h3>
              <p class="text-[0.8rem] font-medium !mb-0">Satisfied Customers</p>
            </div>
            <!--/column -->
            <div
              class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
            >
              <h3
                class="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#3f78e0]"
              >
                <div>
                  <HomeCounter :targetValue="2184" />
                </div>
              </h3>
              <p class="text-[0.8rem] font-medium !mb-0">Expert Employees</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>
<style>
#facts {
  background-image: url("~/assets/img/map.png");
}
h2 {
  color: #3f78e0;
}
</style>
