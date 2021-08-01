<template>
    <router-link class="driver-card" :to="`/driver-details/?id=${driver.id}`">
        <v-card
            :class="`${detailed ? 'pa-8' : 'pa-4'}`"
            elevation="2"
        >
            <component :is="detailed ? 'v-col' : 'v-row'">
                <v-row :class="`justify-space-around ${ detailed ? 'mb-4' : ''}`">
                    <v-avatar
                        :size="detailed ? '64' : '36'"
                        :color="avatarColor"
                        class="elevation-2"
                    >
                        <span class="text-h5">{{avatarCharacters}}</span>
                    </v-avatar>
                </v-row>
                <v-divider v-if="detailed" class="mb-4" />
                <template v-for="(key) in Object.keys(driver)">
                    <v-row
                        :key="`driver-key-${key}`"
                        v-if="shouldDisplayKey(key)"
                        :class="detailed ? '' : 'mt-2 ml-2'"
                    >
                        <span class="key font-weight-bold mr-2">{{formatKey(key)}}:</span>
                        <span class="value">{{driver[key]}}</span>
                    </v-row>
                </template>
            </component>
        </v-card>
    </router-link>
</template>

<script type="text/babel">
    import { VAvatar, VCol } from 'vuetify/lib'
    export default {
        name: 'driver-card',
        watch: {},
        props: {
          // Driver object
          driver: {
            type: Object,
            required: true
          },
          // Whether or not to show all information
          detailed: {
            type: Boolean,
            default: () => false
          },
          avatarColor: {
            type: String,
            default: () => 'light-blue'
          }
        },
        data: () => ({
            // Keys to only display for the basic view
            basicOnlyKeys: [
                'first_name'
            ]
        }),
        computed: {
          /**
           * The text to use for the characters
           */
          avatarCharacters() {
            const firstNameChar = this.driver?.first_name?.charAt(0) ?? '';
            const lastNameChar = this.driver?.last_name?.charAt(0) ?? '';
            return `${firstNameChar}${lastNameChar}`
          }
        },
        methods: {
          /**
           * Formats a key to a user friendly/readable string
           * @param {string} key - key for format
           * @returns {string}
           */
          formatKey(key) {
            return key.split('_').map((word) => word.charAt(0).toUpperCase() + word.substr(1)).join(' ');
          },
          /**
           * Determines whether or not additional information should be shown
           * @param key
           * @returns {boolean}
           */
          shouldDisplayKey(key) {
            return this.detailed ? true : key === 'first_name';
          }
        },
        components: {
          VAvatar,
          VCol
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.driver-card {
  min-width: 300px;
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
  }
}

</style>
