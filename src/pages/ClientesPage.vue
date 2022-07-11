<template>
  <q-page>
    <q-tabs class="q-pl-sm" align="left" inline-label>
      <q-route-tab to="/clientes/gestao" label="Gestão de Clientes" exact active icon="manage_accounts" />
      <q-route-tab to="/clientes/gestao-ponto" label="Controle de Ponto" exact icon="manage_accounts" />
    </q-tabs>
    <router-view />
  </q-page>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ClientesPage',

  setup() {
    const $q = useQuasar()

    const isDarkModeActive = ref('')

    watch(() => $q.dark.isActive, val => {
      isDarkModeActive.value = val
    })

    return {
      isDarkModeActive,
      tab: ref('gestao_clientes')
    }
  }
})
</script>
