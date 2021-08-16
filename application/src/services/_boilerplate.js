import DriversClient from '@/clients/_boilerplate';

const Service = {
  async getDrivers() {
    return await DriversClient.getDrivers();
  },

  async getDriver({ id }) {
    return await DriversClient.getDriver({ id });
  },
};

export default Service;
