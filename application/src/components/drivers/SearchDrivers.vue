<template>
  <div class="pa-3">
    <v-text-field v-model="query" label="Search Driver By Name" />
  </div>
</template>

<script>
import { VTextField } from "vuetify/lib";

export default {
  name: "SearchDrivers",
  props: {
    drivers: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      query: null,
    };
  },
  watch: {
    query(newQuery) {
      const probableDrivers = [];
      this.drivers.forEach((element) => {
        if (`${element.first_name} ${element.last_name}`.toLowerCase().indexOf(newQuery.toLowerCase()) > -1) {
          probableDrivers.push(element);
        }
      });
      this.$emit('searched-drivers', probableDrivers)
    },
  },
  components: {
    VTextField,
  },
};
</script>

<style lang="scss" scoped>
</style>