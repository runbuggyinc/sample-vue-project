import axios from "axios";

const Client = {
    getDrivers() {
        let promises = [];
        let results = [];
        for (let i = 0; i < 6; i++) {
            let promise = axios.get(`/fixtures/driver_${i + 1}.json`)
                .then((result) => {
                    results.push(result.data);
                });
            promises.push(promise);
        }
        return Promise.all(promises)
            .then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(results);
                    }, 2000);
                })
            });
    },
    async getDriver(driverId) {
        // little more realism like above for direct navigation to driver details
        const req = await axios.get(`/fixtures/driver_${driverId}.json`)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(req)
            }, 2000)
        })
    }
};

export default Client;
