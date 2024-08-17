import React from 'react';
import Image from 'next/image';

import Zoomout from '@/public/zoom_out.svg';
import Zoomin from '@/public/zoom_in.svg';
import Collapse from '@/public/collapse_content.svg';
import FullScreen from '@/public/FullScreen.svg';

function Pdfcontroller() {
  return (
    <div className="flex justify-between lg:w-auto w-full">
      <div className="flex gap-2">
        <div className="flex items-center">
          <Image src={Zoomout} />
        </div>
        <div className="flex items-center">60%</div>
        <div className="flex items-center">
          <Image src={Zoomin} />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center">
          <div className="bg-white text-[#3D404B] text-[15px] rounded-[50%]">
            <Image src={FullScreen} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-white text-[#3D404B] text-[15px] rounded-xl flex gap-2 px-1">
            <Image src={Collapse} />
            <p>Collapse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdfcontroller;
