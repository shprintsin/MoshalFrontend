import React from 'react';
import { SearchBlock } from './search/SearchBlock';
import { JobCard } from './card/JobCard';
import { NewJobDialog } from './NewJobDialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function JobTab() {
  return <div className='relative min-h-screen'>
 <div>
 <SearchBlock />
   
   <JobCard />
   
       <JobCard />
 </div>
    
 <div className="fixed bottom-0 m-4">
        {/* Your floating content here */}
        <NewJobDialog />
      </div>
  </div>;
}
