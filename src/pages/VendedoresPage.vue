<template>
  <div>teste</div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'VendedoresPage',

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
