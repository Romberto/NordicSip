import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Check, Home, Layers, Ruler } from "lucide-react";

import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { ProjectCard } from "../components/ProjectCard";
import { AdPlaceholder } from "../components/AdPlaceholde";

import { useGetProjectBySlugQuery } from "@/src/store/api/projectsApi";
import { TELEGRAM } from "@/src/constants";

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: project, isLoading, isError } = useGetProjectBySlugQuery(slug);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  // ====== АДАПТАЦИЯ ДАННЫХ ======
  const previewImage = useMemo(
    () => project?.images.find((img) => img.is_preview)?.public_url ?? null,
    [project]
  );

  const galleryImages = useMemo(
    () =>
      project?.images
        .filter((img) => img.is_gallery)
        .map((img) => img.public_url) ?? [],
    [project]
  );

  const plans = useMemo(
    () =>
      project?.images
        .filter((img) => img.is_plan)
        .map((img) => img.public_url) ?? [],
    [project]
  );

  // ====== СОСТОЯНИЯ ======
  if (isLoading) {
    return (
      <div className="py-32 text-center text-stone-500">Загрузка проекта…</div>
    );
  }

  if (isError || !project) {
    return (
      <div className="py-32 text-center text-red-500">Проект не найден</div>
    );
  }

  return (
    <div className="animate-fade-in pb-20">
      {/* Header Image */}
      <div className="relative h-[60vh] w-full bg-stone-900">
        {previewImage && (
          <img
            src={previewImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-16">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-sm font-medium tracking-wide uppercase">
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4" /> {project.quadrature} м²
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4" /> {project.floors} этаж(а)
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" /> {project.bedrooms} спальни
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="!py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            <AdPlaceholder label="Реклама от партнеров" />

            {/* О проекте */}
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-4">
                О проекте
              </h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed">
                {project.shot_description}
              </p>
            </div>

            {/* Галерея */}
            {galleryImages.length > 0 && (
              <div>
                <h3 className="text-xl font-serif mb-6 border-b border-stone-200 pb-2">
                  Галерея
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Gallery ${idx}`}
                      className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity rounded-sm"
                      onClick={() => setActiveImage(img)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Планировки */}
            {plans.length > 0 && (
              <div>
                <h3 className="text-xl font-serif mb-6 border-b border-stone-200 pb-2">
                  Планировки
                </h3>

                <div className="space-y-8">
                  {plans.map((plan, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 border border-stone-100 shadow-sm"
                    >
                      <h4 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">
                        План {idx + 1}
                      </h4>
                      <img
                        src={plan}
                        alt="Plan"
                        className="w-full h-auto cursor-pointer"
                        onClick={() => setActiveImage(plan)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Детальное описание */}
            {project.description && (
              <div className="prose prose-stone max-w-none font-light text-stone-700">
                <h3 className="text-xl font-serif text-stone-900 not-prose mb-4">
                  Детальное описание
                </h3>
                <div className="whitespace-pre-line leading-relaxed">
                  {project.description}
                </div>
              </div>
            )}

            <AdPlaceholder label="Рекламный блок" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-8 border border-stone-100 shadow-xl shadow-stone-200/50">
                <p className="text-xs text-stone-400 uppercase tracking-widest mb-6">
                  Базовая комплектация
                </p>

                <div className="space-y-4 mb-8">
                  {["Теплый контур", "Окна Rehau", "Монтаж"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-stone-600"
                    >
                      <Check className="w-4 h-4 text-wood-500" /> {item}
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full mb-3"
                  onClick={() => {
                    window.open(`https://t.me/${TELEGRAM}`, "_blank");
                  }}
                >
                  Оставить заявку
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    window.open(`https://t.me/${TELEGRAM}`, "_blank");
                  }}
                >
                  Задать вопрос
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Fullscreen Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)} // клик на фон закрывает
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
        >
          <img
            src={activeImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain"
            // onClick={(e) => e.stopPropagation()} // предотвращаем закрытие при клике на картинку
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
