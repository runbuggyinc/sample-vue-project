<template>
    <div class="drivers-index">
        <div class="container--fluid ma-8">
            <v-row>
              <h1 class="ml-3 mr-4">Drivers</h1>
              <v-text-field
                  class="name-filter"
                  v-model="nameFilter"
                  label="Name Filter"
                  outlined />
            </v-row>
            <v-divider class="mb-4"/>
            <div class="driver-list-container">
                <div  class="d-flex flex-wrap" v-if="drivers">
                  <driver-card
                      class="ma-3"
                      v-for="driverId in Object.keys(filteredDrivers)"
                      :key="`driver-${driverId}`"
                      :driver="drivers[driverId]"
                  />
                </div>
                <v-overlay
                    absolute
                    class="rounded-xl"
                    v-if="loading"
                    opacity="0.05"
                >
                  <v-row class="justify-space-around">
                    <v-col class="justify-space-around">
                      <v-progress-circular
                          color="light-blue"
                          indeterminate size="64"
                      />
                    </v-col>
                  </v-row>
                </v-overlay>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import DriversService from '@/services/drivers'
    import { mapActions, mapState } from 'vuex'
    import { VTextField } from 'vuetify/lib'
    import DriverCard from "../../components/DriverCard/DriverCard";

    export default {
        name: 'views-orders-index',
        data: () => ({
            loading: false,
            nameFilter: ''
        }),
        computed: {
            ...mapState('drivers', {
                drivers: state => state.drivers,
                requestedAll:  state => state.requestedAllDrivers
            }),
            /**
             * List of filtered drivers to display (filtered on first or last name)
             */
            filteredDrivers() {
                if (this.nameFilter !== '') {
                    return Object.keys(this.drivers).reduce((acc, driverKey) => {
                        const driver = this.drivers[driverKey]
                        const { first_name, last_name } = driver
                        const fullDriverName = `${first_name} ${last_name}`.toLowerCase()
                        const lowerCaseFilter = this.nameFilter.toLowerCase()

                        if (fullDriverName.includes(lowerCaseFilter)) {
                          acc[driverKey] = driver;
                        }
                        return acc
                    }, {})
                }
                return this.drivers
            }
        },
        methods: {
            ...mapActions('drivers', ['setDrivers']),
            async getDrivers() {
                this.loading = true;
                this.setDrivers(await DriversService.getDrivers());
                this.loading = false;
            },
        },
        mounted() {
            if (!this.drivers || !this.requestedAll) {
                this.getDrivers();
            }
        },
        components: {DriverCard, VTextField}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .drivers-index {
        position: relative;
        min-height: 500px;
        .name-filter {
            max-width: 300px;
        }
        .driver-list-container {
            position: relative;
            .v-overlay {
                min-height: 200px;
            }
        }
    }
</style>
