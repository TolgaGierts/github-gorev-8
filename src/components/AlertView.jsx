import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from './ui/button';

export function AlertView({ message, onClose }) {
  return (
    <div className='absolute w-1/2 top-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
      <Alert variant='destructive' className='relative'>
        <AlertCircle className='h-4 w-4' />

        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>

      <Button
        variant='outline'
        size='icon'
        onClick={onClose}
        className='absolute right-4 bottom-1/2 h-6 w-6 border-none'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          stroke='#ef4444'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-circle-x'
        >
          <circle cx={12} cy={12} r={10} />
          <path d='m15 9-6 6' />
          <path d='m9 9 6 6' />
        </svg>
      </Button>
    </div>
  );
}

export default AlertView;
