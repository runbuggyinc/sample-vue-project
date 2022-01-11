<template>
  <div class="component">
    <div class="container--fluid d-flex justify-center pt-4">
      <v-progress-circular
        indeterminate
        :value="20"
        v-if="loading"
        class="mx-auto"
      />
      <v-card width="300" tile v-else>
        <search-drivers @searched-drivers="(e) => (driverList = e)" :drivers="drivers" />
        <v-list dense>
          <v-subheader>Drivers</v-subheader>
          <v-list-item-group color="primary">
            <driver-profile
              v-for="(driver, index) in driverList"
              :key="index"
              v-bind="{
                firstName: driver.first_name,
                lastName: driver.last_name,
                id: driver.id,
              }"
            ></driver-profile>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script type="text/babel">
import { mapState } from "vuex";
import * as driverTypes from "@/store/modules/drivers/types";

export default {
  name: "views-orders-index",
  data() {
    return {
      loading: false,
      driverList: [],
    };
  },
  computed: {
    ...mapState({
      drivers: (state) => state.drivers.drivers,
    }),
  },
  watch: {
    drivers(newValue) {
      this.driverList = newValue;
    },
  },
  methods: {
    async getDrivers() {
      this.loading = true;
      await this.$store.dispatch(
        `${driverTypes.MODULE_NAME}/${driverTypes.GET_DRIVERS}`
      );
      this.loading = false;
    },
  },
  mounted() {
    this.getDrivers();
  },
  components: {
    DriverProfile: () => import("@/components/drivers/DriverProfile.vue"),
    SearchDrivers: () => import("@/components/drivers/SearchDrivers.vue"),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
