<script>
import mdl from 'material-design-lite/material.js'
import store from '../store/index'
export default {
  ready:function(){
    this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
  },
  computed:{
    show(){
      return store.state.loading;
    }
  }

}
</script>
<style scoped>
  .mdl-progress{
    position: fixed;
    top: 20;
    width: 100%;
  }
</style>
<template>
  <div class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
</template>