<template>
    <h1>{{ trader.name }}</h1>
    <p>{{ trader.description }}</p>
</template>


<script>
    export default {
        name: 'TraderItem',
        props: {
            trader: Object
        },
    }
</script>