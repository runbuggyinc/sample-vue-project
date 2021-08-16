<template>
  <v-text-field v-model="color" hide-details class="ma-0 pa-0" solo>
    <template v-slot:append>
      <v-menu v-model="menu" top :close-on-content-click="false">
        <template v-slot:activator="{ on }">
          <div :style="checkStyles" v-on="on" />
        </template>
        <v-card>
          <v-card-text class="pa-0">
            <v-color-picker hide-inputs v-model="color" flat />
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Styling',
  props: ['type', 'defaultColor'],
  data: (props) => ({
    color: props.defaultColor,
    menu: false,
  }),
  methods: {
    ...mapActions(['Styles/setFontColor', 'Styles/setBackgroundColor']),
  },
  computed: {
    checkStyles() {
      const { color, menu } = this;
      if (this.type === 'fontColor') {
        this['Styles/setFontColor']({ color });
      } else if (this.type === 'backgroundColor') {
        this['Styles/setBackgroundColor']({ color });
      }
      return {
        backgroundColor: color,
        cursor: 'pointer',
        height: '20px',
        width: '20px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out',
      };
    },
  },
};
</script>
