import { Phone, Mail } from 'lucide-react'
import { PageRoute } from '@/types'
import React from "react"

interface MobileMenuProps {
  navItems: { label: string; page: PageRoute }[]
  onNavigate: (page: PageRoute, params?: any) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navItems,
  onNavigate,
}) => {
  return (
    <div className="fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden animate-fade-in">
      <nav className="flex flex-col gap-6 text-2xl font-serif">
        {navItems.map(item => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className="text-left py-2 border-b border-stone-100 text-stone-800"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-12 space-y-4">
        <div className="flex items-center gap-3 text-stone-600">
          <Phone className="w-5 h-5" />
          +7 (495) 000-00-00
        </div>
        <div className="flex items-center gap-3 text-stone-600">
          <Mail className="w-5 h-5" />
          sales@nordicsip.ru
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
