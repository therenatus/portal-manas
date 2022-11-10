import { IContext, UserType } from './auth.interface';
import { PropsWithChildren, createContext, useState } from 'react';
import { FC } from 'react';

export const AuthContext = createContext({} as IContext);

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<UserType>(null);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
