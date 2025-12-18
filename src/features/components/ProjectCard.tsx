import { Project } from "@/src/types";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Берём preview image или первый элемент
  const previewImage = project.images.find(img => img.is_preview) || project.images[0];

  return (
    <div
      onClick={() => onClick(project.slug)}
      className="group cursor-pointer flex flex-col bg-white hover:shadow-xl transition-all duration-500 ease-out border border-transparent hover:border-stone-100 overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {previewImage && (
          <img
            src={previewImage.public_url}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-stone-900 tracking-wider">
          {project.quadrature} м²
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-wood-500 transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-stone-500 text-sm line-clamp-2 mb-4 font-light">
          {project.shot_description || project.description}
        </p>
        <div className="mt-auto pt-4 border-t border-stone-100 flex justify-between items-center">
          <span className="text-lg font-medium text-stone-900">Подробнее</span>
          <span className="text-stone-400 group-hover:text-stone-900 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};
