
import { useQuery } from "@urql/vue";
import { GET_TRADERS } from '../Queries/traderQueries'

const TraderService = {
    activeTrader: null,
    
    setActiveTrader: function(trader) {
        window.sessionStorage.setItem("activeTrader",JSON.stringify(trader))
        this.activeTrader = trader
    },
    getActiveTrader: function() {
       return JSON.parse(window.sessionStorage.getItem("activeTrader"))
    },
    getTraders: function() {

        return useQuery(GET_TRADERS).data
    }
}

export {TraderService}