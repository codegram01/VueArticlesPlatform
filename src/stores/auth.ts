import { auth_info_api } from "@/services/auth"
import type { Auth_info } from "@/types/auth"
import { computed, ref } from "vue"

export const auth_info = ref<Auth_info | undefined>()

export const set_auth = async (token: string):Promise<void> => {
    setToken(token)
    await get_auth_info()
}

export const isLoggedIn = computed(()=> {
    if(auth_info.value){
        return true
    }
    return false
})


export const token = ref<string | undefined>()
const setToken = (tkn: string): void => {
    token.value = "Bearer " + tkn
    localStorage.setItem("TOKEN", token.value)
}

export const getToken = (): void => {
    const tokenLocal = localStorage.getItem("TOKEN")
    if(tokenLocal){
        token.value = tokenLocal
    }
}

const get_auth_info = async (): Promise<void> => {
    try {
        await auth_info_api().then(res => {
            auth_info.value = res
        })
    } catch (error) {
        console.log(error)
    }
}

export const init_auth = async (): Promise<void> => {
    getToken()

    if(token.value) {
        await get_auth_info()
    }
}
