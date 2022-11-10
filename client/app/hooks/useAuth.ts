import { AuthContext } from "providers/auth/AuthProvoder";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext)