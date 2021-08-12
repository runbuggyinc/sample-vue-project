<template>
    <div class="component">
        <div class="container">
            <h1>Drivers</h1>
            <div v-if="result !== undefined">
                <VTextField
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                ></VTextField>
                <VDataTable 
                    hide-default-header 
                    :headers="headers" 
                    :items="result" 
                    :search="search" 
                    @click:row="rowClick" 
                />                    
            </div>
            <div class="pa-6 ma-2" v-else>
                <VProgressCircular
                    indeterminate
                    color="primary"
                ></VProgressCircular>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import DriversService from '@/services/drivers';
    import { VDataTable } from 'vuetify/lib';
    import { VTextField } from 'vuetify/lib';
    import { VProgressCircular } from 'vuetify/lib';

    export default {
        name: 'views-driver',
        watch: {},
        props: {},
        data() {
            return {
                result: undefined,
                search: '',
                headers: [
                    {
                        text: 'name',
                        value: 'first_name'
                    }
                ]
            }
        },
        methods: {
            getDrivers() {
                return DriversService.getDrivers()
                    .then((result) => {
                        this.result = result;
                    })
            },
            rowClick (item) {
                this.$router.push(`driver/${item.id}`)
            }
        },
        computed: {

        },
        created() {
        },
        mounted() {
            this.getDrivers();
        },
        beforeDestroy() {
        },
        mixins: [],
        components: {
            VProgressCircular,
            VDataTable,
            VTextField
        }
    }

</script>
