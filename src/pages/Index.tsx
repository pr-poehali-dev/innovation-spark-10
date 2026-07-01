import { useState } from "react"
import { Link } from "react-router-dom"

/* ─── Цвет ─── */
const G = "#9a9f3b"

/* ─── Шрифт заголовков секций (KT Kiyosuna Sans → Nunito Sans) ─── */
const TITLE: React.CSSProperties = {
  fontFamily: "'Nunito Sans', 'Rubik', sans-serif",
  fontWeight: 800,
  fontSize: "72pt",
  lineHeight: 1.05,
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  color: G,
}

/* ─── Изображения ─── */
const HERO_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/cbb073b9-5818-40a0-9c23-b49bec9eab93.png"
const MUSEUM_HERO = "https://thb.tildacdn.com/tild6163-3066-4032-b938-613632366637/-/resize/504x/12244161494517696_65.jpg"
const GRASS_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/4ab69fff-d32b-400e-a103-26bb02bc7616.jpg"

/* ─── Данные ─── */
const excursions = [
  {
    title: "Обзорная экскурсия",
    sub: "Обзорная экскурсия по всем залам музея",
    img: "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png",
    imgPos: "0 0%",
  },
  {
    title: "В гостях у Хозяйки медной горы",
    sub: "Интерактивная костюмированная экскурсия",
    img: "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png",
    imgPos: "33.4% 0%",
  },
  {
    title: "Урок практической минералогии",
    sub: "Семейный, для детей от 4 лет",
    img: "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png",
    imgPos: "66.8% 0%",
  },
  {
    title: '"Кто в тереме живёт?"',
    sub: "Интерактивная экскурсия для детей 4-9 лет",
    img: "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png",
    imgPos: "0 100%",
  },
  {
    title: "По страницам Красной книги Челябинской области",
    sub: "Экскурсия для школьников в Биологическом зале",
    img: "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png",
    imgPos: "33.4% 100%",
  },
  {
    title: "Микроводоросли и качество воды наших озёр",
    sub: "Лекция для школьников 9-11 классов",
    img: "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png",
    imgPos: "66.8% 100%",
  },
]

