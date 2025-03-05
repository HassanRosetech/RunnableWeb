<template>
  <div class="grow shrink-0">
    <HomeTopHeader></HomeTopHeader>
    <!-- <HomeCaro></HomeCaro> -->

    <HomeOne></HomeOne>
    <HomeTwo></HomeTwo>
    <HomeThree></HomeThree>
    <HomeFour></HomeFour>
    <HomeFive></HomeFive>
    <HomeSix></HomeSix>
    <HomeSeven></HomeSeven>
  </div>
  <HomeFooter></HomeFooter>
  <!-- <HomeProgress></HomeProgress> -->
  <HomeBackToTop></HomeBackToTop>
</template>

<style>
@media screen and (min-width: 992px) {
  .grow .shrink-0 {
    padding: 0px 100px;
  }
}
@media screen and (max-width: 991px) {
  .grow .shrink-0 {
    padding: inherit;
  }
}
.swiper-container.nav-color .swiper-button.swiper-button-disabled,
.swiper-container.nav-color
  .swiper-slide
  figure
  .item-link.swiper-button-disabled {
  background: #5eb9f0b3 !important;
}
.swiper-container.nav-color .swiper-button,
.swiper-container.nav-color .swiper-slide figure .item-link {
  background: #5eb9f0e6 !important;
  color: #ffffff !important;
}
.swiper-container.nav-color .swiper-button:hover,
.swiper-container.nav-color .swiper-slide figure .item-link:hover {
  background: #5eb9f0 !important;
}
.navbar.navbar-light.fixed .btn:not(.btn-expand):not(.btn-gradient) {
  background: #5eb9f0 !important;
  border-color: #5eb9f0 !important;
  color: #ffffff !important;
}
.accordion-wrapper .card-header button {
  color: #5eb9f0;
}
@media (min-width: 992px) {
  .navbar-expand-lg.navbar-light
    .dropdown:not(.dropdown-submenu)
    > .dropdown-toggle:after {
    color: #5eb9f0;
  }
}
@media (max-width: 991.98px) {
  .navbar-expand-lg .navbar-collapse .dropdown-toggle:after {
    color: #ffffff !important;
  }
}
</style>
