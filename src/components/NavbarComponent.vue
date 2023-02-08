<template>
  <div id="nav">
    <router-link to="/" id="logo_url">
      <img :src="logo" id="logo" :alt="alt">
    </router-link>
    <p>Things To Do!</p>
    <router-link to="/">Home</router-link>
    <span>|</span>
    <router-link to="/tasks">Tarefas</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: ["logo", "alt"],
}
</script>

<style scoped>

#nav {
  background-color: #c1eeff;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

 #nav #logo_url {
  margin: auto;
  margin-left: 0px;
}

#logo {
  width: 120px;
  height: 120px;
}

.name-container a {
  color: mediumpurple;
}

#nav a {
  color: #ecc702;
  text-decoration: none;
  transition: .5s;
  font-size: 36px;

}

#nav span {
  margin-left: 5px;
  margin-right: 5px;
  color: #FFD700
}

#nav p {
  color: mediumpurple;
  font-size: 59px;
  font-weight: bold;
  margin-right: 30em;
}

#nav a:hover {
  color: #FFF;
}

</style>