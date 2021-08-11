<template>
    <div class="component">
        <div class="container">
            <h1>Drivers</h1>
            {{result}}
            <div class="row" v-if="result !== 'loading...'">
                <div v-for="(driver, id) in result" :key="id"  class="col col-4">
                    <VCard elevation="3">
                        <VCardTitle>{{ driver.first_name }}</VCardTitle>
                        <VListItemAvatar tile size="80" color="grey" />
                    </VCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import DriversService from '@/services/drivers';
    import { VCard } from 'vuetify/lib';
    import { VCardTitle } from 'vuetify/lib';
    import { VListItemAvatar } from 'vuetify/lib';

    export default {
        name: 'views-driver',
        watch: {},
        props: {},
        data() {
            return {
                result: undefined
            }
        },
        methods: {
            getDrivers() {
                return DriversService.getDrivers()
                    .then((result) => {
                        this.result = result;
                    })
            },
            isLoading() {
                this.result = "loading..."
            }
        },
        computed: {

        },
        created() {
            this.isLoading();
        },
        mounted() {
            this.getDrivers();
        },
        beforeDestroy() {
        },
        mixins: [],
        components: {
            VCard,
            VCardTitle,
            VListItemAvatar
        }
    }

</script>
