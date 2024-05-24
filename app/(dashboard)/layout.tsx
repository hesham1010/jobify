import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

import { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
    return (
        <main className='grid grid-cols-5'>
            {/* first -col hide on small screen */}

            <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
                <Sidebar />
            </div>
            {/* second-col hide dropdown on big screen */}
            <div className='col-span-5 lg:col-span-4'>
                <Navbar />
                <div className='py-16 px-4 sm:px-8 lg:px-16'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout