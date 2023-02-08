<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .message-container {
    color: #047d30;
    background-color: #e1fadd;
    border: 2px solid #c0fba8;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
  }
</style>