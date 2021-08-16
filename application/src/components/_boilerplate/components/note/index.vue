<template>
  <div class="note">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: ['message'],
};
</script>

<style scoped>
.note {
  width: 100vw;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
