import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

const navLinks = [
  { label: "Главная", href: "#" },
  { label: "Экскурсии", href: "#excursions" },
  { label: "Коллекции", href: "#collections" },
  { label: "Сотрудники", href: "/staff", isRoute: true },
  { label: "Документы", href: "#" },
]

const excursions = [
  {
    title: "Обзорная экскурсия",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=280&fit=crop",
  },
  {
    title: "В гости к Хозяйке медной горы",
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=280&fit=crop",
  },
  {
    title: "Урок практической минералогии",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=280&fit=crop",
  },
  {
    title: "Что в тереме живёт?",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=280&fit=crop",
  },
  {
    title: "По страницам Красной книги Челябинской области",
    img: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=280&fit=crop",
  },
  {
    title: "Микромир водостоев и прочих водных сред",
    img: "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?w=400&h=280&fit=crop",
  },
]

const collections = [
  {
    title: "Минералы",
    subtitle: "Основной зал минералогии",
    img: "https://images.unsplash.com/photo-1567428485548-c499e4962571?w=300&h=200&fit=crop",
  },
  {
    title: "Горные породы",
    subtitle: "Экспозиция пород Урала",
    img: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop",
  },
  {
    title: "Флора",
    subtitle: "Гербарии и образцы",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
  },
  {
    title: "Фауна",
    subtitle: "Чучела и препараты",
    img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop",
  },
]

const announcements = [
  {
    title: "Изучаем природу заповедника при помощи обслуживания",
    date: "10 мая",
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=160&fit=crop",
    tag: "Мероприятие",
  },
  {
    title: "Ночь науки в музее: обзор для любителей",
    date: "16 мая",
    img: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=200&h=160&fit=crop",
    tag: "Ночь науки",
  },
  {
    title: "С Днём Победы! Вход на 18:00 для ветеранов",
    date: "9 мая",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&h=160&fit=crop",
    tag: "Акция",
  },
  {
    title: "Лекция: уральские самоцветы — с 18:00 до 19:00",
    date: "18 мая",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=160&fit=crop",
    tag: "Лекция",
  },
]

const gallery = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&h=320&fit=crop",
]

