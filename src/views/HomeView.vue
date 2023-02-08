<template>
  <BannerComponent />
  <div class="main-container">
    <h1>Tarefas!</h1>
    <FormComponent />
  </div>
</template>

<script>
import BannerComponent from "@/components/BannerComponent.vue";
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: 'HomeView',
  components: {FormComponent, BannerComponent}
}
</script>