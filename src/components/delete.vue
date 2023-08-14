<template>
  <form action="" @submit.prevent="suppression">
        <span v-bind:click="message" class="notification">{{ message }}</span><br>
        <label for="">L'adresse mail rataché au compte à suprimer</label><br>
        <input v-model="Mail" class="Adresse" type="mail" placeholder="mail"><br>
        <input type="submit" value="Suprimer">
        <input type="reset" value="Annuler">
    </form>
<deco/>
</template>
<script>
import deco from './déconnexion.vue'
export default {
    name : 'del',
    data(){
        return {
            message : ''
        }
    },
    components : {
        deco
    },
    data(){
        return {
            message : '',
            Mail : '',
            privateKey : localStorage.getItem('token')
        }
    },
    methods : {
        suppression : function(){
            var Mail = this.Mail
            if(!Mail){
                this.message = "Veuillez remplir la case"
            }
            fetch(`http://localhost:3000/delted/${Mail}`,{
                method : 'DELETE',
                headers : {
                    "Authorization" : `Bearer ${this.privateKey}`,
                    "Content-Types" : "application/json"}
            })
            .then(res=>{
                res.json()
                .then(milou=>{
                    console.log(milou)
                    this.message = milou.message
                    if(this.message == "L'utilisateur n'est pas autorisé à accèder à cette ressource"){
                        this.$router.push('/')
                    }
                    else{
                        this.message == milou.message
                    }
                })
            })
        }
    }
}
</script>

<style scoped>
    form{
    background-color: rgb(27, 27, 71);
    line-height: 30px;
    border-radius: 10px;
    width: 500px;
    margin: auto;
}
input{
    border-radius: 10px;
    background-color: transparent;
    outline: none;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    border-top: 0 solid transparent;
    font-weight: bold;
}
.notification{
    color: red;
    font-weight: bold;
}
.a{
    font-weight: bold;
    color: rgb(89, 116, 238);
    text-decoration: none;
    font-size: 15px;
    margin: auto;
    text-decoration: none;
}
</style>