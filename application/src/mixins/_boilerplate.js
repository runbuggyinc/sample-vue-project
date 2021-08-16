export default {
  computed: {
    filterMixin: function() {
      return this.drivers.filter((driver) =>
        driver.first_name.toLowerCase().match(this.filterTerm.toLowerCase())
      );
    },
  },
};
