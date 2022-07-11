<template>
  <div class="container row justify-center items-center">
    <div class="loginContainer row justify-center items-center">
      <div class="col-md-6 formLogin row">
        <q-avatar size="100px" class="q-mb-xl">
          <q-img src="/media/logo_menu2.png" />
        </q-avatar>
        <div class="text-h4 text-weight-bolder text-dark col-12 q-mb-lg">Login</div>
        <q-form @submit="onSubmitLogin" class="q-gutter-lg">
          <q-input v-model="email" dense label="Email" hint="Insira seu e-mail." color="primary" text-color="dark" />
          <q-input v-model="password" dense label="Senha" :type="isPassword ? 'password' : 'text'"
            hint="Insira sua senha." class="col-sm-12 col-md-5">
            <template v-slot:append>
              <q-icon :email="isPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                @click="isPassword = !isPassword" />
            </template>
          </q-input>

          <div class="row q-gutter-y-lg">
            <q-btn rounded label="Login" type="submit" size="md" color="primary" class="full-width" />
            <div class="text-bold row q-gutter-x-md">
              <div class="text-dark">Não possuí uma conta ainda?</div>
              <router-link to="/cadastro" class="text-primary">Registre-se</router-link>
            </div>
          </div>
        </q-form>
      </div>
      <div class="col-md-6 bgLogin"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { useUserStore } from 'src/stores/user-store'

export default {

  setup() {
    const email = ref('')
    const password = ref('')
    const $q = useQuasar()
    const router = useRouter()
    const store = useUserStore()

    function onSubmitLogin() {
      api.post('/login', {
        email: email.value,
        password: password.value
      })
        .then((response) => {
          if (response.data.success === true) {
            store.changeName(response.data.data.name)
            store.changeEmail(response.data.data.email)
            store.changeToken(response.data.data.token)
            store.changeProfilePicture(response.data.data.profile_picture)
            router.push('/dashboard')
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: response.data.message
            })
          } else {
            console.log(response.data.data)
          }
        })
        .catch((error) => {
          $q.notify({
            color: 'red-6',
            textColor: 'white',
            icon: 'error',
            message: error.response.data.data.error,
            actions: [
              { icon: 'close', color: 'white', handler: () => { /* ... */ } }
            ]
          })
        })
    }
    return {
      email,
      password,
      isPassword: ref(true),
      onSubmitLogin
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: url("/media/bg_login.png");
  background-size: cover;
  background-position: center;
}

.loginContainer {
  height: 750px;
  width: 1300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: white;
  border-radius: 6px;
}

.formLogin {
  padding-left: 8%;
  padding-right: 8%;
}

.bgLogin {
  background: url("/media/hive_bg.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100%;
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

a {
  text-decoration: none;
  transition: all 0.3 ease;
}

a:hover {
  opacity: 0.8
}
</style>
