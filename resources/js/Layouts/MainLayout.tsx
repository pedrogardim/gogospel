import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen items-center bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900">
           <div className='h-screen bg-green-100'>SIDEBAR</div>
           {children}
        </div>
    );
}
