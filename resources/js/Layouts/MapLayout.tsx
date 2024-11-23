
import { PropsWithChildren } from 'react';

import { MissionMap } from '@/mission/components/MissionMap';
import { Mission } from '@/shared/mission/domain/Mission';

export default function MapLayout({ children, missions }: PropsWithChildren<{missions: Mission[]}>) {
    return (
    <div className="flex flex-row flex-1">
        <div className="flex-[0.7] z-10 shadow-xl bg-white">
            {children}
        </div>
        <div className="flex-1">
            <MissionMap missions={missions} />
        </div>
    </div>
    );
}
