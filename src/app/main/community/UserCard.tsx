import IconLinkedin from '@/components/icons/IconLinkedin';
import IconMail from '@/components/icons/IconMail';
import IconWhatsapp from '@/components/icons/IconWhatsapp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from 'react';
import { JobToggle } from '../jobs/JobToggle';
import { ExpandSettings } from '../jobs/search/ExpandSettings';

export function UserCard() {
  return <div className="col-span-3 lg:col-span-4 lg:border-l">
    <div className="h-full px-4 py-6 lg:px-8">
      <Card>
        <CardHeader className="grid grid-cols-[1fr_15px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-sm flex gap-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <h3>Adir Barak</h3>

            </CardTitle>
                 </div>
                 
          <div className="flex items-center space-x-1 rounded-md bg-white text-secondary-foreground">
            <ExpandSettings />
          </div>
        </CardHeader>
        <CardContent>
        <div>
                {/* grid 3*2 */}
                <div className='flex gap-1'>
                  <IconWhatsapp />
                  <IconLinkedin />
                  <IconMail />

                </div>

                <h3>Institute:</h3>
                <span> tel aviv university</span>
                <h3>current workplace</h3>
                intel
                <h3>Bio:</h3>
              </div>
          <JobToggle />
        </CardContent>
      </Card>
    </div>
  </div>;
}
