import Vue from 'vue';

function mapFilters(filters) {
  filters.forEach((filter) => {
    Vue.filter(filter.name, filter.process);
  });
}

const filters = [
  {
    name: 'prettyGrade',
    process(value) {
      if (isNaN(value) || Math.abs(value) === Infinity) {
        return 0;
      }
      return Math.round(value * 100) / 100;
    },
  },
];

export {
  mapFilters,
  filters,
};
