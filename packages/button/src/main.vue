<template>
  <div class="har-button" @click="handleClick">
    har-button
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "har-button",
    methods: {
      handleClick() {
        console.log(moment())
      }
    }
  }
</script>

<style lang="scss">
  .har-button {
    background-color: maroon;
    color: white;
  }
</style>