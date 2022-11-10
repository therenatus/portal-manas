import styles from './UserAvatar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {};

export const UserAvatar: FC<{
	avatar: string;
	link: string;
}> = (avatar, link) => {
	return (
		<Link href={link}>
			<Image
				src={avatar}
				className={styles.avatar}
				width={46}
				height={46}
				alt=""
			/>
		</Link>
	);
};
