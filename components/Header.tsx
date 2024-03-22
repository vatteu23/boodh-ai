import { cn } from '@/functions/cn';
import React from 'react';
import Container from './Container';
import Button from './Button';
import Typography from './Typography';


interface ContainerProps {
  className?: string;
  bgColor?: string;
  lightText?: boolean;
}

const Header: React.FC<ContainerProps> = ({ className, bgColor, lightText }) => {
  return (
    <div className={cn('sticky top-0 bg-center bg-zinc-100 z-50', className)} >
      <Container className='py-2 flex flex-row justify-between'>

        <Button href='/' className='!pl-0' color='light'>BOODH AI</Button>
        <div className='flex gap-x-2 md:gap-x-4'>
          <div className='py-3 cursor-pointer group'>
            <Typography variant='p' className='group-hover:text-zinc-600'>COMPANY</Typography>
          </div>
          <div className='py-3 cursor-pointer group'>
            <Typography variant='p' className='group-hover:text-zinc-600'>SERVICES</Typography>
          </div>
         </div>
        <div className='flex gap-x-2 md:gap-x-4'>
          <Button size='sm' color='dark' href='/contact' >
            Get in touch
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;