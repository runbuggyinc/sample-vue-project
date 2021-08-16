<template>
  <router-link
    class="link"
    :to="{ name: 'Profile', params: { id: driver.id } }"
  >
    <v-card
      class="driver--card text-center"
      :style="{ backgroundColor }"
      elevation="10"
    >
      <v-card-text :style="{ fontSize: fontSize + 'px', color: fontColor }">
        <span>Driver:</span> {{ driver.first_name }}
        <Avatar :driver="driver" size="30" :onCard="true" />
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
import Avatar from '@/components/_boilerplate/components/avatar';
import { mapGetters } from 'vuex';

export default {
  name: 'driver-details',
  props: ['driver'],
  components: { Avatar },
  computed: {
    ...mapGetters({
      backgroundColor: 'Styles/getBackgroundColor',
      fontSize: 'Styles/getFontSize',
      fontColor: 'Styles/getFontColor',
    }),
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
.driver--card {
  transition: all 0.4s;
  width: 200px;
  border-radius: 10px;
  span {
    font-weight: bold;
  }
  &:hover {
    background-color: #40cefa !important;
  }
}
</style>
