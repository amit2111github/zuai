import React from 'react';
import Scoreimage from '@/public/scoreimage.png';
import Image from 'next/image';

function Scorecard() {
  return (
    <div className="h-full">
      <Image src={Scoreimage} alt="image" className="h-[100%]" />
    </div>
  );
}

export default Scorecard;
