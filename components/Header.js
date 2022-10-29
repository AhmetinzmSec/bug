
const items = [
    /* { icon: 'fab fa-youtube', link: 'https://youtube.com/UmutBayraktarYT' }, */
    { icon: 'fab fa-discord', link: 'https://discord.com/users/801006452416184330' },
    { icon: 'fab fa-instagram', link: 'https://instagram.com/ahmetinzmsec' },
    { icon: 'fab fa-github', link: 'https://github.com/AhmetinzmSec' },
  ]

const navItems = [
    { icon: 'fal fa-home', active: 'fa fa-home', label: 'Ana Sayfa', href: '/' },
    { icon: 'fal fa-compass', active: 'fa fa-compass', label: 'Projeler', href: '/projects' },
    { icon: 'fal fa-phone', active: 'fa fa-phone', label: 'İletişim', href: '/contact' },
    { icon: 'fal fa-rss', active: 'fa fa-rss', label: 'Thunar', href: 'https://thunar.vercel.app/' }
]

import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return <>
        <div className="w-full border-b-2 border-neutral-800/20 pb-2">
            <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
                <p className="font-semibold font-Poppins text-xl">BUG</p>
                <div className="flex items-center space-x-2">
                    {items.map(item => (
                        <a key={item.link} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-center hover:bg-neutral-700/20 rounded-xl transition-all duration-150 p-2 px-3">
                            <i className={`${item.icon} text-3xl`} />
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-4 py-2">
                {navItems.map(item => (
                    <Link key={item.label} href={item.href}>
                        <a className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${router.asPath === item.href && 'text-white/100'}`}>
                            <i className={`${router.asPath === item.href ? item.active : item.icon} mr-2`} />{item.label}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </>
}

export default Header;