import { Header } from './header/Header';
import { FC, PropsWithChildren } from 'react';
import { Meta } from 'utils/meta/Meta';
import { IMeta } from 'utils/meta/meta.interface';

export const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />

			<div className="bg-[#ebeffd]">
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};
