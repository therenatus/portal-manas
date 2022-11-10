import LogoImage from 'assets/logo.webp';
import Image from 'next/image';
import React from 'react';

export const Logo = () => {
	return <Image src={LogoImage} width={100} height={100} alt="logo" />;
};
