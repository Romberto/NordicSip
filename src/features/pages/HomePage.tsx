import { BLOG_POSTS, HERO_IMAGE, HOME_TEXT_CONTENT, HOME_TEXT_TITLE, PROJECTS } from "@/src/constants";
import React from "react";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";




const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <div className="relative h-[90vh] min-h-[600px] w-full bg-stone-900 overflow-hidden">
        <img 
          src={HERO_IMAGE} 
          alt="Modern SIP House" 
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Эстетика северной <br />
              <span className="italic font-light text-stone-200">архитектуры</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto tracking-wide">
              Проектируем и строим энергоэффективные дома из SIP-панелей. 
              Премиальное качество, скандинавский минимализм и надежность на века.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button onClick={() => navigate('/catalog')} className="min-w-[200px]">
                Смотреть проекты
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/contacts')} 
                className="min-w-[200px] text-white border-white/30 hover:bg-white hover:text-stone-900 hover:border-white"
              >
                контакты
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Projects */}
      <Section>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">Популярные проекты</h2>
            <p className="text-stone-500 font-light max-w-md">
              Функциональные планировки и выверенная архитектура, которую выбирают наши клиенты.
            </p>
          </div>
          <button 
            onClick={() => navigate('/catalog')} 
            className="hidden md:flex items-center gap-2 text-stone-900 hover:text-wood-500 transition-colors font-medium border-b border-stone-200 hover:border-wood-500 pb-1"
          >
            Весь каталог <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map(p => (
            <ProjectCard key={p.id} project={p} onClick={() => navigate(`/catalog/${p.id}`)} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Button variant="outline" onClick={() => navigate('/catalog')}>Смотреть все</Button>
        </div>
      </Section>

      {/* Info Block */}
      <section className="bg-stone-100 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 text-center">{HOME_TEXT_TITLE}</h2>
          <div className="prose prose-stone prose-lg mx-auto text-stone-600 font-light text-justify leading-relaxed whitespace-pre-line">
            {HOME_TEXT_CONTENT}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-stone-200 pt-12">
            <div className="text-center">
              <div className="text-4xl font-serif text-wood-500 mb-2">A++</div>
              <div className="text-sm uppercase tracking-widest font-medium text-stone-900">Энергоэффективность</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-wood-500 mb-2">50+</div>
              <div className="text-sm uppercase tracking-widest font-medium text-stone-900">Лет гарантии</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif text-wood-500 mb-2">3 нед.</div>
              <div className="text-sm uppercase tracking-widest font-medium text-stone-900">Срок сборки</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog */}
      <Section>
        <h2 className="text-3xl font-serif text-stone-900 mb-10">Блог о строительстве</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div key={post.id} onClick={() => navigate(`/blog/${post.id}`)} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden bg-stone-100 mb-4">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="text-xs text-wood-500 font-bold uppercase tracking-widest mb-2">{post.category}</div>
              <h3 className="text-xl font-serif text-stone-900 mb-2 leading-tight group-hover:text-wood-500 transition-colors">{post.title}</h3>
              <p className="text-sm text-stone-500 font-light line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default HomePage
