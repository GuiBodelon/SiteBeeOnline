import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserPreferencesStore = defineStore('userPreferences', () => {
  const userPreferences = ref({
    darkMode: false
  })

  const changeDarkMode = (newDarkMode) => {
    userPreferences.value.darkMode = newDarkMode
  }

  return {
    userPreferences,
    changeDarkMode
  }
},
{
  persist: true
})
