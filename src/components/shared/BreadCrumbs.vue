<template>
  <q-breadcrumbs>
    <template v-slot:separator>
      <q-icon size="1.5em" name="chevron_right" :color="isDarkModeActive ? 'primary' : ''" />
    </template>
    <q-breadcrumbs-el v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" :to="breadcrumb.link"
      :class="[{ 'active': !!breadcrumb.link }, isDarkModeActive ? 'text-primary' : '']" :label="breadcrumb.name"
      :icon="breadcrumb.icon" />
  </q-breadcrumbs>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'BreadCrumbs',

  props: {
    cumbIcon: {
      type: String
    }
  },

  data() {
    return {
      routePath: '',
      routeName: '',
      fullPath: Array,
      breadcrumbList: Array
    }
  },

  mounted() {
    this.getRoute()
  },

  watch: {
    $route() {
      this.getRoute()
    }
  },
  methods: {
    getRoute() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  },

  setup() {
    const $q = useQuasar()
    const isDarkModeActive = ref('')

    watch(() => $q.dark.isActive, val => {
      isDarkModeActive.value = val
    })

    return {
      isDarkModeActive
    }
  }
})
</script>
