<template>
  <div class="component">
    <Avatar :driver="driver" :size="56" />
    <div>Driver Name: {{ driver.first_name }}</div>
    <v-divider inset></v-divider>
    <div>Driver Lastname: {{ driver.last_name }}</div>
    <v-divider inset></v-divider>
    <div>Driver id: {{ driver.id }}</div>
  </div>
</template>

<script>
import Avatar from '@/components/_boilerplate/components/avatar';
export default {
  name: 'Profile',
  props: ['driver'],
  components: { Avatar },
};
</script>

<style scoped>
.component {
  text-align: center;
  padding-top: 20px;
}
div {
  width: 300px;
  margin: 10px;
}
</style>
