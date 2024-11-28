import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon, UserIcon } from '@heroicons/react/20/solid'
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
const sample2 = [
    {
        id: 1,
        name: 'Document 1',
        href: '#',
        status: 'Complete',
        createdBy: 'Leslie Alexander',
        dueDate: 'March 17, 2023',
        dueDateTime: '2023-03-17T00:00Z',
    },
    {
        id: 2,
        name: 'Document 2',
        href: '#',
        status: 'In progress',
        createdBy: 'Leslie Alexander',
        dueDate: 'May 5, 2023',
        dueDateTime: '2023-05-05T00:00Z',
    },
    {
        id: 3,
        name: 'Document 3',
        href: '#',
        status: 'In progress',
        createdBy: 'Courtney Henry',
        dueDate: 'May 25, 2023',
        dueDateTime: '2023-05-25T00:00Z',
    },


]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



const ClientDetails = () => {
    return <>
        <div className="sticky top-0 border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="ml-4 mt-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <UserIcon
                                className="h-12 w-12 rounded-full text-gray-500"
                            />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">Tom Cook</h3>
                            <p className="text-sm text-gray-500">
                                <a href="#">@tom_cook</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ml-4 mt-4 flex flex-shrink-0">
                    <button
                        type="button"
                        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        <ArchiveBoxXMarkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span>Disable Client</span>
                    </button>
                </div>
            </div>
        </div>
        <ul role="list" className="divide-y divide-gray-100 px-4">
            {sample2.map((project) => (
                <li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-sm  leading-6 text-gray-700">{project.name}</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-none items-center gap-x-4">
            <Menu as="div" className="relative flex-none">
                <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </MenuButton>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'bg-gray-50' : '',
                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                    )}
                                >
                                    Edit<span className="sr-only">, {project.name}</span>
                                </a>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'bg-gray-50' : '',
                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                    )}
                                >
                                    Move<span className="sr-only">, {project.name}</span>
                                </a>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'bg-gray-50' : '',
                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                    )}
                                >
                                    Delete<span className="sr-only">, {project.name}</span>
                                </a>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>
        </div> */}
                </li>
            ))}
        </ul>
    </>
}

export default ClientDetails
