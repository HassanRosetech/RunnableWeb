<script setup lang="ts">
definePageMeta({
  layout: "dd",
});
function afterLogin() {
  navigateTo("/dashboard");
}
</script>
<template>
  <hanko-login />
  <hanko-events @onSessionCreated="afterLogin()" />
</template>
