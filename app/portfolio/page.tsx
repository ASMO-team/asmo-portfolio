'use client';
import { useState, useEffect } from 'react';
import PortfolioCart from '@/components/cards/PortfolioCart/PortfolioCart';
import { H } from '@/components/typography/Htag/H';
import { P } from '@/components/typography/Ptag/P';
import { useRouter } from "next/navigation";
import { useTheme } from '@/hooks/useTheme';
import classNames from 'classnames';
import fetchWebApplications from '@/actions/projects/getWebApplications';
import fetchMobileApplications from '@/actions/projects/getMobileApplications';
import fetchBots from '@/actions/projects/getBots';
import { Project } from "@/interfaces/Project";

export default function Portfolio() {
  const router = useRouter();
  const { theme, mounted } = useTheme();
  const [webProjects, setWebProjects] = useState<Project[]>([]);
  const [mobileProjects, setMobileProjects] = useState<Project[]>([]);
  const [botProjects, setBotProjects] = useState<Project[]>([]);
  const [loadingWeb, setLoadingWeb] = useState<boolean>(true);
  const [loadingMobile, setLoadingMobile] = useState<boolean>(true);
  const [loadingBots, setLoadingBots] = useState<boolean>(true);
  const [errorWeb, setErrorWeb] = useState<string | null>(null);
  const [errorMobile, setErrorMobile] = useState<string | null>(null);
  const [errorBots, setErrorBots] = useState<string | null>(null);

  // Загрузка всех проектов
  useEffect(() => {
    const loadAllProjects = async () => {
      // Загрузка веб-приложений
      try {
        setLoadingWeb(true);
        const webData = await fetchWebApplications();
        if (webData) {
          setWebProjects(Array.isArray(webData) ? webData : [webData]);
        }
      } catch (err) {
        console.error("Failed to load web projects:", err);
        setErrorWeb("Не удалось загрузить веб-приложения");
      } finally {
        setLoadingWeb(false);
      }

      // Загрузка мобильных приложений
      try {
        setLoadingMobile(true);
        const mobileData = await fetchMobileApplications();
        if (mobileData) {
          setMobileProjects(Array.isArray(mobileData) ? mobileData : [mobileData]);
        }
      } catch (err) {
        console.error("Failed to load mobile projects:", err);
        setErrorMobile("Не удалось загрузить мобильные приложения");
      } finally {
        setLoadingMobile(false);
      }

      // Загрузка ботов
      try {
        setLoadingBots(true);
        const botData = await fetchBots();
        if (botData) {
          setBotProjects(Array.isArray(botData) ? botData : [botData]);
        }
      } catch (err) {
        console.error("Failed to load bot projects:", err);
        setErrorBots("Не удалось загрузить ботов");
      } finally {
        setLoadingBots(false);
      }
    };

    loadAllProjects();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  // Компонент для секции проектов
  const ProjectSection = ({ 
    title, 
    projects, 
    loading, 
    error 
  }: { 
    title: string;
    projects: Project[];
    loading: boolean;
    error: string | null;
  }) => {
    if (loading) {
      return (
        <div className="text-center py-8">
          <P center className={classNames(
            "transition-colors duration-300",
            theme === 'light' ? "text-gray-600" : "text-gray-400"
          )}>
            Загрузка {title.toLowerCase()}...
          </P>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8">
          <P center className="text-red-500">
            {error}
          </P>
        </div>
      );
    }

    if (projects.length === 0) {
      return (
        <div className="text-center py-8">
          <P center className={classNames(
            "transition-colors duration-300",
            theme === 'light' ? "text-gray-500" : "text-gray-400"
          )}>
            {title} не найдены
          </P>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortfolioCart
            id={project.id}
            key={project.id}
            imageUrl={project.img}
            title={project.name}
            description={project.description}
            className="w-full transform hover:-translate-y-2 transition-transform duration-300"
          />
        ))}
      </div>
    );
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
    );
  }

  return (
    <div className={classNames(
      "min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300",
      theme === 'light' 
        ? "bg-linear-to-br from-gray-50 to-gray-100" 
        : "bg-linear-to-br from-gray-900 to-gray-800"
    )}>
      {/* Кнопка назад */}
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

      {/* Заголовок страницы */}
      <div className="max-w-7xl mx-auto text-center mb-16 pt-8">
        <H type="h1" className={classNames(
          "mb-4 transition-colors duration-300",
          theme === 'light' ? "text-gray-900" : "text-white"
        )}>
          Наше <span className="text-red-500">Портфолио</span>
        </H>
        <P center className={classNames(
          "max-w-3xl mx-auto transition-colors duration-300",
          theme === 'light' ? "text-gray-600" : "text-gray-300"
        )}>
          Исследуйте наши лучшие проекты, где инновации встречаются с дизайном
        </P>
        
        {/* Декоративная линия */}
        <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Секция веб-приложений */}
        <section>
          <div className="text-center mb-8">
            <H type="h2" className={classNames(
              "mb-2 transition-colors duration-300",
              theme === 'light' ? "text-gray-900" : "text-white"
            )}>
              Веб-приложения
            </H>
            <P center className={classNames(
              "transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-300"
            )}>
              Современные веб-решения для бизнеса
            </P>
          </div>
          <ProjectSection
            title="Веб-приложения"
            projects={webProjects}
            loading={loadingWeb}
            error={errorWeb}
          />
        </section>

        {/* Секция мобильных приложений */}
        <section>
          <div className="text-center mb-8">
            <H type="h2" className={classNames(
              "mb-2 transition-colors duration-300",
              theme === 'light' ? "text-gray-900" : "text-white"
            )}>
              Мобильные приложения
            </H>
            <P center className={classNames(
              "transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-300"
            )}>
              Кроссплатформенные мобильные решения
            </P>
          </div>
          <ProjectSection
            title="Мобильные приложения"
            projects={mobileProjects}
            loading={loadingMobile}
            error={errorMobile}
          />
        </section>

        {/* Секция ботов */}
        <section>
          <div className="text-center mb-8">
            <H type="h2" className={classNames(
              "mb-2 transition-colors duration-300",
              theme === 'light' ? "text-gray-900" : "text-white"
            )}>
              Боты
            </H>
            <P center className={classNames(
              "transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-300"
            )}>
              Интеллектуальные боты для автоматизации
            </P>
          </div>
          <ProjectSection
            title="Боты"
            projects={botProjects}
            loading={loadingBots}
            error={errorBots}
          />
        </section>
      </div>

      {/* Призыв к действию */}
      <div className={classNames(
        "max-w-3xl mx-auto text-center mt-20 rounded-2xl p-8 shadow-lg border transition-colors duration-300",
        theme === 'light' 
          ? "bg-white border-gray-200" 
          : "bg-gray-800 border-gray-700"
      )}>
        <H type="h2" className={classNames(
          "mb-4 transition-colors duration-300",
          theme === 'light' ? "text-gray-900" : "text-white"
        )}>
          Готовы начать свой проект?
        </H>
        <P center className={classNames(
          "mb-6 transition-colors duration-300",
          theme === 'light' ? "text-gray-600" : "text-gray-300"
        )}>
          Свяжитесь с нами для обсуждения ваших идей и требований
        </P>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Обсудить проект
        </button>
      </div>
    </div>
  );
}