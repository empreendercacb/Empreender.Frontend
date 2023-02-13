/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from 'components/Loading'
import axios from 'api/axios'

export default function Course() {
  const [loading, setLoading] = useState(true)
  const [course, setCourse] = useState({})
  const { courseId } = useParams()

  useEffect(() => {
    axios
      .get(`/courses/${courseId}`)
      .then((res) => {
        // Update state
        setCourse(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        // handle any rejected Promises or errors, etc...
      })
  }, [courseId])

  if (loading) {
    return <Loading />
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {course.name} - ({course.slug})
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Uma breve descrição do curso
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Professor</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {course.teacher.name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Departamento
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {course.dep || 'Departamento Indefinido'}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Email do Professor
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {course.teacher.email}
              </dd>
            </div>

            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Sobre</dt>
              <dd className="mt-1 text-sm text-gray-900">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            {course.tests[0] && (
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Provas</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 rounded-md border border-gray-200"
                  >
                    {course.tests.map((test, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <NewspaperIcon
                            className="h-5 w-5 shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate">
                            {test.name}
                          </span>
                        </div>
                        <div className="ml-4 shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Informações
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </main>
  )
}
