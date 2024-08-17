'use client';
import React, { useState } from 'react';
import Preview from './Preview';

function MyCourse() {
  const [showall, setShowAll] = useState(false);
  const [myCourse, setMyCourse] = useState(
    () => JSON.parse(localStorage.getItem('workspace')) || []
  );

  return (
    <div className="col-span-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        {(showall ? myCourse : myCourse.slice(0, 2)).map((course) => {
          return (
            <div className="flex grow">
              <Preview course={course} />
            </div>
          );
        })}
      </div>
      {myCourse && myCourse.length > 0 && (
        <div
          className="text-center text-[16px] mt-4 cursor-pointer text-[#7A8196]"
          onClick={(e) => setShowAll((old) => !old)}
        >
          {showall ? 'Collapse' : 'View all'}
        </div>
      )}
    </div>
  );
}

export default MyCourse;
