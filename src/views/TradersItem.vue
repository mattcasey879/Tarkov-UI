<template>

    <div v-if="!results">
        Loading...
    </div>
    <div v-if="results">
        <div class="trader" v-for="trader in results.traders" :key="trader.id">
            <TraderItem :trader="trader" />
        </div>
    </div>
</template>


<script>
   import { useQuery } from '@urql/vue';
   import  TraderItem  from '../components/TraderItem.vue'
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
                        }
                    }
                `,
                
            })
             this.results = res.data
        },
    }
</script>