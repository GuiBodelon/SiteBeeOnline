<template>
  <div class="row">
    <div class="col-12 text-h6 text-bold">
    </div>
    <q-form>
      <div class="col-12 row q-gutter-x-xl q-mt-lg">
        <div class="col-12 q-mb-lg">
          <q-input filled v-model="name" label="Seu nome *" hint="Nome e sobrenome" class="col-12"></q-input>
        </div>
        <div class="col-6-md">
          <q-time v-model="timeWithSeconds" with-seconds class="col-4" now-btn color="dark" />
        </div>
      </div>
      <div class="col-12 justify-end full-width q-mt-md">
        <q-btn icon-right="send" label="Confirmar" no-caps outline></q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GestaoPontosPage',

  data() {
    return {
      interval: null,
      timeWithSeconds: null
    }
  },

  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },

  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.timeWithSeconds = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },

  setup() {
    return {
      name: ref('')
    }
  }
})
</script>
