<template>
  <div>
    <NavbarComponent :logo="logo_src" :alt="app_name" />
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      logo_src: '/img/starNew.png',
      app_name: 'Things To Do!'
    }
  }
}
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #000;

  }
</style>