'use client'
import { use, useEffect, useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { useRouter } from "next/navigation"
import pickProject from '@/actions/projects/getCertainApplication'
import { Project } from '@/interfaces/Project'
import Image from 'next/image'
import { H } from '@/components/typography/Htag/H'
import { P } from '@/components/typography/Ptag/P'
import classNames from 'classnames'

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { theme, mounted } = useTheme()

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        setError(null)
        const projectData = await pickProject(id)
        if (projectData) {
          setProject(projectData)
        } else {
          setError('Проект не найден')
        }
      } catch (err) {
        setError('Ошибка при загрузке проекта')
        console.error('Error fetching project:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProject()
    }
  }, [id])

  const handleGoBack = () => {
    router.back()
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={classNames(
        "min-h-screen transition-colors duration-300",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        {/* Кнопка назад в состоянии загрузки */}
        <button
          onClick={handleGoBack}
          className={classNames(
            "absolute top-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 transition-colors duration-300 group z-10",
            theme === 'light' 
              ? "text-gray-600 hover:text-gray-900" 
              : "text-gray-400 hover:text-white"
          )}
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Назад</span>
        </button>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Скелетон для изображения */}
            <div className={classNames(
              "h-64 md:h-96 rounded-2xl mb-8 animate-pulse",
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
            )}></div>
            
            {/* Скелетон для заголовка */}
            <div className="space-y-4">
              <div className={classNames(
                "h-8 rounded-lg animate-pulse w-3/4",
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              )}></div>
              <div className={classNames(
                "h-4 rounded-lg animate-pulse",
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              )}></div>
              <div className={classNames(
                "h-4 rounded-lg animate-pulse w-5/6",
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              )}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className={classNames(
        "min-h-screen transition-colors duration-300 flex items-center justify-center relative",
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        {/* Кнопка назад в состоянии ошибки */}
        <button
          onClick={handleGoBack}
          className={classNames(
            "absolute top-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 transition-colors duration-300 group",
            theme === 'light' 
              ? "text-gray-600 hover:text-gray-900" 
              : "text-gray-400 hover:text-white"
          )}
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Назад</span>
        </button>

        <div className="text-center">
          <div className={classNames(
            "w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center",
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          )}>
            <span className="text-4xl">😕</span>
          </div>
          <H type="h2" className={classNames(
            "mb-4",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            {error || 'Проект не найден'}
          </H>
          <P className={classNames(
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}>
            Попробуйте обновить страницу или вернуться позже
          </P>
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(
      "min-h-screen transition-colors duration-300 relative",
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    )}>
      {/* Кнопка назад */}
      <button
        onClick={handleGoBack}
        className={classNames(
          "absolute top-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 transition-colors duration-300 group z-10",
          theme === 'light' 
            ? "text-gray-600 hover:text-gray-900" 
            : "text-gray-400 hover:text-white"
        )}
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Назад</span>
      </button>

      <div className="container mx-auto px-4 py-8">
        <div className={classNames(
          "max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl",
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        )}>
          {/* Изображение проекта */}
          <div className="relative h-64 md:h-96">
            <Image
              src={project.img}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Заголовок на изображении */}
            <div className="absolute bottom-6 left-6 right-6">
              <H 
                type="h1" 
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
              >
                {project.name}
              </H>
            </div>
          </div>

          {/* Контент проекта */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Описание */}
            <div className="mb-8">
              <P className={classNames(
                "text-lg leading-relaxed",
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              )}>
                {project.description}
              </P>
            </div>

            {/* Детали проекта */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Стоимость */}
              <div className={classNames(
                "p-6 rounded-2xl border-l-4",
                theme === 'dark' 
                  ? 'bg-gray-700/50 border-green-500' 
                  : 'bg-green-50 border-green-400'
              )}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={classNames(
                    "p-2 rounded-lg",
                    theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                  )}>
                    <span className="text-2xl">💰</span>
                  </div>
                  <H type="h3" className={classNames(
                    "text-lg",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    Стоимость
                  </H>
                </div>
                <P className={classNames(
                  "text-2xl font-bold",
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                )}>
                  {project.price.toLocaleString('ru-RU')} ₽
                </P>
              </div>

              {/* Время разработки */}
              <div className={classNames(
                "p-6 rounded-2xl border-l-4",
                theme === 'dark' 
                  ? 'bg-gray-700/50 border-blue-500' 
                  : 'bg-blue-50 border-blue-400'
              )}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={classNames(
                    "p-2 rounded-lg",
                    theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                  )}>
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <H type="h3" className={classNames(
                    "text-lg",
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  )}>
                    Срок разработки
                  </H>
                </div>
                <P className={classNames(
                  "text-2xl font-bold",
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                )}>
                  {project.time_develop} дней
                </P>
              </div>
            </div>

            {/* Даты */}
            <div className={classNames(
              "p-6 rounded-2xl",
              theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-50'
            )}>
              <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
                <div className="text-center sm:text-left">
                  <P className={classNames(
                    "font-semibold mb-1",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Создан
                  </P>
                  <P className={classNames(
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    {new Date(project.created_at).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </P>
                </div>
                <div className="text-center sm:text-right">
                  <P className={classNames(
                    "font-semibold mb-1",
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  )}>
                    Обновлен
                  </P>
                  <P className={classNames(
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    {new Date(project.update_at).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </P>
                </div>
              </div>
            </div>

            {/* Кнопка действия */}
            <div className="mt-8 text-center">
              <button className={classNames(
                "px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105",
                "bg-gradient-to-r from-[#D24A43] to-[#b53a34] text-white",
                "hover:from-[#b53a34] hover:to-[#9a2d28] shadow-lg hover:shadow-xl"
              )}>
                Обсудить подобный проект
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}