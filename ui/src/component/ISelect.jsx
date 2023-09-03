// noinspection JSValidateTypes

import PropTypes from "prop-types";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {Icon} from "@iconify/react";


function joinClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const ISelect = ({options, setSelected, label, loading, selectedOption = {}, containerClassNames = '', valueProperty = 'id', labelProperty = 'name'}) => {
  return (
    <Listbox value={selectedOption} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className={`${containerClassNames} relative mt-2`}>

            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">{label}</Listbox.Label>
            <div className="relative">
              { loading &&
                <div className="inset-0 h-full z-20 w-full bg-black/30 absolute flex justify-center items-center rounded-md">
                  <Icon icon="gg:spinner" className="animate-spin h-6 w-6 text-primary"/>
                </div>
              }
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="block truncate">{selectedOption && selectedOption[labelProperty] ? selectedOption[labelProperty] : 'Select a value'}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <Listbox.Option
                    className={() =>
                      joinClassNames(
                        !selectedOption[valueProperty] ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    } value={null}>
                    {() => (
                      <>
                        <span className={joinClassNames(!selectedOption[valueProperty] ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          Select a value
                        </span>

                        {!selectedOption[valueProperty] ? (
                          <span
                            className={joinClassNames(
                              !selectedOption[valueProperty] ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                  {options.map((option) => (
                    <Listbox.Option
                      key={option[valueProperty]}
                      className={() =>
                        joinClassNames(
                          option[valueProperty] === selectedOption[valueProperty] ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={option}
                    >
                      {() => (
                        <>
                        <span className={joinClassNames(option[valueProperty] === selectedOption[valueProperty] ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {option[labelProperty]}
                        </span>

                          {option[valueProperty] === selectedOption[valueProperty] ? (
                            <span
                              className={joinClassNames(
                                option[valueProperty] === selectedOption[valueProperty] ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  )
}

ISelect.propTypes = {
  options: PropTypes.array,
  setSelected: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
  containerClassNames: PropTypes.string,
  selectedOption: PropTypes.object
}
