'use client';
import { useState, useEffect } from 'react';
import PortfolioCart from "@/components/PortfolioCart/PortfolioCart";
import { H } from "@/components/Htag/H";
import { P } from "@/components/Ptag/P";
import { useRouter } from "next/navigation";
import fetchWebApplications from '@/actions/projects/getWebApplications';
import fetchMobileApplications from '@/actions/projects/getMobileApplications';
import fetchBots from '@/actions/projects/GetBots';
import { Project } from "@/interfaces/Project";

export default function Portfolio() {
  const router = useRouter();
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
          <P center className="text-gray-600">
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
          <P center className="text-gray-500">
            {title} не найдены
          </P>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortfolioCart
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Кнопка назад */}
      <button
        onClick={handleGoBack}
        className="absolute top-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
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
        <H type="h1" className="text-gray-900 mb-4">
          Наше <span className="text-red-500">Портфолио</span>
        </H>
        <P center className="text-gray-600 max-w-3xl mx-auto">
          Исследуйте наши лучшие проекты, где инновации встречаются с дизайном
        </P>
        
        {/* Декоративная линия */}
        <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Секция веб-приложений */}
        <section>
          <div className="text-center mb-8">
            <H type="h2" className="text-gray-900 mb-2">
              Веб-приложения
            </H>
            <P center className="text-gray-600">
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
            <H type="h2" className="text-gray-900 mb-2">
              Мобильные приложения
            </H>
            <P center className="text-gray-600">
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
            <H type="h2" className="text-gray-900 mb-2">
              Боты
            </H>
            <P center className="text-gray-600">
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
      <div className="max-w-3xl mx-auto text-center mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <H type="h2" className="text-gray-900 mb-4">
          Готовы начать свой проект?
        </H>
        <P center className="text-gray-600 mb-6">
          Свяжитесь с нами для обсуждения ваших идей и требований
        </P>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Обсудить проект
        </button>
      </div>
    </div>
  );
}