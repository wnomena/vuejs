
<template>
<form @submit.prevent="validation" >
            <span class="notification" v-bind:nom="message"> {{ message }}</span><br>
            <label for="">Put your Username</label><br>
            <input v-model="Username" class="Username" type="text" placeholder="Username"><br>
            <label for="">Password</label><br>
            <input v-model="password" class="Password" type="password" placeholder="Your Pass"><br>
            <input type="submit" value="Se connecter">
            <input type="reset" placeholder="Tout effacer"><br>
            <Router-link class="a" to="/sign-up">Créer un compte</Router-link>
        </form>
        <!-- <p v-bind:nom="message" v-if="message ==`Tentative de connexion reussi`"> Kindrenty </p> -->
</template>

<script>
export default {
    name : "nomena",
    props : ['nom'],
    data(){
        return {
            password : "",
            Username : "",
            message : "",
            token : "",
        }
    },
    methods : {
        validation : function(){
            var Username = this.Username
            var password = this.password
            if(!Username || !password){
                this.message = "Champ obligatoire"
                console.log(this.message)
                return false
            }
            else{
                fetch('http://localhost:3000/auth/log-in',{
                method : 'POST',
                body : JSON.stringify({mail : Username, password : password}),
                headers : {"Content-Type" : "application/json"}  
            })
            .then(res=>{
                res.json()
                    .then(response=>{
                        this.message = response.message
                        this.token = response.token
                        if(response.message !== 'Tentative de connexion reussi'){
                            console.log(response.message)
                            return false
                        }
                        else{
                            localStorage.setItem('token', response.token)
                            this.$router.push('/delete');
                            
                        }         
                 })
            });
            }
        }
    }
}
// console.log(token)
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