'use client';
import { useState, useEffect } from 'react';
import { H } from '@/components/typography/Htag/H';
import { P } from '@/components/typography/Ptag/P';
import ProfileCart from '@/components/cards/MemberCart/MemberCart';
import { useRouter } from "next/navigation";
import { useTheme } from '@/hooks/useTheme';
import classNames from 'classnames';
import fetchMembers from '@/actions/members/getMembers';
import { Member } from "@/interfaces/Member";

export default function Members() {
  const router = useRouter();
  const { theme, mounted } = useTheme();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка членов команды
  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        const membersData = await fetchMembers();
        if (membersData) {
          setMembers(Array.isArray(membersData) ? membersData : [membersData]);
        }
      } catch (err) {
        console.error("Failed to load team members:", err);
        setError("Не удалось загрузить данные о команде");
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  if (!mounted) {
    return (
      <div className={classNames(
        "min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-pulse relative",
        theme === 'light' 
          ? "bg-linear-to-br from-gray-50 to-gray-100" 
          : "bg-linear-to-br from-gray-900 to-gray-800"
      )}>
        {/* Кнопка назад в состоянии загрузки */}
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

        <div className="max-w-7xl mx-auto text-center">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  // Отображение состояния загрузки
  if (loading) {
    return (
      <div className={classNames(
        "min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative",
        theme === 'light' 
          ? "bg-linear-to-br from-gray-50 to-gray-100" 
          : "bg-linear-to-br from-gray-900 to-gray-800"
      )}>
        {/* Кнопка назад в состоянии загрузки */}
        <button
          onClick={handleGoBack}
          className={classNames(
            "absolute top-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 transition-colors duration-300 group",
            theme === 'light' 
              ? "text-gray-600 hover:text-gray-900" 
              : "text-gray-300 hover:text-white"
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

        <div className="max-w-7xl mx-auto text-center">
          <H type="h1" className={classNames(
            "mb-4 transition-colors duration-300",
            theme === 'light' ? "text-gray-900" : "text-white"
          )}>
            Наша <span className="text-red-500">Команда</span>
          </H>
          <P center className={classNames(
            "max-w-3xl mx-auto transition-colors duration-300",
            theme === 'light' ? "text-gray-600" : "text-gray-200"
          )}>
            Загружаем информацию о нашей команде...
          </P>
        </div>
      </div>
    );
  }

  // Отображение ошибки
  if (error) {
    return (
      <div className={classNames(
        "min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative",
        theme === 'light' 
          ? "bg-linear-to-br from-gray-50 to-gray-100" 
          : "bg-linear-to-br from-gray-900 to-gray-800"
      )}>
        {/* Кнопка назад в состоянии ошибки */}
        <button
          onClick={handleGoBack}
          className={classNames(
            "absolute top-6 left-4 sm:left-6 lg:left-8 flex items-center gap-2 transition-colors duration-300 group",
            theme === 'light' 
              ? "text-gray-600 hover:text-gray-900" 
              : "text-gray-300 hover:text-white"
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

        <div className="max-w-7xl mx-auto text-center">
          <H type="h1" className={classNames(
            "mb-4 transition-colors duration-300",
            theme === 'light' ? "text-gray-900" : "text-white"
          )}>
            Наша <span className="text-red-500">Команда</span>
          </H>
          <P center className="text-red-500 max-w-3xl mx-auto">
            {error}
          </P>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Попробовать снова
          </button>
        </div>
      </div>
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
            : "text-gray-300 hover:text-white"
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
          Наша <span className="text-red-500">Команда</span>
        </H>
        <P center className={classNames(
          "max-w-3xl mx-auto transition-colors duration-300",
          theme === 'light' ? "text-gray-600" : "text-gray-200"
        )}>
          Познакомьтесь с талантливыми профессионалами, которые превращают ваши идеи в выдающиеся цифровые продукты
        </P>
        
        {/* Декоративная линия */}
        <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Сетка команды */}
      <div className="max-w-7xl mx-auto">
        {members.length === 0 ? (
          <div className="text-center py-12">
            <P center className={classNames(
              "transition-colors duration-300",
              theme === 'light' ? "text-gray-500" : "text-gray-300"
            )}>
              Члены команды не найдены
            </P>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <ProfileCart
                key={member.id}
                imageUrl={member.imageUrl || "/default-avatar.jpg"}
                title={member.name}
                role={member.role}
                description={member.description}
                className="w-full transform hover:-translate-y-2 transition-transform duration-300"
              />
            ))}
          </div>
        )}
      </div>

      {/* Статистика команды */}
      <div className={classNames(
        "max-w-4xl mx-auto mt-20 rounded-2xl p-8 shadow-lg border transition-colors duration-300",
        theme === 'light' 
          ? "bg-white border-gray-200" 
          : "bg-gray-800 border-gray-700"
      )}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <H type="h2" className="text-red-500 text-3xl md:text-4xl">
              {members.length}+
            </H>
            <P className={classNames(
              "font-medium transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-200"
            )}>
              Членов команды
            </P>
          </div>
          <div className="space-y-2">
            <H type="h2" className="text-red-500 text-3xl md:text-4xl">50+</H>
            <P className={classNames(
              "font-medium transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-200"
            )}>
              Завершенных проектов
            </P>
          </div>
          <div className="space-y-2">
            <H type="h2" className="text-red-500 text-3xl md:text-4xl">3+</H>
            <P className={classNames(
              "font-medium transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-200"
            )}>
              Года опыта
            </P>
          </div>
          <div className="space-y-2">
            <H type="h2" className="text-red-500 text-3xl md:text-4xl">99%</H>
            <P className={classNames(
              "font-medium transition-colors duration-300",
              theme === 'light' ? "text-gray-600" : "text-gray-200"
            )}>
              Довольных клиентов
            </P>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="max-w-3xl mx-auto text-center mt-20">
        <H type="h2" className={classNames(
          "mb-4 transition-colors duration-300",
          theme === 'light' ? "text-gray-900" : "text-white"
        )}>
          Хотите присоединиться к нашей команде?
        </H>
        <P center className={classNames(
          "mb-8 max-w-2xl mx-auto transition-colors duration-300",
          theme === 'light' ? "text-gray-600" : "text-gray-200"
        )}>
          Мы всегда в поиске талантливых людей, готовых создавать инновационные решения вместе с нами
        </P>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
            Посмотреть вакансии
          </button>
          <button className={classNames(
            "border font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105",
            theme === 'light'
              ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          )}>
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
}