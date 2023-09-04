import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";

const logout = () => {
  localStorage.clear()
  location.reload()
}

export const TopMenu = () => {
  const {user} = useSelector(state => state.auth)

  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src="/logo.svg"
                      alt="Your Company"
                    />
                  </Link>
                </div>
              </div>

              {user && <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>}
              {user && <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center space-x-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </Menu.Button>
                  </div>
                </Menu>
                <Disclosure.Button className="hover:bg-gray-50 hover:text-gray-900 bg-gray-100 block rounded-md py-2 px-3 text-xs font-medium">
                  <Link to="/set-preferences">Settings</Link>
                </Disclosure.Button>
                <Disclosure.Button onClick={logout} className="hover:bg-gray-50 hover:text-gray-900 bg-gray-100 block rounded-md py-2 px-3 text-xs font-medium">
                  Logout
                </Disclosure.Button>

              </div>}
            </div>
          </div>

          {user && <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="border-t border-gray-200 pb-3 ">
              <div className="mt-3 px-2 flex flex-col space-y-4">
                <Disclosure.Button className="hover:bg-gray-50 hover:text-gray-900 bg-gray-100 block rounded-md py-2 px-3 text-xs font-medium">
                  <Link to="/set-preferences">Settings</Link>
                </Disclosure.Button>
                <Disclosure.Button onClick={logout} className="hover:bg-gray-50 hover:text-gray-900 bg-gray-100 block rounded-md py-2 px-3 text-xs font-medium">
                  Logout
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
          }
        </>
      )}
    </Disclosure>
  )
}
