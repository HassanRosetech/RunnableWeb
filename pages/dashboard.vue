<template>
  <v-row class="month-table">
    <v-col cols="12" sm="12">
      <UiChildCard title="Contacts Table">
        <v-table>
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
        </v-table>
      </UiChildCard>
    </v-col>
  </v-row>
</template>
<script setup>
const contacts = ref(null);

contacts.value = await getContact();
console.log(contacts.value);
// Get contacts
async function getContact() {
  return await $fetch("/api/contact/get/all");
}

// Delete contacts
async function deleteContact(id) {
  // alert(id);
  if (confirm("Are you sure?")) {
    let contact = null;
    if (id) contact = await $fetch(`/api/contact/delete/${id}`);
    contacts.value = await getContact();
    // window.location.reload();
    this.$router.push({ path: "/dashboard" }).catch(() => {});
  }
}

definePageMeta({
  layout: "dd",
});
</script>
