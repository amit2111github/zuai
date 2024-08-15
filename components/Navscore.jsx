import React from 'react';
import { Calendar } from 'lucide-react';
import Note from '@/public/note_stack.png';
import Image from 'next/image';
import Fire from '@/public/fire.png';
function Navscore() {
  return (
    <div className="fixed top-0 right-0 w-[100px] p-2 text-[#5B6170] flex flex-col gap-[10px] justify-end">
      <div className="p-2 text-center rounded-3xl bg-white text-xl font-[800] flex gap-2">
        <div class="inline-flex items-center justify-center w-6 h-6 rounded-[50%] text-[#834700] text-[14px] bg-[#F29100]">
          zu
        </div>
        <div class="flex items-center justify-center w-6 h-6">120</div>
      </div>
      <div className="p-2 text-center flex gap-2 justify-center rounded-3xl bg-white text-xl font-[800]">
        <div class="inline-flex items-center justify-center w-6 h-6">
          <Image src={Fire} alt="fire" width="30" />
        </div>
        <div class="flex items-center justify-center w-6 h-6">24</div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-[50%] p-2 bg-white">
          <div
            className="flex shadow-xl justify-center p-2 rounded-[50%] border bg-white text-xl font-[800]"
            s
          >
            <Calendar size={22} />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-[50%] p-2 bg-white">
          <div
            className="flex border border-gray-300 shadow-xl justify-center p-2 rounded-[50%] border bg-white text-xl font-[800]"
            s
          >
            <Image src={Note} alt="note-stack" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navscore;
