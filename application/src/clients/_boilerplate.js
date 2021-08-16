import axios from 'axios';

const Client = {
  async getDrivers() {
    let promises = [];
    let results = [];
    for (let i = 0; i < 6; i++) {
      try {
        let promise = await axios.get(`/fixtures/driver_${i + 1}.json`);
        results.push(promise.data);
        promises.push(promise);
      } catch (err) {
        return {
          error: `Something went wrong retrieving driver #${i + 1} data`,
        };
      }
    }
    return Promise.all(promises).then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(results);
        }, 2000);
      });
    });
  },
  async getDriver({ id }) {
    try {
      const result = await axios.get(`/fixtures/driver_${id}.json`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result.data);
        }, 2000);
      });
    } catch (err) {
      return {
        error: `Something went wrong retrieving driver #${id} data`,
      };
    }
  },
};

export default Client;
