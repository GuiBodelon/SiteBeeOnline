<template>
  <div class="q-pt-lg full-width">
    <q-table title="Clientes" :rows="rows" :columns="columns" row-key="name" :filter="filterClientesTable"
      :loading="loadingClientesTable">
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filterClientesTable" placeholder="Procurar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props"
            :class="isDarkModeActive ? 'text-primary' : ''">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="razao_social" :props="props">
            {{ props.row.razao_social }}
          </q-td>
          <q-td key="cnpj" :props="props">
            {{ props.row.cnpj }}
          </q-td>
          <q-td key="pais" :props="props">
            {{ props.row.pais }}
          </q-td>
          <q-td key="endereco" :props="props">
            {{ props.row.rua + ' - ' + props.row.numero }}
          </q-td>
          <q-td key="cidade" :props="props">
            {{ props.row.cidade }}
          </q-td>
          <q-td key="estado" :props="props">
            {{ props.row.estado }}
          </q-td>
          <q-td key="cep" :props="props">
            {{ props.row.cep }}
          </q-td>
          <q-td key="natureza_juridica" :props="props">
            {{ props.row.natureza_juridica }}
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="status" :props="props">
            <q-toggle v-model="props.row.status" true-value="1"
              @update:model-value="updateClient(props.row.id, props.row.razao_social, props.row.cnpj, props.row.pais, props.row.rua, props.row.numero, props.row.complemento, props.row.cidade, props.row.estado, props.row.cep, props.row.natureza_juridica, props.row.email, props.row.status)"
              checked-icon="check" color="green-5" unchecked-icon="close">
              <q-tooltip>{{ props.row.status ? 'Desativar Cliente' : 'Ativar Clinte' }}</q-tooltip>
            </q-toggle>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useQuasar, Notify } from 'quasar'
import { api } from 'boot/axios'
import { useUserStore } from 'src/stores/user-store'

export default defineComponent({
  name: 'GestaoClientesPage',

  data() {
    return {
      rows: []
    }
  },

  mounted() {
    this.getClientes()
  },

  methods: {
    getClientes() {
      this.loadingClientesTable = true
      const userStore = useUserStore()
      const token = userStore.user.token
      api.get('/clients', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then((response) => {
          if (response.data.success === true) {
            this.rows = response.data.data
            this.loadingClientesTable = false
          }
        })
        .catch((response) => {
          Notify.create({
            color: 'negative',
            position: 'top',
            message: response.data.error,
            icon: 'report_problem'
          })
        })
    },
    updateClient(id, razaoSocial, cnpj, pais, rua, numero, complemento, cidade, estado, cep, naturezaJuridica, email, status) {
      this.$api.patch('clients/' + id, { razaoSocial, cnpj, pais, rua, numero, complemento, cidade, estado, cep, naturezaJuridica, email, status })
    }
  },

  setup() {
    const $q = useQuasar()
    const isDarkModeActive = ref('')

    watch(() => $q.dark.isActive, val => {
      isDarkModeActive.value = val
    })

    const columns = [
      { name: 'razao_social', align: 'left', label: 'Razão Social', field: 'razao_social', sortable: true },
      { name: 'cnpj', align: 'center', label: 'CNPJ', field: 'cnpj', sortable: true },
      { name: 'pais', align: 'center', label: 'País', field: 'pais' },
      { name: 'endereco', align: 'left', label: 'Endereço', field: 'endereco' },
      { name: 'cidade', align: 'left', label: 'Cidade', field: 'cidade' },
      { name: 'estado', align: 'center', label: 'Estado', field: 'estado' },
      { name: 'cep', align: 'center', label: 'CEP', field: 'cep' },
      { name: 'natureza_juridica', align: 'left', label: 'Natureza Jurídica', field: 'natureza_juridica' },
      { name: 'email', align: 'left', label: 'E-mail', field: 'email' },
      { name: 'status', align: 'center', label: 'Status', field: 'status' }
    ]

    return {
      filterClientesTable: ref(''),
      loadingClientesTable: ref(false),
      statusCliente: ref(true),
      columns,
      isDarkModeActive
    }
  }
})
</script>
