<template>
  <todoheader> </todoheader>
  <todoinput/>
  <todolist/>
  <todofooter/>
</template>

<script>
import todoheader from './components/todoheader.vue'
import todoinput from './components/todoinput.vue'
import todolist from './components/todolist.vue'
import todofooter from './components/todofooter.vue'
export default {
    name:'app',
    components:{
      todoheader,
      todoinput,
      todolist,
      todofooter,
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {font-family: 'Roboto', sans-serif;
      background:#f6f6f8; text-align: center;}

*{margin: 0; padding: 0;}
a:link,a:visited {text-decoration: none; color:#333}
.clearfix:after {content:""; display: block; clear:both}
li{list-style:none;}

#app {padding:0 20px;}

input {border-style:groove; width: 70%}
botton {border-style: groove;}
.shadow{box-shadow: 5px 10px 10px rgba(0,0,0,0.03);}
</style>