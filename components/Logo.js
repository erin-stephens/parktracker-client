import React from 'react';
import Image from 'next/image';
import parktrackerlogo from '../src/assets/logo/parktrackerlogo.png';

export default function Logo() {
  return (
    <>
      <Image src={parktrackerlogo} alt="Logo" className="logo" />
    </>
  );
}
