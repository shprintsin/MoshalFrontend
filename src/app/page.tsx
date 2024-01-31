"use client"
import IconGlobe from '@/components/icons/IconGlobe'

import IconPepole from '@/components/icons/IconPepole'
import IconJobs from '@/components/icons/IconJobs'

import { Tabs, TabsList, TabsTrigger,TabsContent } from '@/components/ui/tabs'
import React from 'react'
import Link from 'next/link';
import { HeaderLayout } from './header/HeaderLayout'
import JobTab from './main/jobs/page'
import { useRouter } from 'next/navigation'

export default function HomeMoshal() {
  const router = useRouter()
  router.push('/main/jobs')
  return (
    
<>
</>   
  )
}