const collections = [
  { title: "Минералогический зал", subtitle: "Экспозиция минералов Ильменских гор", img: "https://thb.tildacdn.com/tild3439-6561-4534-a636-363036306266/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1567428485548-c499e4962571?w=300&h=200&fit=crop" },
  { title: "Зал природы", subtitle: "Флора и фауна заповедника", img: "https://thb.tildacdn.com/tild3833-3035-4834-b430-373061363161/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop" },
  { title: "Ильменский зал", subtitle: "Уральский зал самоцветов", img: "https://thb.tildacdn.com/tild3964-6432-4534-b833-336233313932/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
  { title: "Геологический зал", subtitle: "Горные породы С.З. Ушков", img: "https://thb.tildacdn.com/tild3763-6635-4331-b539-363864323366/-/resize/504x/photo.jpg", fallback: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop" },
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

/* ─── SVG иконки соцсетей ─── */
const VkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.16h-1.7c-.64 0-.84-.51-2-1.67-1-.98-1.44-.98-1.69-.98-.34 0-.44.1-.44.57v1.52c0 .41-.13.65-1.2.65-1.77 0-3.73-1.07-5.11-3.07C4.1 9.97 3.57 7.76 3.57 7.3c0-.25.1-.48.57-.48h1.7c.43 0 .59.19.75.65.83 2.4 2.22 4.5 2.8 4.5.21 0 .31-.1.31-.65V9.38c-.07-1.17-.68-1.27-.68-1.69 0-.21.17-.43.44-.43h2.67c.36 0 .49.19.49.62v3.33c0 .36.16.49.26.49.21 0 .39-.13.78-.52 1.21-1.36 2.07-3.45 2.07-3.45.11-.25.31-.48.74-.48h1.7c.51 0 .62.26.51.62-.21 1-.92 2.2-1.65 3.24-.21.3-.3.47 0 .8.21.25.91.88 1.38 1.4.86.94 1.52 1.73 1.7 2.28.18.52-.08.79-.61.79z"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
)

/* ═══════════════════════════════════════════ */
const Index = () => {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [announcePage, setAnnouncePage] = useState(0)
  const visibleGallery = gallery.slice(galleryIndex, galleryIndex + 3)
  const visibleAnnounce = announcements.slice(announcePage * 4, announcePage * 4 + 4)

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a]" style={{ fontFamily: "'Nunito Sans','Rubik',sans-serif" }}>

      {/* ══ HERO ══ */}
      <div className="relative w-full">

        {/* Соцсети — правый верхний угол */}
        <div className="absolute top-4 right-5 flex gap-2 z-30">
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white shadow-sm transition text-gray-700">
            <VkIcon />
          </a>
          <a href="mailto:museym-igs@rambler.ru"
            className="w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white shadow-sm transition text-gray-700">
            <MailIcon />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white shadow-sm transition text-gray-700">
            <YoutubeIcon />
          </a>
        </div>

        {/* Картинка шапки — полная высота без обрезки */}
        <img
          src={HERO_IMG}
          alt="Ильменский заповедник"
          className="w-full block"
          style={{ objectFit: "contain", objectPosition: "top center", maxWidth: "100%" }}
        />

        {/* Навигация поверх, внизу шапки */}
        <div className="absolute bottom-0 left-0 right-0 pb-5 flex justify-center z-10">
          <nav className="flex flex-wrap justify-center gap-2 px-4">
            {navLinks.map((link, idx) =>
              link.isRoute ? (
                <Link key={link.label} to={link.href}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "#444", border: "1px solid rgba(0,0,0,0.12)" }}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: idx === 0 ? G : "rgba(255,255,255,0.92)",
                    color: idx === 0 ? "#fff" : "#444",
                    border: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.12)",
                  }}>
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* ══ О ЗАПОВЕДНИКЕ ══ */}
      <section className="py-14 px-6 md:px-14 max-w-6xl mx-auto">
        <h2 style={TITLE} className="mb-8">О заповеднике</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img src={MUSEUM_HERO} alt="Музей заповедника"
            className="w-full md:w-72 h-52 object-cover rounded-lg flex-shrink-0"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=420&h=280&fit=crop" }} />
          <div>
            <p className="text-gray-700 leading-relaxed text-base">
              Заповедник был учреждён 14 мая 1920 года по декрету В. И. Ленина. Первоначально он создавался как минералогический, а с 1 декабря 1935 года преобразован в комплексный — для сохранения и изучения не только минеральных богатств, но и природных ресурсов Ильменских гор и Южного Урала.
            </p>
            <a href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: G }}>
              подробнее
            </a>
          </div>
        </div>
      </section>

      {/* ══ ИНФОРМАЦИЯ ДЛЯ ПОСЕТИТЕЛЕЙ ══ */}
      {/* Точно по макету: серо-зелёный фон, фото поля справа, тёмный блок контактов слева */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#5e6535" }}>
        {/* Фоновое фото поля — правая половина */}
        <img src={GRASS_IMG} alt="" aria-hidden="true"
          className="absolute right-0 top-0 h-full pointer-events-none"
          style={{ width: "55%", objectFit: "cover", objectPosition: "center", mixBlendMode: "soft-light", opacity: 0.6 }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-14 py-14">
          <h2 style={{ ...TITLE, color: "#fff" }} className="mb-10">
            Информация<br />для посетителей
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Левый столбец — тёмный блок с контактами + блок часов */}
            <div className="space-y-4">
              {/* Контакты */}
              <div className="rounded-xl p-5 text-sm text-white space-y-1" style={{ backgroundColor: "rgba(40,40,40,0.88)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Контакты</p>
                <p>+7 (351) 59-82-72 — основной</p>
                <p>+7 (351) 59-38-48 — отдел экол. просветительской работы</p>
                <p style={{ color: "#c8d46a" }} className="mt-1">museym-igs@rambler.ru</p>
                <p style={{ color: "#c8d46a" }}>museym-igs@yandex.ru</p>
              </div>
              {/* Часы работы */}
              <div className="rounded-xl p-5 text-white" style={{ backgroundColor: "rgba(40,40,40,0.88)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Часы работы:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/50 text-xs mb-1">Пн — Пт</p>
                    <p className="text-3xl font-black leading-none">09:00</p>
                    <p className="text-white/60 text-xs">до 17:00</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">Сб — Вс</p>
                    <p className="text-3xl font-black leading-none">10:00</p>
                    <p className="text-white/60 text-xs">до 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правый столбец — цены */}
            <div className="text-sm space-y-2 leading-relaxed text-white">
              <p><span className="font-bold">Входной билет для взрослых</span> — 200 ₽</p>
              <p><span className="font-bold">Входной билет для льготных категорий</span> (дети, школьники, студенты, пенсионеры) — 100 ₽</p>
              <p><span className="font-bold">Билет семейный</span> (2 взрослых + 2 детей) — 450 ₽</p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white/50">Экскурсии</p>
              <p>Для малых групп (1–7 человек) — 400 ₽</p>
              <p>Для групп от 8 до 25 человек — 1 000 ₽</p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-white/50">Обзорные экскурсии</p>
              <p>Для малых групп (1–7 человек) — 1 400 ₽</p>
              <p>Для групп от 25+ человек — 2 000 ₽</p>
              <p>Тематические экскурсии — 2 500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЭКСКУРСИИ ══ */}
      <section id="excursions" className="py-14 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <h2 style={TITLE} className="mb-8">Экскурсии</h2>
          {/* Сетка 3×2 с реальными картинками, как в макете */}
          <div className="grid grid-cols-3 gap-3">
            {excursions.map((ex, i) => (
              <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg block"
                style={{ aspectRatio: "4/3", backgroundColor: "#1a1a1a" }}>
                {/* Вырезаем нужную ячейку из общей картинки-коллажа */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url(${ex.img})`,
                  backgroundSize: "300% 200%",
                  backgroundPosition: ex.imgPos,
                  transition: "transform 0.3s",
                }} />
                <div className="group-hover:[&>div]:scale-110" />
                {/* Тёмный градиент снизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Текст */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="text-white font-bold text-sm leading-tight max-w-[80%]">{ex.title}</p>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-1">
                      <svg viewBox="0 0 16 16" width="10" height="10" fill="white">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs leading-tight">{ex.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ КОЛЛЕКЦИИ ══ */}
      <section id="collections" className="py-14 px-6 md:px-14" style={{ backgroundColor: G }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ ...TITLE, color: "#fff" }} className="mb-8">Коллекции</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden group block hover:shadow-lg transition-shadow">
                <img src={col.img} alt={col.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = col.fallback }} />
                <div className="p-3">
                  <p className="text-xs font-bold text-gray-800 leading-tight">{col.title}</p>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{col.subtitle}</p>
                  <span className="inline-block mt-2 px-4 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: G }}>
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
            <h2 style={TITLE}>Анонсы</h2>
            <div className="flex gap-1">
              <button onClick={() => setAnnouncePage(Math.max(0, announcePage - 1))}
                className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity" style={{ color: G }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => setAnnouncePage(announcePage + 1 < Math.ceil(announcements.length / 4) ? announcePage + 1 : 0)}
                className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity" style={{ color: G }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleAnnounce.map((a, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={a.img} alt={a.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <span className="text-[10px] uppercase tracking-wide font-bold" style={{ color: G }}>{a.tag}</span>
                  <p className="text-xs mt-1 leading-tight text-gray-700 font-semibold">{a.title}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{a.date}</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-white text-[10px] font-semibold" style={{ backgroundColor: G }}>
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
            <button onClick={() => setGalleryIndex(Math.max(0, galleryIndex - 1))}
              className="hover:opacity-70 transition-opacity" style={{ color: G }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <h2 style={TITLE}>Галерея</h2>
          </div>
          <div className="flex gap-3">
            {visibleGallery.map((src, i) => (
              <div key={i} className="flex-1 rounded-lg overflow-hidden">
                <img src={src} alt="" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
            <button onClick={() => setGalleryIndex(galleryIndex + 1 < gallery.length - 2 ? galleryIndex + 1 : 0)}
              className="self-center ml-2 hover:opacity-70 transition-opacity" style={{ color: G }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══ ЖДЁМ В ГОСТИ ══ */}
      <div className="relative overflow-hidden bg-white" style={{ minHeight: 280 }}>
        <img src={GRASS_IMG} alt="" aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none"
          style={{ height: "65%", objectFit: "cover", objectPosition: "bottom", mixBlendMode: "multiply" }} />
        <div className="relative z-10 flex flex-col items-center justify-center py-14 text-center">
          <h2 style={{ fontFamily: "'Radiotechnika','Rubik',sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,7vw,5rem)", color: G, textTransform: "uppercase" }}>
            Ждем вас<br />в гости!
          </h2>
        </div>
      </div>

      {/* ══ ФУТЕР ══ */}
      <footer className="bg-[#3a3a3a] text-white py-10 px-6 md:px-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-white/40">Контакты</p>
          <p className="text-sm mb-1">+7 (351) 59-82-72 — основной</p>
          <p className="text-sm mb-4">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
          <p className="text-sm" style={{ color: "#c8d46a" }}>museym-igs@rambler.ru</p>
          <p className="text-sm" style={{ color: "#c8d46a" }}>museym-igs@yandex.ru</p>
          <p className="text-white/40 text-xs mt-4">456317 Челябинская обл., г. Миасс, Ильменский заповедник</p>
          <p className="text-white/30 text-xs mt-6">© 2026 Ильменский заповедник</p>
        </div>
      </footer>
    </div>
  )
}

export default Index
