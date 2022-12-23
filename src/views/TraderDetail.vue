<template>
    <div class="detail-container">
        <img class="img-styles"
          :src="require(`../assets/gallery/${trader.normalizedName}-icon.jpg`)"
          :alt="trader.normalizedName"
        />
        <div class="trader-desc-container">
          <h1>{{ trader.name }}</h1>
          <p>{{ trader.description }}</p>
        </div>
        <div v-if="rawTasks">
             <div v-for="task of rawTasks" :key="task.id">
                {{ task.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { TraderService } from "@/services/trader.service";
import TaskSerivce from "@/services/tasks.service";
export default {
  data() {
    return {
      trader: TraderService.activeTrader,
      tasks: null,
      rawTasks: null,
      loading: ''
    };
  },
  created() {
    if (!this.trader) {
      this.trader = TraderService.getActiveTrader();
      console.log("Trader:",this.trader);
    } else {
        this.tasks = TaskSerivce.getTaskWithTraders()
        console.log(this.trader);
    }
  },
  methods: {
    logTasks() {
        console.log(JSON.parse(JSON.stringify(this.rawTasks)))
    }
  },
  watch: {
    tasks() {
        if(!this.tasks) {
            this.loading = 'Loading...'
        } else {
            this.rawTasks = JSON.parse(JSON.stringify(this.tasks)).tasks.filter(task => {
                if (this.trader.name === task.trader.name) {
                    return task
                }
            })
        }
    }
  },
  name: "TraderDetail",
};
</script>

<style scoped>

.detail-container {
    margin: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-styles {
    width: 14rem;
}

p {
    font-size: 1.4rem;
}

</style>
