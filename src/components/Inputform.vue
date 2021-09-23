<template>
    <div>
      <h2>Angle</h2>
      <input
        v-model.number="angle"
        type="number"
        :min="0"
        :max="180"
        >
    </div>
</template>

<script>
  export default {
    data: () => {
      return {
        angle: 0,
        message: null,
        changeEnable: true
      }
    },
    watch: {
      angle: function(newNum) {
        if ( newNum < 0 || newNum > 180  ) {
          alert('Illegal angle')
          this.angle = 0
          this.changeEnable=false
        } else {
          this.changeEnable=true
        }
      }
    }
  }
</script>

<style>
  h2 {
    color: black
  }
</style>