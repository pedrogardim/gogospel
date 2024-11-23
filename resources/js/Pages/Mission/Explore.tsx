import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Guest from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Explore({
    missions,
}: PageProps<{ missions: any[]}>) {
    return (
        <Guest>
            <Head title="Explore" />

            <div className="py-12">
                EXPLORE!
                {missions.map((mission) => (
                    <div key={mission.id}>
                        {mission.title}
                    </div>
                ))}
            </div>
        </Guest>
    );
}
