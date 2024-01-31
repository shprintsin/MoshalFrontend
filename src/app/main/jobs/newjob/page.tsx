import IconGlobe from '@/components/icons/IconGlobe'
import IconPepole from '@/components/icons/IconPepole'
import IconJobs from '@/components/icons/IconJobs'
import { NewJobDialog } from '../NewJobDialog'
import { Tabs, TabsList, TabsTrigger,TabsContent } from '@/components/ui/tabs'
import React from 'react'
import Link from 'next/link';
import { HeaderLayout } from './header/HeaderLayout'
import { CommunityTab } from './community/CommunityTab'
import { JobTab } from './jobs/JobTab'

export default function AddNewJob() {
  return (
    <div>
     <NewJobDialog/>
    </div>
  )
}


