<template>
  <!-- Made use of the _ at the front of the file as a naming convention to signify that the file works properly with a dynamic id/variable -->
  <div>
      <router-link to="/" class="pa-4"> < Go back</router-link>
    <div class="d-flex justify-center">
      <v-progress-circular
        indeterminate
        :value="20"
        v-if="loading"
        class="mx-auto"
      />
      <v-card width="400" class="mx-auto mt-4 pa-4 d-flex align-center" v-else>
        <v-card-title class="">
          <v-avatar
            size="50"
            color="primary"
            v-if="driver.first_name && driver.last_name"
          >
            {{ driver.first_name[0] + driver.last_name[0] }}
          </v-avatar>
          <p class="ml-6">
            {{ `${driver.first_name} ${driver.last_name}` }}
          </p>
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as driverTypes from "@/store/modules/drivers/types";

export default {
  name: "Driver",
  data: () => {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState({
      driver: (state) => state.drivers.driver,
    }),
  },
  methods: {
    async getDriver() {
      const driverId = this.$route.params.id;
      this.loading = true;
      await this.$store.dispatch(
        `${driverTypes.MODULE_NAME}/${driverTypes.GET_DRIVER}`,
        driverId
      );
      this.loading = false;
    },
  },
  mounted() {
    this.getDriver();
  },
};
</script>

<style lang="scss" scoped>
</style>