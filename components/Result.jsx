import React from 'react';
import dynamic from 'next/dynamic';

import Evaluation from './Evaluation';
const FullPDF = dynamic(() => import('./FullPDF'), {
  ssr: false,
});

function Result() {
  return (
    <div className="pt-[100px] grid grid-cols-12 gap-3">
      <div className="col-span-12 lg:col-span-7">
        <FullPDF />
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-2">
        <Evaluation />
      </div>
    </div>
  );
}

export default Result;
