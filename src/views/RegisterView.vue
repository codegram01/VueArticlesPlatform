<script setup lang="ts">
import { register_api } from '@/services/auth';
import { ref } from 'vue';

const registerReq = ref({
    email: "",
    password: "",
    confirm_password: "",
})

const register = async (): Promise<void> => {
    try {
        await register_api({
            email: registerReq.value.email,
            password: registerReq.value.password,
            confirm_password: registerReq.value.confirm_password
        }).then(_ => {
            alert("Register Success")
        })
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="register">
            <label>Email</label>
            <input type="text" v-model="registerReq.email">

            <label>Password</label>
            <input type="password" v-model="registerReq.password">

            <label>Confirm Password</label>
            <input type="password" v-model="registerReq.confirm_password">

            <button type="submit">Register</button>
        </form>
    </div>
</template>

<style scoped>

</style>