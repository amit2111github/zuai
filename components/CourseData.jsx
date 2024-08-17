import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { fileStore, titleStore } from '@/store/file';
import { fileProcessing } from '@/lib/helper';

function CourseData() {
  const { title, subject, courseType, setData } = titleStore((state) => state);
  const file = fileStore((s) => s.file);

  const active = Boolean(title && subject && courseType && file);

  // const color = active ? '[#6947BF]' : '';

  return (
    <div className="mt-4">
      <p className="text-[#7A8196] text-[17px]">
        Select your course & subjects*
      </p>
      <div className="flex gap-4 mt-2 flex-wrap">
        <Select
          onValueChange={(e) => {
            setData('courseType', e);
            console.log(e, 'wsa');
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Coursework Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(e) => setData('subject', e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-3">
        <p className="text-[#7A8196] text-[17px]">
          Enter your essay title*(Required)
        </p>
        <Input
          type="text"
          className="mt-2"
          value={title}
          onChange={(e) => setData('title', e.target.value)}
        />
      </div>

      <div className="mt-8">
        <button
          disabled={!active}
          onClick={async (e) =>
            await fileProcessing(file, courseType, title, subject)
          }
          className="bg-[#ADB8C9] py-[8px] px-[24px] text-white rounded-3xl font-bold text-xl"
        >
          Evaluate your Score
        </button>
      </div>
    </div>
  );
}

export default CourseData;
