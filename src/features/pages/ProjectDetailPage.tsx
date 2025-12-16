import { PROJECTS } from "@/src/constants";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { Check, Download, Home, Layers, Ruler } from "lucide-react";
import { AdPlaceholder } from "../components/AdPlaceholde";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'


const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const project = PROJECTS.find(p => p.id === id)
  const [activeImage, setActiveImage] = useState(project?.imageUrl)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project) setActiveImage(project.imageUrl)
  }, [id, project])

  if (!project) return <div>Project not found</div>

  return (
    <div className="animate-fade-in pb-20">

      {/* Header Image */}
      <div className="relative h-[60vh] w-full bg-stone-900">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-16">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm font-medium tracking-wide uppercase">
              <div className="flex items-center gap-2"><Ruler className="w-4 h-4"/> {project.area} м²</div>
              <div className="flex items-center gap-2"><Layers className="w-4 h-4"/> {project.floors} этаж(а)</div>
              <div className="flex items-center gap-2"><Home className="w-4 h-4"/> {project.bedrooms} спальни</div>
            </div>
          </div>
        </div>
      </div>

      <Section className="!py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-12">

            <AdPlaceholder label="Реклама от партнеров" />

            {/* Short Description */}
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">О проекте</h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed">{project.shortDescription}</p>
            </div>

          

            {/* Gallery Grid */}
            <div>
              <h3 className="text-xl font-serif mb-6 border-b border-stone-200 pb-2">Галерея</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img}
                    className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-sm"
                    onClick={() => setActiveImage(img)}
                    alt={`Gallery ${idx}`}
                  />
                ))}
              </div>
            </div>

            {/* Plans */}
            <div>
              <h3 className="text-xl font-serif mb-6 border-b border-stone-200 pb-2">Планировки</h3>
              <div className="space-y-8">
                {project.plans.map((plan, idx) => (
                  <div key={idx} className="bg-white p-4 border border-stone-100 shadow-sm">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">План {idx + 1} этажа</h4>
                    <img src={plan} alt="Plan" className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Long Text */}
            <div className="prose prose-stone max-w-none font-light text-stone-700">
              <h3 className="text-xl font-serif text-stone-900 not-prose mb-4">Детальное описание</h3>
              <div className="whitespace-pre-line leading-relaxed">
                {project.fullDescription}
              </div>
            </div>

            <AdPlaceholder label="Рекламный блок" />

            {/* Specs Table */}
            <div>
              <h3 className="text-xl font-serif mb-6 border-b border-stone-200 pb-2">Характеристики</h3>
              <div className="bg-stone-50 rounded-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(project.features).map(([key, value], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-white' : ''}>
                        <td className="p-4 text-stone-500 font-medium border-b border-stone-100 w-1/3">{key}</td>
                        <td className="p-4 text-stone-900 border-b border-stone-100">{value}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>


          </div>

          {/* Sidebar (Right 1 col) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-8 border border-stone-100 shadow-xl shadow-stone-200/50">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-6">Базовая комплектация</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-wood-500" /> Теплый контур
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-wood-500" /> Окна Rehau
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Check className="w-4 h-4 text-wood-500" /> Монтаж
                  </div>
                </div>

                <Button className="w-full mb-3">Оставить заявку</Button>
                <Button variant="outline" className="w-full">Задать вопрос</Button>
              </div>

              <div className="bg-stone-50 p-6 border border-stone-200">
                <h4 className="font-serif text-lg mb-4">Менеджер проекта</h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stone-300 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=33" alt="Manager" />
                  </div>
                  <div>
                    <div className="font-medium text-stone-900">Роман Игнатьев</div>
                    <div className="text-xs text-stone-500"><a href="tel:+79372427773">+7 937 242 7773</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Similar Projects */}
      <Section className="bg-stone-50 mt-12">
        <h2 className="text-2xl font-serif text-stone-900 mb-8">Похожие проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.filter(p => p.id !== project.id).slice(0,3).map(p => (
            <ProjectCard 
              key={p.id} 
              project={p} 
              onClick={() => navigate(`/projects/${p.id}`)} 
            />
          ))}
        </div>
      </Section>
    </div>
  )
}

export default ProjectDetailPage
