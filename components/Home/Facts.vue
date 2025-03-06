<template>
  <section class="wrapper !bg-[#ffffff]">
    <div
      class="container pt-14 xl:pt-8 lg:pt-8 pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24"
    >
      <div
        class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] xl:!mt-0 lg:!mt-0 !mb-12"
      >
        <div
          class="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full text-center lg:text-left xl:text-left xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-0 lg:!mt-0"
        >
          <h2
            class="!text-[0.8rem] uppercase !text-[#5eb9f0] !mb-3 !leading-[1.35] !tracking-[0.02rem]"
          >
            Company Facts
          </h2>
          <h3
            class="xl:!text-[2.1rem] !text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] !mb-4 xxl:!pr-5"
          >
            We are proud of our design team
          </h3>
          <p class="!mb-0 xxl:!pr-12">
            Just sit back and relax while we take care of your business needs
            for you.
          </p>
        </div>
        <!-- /column -->
        <div
          class="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!px-[35px] lg:!px-[20px] !mt-[50px] xl:!mt-2 lg:!mt-2"
        >
          <div
            class="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-30px] !text-center"
          >
            <div
              class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div
                class="icon btn btn-circle btn-lg btn-soft-sky pointer-events-none !mb-4 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
              >
                <i
                  class="uil uil-presentation-check before:content-['\ec66']"
                ></i>
              </div>
              <h3
                class="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2"
              >
                <div style="display: inline-flex">
                  <HomeCounter :targetValue="1000" />
                  <div class="plus">+</div>
                </div>
              </h3>
              <p class="!font-medium !mb-0">Completed Projects</p>
            </div>
            <!--/column -->
            <div
              class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div
                class="icon btn btn-circle btn-lg btn-soft-sky pointer-events-none !mb-4 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
              >
                <i class="uil uil-user-check before:content-['\ed65']"></i>
              </div>
              <h3
                class="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2"
              >
                <HomeCounter :targetValue="580" />
              </h3>
              <p class="!font-medium !mb-0">Happy Customers</p>
            </div>
            <!--/column -->
            <div
              class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
            >
              <div
                class="icon btn btn-circle btn-lg btn-soft-sky pointer-events-none !mb-4 xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]"
              >
                <i class="uil uil-trophy before:content-['\ed4f']"></i>
              </div>
              <h3
                class="counter xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] !tracking-[normal] !leading-none !mb-2"
              >
                <div style="display: inline-flex">
                  <HomeCounter :targetValue="20" />
                  <div class="plus">+</div>
                </div>
              </h3>
              <p class="!font-medium !mb-0">Awards Won</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->

      <!--/.row -->
    </div>

    <!-- /.overflow-hidden -->
  </section>
</template>
