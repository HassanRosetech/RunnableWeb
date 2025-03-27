<script setup lang="ts">
definePageMeta({
  layout: "dd",
});
function afterLogin() {
  navigateTo("/dashboard");
}
</script>
<template>
  <hanko-auth />
  <hanko-events @onSessionCreated="afterLogin()" />
</template>
