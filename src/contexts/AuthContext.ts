import { createContext } from "react";

export type UserType = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
};

export type AuthContextType = {
    user: UserType;
    role: "user" | "admin";
};

const AuthContext = createContext<AuthContextType>({
    user: { id: 0, first_name: "", username: "" },
    role: "user",
});

export default AuthContext;
