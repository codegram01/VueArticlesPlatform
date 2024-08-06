import { BASE_API } from "@/key/key";
import { token } from "@/stores/auth";
import type { METHOD_HTTP } from "@/types/common";

export const api = async (method: METHOD_HTTP, url: string, data: any | undefined): Promise<any> => {
    const urlApi = BASE_API + url;
    let body;
    if(data){
        body = JSON.stringify(data)
    }

    return await fetch(urlApi, {
        method: method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token.value ? token.value : ""
        },
        body: body,
    }).then(async res => {
        const data = await res.json()

        if(res.ok){
            return data;   
        }else {
            throw data.error;
        }
    })
}