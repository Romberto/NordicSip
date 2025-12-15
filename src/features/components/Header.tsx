
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { Button } from './Button'

interface NavItem {
  label: string
  path: string
}

interface HeaderProps {
  navItems: NavItem[]
  isMobileMenuOpen: boolean
  onToggleMobileMenu: () => void
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  isMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 h-20 flex items-center transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-stone-900 flex items-center justify-center text-white font-serif font-bold text-lg">
            N
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
            NORDIC<span className="font-light text-stone-500">SIP</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Contacts */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <div className="text-xs text-stone-400 uppercase tracking-widest">
              Отдел продаж
            </div>
            <div className="font-medium text-stone-900">+7 (495) 000-00-00</div>
          </div>
          <Button className="!py-2 !px-4 !text-xs">
            <NavLink to="/contacts">Заявка</NavLink>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={onToggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
