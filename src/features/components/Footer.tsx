import { Link } from 'react-router-dom'
import { PHONE, TELEGRAM } from '@/src/constants'
import { Phone, Calendar } from 'lucide-react'
import React from 'react'
import { TelegramIcon } from './TelelgramIcon'

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white flex items-center justify-center text-stone-900 font-serif font-bold text-lg">
              N
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              NORDIC<span className="font-light text-stone-500">SIP</span>
            </span>
          </Link>

          <p className="text-sm leading-relaxed mb-6 text-stone-500">
            Проекты современных тёплых домов по SIP-технологии.
            
          </p>

        </div>

        {/* Menu */}
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">
            Меню
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/catalog" className="hover:text-white transition-colors">
                Проекты домов
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">
                Блог
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-white transition-colors">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        {/* <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">
            Информация
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                Вопрос-ответ
              </Link>
            </li>
            <li>
              <Link to="/mortgage" className="hover:text-white transition-colors">
                Кредит и ипотека
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Contacts */}
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">
            Контакты
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-wood-500 shrink-0" />
              <a
                href={`tel:${PHONE}`}
                className="hover:text-white transition-colors"
              >
                +7 (937) 242-77-73
              </a>
            </li>

            <li className="flex items-center gap-3">
              <TelegramIcon className="w-5 h-5 text-wood-500 shrink-0" />
              <a
                href={`https://t.me/${TELEGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Написать в Telegram
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-wood-500 shrink-0" />
              <span>Пн–Сб: 10:00 – 19:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 mt-12 border-t border-stone-800 text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© 2025 NordicSIP. Все права защищены.Самозанятый (НПД) Корхов Р.И.</p>
        <p>Сайт не является публичной офертой.</p>
      </div>
    </footer>
  )
}

export default Footer
