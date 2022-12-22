<template>
    <h2>{{ text }}</h2>
</template>

<script>
    export default {
        name: 'ButtonItem',
        props: ['text']
    }
</script>


<style scoped>
    h2 {
        color: #9a8866 ;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        
    }
</style>