<template>
  <Navbar></Navbar>
  <v-row class="month-table">
    <v-col cols="12" sm="12">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Message</th>
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
      </table>
    </v-col>
  </v-row>
</template>
<script setup>
const contacts = ref(null);

// contacts.value = await getContact();
// console.log(contacts.value);
// // Get contacts
// async function getContact() {
//   return await $fetch("/api/contact/get/all");
// }

//const contacts = ref < any > {};
contacts.value = await $fetch("/api/contact/get/all");
// async function getContact() {
//   return await $fetch("/api/listContacts");
// }

async function deleteContact(id) {
  const route = useRoute();

  if (confirm("Are you sure?")) {
    try {
      // Make sure the API call for deleting the contact is successful
      await $fetch(`/api/contact/delete/${id}`, {
        method: "POST",
        body: { id: id },
      });

      // Redirect to the dashboard after deletion
      //  route.push("/dashboard");
      await $fetch("/api/contact/get/all");
      // Reload the page after deletion
      window.location.reload();
    } catch (error) {
      console.error("Error deleting contact:", error);
      // Handle error case if needed
    }
  }
}

definePageMeta({
  middleware: "auth",
  layout: "dd",
});
</script>
<style>
th,
td {
  width: 250px;
}
</style>
