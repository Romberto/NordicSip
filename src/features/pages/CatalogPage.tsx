import { CATEGORIES, PROJECTS } from "@/src/constants";
import { AdPlaceholder } from "../components/AdPlaceholde";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



const CatalogPage: React.FC = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="animate-fade-in pt-12 pb-24">
      <Section>
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Каталог проектов</h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            В нашем каталоге представлены проекты, разработанные с учетом климатических особенностей России. 
            Мы разделили их на удобные категории, чтобы вы могли быстрее найти дом своей мечты. 
            Каждый проект может быть адаптирован под ваши индивидуальные требования.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-stone-200 pb-6">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm rounded-full transition-all ${filter === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
          >
            Все проекты
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${filter === cat.id ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ProjectCard project={project} onClick={() => navigate(`/catalog/${project.id}`)} />
              
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
