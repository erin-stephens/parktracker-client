import React from 'react';
import Image from 'next/image';
import header from '../src/assets/logo/header.png';

export default function Header() {
  return (
    <>
      <div className="header">
        <Image src={header} alt="header image" className="headerimage" />
      </div>
    </>
  );
}
