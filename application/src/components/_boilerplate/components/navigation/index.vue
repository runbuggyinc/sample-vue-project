<template>
  <v-btn
    class="white--text primary navigation"
    @click="handleClick"
    :disabled="loading"
    elevation="3"
    >Back</v-btn
  >
</template>

<script>
export default {
  name: 'navigation',
  props: ['loading'],
  methods: {
    handleClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.navigation {
  margin: 20px 0 0 20px;
}
</style>
