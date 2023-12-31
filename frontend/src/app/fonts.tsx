import { Share, VT323 } from 'next/font/google'

export const share = Share({
    weight: ['400', '700'], 
    subsets: ['latin'], 
    style: ['normal', 'italic'],
    variable: '--font-share',
});

export const vt323 = VT323({
    weight: ['400'],
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-vt323',
})