const Index = () => {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [announcePage, setAnnouncePage] = useState(0)

  const visibleGallery = gallery.slice(galleryIndex, galleryIndex + 3)
  const visibleAnnounce = announcements.slice(announcePage * 4, announcePage * 4 + 4)

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a] font-sans">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 520 }}>
        {/* BG */}
        <img
          src={`https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/files/b92df1b7-29b7-4402-b106-3986ddbbaec6.jpg`}
          alt="Ильменский заповедник"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/60" />

        {/* Соцсети — справа вверху */}
        <div className="absolute top-4 right-6 flex gap-2 z-20">
          {["Instagram", "vk", "Youtube"].map((s) => (
            <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition">
              <Icon name={s === "vk" ? "Users" : s === "Youtube" ? "Play" : "Camera"} size={16} className="text-gray-700" />
            </a>
          ))}
        </div>

        {/* Заголовок */}
        <div className="relative z-10 pt-16 pb-8 px-6 md:px-12 max-w-2xl">
          <p className="text-xs md:text-sm uppercase tracking-widest text-white/90 font-medium mb-1">
            Южноуральский государственный
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white leading-none drop-shadow-lg">
            Ильменский<br />заповедник
          </h1>
          <p className="mt-4 text-white/90 text-sm md:text-base max-w-sm leading-relaxed drop-shadow">
            Заочное природная территория с уникальными экологическими ландшафтами Урала
          </p>
        </div>

        {/* Навигация — внизу hero */}
        <nav className="relative z-10 flex flex-wrap gap-1 px-6 md:px-12 pb-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#6b7c2e]/80 text-white hover:bg-[#6b7c2e] transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/70 text-gray-800 hover:bg-white transition-colors backdrop-blur"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* ── О ЗАПОВЕДНИКЕ ── */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-light text-gray-500 mb-6 lowercase">о заповеднике</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=420&h=280&fit=crop"
            alt="Музей заповедника"
            className="w-full md:w-64 h-44 object-cover rounded-lg flex-shrink-0"
          />
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Заповедник был учреждён 14 мая 1920 года по декрету В. И. Ленина. Первоначально он создавался как минералогический, а с 1 декабря 1935 года преобразован в комплексный — для сохранения и изучения не только минеральных богатств, но и природных ресурсов Ильменских гор и Южного Урала. В мае 1940 года на его территории было организовано им. В. И. Ленина.
            </p>
            <a
              href="#"
              className="inline-block mt-5 px-6 py-2 rounded-full bg-[#7a8c35] text-white text-sm font-medium hover:bg-[#6b7c2e] transition-colors"
            >
              подробнее
            </a>
          </div>
        </div>
      </section>

      {/* Декоративная птица */}
      <div className="flex justify-start px-12 -mt-4 mb-2 opacity-30 select-none pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <ellipse cx="40" cy="50" rx="18" ry="12" fill="#8b9a3a" opacity="0.5"/>
          <ellipse cx="55" cy="38" rx="10" ry="7" fill="#8b9a3a" opacity="0.5"/>
          <ellipse cx="62" cy="34" rx="5" ry="3" fill="#8b9a3a" opacity="0.5"/>
        </svg>
      </div>

      {/* ── ИНФОРМАЦИЯ ДЛЯ ПОСЕТИТЕЛЕЙ ── */}
      <section className="bg-[#8b9a3a] text-white py-14 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 leading-tight max-w-xs">
            Информация для посетителей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Контакты + часы */}
            <div className="bg-[#3a3a3a] rounded-2xl p-6 text-sm space-y-4">
              <div>
                <h3 className="font-bold uppercase text-xs tracking-widest text-white/60 mb-2">Контакты</h3>
                <p>+7 (351) 59-82-72 — основной</p>
                <p>+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
                <p className="text-[#a8c060] mt-2">museym-igs@rambler.ru</p>
                <p className="text-[#a8c060]">museym-igs@yandex.ru</p>
              </div>
              <div>
                <h3 className="font-bold uppercase text-xs tracking-widest text-white/60 mb-2">Часы работы:</h3>
                <p>Пн — Пт: 09:00 — 17:00</p>
                <p>Сб — Вс: 10:00 — 16:00</p>
              </div>
            </div>
            {/* Цены */}
            <div className="text-sm space-y-2 leading-relaxed">
              <p><span className="font-semibold">Входной билет для взрослых</span> — 200 ₽</p>
              <p><span className="font-semibold">Входной билет для льготных категорий</span> (дети, школьники, студенты, пенсионеры) — 100 ₽</p>
              <p><span className="font-semibold">Билет семейный</span> (2 взрослых + 2 детей) — 450 ₽</p>
              <p className="mt-3 font-semibold text-white/70 text-xs uppercase tracking-wide">Экскурсии</p>
              <p>Для малых групп (1–7 человек) — 400 ₽</p>
              <p>Для групп от 8 до 25 человек — 1 000 ₽</p>
              <p className="mt-2 font-semibold text-white/70 text-xs uppercase tracking-wide">Обзорные экскурсии</p>
              <p>Для малых групп (1–7 человек) — 1 400 ₽</p>
              <p>Для всех групп от 25+ человек — 2 000 ₽</p>
              <p>Тематические экскурсии — 2 500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ЭКСКУРСИИ ── */}
      <section id="excursions" className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex gap-10 items-start">
          {/* Вертикальный заголовок */}
          <h2
            className="text-6xl md:text-8xl font-black uppercase text-[#2a2a2a] leading-none flex-shrink-0 select-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Экскурсии
          </h2>
          {/* Сетка карточек */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            {excursions.map((ex, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={ex.img}
                    alt={ex.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-2 right-2">
                    <Icon name="ArrowRight" size={16} className="text-white" />
                  </div>
                </div>
                <p className="text-xs font-medium mt-2 leading-tight text-gray-700">{ex.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КОЛЛЕКЦИИ ── */}
      <section id="collections" className="bg-[#7a8c35] py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-8">Коллекции</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3">
                  <p className="text-xs text-gray-500 leading-tight">{col.subtitle}</p>
                  <a
                    href="#"
                    className="inline-block mt-2 px-4 py-1 rounded-full bg-[#7a8c35] text-white text-xs font-medium hover:bg-[#6b7c2e] transition-colors"
                  >
                    подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── АНОНСЫ ── */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase">Анонсы</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setAnnouncePage(Math.max(0, announcePage - 1))}
                className="w-8 h-8 flex items-center justify-center text-[#7a8c35] hover:text-[#5a6c25] transition-colors"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={() => setAnnouncePage(announcePage + 1 < Math.ceil(announcements.length / 4) ? announcePage + 1 : 0)}
                className="w-8 h-8 flex items-center justify-center text-[#7a8c35] hover:text-[#5a6c25] transition-colors"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleAnnounce.map((a, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                <img src={a.img} alt={a.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <span className="text-[10px] uppercase tracking-wide text-[#7a8c35] font-semibold">{a.tag}</span>
                  <p className="text-xs mt-1 leading-tight text-gray-700 font-medium">{a.title}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{a.date}</p>
                  <a
                    href="#"
                    className="inline-block mt-2 px-3 py-1 rounded-full bg-[#7a8c35] text-white text-[10px] font-medium hover:bg-[#6b7c2e] transition-colors"
                  >
                    подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ГАЛЕРЕЯ ── */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <button
              onClick={() => setGalleryIndex(Math.max(0, galleryIndex - 1))}
              className="text-[#7a8c35] hover:text-[#5a6c25] transition-colors"
            >
              <Icon name="ChevronLeft" size={28} />
            </button>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Галерея</h2>
          </div>
          <div className="flex gap-3 items-stretch">
            {visibleGallery.map((src, i) => (
              <div key={i} className="flex-1 rounded-lg overflow-hidden">
                <img src={src} alt="" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
            <button
              onClick={() => setGalleryIndex(galleryIndex + 1 < gallery.length - 2 ? galleryIndex + 1 : 0)}
              className="self-center text-[#7a8c35] hover:text-[#5a6c25] transition-colors ml-2"
            >
              <Icon name="ChevronRight" size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* ── ФУТЕР-ПРИРОДА ── */}
      <div className="relative overflow-hidden" style={{ height: 320 }}>
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/files/b92df1b7-29b7-4402-b106-3986ddbbaec6.jpg"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3a3a] via-transparent to-transparent" />
      </div>

      {/* ── КОНТАКТЫ / FOOTER ── */}
      <footer className="bg-[#3a3a3a] text-white py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white/60">Контакты</h3>
          <p className="text-sm mb-1">+7 (351) 59-82-72 — основной</p>
          <p className="text-sm mb-4">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
          <p className="text-[#a8c060] text-sm">museym-igs@rambler.ru</p>
          <p className="text-[#a8c060] text-sm">museym-igs@yandex.ru</p>
          <p className="text-white/40 text-xs mt-4">456317 Челябинская обл., г. Миасс, Ильменский заповедник</p>
          <p className="text-white/30 text-xs mt-6">© 2026 Ильменский заповедник</p>
        </div>
      </footer>
    </div>
  )
}

export default Index
