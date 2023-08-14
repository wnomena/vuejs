<template>
  <div v-on:click="deco" class="deco">
    Déconnexion
  </div>
</template>

<script>
export default {
    name : 'deco' ,
    methods : {
        deco : function(){
            localStorage.removeItem('token')
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
    div.deco{
        color: red;
        position: absolute;
        top: 10px;
        right: 10px;
        width: auto;
        background-color: aqua;
        border-radius: 10px;
        padding: 5px;
        font-weight: bold;
        margin-top: 10px;
        margin-right: 10px;
        cursor: pointer;
    }
</style>