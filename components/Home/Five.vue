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
      <div class="flex flex-wrap mx-[-15px] grid-view !mt-[-30px] xl:!mt-0">
        <div
          class="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] xl:!mt-0 max-w-full"
        >
          <div class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <div class="card-body flex-[1_1_auto] p-[40px]">
              <img
                class="rounded-[50%] !w-[5rem] !mb-4"
                src="~/assets/img/avatars/te1.jpg"
                srcset="~/assets/img/avatars/te1@2x.jpg 2x"
                alt="image"
              />
              <h4 class="!mb-1">Coriss Ambady</h4>
              <div
                class="!text-[.7rem] uppercase !tracking-[0.02rem] font-semibold !text-[#aab0bc] !mb-2"
              >
                Financial Analyst
              </div>
              <p class="!mb-2">
                Fermentum massa justo sit amet risus morbi leo.
              </p>
              <nav class="nav social !mb-0">
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]"
                  ></i
                ></a>
              </nav>
              <!-- /.social -->
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!--/column -->
        <div
          class="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] xl:!mt-0 max-w-full"
        >
          <div class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <div class="card-body flex-[1_1_auto] p-[40px]">
              <img
                class="rounded-[50%] !w-[5rem] !mb-4"
                src="~/assets/img/avatars/te2.jpg"
                srcset="~/assets/img/avatars/te2@2x.jpg 2x"
                alt="image"
              />
              <h4 class="!mb-1">Cory Zamora</h4>
              <div
                class="!text-[.7rem] uppercase !tracking-[0.02rem] font-semibold !text-[#aab0bc] !mb-2"
              >
                Marketing Specialist
              </div>
              <p class="!mb-2">
                Fermentum massa justo sit amet risus morbi leo.
              </p>
              <nav class="nav social !mb-0">
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]"
                  ></i
                ></a>
              </nav>
              <!-- /.social -->
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!--/column -->
        <div
          class="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] xl:!mt-0 max-w-full"
        >
          <div class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <div class="card-body flex-[1_1_auto] p-[40px]">
              <img
                class="rounded-[50%] !w-[5rem] !mb-4"
                src="~/assets/img/avatars/te3.jpg"
                srcset="~/assets/img/avatars/te3@2x.jpg 2x"
                alt="image"
              />
              <h4 class="!mb-1">Nikolas Brooten</h4>
              <div
                class="!text-[.7rem] uppercase !tracking-[0.02rem] font-semibold !text-[#aab0bc] !mb-2"
              >
                Sales Manager
              </div>
              <p class="!mb-2">
                Fermentum massa justo sit amet risus morbi leo.
              </p>
              <nav class="nav social !mb-0">
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]"
                  ></i
                ></a>
              </nav>
              <!-- /.social -->
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!--/column -->
        <div
          class="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] !mt-[30px] xl:!mt-0 max-w-full"
        >
          <div class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
            <div class="card-body flex-[1_1_auto] p-[40px]">
              <img
                class="rounded-[50%] !w-[5rem] !mb-4"
                src="~/assets/img/avatars/te4.jpg"
                srcset="~/assets/img/avatars/te4@2x.jpg 2x"
                alt="image"
              />
              <h4 class="!mb-1">Jackie Sanders</h4>
              <div
                class="!text-[.7rem] uppercase !tracking-[0.02rem] font-semibold !text-[#aab0bc] !mb-2"
              >
                Investment Planner
              </div>
              <p class="!mb-2">
                Fermentum massa justo sit amet risus morbi leo.
              </p>
              <nav class="nav social !mb-0">
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-twitter before:content-['\ed59'] text-[1rem] !text-[#5daed5]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-facebook-f before:content-['\eae2'] text-[1rem] !text-[#4470cf]"
                  ></i
                ></a>
                <a
                  class="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  href="#"
                  ><i
                    class="uil uil-dribbble before:content-['\eaa2'] text-[1rem] !text-[#e94d88]"
                  ></i
                ></a>
              </nav>
              <!-- /.social -->
            </div>
            <!--/.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
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
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div
          class="swiper-container grid-view nav-bottom nav-color !mb-[4.5rem] relative z-10"
          data-margin="30"
          data-dots="false"
          data-nav="true"
          data-items-md="2"
          data-items-xs="1"
        >
          <div class="swiper overflow-visible">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <figure class="!rounded-[.4rem] !mb-7">
                  <a href="./single-project.html"
                    ><img
                      src="~/assets/img/photos/sp1.jpg"
                      srcset="~/assets/img/photos/sp1@2x.jpg 2x"
                      alt="image"
                  /></a>
                </figure>
                <div class="project-details flex justify-center flex-col">
                  <div class="post-header">
                    <h2 class="post-title h3">
                      <a
                        href="./single-project.html"
                        class="!text-[#343f52] hover:!text-[#5eb9f0]"
                        >Cras Fermentum Sem</a
                      >
                    </h2>
                    <div
                      class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]"
                    >
                      Mobile Design
                    </div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="!rounded-[.4rem] !mb-7">
                  <a href="./single-project.html"
                    ><img
                      src="~/assets/img/photos/sp2.jpg"
                      srcset="~/assets/img/photos/sp2@2x.jpg 2x"
                      alt="image"
                  /></a>
                </figure>
                <div class="project-details flex justify-center flex-col">
                  <div class="post-header">
                    <h2 class="post-title h3">
                      <a
                        href="./single-project.html"
                        class="!text-[#343f52] hover:!text-[#5eb9f0]"
                        >Venenatis Euismod Vehicula</a
                      >
                    </h2>
                    <div
                      class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]"
                    >
                      Web Design
                    </div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="!rounded-[.4rem] !mb-7">
                  <a href="./single-project.html"
                    ><img
                      src="~/assets/img/photos/sp3.jpg"
                      srcset="~/assets/img/photos/sp3@2x.jpg 2x"
                      alt="image"
                  /></a>
                </figure>
                <div class="project-details flex justify-center flex-col">
                  <div class="post-header">
                    <h2 class="post-title h3">
                      <a
                        href="./single-project.html"
                        class="!text-[#343f52] hover:!text-[#5eb9f0]"
                        >Tortor Tellus Cursus</a
                      >
                    </h2>
                    <div
                      class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]"
                    >
                      Stationary
                    </div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="!rounded-[.4rem] !mb-7">
                  <a href="./single-project.html"
                    ><img
                      src="~/assets/img/photos/sp4.jpg"
                      srcset="~/assets/img/photos/sp4@2x.jpg 2x"
                      alt="image"
                  /></a>
                </figure>
                <div class="project-details flex justify-center flex-col">
                  <div class="post-header">
                    <h2 class="post-title h3">
                      <a
                        href="./single-project.html"
                        class="!text-[#343f52] hover:!text-[#5eb9f0]"
                        >Ridiculus Sem Parturient</a
                      >
                    </h2>
                    <div
                      class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]"
                    >
                      Web Application
                    </div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="!rounded-[.4rem] !mb-7">
                  <a href="./single-project.html"
                    ><img
                      src="~/assets/img/photos/sp5.jpg"
                      srcset="~/assets/img/photos/sp5@2x.jpg 2x"
                      alt="image"
                  /></a>
                </figure>
                <div class="project-details flex justify-center flex-col">
                  <div class="post-header">
                    <h2 class="post-title h3">
                      <a
                        href="./single-project.html"
                        class="!text-[#343f52] hover:!text-[#5eb9f0]"
                        >Cursus Sollicitudin Adipiscing</a
                      >
                    </h2>
                    <div
                      class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]"
                    >
                      Web Design
                    </div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="!rounded-[.4rem] !mb-7">
                  <a href="./single-project.html"
                    ><img
                      src="~/assets/img/photos/sp6.jpg"
                      srcset="~/assets/img/photos/sp6@2x.jpg 2x"
                      alt="image"
                  /></a>
                </figure>
                <div class="project-details flex justify-center flex-col">
                  <div class="post-header">
                    <h2 class="post-title h3">
                      <a
                        href="./single-project.html"
                        class="!text-[#343f52] hover:!text-[#5eb9f0]"
                        >Fringilla Quam Vulputate</a
                      >
                    </h2>
                    <div
                      class="uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !mb-[0.4rem] !text-[#9499a3]"
                    >
                      Stationary
                    </div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
        </div>
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
    <!-- /.overflow-hidden -->
  </section>
</template>
