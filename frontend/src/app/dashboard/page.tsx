import SettingCards from '@/components/settingCards/SettingCards';
import CampaignCards from '@/components/campaignCards/CampaignCards';
import CharacterCards from '@/components/characterCards/CampaignCards';

export default function Dashboard() {
    return (
        <>
            <SettingCards />
            <CampaignCards />
            <CharacterCards />
        </>
    )
}