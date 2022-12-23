<template>

    <div v-if="!results">
        Loading...
    </div>
    <div class="trader-container" v-if="results">
        <div class="trader" v-for="trader in results.traders" :key="trader.id">
            <TraderItem :trader="trader" />
        </div>
    </div>
</template>


<script>
   import { useQuery } from '@urql/vue';
   import  TraderItem  from './TraderItem.vue'
    export default {
        name: 'TradersItem',
        components: {
             TraderItem,
        },

        data() {
            return {
                results: null,
            }
        },
        created() {
            const res = useQuery({
                query: `
                    {
                        traders {
                            id 
                            name
                            description
                            normalizedName
                        }
                    }
                `,
                
            })
             this.results = res.data
        },
    }
</script>


<style>
.trader-container {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}

.trader {
    width: 20%;
}
</style>