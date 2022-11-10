import styles from './Button.module.scss';
import { IButton } from './button.interface';
import cn from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

type Props = {};

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
