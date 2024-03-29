import { cn } from '@/src/functions/cn';
import React, { ReactNode } from 'react';
import Header from './Header';

import { Open_Sans } from "next/font/google";
interface ContainerProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  lightText?: boolean;
}

const roboto = Open_Sans({
  weight: ['300','400','500','600','700'],
  subsets: ['latin']
});

const Layout: React.FC<ContainerProps> = ({ children, className }) => {
  return (
     <div className={cn(roboto.className,className)}>
        <Header/>
         {children}
        
     </div>
  );
};

export default Layout;