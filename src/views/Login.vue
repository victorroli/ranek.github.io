<template>
  <section class="login">
    <h1>Login</h1>
    <form action>
      <label for="Email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email">
      <label for="Senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha">
      <button class="btn" @click.prevent="logar">Entrar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Esqueci minha senha.</a>
    </p>
    <LoginCriar/>
  </section>
</template>

<script>
import LoginCriar from "@/views/LoginCriar.vue";

export default {
  name: "Login",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    logar() {
      this.$store.dispatch("getUsuario", this.login.email);
    }
  }
};
</script>

<style scoped>
label {
  margin-bottom: 7px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #84f;
}

.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #84f;
  text-decoration: underline;
}
</style>
