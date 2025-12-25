import { BlogPost } from "@/src/types"
import { useNavigate } from "react-router-dom"


interface BlogCardProps {
  blog: BlogPost
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="group cursor-pointer"
    >
      <div className="aspect-[3/2] overflow-hidden bg-stone-100 mb-4">
        <img
          src={blog.public_url}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="text-xs text-wood-500 font-bold uppercase tracking-widest mb-2">
        {blog.category}
      </div>

      <h3 className="text-xl font-serif text-stone-900 mb-2 leading-tight group-hover:text-wood-500 transition-colors">
        {blog.title}
      </h3>

      <p className="text-sm text-stone-500 font-light line-clamp-2">
        {blog.excerpt}
      </p>
    </div>
  )
}