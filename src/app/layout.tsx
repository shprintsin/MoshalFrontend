import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import './globals.css';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body className=" bg-slate-300">
        {/* <div className='flex bg-black m-2'>

        <div className='flex flex-col gap-4 m-auto w-[430px] h-[932px] bg-white'> */}
        <div className="p-3">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel></ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="p-3 flex flex-col min-h-screen bg-white  rounded-sm">
                {children}
              </div>
            </ResizablePanel>
            <ResizableHandle />

            <ResizablePanel></ResizablePanel>
            <ResizableHandle />
          </ResizablePanelGroup>
        </div>
      </body>
    </html>
  );
}
