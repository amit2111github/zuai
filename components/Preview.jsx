import React, { useEffect, useRef, useState } from 'react';
import Badge from './Badge';
import Face from '@/public/face.svg';
import Time from '@/public/time.svg';
import Word from '@/public/word.svg';
import Star from '@/public/star.svg';
import English from '@/public/english.svg';
import Demo from '@/public/demo.svg';
import Image from 'next/image';

function Preview({ course }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    const byteCharacter = atob(course.pdf);
    const byteNumber = new Array(byteCharacter.length);
    for (let i = 0; i < byteCharacter.length; i++) {
      byteNumber[i] = byteCharacter.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumber);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);

    setSrc(blobUrl);
  }, []);
  return (
    <div className="rounded-2xl shadow-xl border flex border p-[8px] bg-slate-100 grid grid-cols-12 gap-4">
      <div className="rounded-xl h-[180px] overflow-hidden hidden col-span-4 lg:block bg-white pt-2">
        {/* <iframe
          src={src}
          frameborder="0"
          // scale-[1.2] translate-x-[-100px] translate-y-[-50px]
          className="w-[full] h-full"
        ></iframe> */}
        <Image src={Demo} alt="image" className="m-auto" />
      </div>
      <div className="col-span-12 lg:col-span-8 p-3 lg:p-0">
        <h2 className="text-[#3D404B] font-[800] text-[18px] line-clamp-2">
          {course.title}
        </h2>
        <p className="line-clamp-2 text-[#7A8196] text-[14px]">
          {course.title}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge text={course.subject} img={Face} />
          <Badge text="18 min read" img={Time} />
          <Badge text="2388 words" img={Word} />
          <Badge text="7/7" img={Star} />
          <Badge text="English" img={English} />
        </div>
      </div>
    </div>
  );
}

export default Preview;
