<template>
  <v-slider
    v-model="size"
    min="10"
    max="30"
    thumb-color="primary"
    thumb-label
    :value="watchSize"
  ></v-slider>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'FontSize',
  data: () => ({
    size: 16,
  }),
  methods: {
    ...mapActions(['Styles/setFontSize']),
  },
  computed: {
    ...mapGetters({
      fontSize: 'Styles/getFontSize',
    }),
    watchSize() {
      this['Styles/setFontSize']({ size: this.size });
      return this.fontSize;
    },
  },
};
</script>
