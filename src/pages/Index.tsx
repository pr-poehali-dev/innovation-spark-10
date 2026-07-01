import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

/* ─── Единый зелёный цвет по макету rgb(154,159,59) ─── */
const GREEN = "rgb(154,159,59)"
const GREEN_HEX = "#9a9f3b"
const GREEN_DARK = "#7a7f2e"

/* ─── Изображения ─── */
const HERO_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/cbb073b9-5818-40a0-9c23-b49bec9eab93.png"
const MUSEUM_HERO = "https://thb.tildacdn.com/tild6163-3066-4032-b938-613632366637/-/resize/504x/12244161494517696_65.jpg"

const collections = [
  { title: "Минералогический зал", subtitle: "Экспозиция минералов Ильменских гор", img: "https://thb.tildacdn.com/tild3439-6561-4534-a636-363036306266/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1567428485548-c499e4962571?w=300&h=200&fit=crop" },
  { title: "Зал природы", subtitle: "Флора и фауна заповедника", img: "https://thb.tildacdn.com/tild3833-3035-4834-b430-373061363161/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop" },
  { title: "Ильменский зал", subtitle: "Уральский зал самоцветов", img: "https://thb.tildacdn.com/tild3964-6432-4534-b833-336233313932/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
  { title: "Геологический зал", subtitle: "Горные породы С.З. Ушков", img: "https://thb.tildacdn.com/tild3763-6635-4331-b539-363864323366/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop" },
]

const excursionFallbacks = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400&h=280&fit=crop",
  "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?w=400&h=280&fit=crop",
]

const excursions = [
  { title: "Обзорная экскурсия", img: "https://thb.tildacdn.com/tild6539-3534-4436-b136-623137356130/-/resize/504x/photo.jpg" },
  { title: "В гости к Хозяйке медной горы", img: "https://thb.tildacdn.com/tild3961-3833-4535-b434-626336353933/-/resize/504x/photo.jpg" },
  { title: "Урок практической минералогии", img: "https://thb.tildacdn.com/tild3261-3765-4662-b933-326635623630/-/resize/504x/photo.jpg" },
  { title: "Что в тереме живёт?", img: "https://thb.tildacdn.com/tild3636-3532-4561-b233-333061363934/-/resize/504x/photo.jpg" },
  { title: "По страницам Красной книги Челябинской области", img: "https://thb.tildacdn.com/tild6265-3737-4230-a562-643833643566/-/resize/504x/photo.jpg" },
  { title: "Микромир водостоев и прочих водных сред", img: "https://thb.tildacdn.com/tild3161-3237-4834-a535-366464323035/-/resize/504x/photo.jpg" },
]

