import { BLOG_POSTS } from "@/src/constants";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { PageRoute } from "@/types";
import React from "react"
import { useNavigate } from 'react-router-dom'



const BlogPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="animate-fade-in pt-12 pb-24">
      <Section>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12">Блог / Статьи</h1>
        <div className="grid grid-cols-1 gap-12">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="flex flex-col md:flex-row gap-8 border-b border-stone-200 pb-12">
              
              {/* Image */}
              <div 
                className="w-full md:w-1/3 aspect-[4/3] bg-stone-100 cursor-pointer overflow-hidden"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-sm text-wood-500 font-bold uppercase tracking-widest mb-2">
                  {post.category} • {post.date}
                </div>
                <h2 
                  className="text-2xl font-serif text-stone-900 mb-4 cursor-pointer hover:text-wood-500 transition-colors"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  {post.title}
                </h2>
                <p className="text-stone-600 font-light mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/blog/${post.id}`)} 
                  className="self-start"
                >
                  Читать далее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default BlogPage
