import { api } from "@/modules/api";
import type { Auth_info, ROLE } from "@/types/auth";
import { process_error } from ".";

interface Register_req {
    email: string;
    password: string;
    confirm_password: string;
}

interface Register_res {
    id: number;
    email: string,
    created_at: string,
    role: ROLE
}

export const register_api = async (data: Register_req): Promise<Register_res> => {
    try {
        return await api("POST", "/auth/register", data)
    } catch (error) {
        process_error(error)
        throw error
    }
}

interface Login_req {
    email: string;
    password: string;
}

interface Login_res {
    token: string
}

export const login_api = async (data: Login_req): Promise<Login_res> => {
    try {
        return await api("POST", "/auth/login", data)
    } catch (error) {
        process_error(error)
        throw error
    }
}

export const auth_info_api = async (): Promise<Auth_info> => {
    try {
        return await api("GET", "/auth/info", null)
    } catch (error) {
        process_error(error)
        throw error
    }
}