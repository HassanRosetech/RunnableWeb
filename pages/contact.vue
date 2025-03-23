<template>
  <div class="grow shrink-0">
    <section
      class="wrapper !bg-[#ffffff] relative border-0 upper-end before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0"
    >
      <div class="container-fluid pb-12">
        <ContactGetInTouch></ContactGetInTouch>
        <ContactDropUSaLineNew></ContactDropUSaLineNew>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
    <ContactFacts></ContactFacts>
    <!-- /section -->
  </div>
  <!-- /.content-wrapper -->

  <div
    class="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:!text-[#3f78e0] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons"
  >
    <svg
      class="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        class="fill-none stroke-[#3f78e0] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
      />
    </svg>
  </div>
</template>
