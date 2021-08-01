<template>
  <v-col class="driver-details justify-space-around">
      <v-row class="justify-space-around">
          <driver-card
              v-if="driver"
              class="ma-8"
              :driver="driver"
              avatar-color="teal"
              :detailed="true"
          />
          <v-card v-else class="pa-8 mt-8" elevation="2">
            <v-skeleton-loader
                class="skeleton"
                type="avatar, divider, text@3"
            />
          </v-card>
      </v-row>
      <v-row class="justify-space-around">
        <v-btn color="light-blue" :to="'/'">Home</v-btn>
      </v-row>
  </v-col>
</template>

<script>
import DriverCard from '@/components/DriverCard/DriverCard';
import DriverService from '@/clients/drivers'
import { mapState, mapActions } from "vuex";

export default {
    name: "driver-details",
    components: {DriverCard},
    props: {
        // id of the driver to display
        driverId: {
          type: Number,
          required: true
        }
    },
    computed: {
      ...mapState('drivers', ['drivers']),
      /**
       * Driver to display
       * @type {object | undefined}
       */
      driver() {
        return this.drivers?.[this.driverId];
      }
    },
    mounted() {
        // If driver not currently in store retrieve it
        if (!this.drivers?.[this.driverId]) {
            this.getDriver(this.driverId)
        }
    },
    methods: {
      ...mapActions('drivers', ['setDriver']),
      /**
       * Gets a driver by Id and sets it to the store
       * @param id - driver's id
       * @returns {Promise<void>}
       */
      async getDriver(id) {
        const { data } = await DriverService.getDriver(id);
        this.setDriver(data)
      }
    }
}
</script>

<style scoped lang="scss">
    .skeleton {
        min-width: 250px;
        ::v-deep {
            .v-skeleton-loader__avatar {
              margin: 0 auto 20px auto;
            }
            .v-skeleton-loader__bone {
              margin-bottom: 20px;
            }
        }
    }
</style>
