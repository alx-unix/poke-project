import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import pokeball from '../assets/images/pokeball.png'
import ash from '../assets/images/ashe-ketchum.jpg'

const navigation = [


    { name: 'Pokedex', href: '#', current: true },
    { name: 'Team Rocket', href: 'https://www.youtube.com/watch?v=x3lyvJJRJQE&autoplay=1', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
    <Disclosure as="nav" className="bg-white">
        <div className="mx-auto max-w-10xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                    </DisclosureButton>
                </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
                <img
                    alt="Pokeball"
                    src={pokeball}
                    className="h-12 w-auto"
                />
            </div>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'bg-white text-grey-500' : 'text-gray-500 hover:bg-yellow-500 hover:text-white',
                        'rounded-md px-3 py-2 text-md font-medium',
                    )}
                    >
                    {item.name}
                    </a>
                ))}
                </div>
            </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
                <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                        alt=""
                        src={ash}
                        className="size-12 rounded-full"
                        />
                    </MenuButton>
                </div>
            </Menu>
            </div>
        </div>
        </div>

        <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
            <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                item.current ? 'bg-yellow-500 text-teal' : 'text-gray-500 hover:bg-yellow-500 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
                )}
            >
                {item.name}
            </DisclosureButton>
            ))}
        </div>
        </DisclosurePanel>
    </Disclosure>
    )
}