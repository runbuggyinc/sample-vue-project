<template>
  <v-list-item @click="viewDriver">
      <v-list-item-avatar :color="color" size="30">{{
        firstName[0] + lastName[0]
      }}</v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        {{ firstName }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
const colorVariants = ['primary', 'secondary']
export default {
  name: "DriverProfile",
  props: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: true,
    },
    color: {
        type: String,
        default: 'primary',
        validator: (value) => colorVariants.includes(value)
    }
  },
  methods: {
    viewDriver() {
      this.$router.push(`/driver/${this.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>