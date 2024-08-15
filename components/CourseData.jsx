import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

function CourseData() {
  return (
    <div className="mt-4">
      <p className="text-[#7A8196] text-[17px]">
        Select your course & subjects*
      </p>
      <div className="flex gap-4 mt-2 flex-wrap">
        <Select className="">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Coursework Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
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

        <Input type="text" />
      </div>

      <div className="mt-8">
        <button className="bg-[#ADB8C9] py-[8px] px-[24px] text-white rounded-3xl font-bold text-xl">
          Evaluate your Score
        </button>
      </div>
    </div>
  );
}

export default CourseData;
