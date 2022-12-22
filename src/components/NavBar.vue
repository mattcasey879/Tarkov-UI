<template>
  <div class="container">
      <img src="../assets/gallery/Tarkov-header.jpg" alt="tarkov-header" />
    <router-link class="btn" to="/">
        <ButtonItem text="Home" />
    </router-link>
    <router-link class="btn" to="/traders">
        <ButtonItem text="Traders"/>
    </router-link>
    <router-link class="btn" to="/guns">
        <ButtonItem text="Guns" />
    </router-link>
  </div>
</template>

<script>
import ButtonItem from "./ButtonItem";
export default {
  name: "NavBar",
  components: {
    ButtonItem,
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: flex-start;
  border-bottom: 2px solid black;
}
.btn {
  height: 60%;
  border-radius: 3px;
  margin-left: 10%;
  text-decoration: none;
}
img {
  width: 20%;
  border-radius: 30%;
  padding-bottom: 2%;
}
.img-link {
    margin-right: 0;
}
</style>
