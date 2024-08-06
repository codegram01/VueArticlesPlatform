<script setup lang="ts">
import { login_api } from '@/services/auth';
import { set_auth } from '@/stores/auth';
import { ref } from 'vue';

const loginReq = ref({
    email: "",
    password: "",
})

const login = async (): Promise<void> => {
    try {
        await login_api({
            email: loginReq.value.email,
            password: loginReq.value.password,
        }).then(async res => {
            set_auth(res.token)
        })
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="login">
            <label>Email</label>
            <input type="text" v-model="loginReq.email">

            <label>Password</label>
            <input type="password" v-model="loginReq.password">

            <button type="submit">login</button>
        </form>
    </div>
</template>

<style scoped>

</style>