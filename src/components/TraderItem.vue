<template class="trader">
    <h1>{{ trader.name }}</h1>
    <img :src="require(`../assets/gallery/${trader.normalizedName}-icon.jpg`)" :alt="trader.name">
</template>


<script>
    export default {
        name: 'TraderItem',
        props: {
            trader: Object
        },
    }
</script>


<style scoped>
h1 {
    text-align: center;
}
img {
    margin-left: 30%;
    width: 8rem;
    cursor: pointer;
}
</style>