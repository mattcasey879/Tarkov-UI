<template>
  <div v-if="!results">Loading...</div>
  <div class="trader-container" v-if="results">
    <div v-for="trader in results.traders" :key="trader.id">
      <TraderItem :trader="trader" />
    </div>
  </div>
</template>

<script>
import TraderItem from "./TraderItem.vue";
import { TraderService } from "../services/trader.service";
export default {
  name: "TradersItem",
  components: {
    TraderItem,
  },

  data() {
    return {
      results: null,
    };
  },
  created() {
    this.results = TraderService.getTraders();
  },
};
</script>

<style>
.trader-container {
  margin: 8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
</style>
