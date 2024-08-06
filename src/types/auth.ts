
export type ROLE = "USER" | "ADMIN"

export interface Auth_info {
    id: number;
    email: string;
    created_at: string;
    role: ROLE;
}

