import React from 'react';
import Image from 'next/image';
import header from '../src/assets/logo/header.png';

export default function Logo() {
  return (
    <>
      <Image src={header} alt="header" className="header" />
    </>
  );
}
