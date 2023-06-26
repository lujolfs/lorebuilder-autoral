"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SettingCards from '@/components/settingCards/SettingCards';
import CampaignCards from '@/components/campaignCards/CampaignCards';
import CharacterCards from '@/components/characterCards/CharacterCards';

export default function Dashboard() {
    const [checkAuth, setCheckAuth] = useState(false)
    const router = useRouter();
    
    useEffect(() => {
        const fetchItem: any = localStorage.getItem('token')
            if (fetchItem) {
                setCheckAuth(true)
            } else {
                router?.push('/')
            }
    }, []);

    return (
        <div>

            {checkAuth && (<>
                <SettingCards/>
                <CampaignCards/>
                <CharacterCards/>
                </>
            )}

        </div>
    )
}