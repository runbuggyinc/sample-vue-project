<template>
  <div class="component">
    <div class="container--fluid">
      <div v-if="loading && !drivers.length">
        <Loader :loading="loading" />
      </div>
      <div v-if="error">
        <Error :message="error" />
      </div>
      <div v-if="drivers && drivers.length">
        <div>
          <h1>Drivers</h1>
          <div class="container__styles">
            <div>
              <p>Filter Drivers</p>
              <v-text-field
                label="Filter"
                v-model="filterTerm"
                hide-details="auto"
              ></v-text-field>
            </div>
            <div>
              <p>Font Color</p>
              <ColorSelect type="fontColor" :defaultColor="fontColor" />
            </div>
            <div>
              <p>Background Color</p>
              <ColorSelect type="backgroundColor" :defaultColor="backColor" />
            </div>
            <div>
              <p>Font Size</p>
              <SizeSelect />
            </div>
          </div>
        </div>
        <div v-if="filterMixin.length" class="container__drivers--card">
          <div
            v-for="driver in filterMixin"
            :key="driver.id"
            class="driver--card"
          >
            <Driver :driver="driver" />
          </div>
        </div>
        <div v-else><Note message="No Drivers found" /></div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/_boilerplate/components/loader';
import Driver from '@/components/_boilerplate/components/driver';
import Error from '@/components/_boilerplate/components/error';
import ColorSelect from '@/components/_boilerplate/components/styling';
import SizeSelect from '@/components/_boilerplate/components/fontSize';
import Note from '@/components/_boilerplate/components/note';
import mixinMethod from '@/mixins/_boilerplate';

export default {
  name: 'views-_boilerplate-index',
  watch: {},
  props: {},
  data: () => ({
    loading: true,
    filterTerm: '',
  }),
  methods: {
    ...mapActions(['Drivers/getDrivers', 'Drivers/clearError']),
    async fetchDrivers() {
      if (!this.drivers.length) {
        await this['Drivers/getDrivers']();
      }
      this.loading = false;
    },
  },
  computed: {
    ...mapGetters({
      error: 'Drivers/getError',
      drivers: 'Drivers/getDrivers',
      fontColor: 'Styles/getFontColor',
      backColor: 'Styles/getBackgroundColor',
    }),
  },
  created() {},
  mounted() {
    this.fetchDrivers();
  },
  beforeDestroy() {
    if (this.error) this['Drivers/clearError']();
  },
  mixins: [mixinMethod],
  components: {
    Loader,
    Driver,
    ColorSelect,
    SizeSelect,
    Error,
    Note,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container--fluid {
  padding: 20px;
}
.container__filter {
  width: 200px;
}
.container__styles {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  div {
    width: 200px;
    margin: 10px 20px;
  }
  p {
    margin: 0;
  }
}
.container__drivers--card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  .driver--card {
    cursor: pointer;
    margin: 10px;
  }
}
</style>
