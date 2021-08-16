<template>
  <div class="component">
    <v-avatar
      class="avatar white--text"
      :class="{ primary: !onCard }"
      :size="size"
      >{{ driver.first_name[0] }}{{ driver.last_name[0] }}</v-avatar
    >
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['driver', 'size', 'onCard'],
};
</script>

<style scoped lang="scss">
.avatar {
  background-color: rgb(7, 48, 182);
  font-weight: bold;
  font-size: 12px;
}
.card {
  margin-top: 10px;
}
</style>
