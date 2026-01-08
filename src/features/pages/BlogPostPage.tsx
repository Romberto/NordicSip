import { BLOG_POSTS, TELEGRAM } from "@/src/constants";
import { AdPlaceholder } from "../components/AdPlaceholde";
import { Button } from "../components/Button";
import React, { useEffect } from 'react';
import { useGetBlogsBySlugQuery } from "@/src/store/api/blogApi";
import { useParams } from "react-router-dom";
import { Send } from "lucide-react";


export const BlogPostPage: React.FC<{ id: string }> = ({ id }) => {


   const { slug } = useParams<{ slug: string }>();
    const {data: post, isLoading, isError} = useGetBlogsBySlugQuery(slug);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    if (!post) return <div>Post not found!!!</div>;
  
    return (
      <article className="animate-fade-in pt-12 pb-24">
         <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
               <h1 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">{post.title}</h1>
            </div>
            
            <img src={post.public_url} alt={post.title} className="w-full aspect-video object-cover mb-12 rounded-sm shadow-xl shadow-stone-200" />
            <AdPlaceholder className="my-12" />
            <div className="prose prose-stone prose-lg max-w-none font-light text-stone-800 leading-relaxed text-justify mb-6" dangerouslySetInnerHTML={{ __html: post.article }} />
            <div className="bg-stone-900 text-white p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <Send className="w-6 h-6 text-white" />
              <h3 className="text-xl font-serif">
                Telegram
              </h3>
            </div>

            <p className="text-stone-300 mb-6">
              Напишите нам в Telegram — ответим в течение дня.
            </p>

            <a
              href={`https://t.me/${TELEGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-white text-stone-900 hover:bg-stone-100">
                Написать в Telegram
              </Button>
            </a>
          </div>      
         </div>
      </article>
    );
  };