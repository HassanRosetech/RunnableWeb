<template>
  <div class="flex flex-wrap mx-[-15px]">
    <div
      class="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full"
    >
      <h2
        class="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3 !text-center"
      >
        Drop Us a Line
      </h2>
      <p
        class="lead !leading-[1.65] text-[0.9rem] font-medium !text-center !mb-10"
      >
        Reach out to us from our contact form and we will get back to you
        shortly.
      </p>
      <div class="contact-form needs-validation">
        <div class="messages"></div>
        <div class="flex flex-wrap mx-[-10px]">
          <div
            class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
          >
            <div class="form-floating relative !mb-4">
              <input
                id="form_name"
                type="text"
                name="name"
                class="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                placeholder=""
                required
              />
              <label
                for="form_name"
                class="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >First Name *</label
              >
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your first name.</div>
            </div>
          </div>
          <!-- /column -->
          <div
            class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
          >
            <div class="form-floating relative !mb-4">
              <input
                id="form_lastname"
                type="text"
                name="surname"
                class="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                placeholder=""
                required
              />
              <label
                for="form_lastname"
                class="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >Last Name *</label
              >
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your last name.</div>
            </div>
          </div>
          <!-- /column -->
          <div
            class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
          >
            <div class="form-floating relative !mb-4">
              <input
                id="form_email"
                type="email"
                name="email"
                class="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                placeholder=""
                required
              />
              <label
                for="form_email"
                class="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >Email *</label
              >
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">
                Please provide a valid email address.
              </div>
            </div>
          </div>
          <!-- /column -->
          <div
            class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
          >
            <div class="form-select-wrapper !mb-4">
              <select
                class="form-select"
                id="form-select"
                name="department"
                required
              >
                <option selected disabled value="">Select a department</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Customer Support">Customer Support</option>
              </select>
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please select a department.</div>
            </div>
          </div>
          <!-- /column -->
          <div class="w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <div class="form-floating relative !mb-4">
              <textarea
                id="form_message"
                name="message"
                class="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                placeholder=""
                style="height: 150px"
                required
              ></textarea>
              <label
                for="form_message"
                class="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                >Message *</label
              >
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your messsage.</div>
            </div>
          </div>
          <!-- /column -->
          <div
            class="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center"
          >
            <input
              type="submit"
              class="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              value="Send message"
            />
            <p class="!text-[#aab0bc]">
              <strong>*</strong> These fields are required.
            </p>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /form -->
    </div>
    <!-- /column -->
  </div>
</template>
