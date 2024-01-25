import React from 'react';
import Image from 'next/image';

export const Logo = () => (

    <Image
        src='/logo.svg'
        alt='netflix'
        width={98}
        height={98}
        className='cursor-pointer' />
);
