import { AppSidebar } from '@/components/common/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ModalProvider } from '@/context/modal-context';
import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen items-center bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900">
          <ModalProvider>
            <SidebarProvider>
                <AppSidebar />
                {children}
            </SidebarProvider>
          </ModalProvider>
        </div>
    );
}
