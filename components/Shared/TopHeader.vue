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
          <a href="/">
            <img
              src="~/assets/img/logo-dark.png"
              srcset="~/assets/img/logo-dark@2x.png 2x"
              alt="image"
            />
          </a>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
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
            ></button>
          </div>
          <div
            class="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full"
          >
            <ul class="navbar-nav">
              <li class="nav-item dropdown dropdown-mega">
                <!-- <a
                  class="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Demos</a
                > -->
                <NuxtLink
                  class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                  to="/"
                  >Home</NuxtLink
                >
                <!-- <ul
                  class="dropdown-menu mega-menu mega-menu-dark mega-menu-img"
                >
                  <li class="mega-menu-content mega-menu-scroll">
                    <ul
                      class="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-10px] lg:mx-[-10px] xl:!mt-[-10px] lg:!mt-[-10px] !pl-0 list-none"
                    >
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo1.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi1.jpg"
                              srcset="~/assets/img/demos/mi1@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 1</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo2.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi2.jpg"
                              srcset="~/assets/img/demos/mi2@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 2</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo3.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi3.jpg"
                              srcset="~/assets/img/demos/mi3@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 3</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo4.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi4.jpg"
                              srcset="~/assets/img/demos/mi4@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 4</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo5.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi5.jpg"
                              srcset="~/assets/img/demos/mi5@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 5</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo6.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi6.jpg"
                              srcset="~/assets/img/demos/mi6@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 6</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo7.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi7.jpg"
                              srcset="~/assets/img/demos/mi7@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 7</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo8.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi8.jpg"
                              srcset="~/assets/img/demos/mi8@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 8</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo9.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi9.jpg"
                              srcset="~/assets/img/demos/mi9@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 9</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo10.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi10.jpg"
                              srcset="~/assets/img/demos/mi10@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 10</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo11.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi11.jpg"
                              srcset="~/assets/img/demos/mi11@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 11</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo12.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi12.jpg"
                              srcset="~/assets/img/demos/mi12@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 12</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo13.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi13.jpg"
                              srcset="~/assets/img/demos/mi13@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 13</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo14.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi14.jpg"
                              srcset="~/assets/img/demos/mi14@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 14</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo15.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi15.jpg"
                              srcset="~/assets/img/demos/mi15@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 15</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo16.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi16.jpg"
                              srcset="~/assets/img/demos/mi16@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 16</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo17.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi17.jpg"
                              srcset="~/assets/img/demos/mi17@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 17</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo18.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi18.jpg"
                              srcset="~/assets/img/demos/mi18@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 18</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo19.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi19.jpg"
                              srcset="~/assets/img/demos/mi19@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 19</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo20.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi20.jpg"
                              srcset="~/assets/img/demos/mi20@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 20</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo21.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi21.jpg"
                              srcset="~/assets/img/demos/mi21@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 21</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo22.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi22.jpg"
                              srcset="~/assets/img/demos/mi22@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 22</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo23.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi23.jpg"
                              srcset="~/assets/img/demos/mi23@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 23</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo24.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi24.jpg"
                              srcset="~/assets/img/demos/mi24@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 24</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo25.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi25.jpg"
                              srcset="~/assets/img/demos/mi25@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 25</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo26.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi26.jpg"
                              srcset="~/assets/img/demos/mi26@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 26</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo27.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi27.jpg"
                              srcset="~/assets/img/demos/mi27@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 27</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo28.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi28.jpg"
                              srcset="~/assets/img/demos/mi28@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 28</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo29.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi29.jpg"
                              srcset="~/assets/img/demos/mi29@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 29</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo30.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi30.jpg"
                              srcset="~/assets/img/demos/mi30@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 30</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo31.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi31.jpg"
                              srcset="~/assets/img/demos/mi31@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 31</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo32.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi32.jpg"
                              srcset="~/assets/img/demos/mi32@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 32</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo33.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi33.jpg"
                              srcset="~/assets/img/demos/mi33@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 33</span>
                        </a>
                      </li>
                      <li
                        class="xl:!px-[10px] xl:!mt-[10px] lg:!px-[10px] lg:!mt-[10px]"
                      >
                        <a class="dropdown-item" href="./demo34.html">
                          <figure
                            class="!rounded-[.4rem] lift hidden xl:block lg:block"
                          >
                            <img
                              class="!rounded-[.4rem]"
                              src="~/assets/img/demos/mi34.jpg"
                              srcset="~/assets/img/demos/mi34@2x.jpg 2x"
                              alt="image"
                            />
                          </figure>
                          <span class="xl:!hidden lg:!hidden">Demo 34</span>
                        </a>
                      </li>
                    </ul>
                   
                    <span class="hidden xl:!flex lg:!flex"
                      ><i class="uil uil-direction before:content-['\ea93']"></i
                      ><strong>Scroll to view more</strong></span
                    >
                  </li>
                 
                </ul> -->
                <!--/.dropdown-menu -->
                <!-- </li> -->
              </li>

              <!-- <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Pages</a
                >
              </li> -->
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="/about"
                >About us</NuxtLink
              >
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="/team"
                >Our Team</NuxtLink
              >
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="/projects"
                >Projects</NuxtLink
              >
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="/services"
                >Services</NuxtLink
              >
              <NuxtLink
                class="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#54a8c7] after:!text-[#54a8c7]"
                to="/testimonials"
                >Testimonials</NuxtLink
              >
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
              <!-- <a
                href="./contact.html"
                class="btn btn-sm btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem]"
                >Contact</a
              > -->
              <NuxtLink
                class="btn btn-sm btn-sky !text-white !bg-[#5eb9f0] border-[#5eb9f0] hover:text-white hover:!bg-[#5eb9f0] hover:!border-[#5eb9f0] focus:shadow-[rgba(88,167,216,1)] active:text-white active:!bg-[#5eb9f0] active:border-[#5eb9f0] disabled:text-white disabled:!bg-[#5eb9f0] disabled:border-[#5eb9f0] !rounded-[50rem]"
                to="/contact"
                >Contact</NuxtLink
              >
            </li>
            <!--  -->
            <li class="nav-item xl:!hidden lg:!hidden">
              <button class="hamburger offcanvas-nav-btn"><span></span></button>
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
<style>
@media screen and (min-width: 800px) {
  .navbar .container {
    padding: 0px 100px;
  }
}
</style>