const announcements = [
  { title: "Изучаем природу заповедника при помощи обслуживания", date: "10 мая", img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=160&fit=crop", tag: "Мероприятие" },
  { title: "Ночь науки в музее: обзор для любителей", date: "16 мая", img: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=200&h=160&fit=crop", tag: "Ночь науки" },
  { title: "С Днём Победы! Вход на 18:00 для ветеранов", date: "9 мая", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&h=160&fit=crop", tag: "Акция" },
  { title: "Лекция: уральские самоцветы — с 18:00 до 19:00", date: "18 мая", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=160&fit=crop", tag: "Лекция" },
]

const gallery = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=320&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&h=320&fit=crop",
]

const navLinks = [
  { label: "главная", href: "#" },
  { label: "экскурсии", href: "#excursions" },
  { label: "экспозиции", href: "#collections" },
  { label: "сотрудники", href: "/staff", isRoute: true },
  { label: "документы", href: "#" },
]

/* ─── Стиль заголовков секций ─── */
const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "'Nunito Sans', 'Rubik', sans-serif",
  fontWeight: 800,
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: GREEN_HEX,
}

const Index = () => {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [announcePage, setAnnouncePage] = useState(0)
  const visibleGallery = gallery.slice(galleryIndex, galleryIndex + 3)
  const visibleAnnounce = announcements.slice(announcePage * 4, announcePage * 4 + 4)

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a]" style={{ fontFamily: "'Nunito Sans', 'Rubik', sans-serif" }}>

      {/* ══ HERO — картинка шапки ══ */}
      <div className="relative w-full">
        {/* Картинка шапки на всю ширину */}
        <img
          src={HERO_IMG}
          alt="Ильменский заповедник — шапка"
          className="w-full block"
          style={{ maxHeight: 680, objectFit: "cover", objectPosition: "top center" }}
        />

        {/* Навигация поверх, внизу шапки */}
        <div className="absolute bottom-0 left-0 right-0 pb-5 flex justify-center z-10">
          <nav className="flex flex-wrap gap-2 px-4">
            {navLinks.map((link, idx) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.92)",
                    color: "#444",
                    border: "1px solid rgba(0,0,0,0.12)",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: idx === 0 ? GREEN_HEX : "rgba(255,255,255,0.92)",
                    color: idx === 0 ? "#fff" : "#444",
                    border: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.12)",
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* ══ О ЗАПОВЕДНИКЕ ══ */}
      <section className="py-12 px-6 md:px-14 max-w-6xl mx-auto">
        <h2 style={sectionTitleStyle} className="mb-6">О заповеднике</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={MUSEUM_HERO}
            alt="Музей заповедника"
            className="w-full md:w-64 h-44 object-cover rounded-lg flex-shrink-0"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=420&h=280&fit=crop" }}
          />
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Заповедник был учреждён 14 мая 1920 года по декрету В. И. Ленина. Первоначально он создавался как минералогический, а с 1 декабря 1935 года преобразован в комплексный — для сохранения и изучения не только минеральных богатств, но и природных ресурсов Ильменских гор и Южного Урала.
            </p>
            <a
              href="https://museum-igz.chelscience.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: GREEN_HEX }}
            >
              подробнее
            </a>
          </div>
        </div>
      </section>

      {/* ══ ИНФОРМАЦИЯ ДЛЯ ПОСЕТИТЕЛЕЙ ══ */}
      <section className="relative py-14 px-6 md:px-14 overflow-hidden" style={{ backgroundColor: "#6e7040" }}>
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=400&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="mb-10 text-white" style={{ ...sectionTitleStyle, color: "#fff" }}>
            Информация для посетителей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Левый блок — контакты + часы работы */}
            <div className="space-y-4">
              <div className="bg-[#3a3a3a]/90 rounded-2xl p-6 text-sm text-white space-y-3">
                <div>
                  <h3 className="font-bold uppercase text-[10px] tracking-widest text-white/50 mb-2">Контакты</h3>
                  <p>+7 (351) 59-82-72 — основной</p>
                  <p>+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
                  <p style={{ color: GREEN }} className="mt-2">museym-igs@rambler.ru</p>
                  <p style={{ color: GREEN }}>museym-igs@yandex.ru</p>
                </div>
              </div>

              {/* Часы работы — выделенный блок как в макете */}
              <div
                className="rounded-2xl p-5 text-sm"
                style={{ backgroundColor: GREEN_HEX, color: "#fff" }}
              >
                <h3 className="font-bold uppercase text-[10px] tracking-widest text-white/70 mb-3">Часы работы:</h3>
                <div className="flex gap-8">
                  <div>
                    <p className="text-white/70 text-[10px] uppercase tracking-wide mb-1">Пн — Пт</p>
                    <p className="text-2xl font-black leading-none">09:00</p>
                    <p className="text-white/70 text-xs">— 17:00</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] uppercase tracking-wide mb-1">Сб — Вс</p>
                    <p className="text-2xl font-black leading-none">10:00</p>
                    <p className="text-white/70 text-xs">— 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правый блок — цены */}
            <div className="text-sm space-y-2 leading-relaxed text-white">
              <p><span className="font-bold">Входной билет для взрослых</span> — 200 ₽</p>
              <p><span className="font-bold">Входной билет для льготных категорий</span> (дети, школьники, студенты, пенсионеры) — 100 ₽</p>
              <p><span className="font-bold">Билет семейный</span> (2 взрослых + 2 детей) — 450 ₽</p>
              <p className="mt-4 font-bold text-white/60 text-[10px] uppercase tracking-wider">Экскурсии</p>
              <p>Для малых групп (1–7 человек) — 400 ₽</p>
              <p>Для групп от 8 до 25 человек — 1 000 ₽</p>
              <p className="mt-3 font-bold text-white/60 text-[10px] uppercase tracking-wider">Обзорные экскурсии</p>
              <p>Для малых групп (1–7 человек) — 1 400 ₽</p>
              <p>Для всех групп от 25+ человек — 2 000 ₽</p>
              <p>Тематические экскурсии — 2 500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЭКСКУРСИИ ══ */}
      <section id="excursions" className="py-14 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 items-stretch">
            {/* Вертикальный заголовок — растянут по высоте сетки */}
            <div className="flex-shrink-0 flex items-center">
              <h2
                className="select-none"
                style={{
                  ...sectionTitleStyle,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  height: "100%",
                  lineHeight: 1,
                }}
              >
                Экскурсии
              </h2>
            </div>
            {/* Сетка карточек */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
              {excursions.map((ex, i) => (
                <a
                  key={i}
                  href="https://museum-igz.chelscience.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={ex.img}
                      alt={ex.title}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.currentTarget.src = excursionFallbacks[i] || excursionFallbacks[0] }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
                    <div className="absolute top-2 right-2">
                      <Icon name="ArrowRight" size={14} className="text-white drop-shadow" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold mt-2 leading-tight text-gray-700">{ex.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ КОЛЛЕКЦИИ ══ */}
      <section id="collections" className="py-14 px-6 md:px-14" style={{ backgroundColor: GREEN_HEX }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-white" style={{ ...sectionTitleStyle, color: "#fff" }}>Коллекции</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <a
                key={i}
                href="https://museum-igz.chelscience.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden group block hover:shadow-lg transition-shadow"
              >
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = col.fallback }}
                />
                <div className="p-3">
                  <p className="text-xs font-bold text-gray-800 leading-tight">{col.title}</p>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{col.subtitle}</p>
                  <span
                    className="inline-block mt-2 px-4 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ backgroundColor: GREEN_HEX }}
                  >
                    подробнее
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ АНОНСЫ ══ */}
      <section className="py-14 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 style={sectionTitleStyle}>Анонсы</h2>
            <div className="flex gap-1">
              <button
                onClick={() => setAnnouncePage(Math.max(0, announcePage - 1))}
                className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ color: GREEN_HEX }}
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={() => setAnnouncePage(announcePage + 1 < Math.ceil(announcements.length / 4) ? announcePage + 1 : 0)}
                className="w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-70"
                style={{ color: GREEN_HEX }}
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleAnnounce.map((a, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={a.img} alt={a.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <span className="text-[10px] uppercase tracking-wide font-bold" style={{ color: GREEN_HEX }}>{a.tag}</span>
                  <p className="text-xs mt-1 leading-tight text-gray-700 font-semibold">{a.title}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{a.date}</p>
                  <span
                    className="inline-block mt-2 px-3 py-1 rounded-full text-white text-[10px] font-semibold"
                    style={{ backgroundColor: GREEN_HEX }}
                  >
                    подробнее
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ГАЛЕРЕЯ ══ */}
      <section className="py-14 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setGalleryIndex(Math.max(0, galleryIndex - 1))}
              className="transition-opacity hover:opacity-70"
              style={{ color: GREEN_HEX }}
            >
              <Icon name="ChevronLeft" size={28} />
            </button>
            <h2 style={sectionTitleStyle}>Галерея</h2>
          </div>
          <div className="flex gap-3">
            {visibleGallery.map((src, i) => (
              <div key={i} className="flex-1 rounded-lg overflow-hidden">
                <img src={src} alt="" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
            <button
              onClick={() => setGalleryIndex(galleryIndex + 1 < gallery.length - 2 ? galleryIndex + 1 : 0)}
              className="self-center ml-2 transition-opacity hover:opacity-70"
              style={{ color: GREEN_HEX }}
            >
              <Icon name="ChevronRight" size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ ЖДЁМ В ГОСТИ ══ */}
      <div className="relative overflow-hidden bg-white" style={{ minHeight: 280 }}>
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/4ab69fff-d32b-400e-a103-26bb02bc7616.jpg"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none"
          style={{ height: "65%", objectFit: "cover", objectPosition: "bottom", mixBlendMode: "multiply" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center py-14 text-center">
          <h2
            className="font-black uppercase leading-tight"
            style={{
              fontFamily: "'Radiotechnika', 'Rubik', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: GREEN_HEX,
            }}
          >
            Ждем вас<br />в гости!
          </h2>
        </div>
      </div>

      {/* ══ ФУТЕР ══ */}
      <footer className="bg-[#3a3a3a] text-white py-10 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/40">Контакты</h3>
          <p className="text-sm mb-1">+7 (351) 59-82-72 — основной</p>
          <p className="text-sm mb-4">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
          <p className="text-sm" style={{ color: GREEN }}>museym-igs@rambler.ru</p>
          <p className="text-sm" style={{ color: GREEN }}>museym-igs@yandex.ru</p>
          <p className="text-white/40 text-xs mt-4">456317 Челябинская обл., г. Миасс, Ильменский заповедник</p>
          <p className="text-white/30 text-xs mt-6">© 2026 Ильменский заповедник</p>
        </div>
      </footer>
    </div>
  )
}

export default Index
