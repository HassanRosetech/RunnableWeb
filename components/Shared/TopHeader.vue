<template>
  <header
    class="relative wrapper !bg-[#ffffff]"
    style="
      background-color: #c0c0c0;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;
    "
  >
    <nav class="navbar navbar-expand-lg classic transparent navbar-light">
      <div
        class="container xl:!flex-row lg:!flex-row !flex-nowrap items-center"
      >
        <div class="navbar-brand w-full">
          <!-- <a href="/"> -->
          <NuxtLink to="/">
            <img
              src="~/assets/img/logo-dark.png"
              srcset="~/assets/img/logo-dark@2x.png 2x"
              alt="image"
            />
          </NuxtLink>
          <!-- </a> -->
        </div>
        <div
          id="mobilemenu"
          class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
        >
          <div
            class="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6"
          >
            <h3
              class="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0"
            >
              Sandbox
            </h3>
            <button
              type="button"
              class="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              @click="RemoveShowClass()"
            ></button>
          </div>
          <div
            class="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full"
          >
            <ul class="navbar-nav">
              <li class="nav-item dropdown dropdown-mega"></li>

              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="#about"
                >About us</NuxtLink
              >
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="#strategy"
                >Our Strategy</NuxtLink
              >
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="#team"
                >Our Team</NuxtLink
              >

              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="#projects"
                >Projects</NuxtLink
              >

              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="#services"
                >Services</NuxtLink
              >

              <!-- <a   href="#services">Services</a> -->
            </ul>
            <!-- /.navbar-nav -->
            <div class="offcanvas-footer xl:!hidden lg:!hidden">
              <div>
                <a href="mailto:first.last@email.com" class="link-inverse"
                  >info@email.com</a
                >
                <br />
                00 (123) 456 78 90 <br />
                <nav class="nav social social-white !mt-4">
                  <a
                    class="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href="#"
                    ><i
                      class="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"
                    ></i
                  ></a>
                  <a
                    class="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href="#"
                    ><i
                      class="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"
                    ></i
                  ></a>
                  <a
                    class="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href="#"
                    ><i
                      class="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"
                    ></i
                  ></a>
                  <a
                    class="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href="#"
                    ><i
                      class="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"
                    ></i
                  ></a>
                  <a
                    class="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href="#"
                    ><i
                      class="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"
                    ></i
                  ></a>
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other lg:!ml-4 xl:!ml-4">
          <ul class="navbar-nav !flex-row !items-center !ml-auto">
            <li class="nav-item hidden xl:block lg:block md:block">
              <NuxtLink
                class="btn btn-sm btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem]"
                to="#contact"
                >Contact</NuxtLink
              >
            </li>
            <!--  -->
            <li class="nav-item xl:!hidden lg:!hidden">
              <button
                class="hamburger offcanvas-nav-btn"
                @click="addShowClass()"
              >
                <span></span>
              </button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
      </div>
      <!-- /.container -->
    </nav>

    <!-- /.navbar -->
  </header>
</template>

<script>
export default {
  methods: {
    addShowClass() {
      //alert("");
      // Access the current div using its ID
      const myDiv = document.getElementById("mobilemenu");
      myDiv.classList.add("show");
    },
    RemoveShowClass() {
      //alert("");
      // Access the current div using its ID
      const myDiv = document.getElementById("mobilemenu");
      myDiv.classList.remove("show");
    },
  },
};
</script>
<style>
@media screen and (min-width: 800px) {
  .navbar .container {
    padding: 0px 100px;
  }
}
/* Optional: Style your "show" class as needed */
.show {
  display: block; /* Example: change display property to show the element */
}
</style>
