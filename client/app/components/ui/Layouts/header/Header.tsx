import styles from './Header.module.scss';
import { Logo } from './Logo';
import { FC } from 'react';
import LoginForm from '@/ui/Layouts/header/auth-form/LoginForm';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	);
};
