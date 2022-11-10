import styles from './LoginForm.module.scss';
import { validEmail } from './auth-form.constant';
import { IAuthFields } from './login-form.interface';
import { motion } from 'framer-motion';
import { useOutside } from 'hooks/useOutside';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';
import { IUser } from 'shared/interfaces/user.interface';
import { fromAnimation } from 'utils/animation/animation';
import { Button } from '@/components/ui/Button/Button';
import Field from '@/components/ui/Fields/Field';
import { UserAvatar } from '@/components/ui/UserAvatar/UserAvatar';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IAuthFields>({ mode: 'onChange' });

	const { ref, isShow, setIsShow } = useOutside(false);
	const [user, setUser] = useState<IUser | null>(null);

	return (
		<div className={styles.wrapper}>
			{user ? (
				<UserAvatar avatar="" link="" />
			) : (
				<button
					onClick={() => setIsShow(!isShow)}
					className={styles.button}
				>
					<FaRegUserCircle />
				</button>
			)}
			<motion.div
				initial={false}
				animate={isShow ? 'open' : 'closed'}
				variants={fromAnimation}
			>
				<form className={styles.form}>
					<Field
						{...register('email', {
							required: 'Введите email',
							pattern: {
								value: validEmail,
								message: 'Веедите правильную почту'
							}
						})}
						placeholder="Email"
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Введите пароль',
							minLength: {
								value: 6,
								message: 'Длина должен быть более 6 символов'
							}
						})}
						placeholder="Password"
						error={errors.password}
						type={'password'}
					/>
					<div className={styles.loginButton}>
						<Button>Login</Button>
					</div>
				</form>
			</motion.div>
		</div>
	);
};

export default LoginForm;
