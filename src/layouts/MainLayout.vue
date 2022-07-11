<template>
  <q-ajax-bar color="primary" size="6px" />
  <q-layout view="lHh lpR fFf">

    <q-header reveal elevated class="bg-dark text-white flex items-center"
      style="height:65px;margin:10px 10px 0 10px;border-radius:5px;">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleSideBar" />

        <q-toolbar-title>
          Bem vindo {{ userStore.user.name }}!
        </q-toolbar-title>
        <q-toggle v-model="isDarkModeActive" checked-icon="dark_mode" color="orange-10" unchecked-icon="light_mode"
          @update:model-value="darkMode(isDarkModeActive)">
          <q-tooltip>{{ isDarkModeActive ? 'Desligar a Luz' : 'Ligar a Luz' }}</q-tooltip>
        </q-toggle>

        <q-avatar class="cursor-pointer q-ml-md" color="secondary">

          <q-avatar color="dark" text-color="white" size="46px" rounded class="q-mb-xs">
            <q-img v-if="userStore.user.profilePicture"
              :src="'src/assets/user-content/profile-pictures/' + userStore.user.profilePicture"
              class="profilePicture" />
          </q-avatar>
          {{ userStore.user.name?.charAt(0) }}
          <q-tooltip>Perfil</q-tooltip>
          <q-menu :offset="[10, 18]" style="min-width:360px">
            <div class="row no-wrap q-pa-md justify-evenly">
              <div class="column">
                <div class="text-h6 q-mb-sm">Configurações</div>
                <q-list dense>
                  <q-item clickable v-ripple to="/perfil">
                    <q-item-section avatar>
                      <q-icon name="person"></q-icon>
                    </q-item-section>
                    <q-item-section>Perfil</q-item-section>
                  </q-item>
                </q-list>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-btn color="dark" label="Sair" @click="logout()" icon="logout" size="sm" v-close-popup
                  class="q-mt-xs" />
              </div>
            </div>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="isSidebarOpen" show-if-above :width="275" :breakpoint="768">
      <q-scroll-area style="height: calc(100% - 75px); margin-top: 75px; border-right: 1px solid #ddd">
        <q-list>

          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === routeName" v-ripple :to="menuItem.route">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>

        </q-list>
      </q-scroll-area>

      <div class="absolute-top flex items-center bg-dark" style="height: 75px;"
        :style="darkModeActive ? 'border-bottom: 1px solid #121212' : ''">
        <div class="bg-transparent flex justify-start items-center full-width">
          <q-avatar size="65px">
            <img src="/media/logo_menu.png">
          </q-avatar>
          <div :class="darkModeActive ? 'text-white' : 'text-white'" class="text-weight-bolder"
            style="margin-left: 8px;">BeeOnline Platform
          </div>
          <q-btn dense flat round icon="menu" @click="toggleSideBar" color="white"
            class="desktop-hide lt-md inline q-ml-xl" />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <div class="row q-pt-sm q-pr-xl q-pb-xl q-pl-xl">
        <div class="col-12">
          <BreadCrumbs class="q-py-lg q-pl-sm" />
        </div>
        <div class="col-12">
          <router-view v-slot="{ Component }">
            <transition name="scale-app" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import BreadCrumbs from 'src/components/shared/BreadCrumbs.vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useUserStore } from 'src/stores/user-store'
import { useUserPreferencesStore } from 'src/stores/user-preferences-store'

export default {
  components: {
    BreadCrumbs
  },

  data() {
    return {
      routePath: '',
      routeName: '',
      exactRoute: ''
    }
  },

  watch: {
    $route() {
      this.getRoute()
    }
  },

  mounted() {
    this.getRoute()
    this.isDarkModeActive = this.userPreferencesStore.userPreferences.darkMode
    this.darkMode(this.userPreferencesStore.userPreferences.darkMode)
  },

  methods: {
    darkMode(val) {
      this.$q.dark.set(val)
      this.userPreferencesStore.changeDarkMode(val)
    },
    getRoute() {
      this.routeName = this.$route.name
      this.routePath = this.$route.fullPath
    }
  },

  computed: {
    darkModeActive: function () {
      return this.$q.dark.isActive
    }
  },

  setup() {
    const isSidebarOpen = ref(false)
    const isDarkModeActive = ref(false)
    const $q = useQuasar()
    const router = useRouter()
    const userStore = useUserStore()
    const userPreferencesStore = useUserPreferencesStore()

    const menuList = [
      {
        icon: 'dashboard',
        label: 'Dashboard',
        route: '/dashboard',
        separator: false
      },
      {
        icon: 'group',
        label: 'Clientes',
        route: '/clientes/gestao',
        separator: false
      },
      {
        icon: 'sell',
        label: 'Vendedores',
        route: '/vendedores',
        separator: true
      },
      {
        icon: 'settings',
        label: 'Configurações',
        separator: false
      },
      {
        icon: 'help',
        iconColor: 'secondary',
        label: 'Ajuda',
        separator: false
      }
    ]

    function logout() {
      $q.cookies.remove('token')
      userPreferencesStore.changeDarkMode(false)
      router.push('/')
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Você foi deslogado com sucesso. Até breve!'
      })
    }

    return {
      isDarkModeActive,
      isSidebarOpen,
      toggleSideBar() {
        isSidebarOpen.value = !isSidebarOpen.value
      },
      logout,
      menuList,
      userStore,
      userPreferencesStore
    }
  }
}
</script>
<style scoped>
/*ROUTER ANIMATED TRANSITION*/
.scale-app-enter-active,
.scale-app-leave-active {
  transition: all 0.3s ease;
}

.scale-app-enter-from,
.scale-app-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.profilePicture {
  object-fit: cover;
  object-position: center;
}
</style>
