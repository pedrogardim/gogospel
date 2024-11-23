import Main from '@/Layouts/MainLayout';
import MapLayout from '@/Layouts/MapLayout';
import { Mission } from '@/shared/mission/domain/Mission';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Explore({
    missions,
}: PageProps<{ missions: Mission[]}>) {
    return (
        <Main>
            <Head title="Explore" />
            <MapLayout missions={missions}>
                <div className="py-12">
                    {missions.map((mission) => (
                        <div key={mission.id}>
                            {mission.title}
                        </div>
                    ))}
                </div>
            </MapLayout>
        </Main>
    );
}
