import { Dispatch, SetStateAction } from "react";
import { IUser } from "shared/interfaces/user.interface";

export type UserType = IUser | null;

export interface IContext {
    user: UserType
    setUser: Dispatch<SetStateAction<UserType>>
};