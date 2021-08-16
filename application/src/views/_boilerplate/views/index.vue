<template>
  <div class="component">
    <Navigation :loading="loading" />
    <div class="container--fluid">
      <div v-if="loading">
        <Loader :loading="loading" />
      </div>

      <div v-if="error">
        <Error :message="error" />
      </div>
      <div v-if="driver">
        <Profile :driver="driver" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/_boilerplate/components/loader';
import Error from '@/components/_boilerplate/components/error';
import Profile from '@/components/_boilerplate/components/profile';
import Navigation from '@/components/_boilerplate/components/navigation';

export default {
  name: 'driver-details',
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapActions([
      'Drivers/getDriver',
      'Drivers/clearDriver',
      'Drivers/clearError',
    ]),
    async fetchDriver() {
      const id = this.$route.params.id;
      await this['Drivers/getDriver']({ id });
      this.loading = false;
    },
  },
  computed: {
    ...mapGetters({
      driver: 'Drivers/getDriver',
      error: 'Drivers/getError',
    }),
  },
  mounted() {
    this.fetchDriver();
  },
  beforeDestroy() {
    this['Drivers/clearDriver']();
    if (this.error) this['Drivers/clearError']();
  },
  components: {
    Loader,
    Error,
    Profile,
    Navigation,
  },
};
</script>

<style></style>
