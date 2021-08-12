<template>
    <div class="component">
        <div v-if="result !== undefined" class="container">
            <router-link to="/"><< All drivers</router-link>
          <h1>{{result.id}} | {{result.first_name}} - {{result.last_name}}</h1>
        </div>
        <div class="pa-6 ma-2" v-else>
            <VProgressCircular
                indeterminate
                color="primary"
            ></VProgressCircular>
        </div>
    </div>
</template>

<script type="text/babel">
    import DriversService from '@/services/drivers';
    import { VProgressCircular } from 'vuetify/lib';

    export default {
        name: 'views-driver-profile',
        watch: {},
        props: {},
        data() {
            return {
                result: undefined
            }
        },
        methods: {
            getDrivers() {
                return DriversService.getDriver(this.$route.params.id)
                    .then((result) => {
                        this.result = result;
                        console.log(this.result);
                    })
            },
            isLoading() {
                this.result = "loading..."
            }
        },
        computed: {

        },
        created() {
            console.log(this.$route.params.id);
        },
        mounted() {
            this.getDrivers();
        },
        beforeDestroy() {
        },
        mixins: [],
        components: {
            VProgressCircular
        }
    }

</script>
