import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: '',
    email: '',
    token: '',
    ProfilePicture: ''
  })

  const changeName = (newName) => {
    user.value.name = newName
  }

  const changeEmail = (newEmail) => {
    user.value.email = newEmail
  }

  const changeToken = (newToken) => {
    user.value.token = newToken
  }

  const changeProfilePicture = (newProfilePicture) => {
    user.value.profilePicture = newProfilePicture
  }

  return {
    user,
    changeName,
    changeEmail,
    changeToken,
    changeProfilePicture
  }
},
{
  persist: true
})
