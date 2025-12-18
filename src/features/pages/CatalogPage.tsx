import { AdPlaceholder } from "../components/AdPlaceholde";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useGetProjectsQuery } from "@/src/store/api/projectsApi";



const CatalogPage: React.FC = () => {
  const navigate = useNavigate()

  const {data: Allprojects, isLoading, isError} = useGetProjectsQuery()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    // ====== СОСТОЯНИЯ ======
    if (isLoading) {
      return (
        <div className="py-32 text-center text-stone-500">Загрузка проектов…</div>
      );
    }
  
    if (isError || !Allprojects) {
      return (
        <div className="py-32 text-center text-red-500">Проекты не найдены</div>
      );
    }

  return (
    <div className="animate-fade-in pt-12 pb-24">
      <Section>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Каталог проектов</h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            В нашем каталоге представлены проекты, разработанные с учетом климатических особенностей России.
            Каждый проект может быть адаптирован под ваши индивидуальные требования.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(Allprojects) && Allprojects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ProjectCard project={project} onClick={() => navigate(`/catalog/${project.slug}`)} />
              
              {/* Ad insertion logic: every 4th item */}
              {(index + 1) % 4 === 0 && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <AdPlaceholder label="Рекламная пауза" className="h-40" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default CatalogPage
