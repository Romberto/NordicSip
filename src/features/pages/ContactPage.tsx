import { Phone, Send } from "lucide-react";
import { Button } from "../components/Button";
import { PHONE, TELEGRAM } from "@/src/constants";



export default function ContactsPage() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 py-20 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">
            Контакты
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            Свяжитесь с нами удобным способом — мы ответим и поможем с выбором проекта.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Phone */}
          <div className="bg-white border border-stone-100 p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-6">
              <Phone className="w-6 h-6 text-wood-500" />
              <h3 className="text-xl font-serif text-stone-900">
                Телефон
              </h3>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="text-2xl font-medium text-stone-900 hover:text-wood-500 transition"
            >
              {PHONE}
            </a>

            <p className="text-sm text-stone-500 mt-2">
              Пн–Сб · 10:00–19:00
            </p>
          </div>

          {/* Telegram */}
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
      </div>
    </section>
  );
}