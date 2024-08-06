import { init_auth } from "./auth"

export const init_store = async (): Promise<void> => {
    await init_auth()
}