import { MapPin, Phone, Mail, Calendar } from 'lucide-react'
import { PageRoute } from '@/types'
import React from "react"

interface FooterProps {
  onNavigate: (page: PageRoute) => void
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center text-stone-900 font-serif font-bold text-lg">
              N
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              NORDIC<span className="font-light text-stone-500">SIP</span>
            </span>
          </div>

          <p className="text-sm leading-relaxed mb-6 text-stone-500">
            Строим современные теплые дома по SIP-технологии.
            Полный цикл работ: от проектирования до внутренней отделки.
          </p>

          <div className="flex gap-4">
            <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-wood-500 transition-colors cursor-pointer">
              VK
            </div>
            <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center hover:bg-wood-500 transition-colors cursor-pointer">
              TG
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">
            Меню
          </h4>
          <ul className="space-y-3 text-sm">
            <li onClick={() => onNavigate('CATALOG')} className="hover:text-white cursor-pointer transition-colors">
              Проекты домов
            </li>
            <li onClick={() => onNavigate('SERVICES')} className="hover:text-white cursor-pointer transition-colors">
              Услуги и цены
            </li>
            <li onClick={() => onNavigate('BLOG')} className="hover:text-white cursor-pointer transition-colors">
              Блог
            </li>
            <li onClick={() => onNavigate('CONTACTS')} className="hover:text-white cursor-pointer transition-colors">
              Контакты
            </li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">
            Информация
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">О компании</li>
            <li className="hover:text-white cursor-pointer transition-colors">Вопрос-ответ</li>
            <li className="hover:text-white cursor-pointer transition-colors">Кредит и ипотека</li>
            <li className="hover:text-white cursor-pointer transition-colors">Политика конфиденциальности</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">
            Контакты
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-wood-500 shrink-0" />
              <span>г. Москва, ул. Строителей, д. 15, офис 404</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-wood-500 shrink-0" />
              <span>+7 (495) 000-00-00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-wood-500 shrink-0" />
              <span>info@nordicsip.ru</span>
            </li>
            <li className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-wood-500 shrink-0" />
              <span>Пн–Сб: 10:00 – 19:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 mt-12 border-t border-stone-800 text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center">
        <p>© 2024 NordicSIP. Все права защищены. ИП Иванов И.И.</p>
        <p>Сайт не является публичной офертой.</p>
      </div>
    </footer>
  )
}

export default Footer
