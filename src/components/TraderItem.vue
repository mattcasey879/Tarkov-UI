<template>
    <div class="trader">
        <h1>{{ trader.name }}</h1>
        <RouterLink :to="`/traders/${trader.normalizedName}`">
            <img @click="setActiveTrader" :src="require(`../assets/gallery/${trader.normalizedName}-icon.jpg`)" :alt="trader.name"/>
        </RouterLink>
    </div>
        
</template>


<script>
import { RouterLink } from 'vue-router';
import { TraderService } from '@/services/trader.service';
    export default {
        name: 'TraderItem',
        components: {
            RouterLink
        },
        tasks: null,
        props: {
            trader: Object
        },

        methods: {
            setActiveTrader() {
                TraderService.setActiveTrader(this.trader)
            }
        }
    }
</script>


<style scoped>
h1 {
    text-align: center;
}
img {
    width: 8rem;
    cursor: pointer;
}
.trader {
    margin-left: 50%;
    align-items: center;
    display: flex;
    flex-direction: column;
}
</style>