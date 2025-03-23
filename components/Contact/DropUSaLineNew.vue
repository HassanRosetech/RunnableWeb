<template>
  <div class="flex flex-wrap mx-[-15px]">
    <!-- Form Content -->
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
        <form @submit.prevent="submitForm">
          <div class="flex flex-wrap mx-[-10px]">
            <!-- Name Field -->
            <div
              class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
            >
              <div class="form-floating relative !mb-4">
                <input
                  v-model="form.name"
                  id="form_name"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="First Name"
                  required
                />
                <label for="form_name">First Name *</label>
              </div>
            </div>
            <!-- Last Name Field -->
            <div
              class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
            >
              <div class="form-floating relative !mb-4">
                <input
                  v-model="form.surname"
                  id="form_lastname"
                  type="text"
                  name="surname"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
                <label for="form_lastname">Last Name *</label>
              </div>
            </div>
            <!-- Email Field -->
            <div
              class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
            >
              <div class="form-floating relative !mb-4">
                <input
                  v-model="form.email"
                  id="form_email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
                <label for="form_email">Email *</label>
              </div>
            </div>
            <!-- Department Dropdown -->
            <div
              class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full"
            >
              <div class="form-select-wrapper !mb-4">
                <select
                  v-model="form.department"
                  class="form-select"
                  name="department"
                  required
                >
                  <option value="" disabled>Select a department</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Customer Support">Customer Support</option>
                </select>
              </div>
            </div>
            <!-- Message Field -->
            <div class="w-full flex-[0_0_auto] !px-[15px] max-w-full">
              <div class="form-floating relative !mb-4">
                <textarea
                  v-model="form.message"
                  id="form_message"
                  name="message"
                  class="form-control"
                  placeholder="Your message"
                  required
                  style="height: 150px"
                ></textarea>
                <label for="form_message">Message *</label>
              </div>
            </div>
            <!-- Submit Button -->
            <div
              class="w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center"
            >
              <button
                type="submit"
                class="btn btn-primary !text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:!border-[#3f78e0] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] !rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
              >
                Send message
              </button>
              <p class="!text-[#aab0bc]">
                <strong>*</strong> These fields are required.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
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
