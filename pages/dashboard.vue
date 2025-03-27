<script setup lang="ts">
import UiChildCard from "~/components/shared/UiChildCard.vue";

const contacts = ref<any>({});
contacts.value = await $fetch("/api/contact/get/all");
console.log(contacts);
// Delete contacts
async function deleteContact(id) {
  if (confirm("Are you sure?")) {
    let contact = null;
    if (id)
      contact = await $fetch(`/api/contact/delete/${id}`, {
        method: "POST",
        body: {
          id: id,
        },
      });
    contacts.value = await $fetch("/api/contact/get/all");
    window.location.reload();
  }
}

definePageMeta({
  layout: "dashboard",
  middleware: ["hanko-logged-in"],
  // middleware : ['auth']
});

// function useAuth(): { status: any; signOut: any; } {
//   throw new Error('Function not implemented.');
// }
</script>

<template>
  <v-row class="month-table">
    <v-col cols="12" sm="12">
      <UiChildCard title="Contacts Table">
        <v-table>
          <thead>
            <tr>
              <th class="text-left">ID</th>
              <th class="text-left">First Name</th>
              <th class="text-left">Last Name</th>
              <th class="text-left">Email</th>
              <th class="text-left">Department</th>
              <th class="text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contacts, index) in contacts">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ contacts.first_name }}</td>
              <td>{{ contacts.last_name }}</td>
              <td>{{ contacts.email }}</td>
              <td>{{ contacts.department }}</td>
              <td>{{ contacts.message }}</td>

              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="($event) => deleteContact(contacts.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </v-table>
        <!-- <h1>This ia ROSETECH DASHBOARD !</h1> 

<button v-if="LoggenIn" @click="handlesignOut">Sign Out</button>-->
      </UiChildCard>
    </v-col>
  </v-row>
</template>
