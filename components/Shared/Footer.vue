<template>
  <footer id="contact" class="bg-[rgba(52,63,82)] opacity-100 !text-[#cacaca]">
    <div class="container pt-14 xl:pt-6 pb-16 xl:pb-20">
      <hr
        class="!mt-[3rem] !mb-[3.5rem] border-t border-[rgba(164,174,198,.2)]"
      />

      <div class="flex flex-wrap mx-[-15px]">
        <!-- Column 1: Logo & Social -->
        <div class="md:w-4/12 w-full !px-[15px] !mt-[30px]">
          <div class="widget">
            <img
              class="!mb-4"
              src="~/assets/img/logo-light.png"
              srcset="~/assets/img/logo-light@2x.png 2x"
              alt="logo"
            />
            <p class="!mb-4">
              © 2024 Sandbox.<br class="hidden xl:block" />
              All rights reserved.
            </p>
            <nav class="nav social social-white">
              <a
                href="#"
                class="!text-[#cacaca] hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                ><i class="uil uil-twitter !text-white"></i
              ></a>
              <a
                href="#"
                class="!text-[#cacaca] hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                ><i class="uil uil-facebook-f !text-white"></i
              ></a>
              <a
                href="#"
                class="!text-[#cacaca] hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                ><i class="uil uil-dribbble !text-white"></i
              ></a>
              <a
                href="#"
                class="!text-[#cacaca] hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                ><i class="uil uil-instagram !text-white"></i
              ></a>
              <a
                href="#"
                class="!text-[#cacaca] hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                ><i class="uil uil-youtube !text-white"></i
              ></a>
            </nav>
          </div>
        </div>

        <!-- Column 2: Contact Info -->
        <div class="md:w-4/12 w-full !px-[15px] !mt-[30px]">
          <div class="widget">
            <h4 class="widget-title !text-white !mb-3">Get in Touch</h4>
            <address class="!mb-4">
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
            <a
              class="!text-[#cacaca] hover:!text-[#5eb9f0]"
              href="mailto:info@email.com"
              >info@email.com</a
            ><br />
            00 (123) 456 78 90
          </div>
        </div>

        <!-- Column 3: Contact Form -->
        <div class="md:w-4/12 w-50 !px-[15px] !mt-[30px]">
          <div class="widget">
            <h4 class="widget-title !text-white !mb-3">Contact Us</h4>
            <form
              @submit.prevent="submitForm"
              class="contact-form needs-validation grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <!-- Left column -->
              <input
                v-model="form.name"
                type="text"
                placeholder="First Name"
                class="form-control customize-input !mb-3 col-span-1"
                required
              />

              <!-- Right column -->
              <input
                v-model="form.surname"
                type="text"
                placeholder="Last Name"
                class="form-control customize-input !mb-3 col-span-1"
                required
              />

              <!-- Full-width row -->
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="form-control customize-input !mb-3 col-span-2"
                required
              />

              <select
                v-model="form.department"
                class="form-select customize-dropdown !mb-3 col-span-2"
                required
              >
                <option value="" disabled>Select a department</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Customer Support">Customer Support</option>
              </select>

              <textarea
                v-model="form.message"
                placeholder="Your message"
                class="form-control customize-text-area !mb-3 col-span-2"
                style="height: 150px"
                required
              ></textarea>

              <input
                type="submit"
                value="Send message"
                class="btn btn-primary customize-btn !text-white !bg-[#3f78e0] col-span-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        department: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Prepare the form data to be sent to the API
        const formData = {
          name: this.form.name,
          surname: this.form.surname,
          email: this.form.email,
          department: this.form.department,
          message: this.form.message,
        };

        // Send the form data to the backend API
        const response = await axios.post(
          "/api/contact/add", // Replace with your actual API URL
          formData
        );

        // Handle success response
        if (response.status === 200) {
          alert("Your message has been sent successfully!");
          this.form = {
            name: "",
            surname: "",
            email: "",
            department: "",
            message: "",
          };
        }
      } catch (error) {
        // Handle error
        console.error("Error submitting the form:", error);
        alert(
          "There was an error submitting the form. Please try again later." +
            error
        );
      }
    },
  },
};
</script>
<style>
.customize-input {
  background-color: #3a4557;
  color: #c2c6cc !important;
  height: 35px;
  border-radius: 5px;

  text-indent: 10px;
}
.customize-btn {
  position: relative;
  margin-top: 0.5rem;
  margin-left: 3rem;
}
.customize-text-area {
  background-color: #3a4557;
  color: #c2c6cc !important;
  border-radius: 5px;

  text-indent: 10px;
}
.customize-dropdown {
  background-color: #3a4557;
  color: #c2c6cc !important;
}

@media screen and (min-width: 800px) {
  /* #foot {
    padding: 0px 100px;
  } */
  /* #join {
    margin: 0px -100px;
  } */
}
.customize-btn {
  position: relative;
  margin-top: 0.5rem;
  margin-left: 3rem;
}
#contact {
  position: absolute;
  left: 0px;
  right: 0px;
}
</style>
