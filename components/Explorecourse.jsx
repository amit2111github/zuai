import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function Explorecourse() {
  return (
    <div className="col-span-12">
      <h2 className="font-[600] text-[#5B6170] text-[24px]">
        Explore coursework
      </h2>
      <Tabs defaultValue="All">
        <TabsList className="mt-3 w-full flex flex-wrap justify-start">
          <TabsTrigger className="text-[20px] rounded-2xl px-4" value="All">
            All
          </TabsTrigger>
          <TabsTrigger
            value="IA Example"
            className="text-[20px] rounded-2xl px-4"
          >
            IA Example
          </TabsTrigger>
          <TabsTrigger
            value="EE Example"
            className="text-[20px] rounded-2xl px-4"
          >
            EE Example
          </TabsTrigger>
          <TabsTrigger
            value="IO Example"
            className="text-[20px] rounded-2xl px-4"
          >
            IO Example
          </TabsTrigger>
          <TabsTrigger
            value="Tok Example"
            className="text-[20px] rounded-2xl px-4"
          >
            Tok Example
          </TabsTrigger>
        </TabsList>

        <TabsContent value="All">
          Make changes to your account here.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Explorecourse;
