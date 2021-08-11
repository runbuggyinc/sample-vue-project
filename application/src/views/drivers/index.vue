<template>
    <div class="component">
        <div class="container">
            <h1>Drivers</h1>
            <div v-if="result !== undefined">
                <div v-for="driver in result" :key="`driver-${driver.id}`" >
                    <ul>
                        <li><RouterLink :to="`/driver/${driver.id}`">{{ driver.first_name }}</RouterLink></li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <p>Loading...</p>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import DriversService from '@/services/drivers';

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
        }
    }

</script>
