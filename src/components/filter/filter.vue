<template>
  <div>
    <a href="#" @click.prevent="toggleFilter = !toggleFilter" class="filter-btn">
      <i class="icon-filter"></i>
      filter
    </a>
    <div class="filter-wrapper" v-if="toggleFilter">
      <div class="filter-section">
        <h3>upload date</h3>
        <div class="filters">
          <a href="#" v-for="item in uploadDateFilters" :key="item" @click.prevent="filterSearch('date', item)" :class="activeUploadDate === item ? 'selected' : ''">
            {{ item }}
          </a>
        </div>
      </div>
      <div class="filter-section">
        <h3>Type</h3>
        <div class="filters">
          <a href="#" v-for="item in typeFilter" :key="item" @click.prevent="filterSearch('type', item)"
          :class="activetypeFilter === item ? 'selected' : ''">
            {{ item }}
          </a>
        </div>
      </div>
      <div class="filter-section">
        <h3>sort by</h3>
        <div class="filters">
          <a href="#" v-for="item in sortByFilter" :key="item" @click.prevent="filterSearch('sortBy', item)"
          :class="activesortByFilter === item ? 'selected' : ''"
          >
            {{ item }}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "searchFilter",
  data() {
    return {
      uploadDateFilters: ['last hour', 'today', 'this week' , 'this Month'],
      typeFilter: ['Video' , 'Channel' , 'PlayList'],
      sortByFilter: ['relevance', 'upload date', 'view count', 'rating'],
      activeUploadDate: '',
      activetypeFilter: '',
      activesortByFilter: 'upload date',
      toggleFilter: false,
    }
  },
  methods: {
    filterSearch(type, item) {
      console.log(type);
      console.log(item);
      if(type === 'date') {
        this.activeUploadDate = item
      }
      if(type === 'type') {
        this.activetypeFilter = item
      }
      if(type === 'sortBy') {
        this.activesortByFilter = item
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@media (min-width:600px) {}
@media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) {
  .filter-btn {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    text-transform: capitalize;
    i {
      margin-inline-end: 10px;
    }
  }
  .filter-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .filter-section {
    h3 {
      padding-bottom: 15px;
      font-size: 18px;
      color: #777;
      text-transform: uppercase;
      border-bottom: 1px solid #777;
      margin-bottom: 20px;
    }
  }
  .filters {
    display: flex;
    flex-direction: column;
    a {
      color: #777;
      text-transform: capitalize;
      &.selected {
        color: #000;
        font-weight: bold;
      }
      & + a {
        margin-block-start: 10px;
      }
    }
  }
}
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
</style>
