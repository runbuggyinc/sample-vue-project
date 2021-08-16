<template>
  <v-sheet class="error" color="error">{{ message }}</v-sheet>
</template>

<script>
export default {
  name: 'Error',
  props: ['message'],
};
</script>

<style scoped>
.error {
  padding: 20px 0;
  text-align: center;
  color: white;
}
</style>
