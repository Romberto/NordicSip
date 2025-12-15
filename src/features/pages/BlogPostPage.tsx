import { BLOG_POSTS } from "@/src/constants";
import { AdPlaceholder } from "../components/AdPlaceholde";
import { Button } from "../components/Button";
import React, { useEffect } from 'react';


export const BlogPostPage: React.FC<{ id: string }> = ({ id }) => {
    const post = BLOG_POSTS.find(p => p.id === id);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [id]);
  
    if (!post) return <div>Post not found</div>;
  
    return (
      <article className="animate-fade-in pt-12 pb-24">
         <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
               <div className="text-sm text-wood-500 font-bold uppercase tracking-widest mb-4">{post.category}</div>
               <h1 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">{post.title}</h1>
               <div className="text-stone-400 font-light flex items-center justify-center gap-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
               </div>
            </div>
            
            <img src={post.imageUrl} alt={post.title} className="w-full aspect-video object-cover mb-12 rounded-sm shadow-xl shadow-stone-200" />
            
            <div className="prose prose-stone prose-lg max-w-none font-light text-stone-800 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <AdPlaceholder className="my-12" />
            
            <div className="mt-12 p-8 bg-stone-50 border border-stone-200">
               <h4 className="font-serif text-xl mb-4">Понравилась статья?</h4>
               <p className="mb-6 font-light">Подпишитесь на нашу рассылку, чтобы получать новые проекты и статьи.</p>
               <div className="flex gap-4">
                  <input type="email" placeholder="Ваш Email" className="flex-1 p-3 border border-stone-300 focus:border-stone-900 outline-none bg-white" />
                  <Button>Подписаться</Button>
               </div>
            </div>
         </div>
      </article>
    );
  };