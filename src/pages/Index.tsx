import { useState } from "react"
import { Link } from "react-router-dom"

/* ═══ ЕДИНЫЙ ЗЕЛЁНЫЙ rgb(154,159,59) ═══ */
const G = "#9a9f3b"
const G_DARK = "#7a7f2e"
const INFO_BG = "#626845"

/* ═══ ШРИФТЫ ═══ */
/* KT Kiyosuna Sans → Nunito Sans Light (аналог с кириллицей) */
const KT = "'Nunito Sans', 'Rubik', sans-serif"
/* Radiotechnika — для «Ждём вас в гости!» */
const RADIO = "'Radiotechnika', 'Rubik', sans-serif"

/* Единый стиль заголовков всех секций */
const T: React.CSSProperties = {
  fontFamily: KT,
  fontWeight: 300,
  fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
  lineHeight: 1.0,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: G,
}

/* ═══ ИЗОБРАЖЕНИЯ ═══ */
const HERO_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/78daf662-1715-4fa1-9aad-694aa6938a72.png"
const MUSEUM_IMG = "https://thb.tildacdn.com/tild6163-3066-4032-b938-613632366637/-/resize/504x/12244161494517696_65.jpg"
const GRASS_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/4ab69fff-d32b-400e-a103-26bb02bc7616.jpg"
const PINE_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/files/fcdc1f46-b998-490d-91db-9263ae932557.jpg"
const EX_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/604e79a7-ac28-4c70-99cb-0b5c903273f1.png"

/* ═══ ДЕКОРАТИВНЫЕ SVG ═══ */
const BirdSVG = () => (
  <svg width="130" height="78" viewBox="0 0 130 78" fill="none" opacity="0.38">
    <path d="M6 48 Q24 12 52 26 Q64 32 74 22 Q90 8 108 14 Q89 26 87 36 Q103 28 126 31 Q103 42 91 44 Q77 48 65 40 Q46 57 26 62 Q12 66 6 48Z" fill="#7a8c5a"/>
    <path d="M52 26 Q57 19 65 17" stroke="#7a8c5a" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const BranchSVG = () => (
  <svg width="170" height="128" viewBox="0 0 170 128" fill="none" opacity="0.32">
    <path d="M18 112 Q52 76 88 52 Q124 28 158 16" stroke="#8a9a4a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M88 52 Q80 32 74 14" stroke="#8a9a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M114 38 Q108 20 104 6" stroke="#8a9a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="74" cy="14" r="5.5" fill="#8a9a4a"/>
    <circle cx="104" cy="6" r="5.5" fill="#8a9a4a"/>
    <circle cx="158" cy="16" r="5.5" fill="#8a9a4a"/>
    <path d="M62 64 Q56 48 52 34" stroke="#8a9a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="52" cy="34" r="5" fill="#8a9a4a"/>
    <path d="M138 30 Q134 16 130 6" stroke="#8a9a4a" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="130" cy="6" r="5.5" fill="#8a9a4a"/>
  </svg>
)

const FishSVG = () => (
  <svg width="190" height="84" viewBox="0 0 190 84" fill="none" opacity="0.25">
    <ellipse cx="46" cy="42" rx="37" ry="19" stroke="#7a8c5a" strokeWidth="1.5"/>
    <circle cx="23" cy="37" r="3.5" fill="#7a8c5a"/>
    <line x1="83" y1="42" x2="182" y2="42" stroke="#7a8c5a" strokeWidth="1.5"/>
    {[97,113,129,145,161].map((x,i) => (
      <g key={i}>
        <line x1={x} y1="42" x2={x-10} y2="22" stroke="#7a8c5a" strokeWidth="1.2"/>
        <line x1={x} y1="42" x2={x-10} y2="62" stroke="#7a8c5a" strokeWidth="1.2"/>
      </g>
    ))}
    <path d="M175 28 Q190 42 175 56" stroke="#7a8c5a" strokeWidth="1.5" fill="none"/>
  </svg>
)

const CrystalSVG = () => (
  <svg width="105" height="147" viewBox="0 0 105 147" fill="none" opacity="0.72">
    <polygon points="52,5 86,43 80,108 52,140 24,108 19,43" fill="white" stroke="#c0c8c0" strokeWidth="1.5"/>
    <polygon points="52,5 86,43 52,49 19,43" fill="#e8ece8" stroke="#c0c8c0" strokeWidth="1"/>
    <polygon points="52,49 86,43 80,108 52,140" fill="#ccd0cc" stroke="#c0c8c0" strokeWidth="1"/>
    <polygon points="52,49 19,43 24,108 52,140" fill="#dce0dc" stroke="#c0c8c0" strokeWidth="1"/>
  </svg>
)

/* ═══ ИКОНКИ СОЦСЕТЕЙ ═══ */
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

/* ═══ ДАННЫЕ ═══ */
const excursions = [
  { title: "Обзорная экскурсия", sub: "Обзорная экскурсия по всем залам музея", pos: "0% 0%" },
  { title: "В гостях у Хозяйки медной горы", sub: "Интерактивная костюмированная экскурсия", pos: "50% 0%" },
  { title: "Урок практической минералогии", sub: "Семейный, для детей от 4 лет", pos: "100% 0%" },
  { title: '"Кто в тереме живёт?"', sub: "Интерактивная экскурсия для детей 4-9 лет", pos: "0% 100%" },
  { title: "По страницам Красной книги Челябинской области", sub: "Экскурсия для школьников в Биологическом зале", pos: "50% 100%" },
  { title: "Микроводоросли и качество воды наших озёр", sub: "Лекция для школьников 9-11 классов", pos: "100% 100%" },
]

const collections = [
  { title: "Минералогический зал", subtitle: "Экспозиция минералов Ильменских гор", img: "https://thb.tildacdn.com/tild3439-6561-4534-a636-363036306266/-/resize/504x/photo.jpg", fb: "https://images.unsplash.com/photo-1567428485548-c499e4962571?w=300&h=200&fit=crop" },
  { title: "Зал природы", subtitle: "Флора и фауна заповедника", img: "https://thb.tildacdn.com/tild3833-3035-4834-b430-373061363161/-/resize/504x/photo.jpg", fb: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop" },
  { title: "Ильменский зал", subtitle: "Уральский зал самоцветов", img: "https://thb.tildacdn.com/tild3964-6432-4534-b833-336233313932/-/resize/504x/photo.jpg", fb: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop" },
  { title: "Геологический зал", subtitle: "Горные породы С.З. Ушков", img: "https://thb.tildacdn.com/tild3763-6635-4331-b539-363864323366/-/resize/504x/photo.jpg", fb: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop" },
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

/* ════════════════════════════════════════════ */
const Index = () => {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [announcePage, setAnnouncePage] = useState(0)
  const visibleGallery = gallery.slice(galleryIndex, galleryIndex + 3)
  const visibleAnnounce = announcements.slice(announcePage * 4, announcePage * 4 + 4)

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a] overflow-x-hidden" style={{ fontFamily: KT }}>

      {/* ══════════════════════════════
          ШАПКА — картинка image(21)
          Коллаж: сосна + олень + луг
      ══════════════════════════════ */}
      <div className="relative w-full" style={{ background: "#fff" }}>

        {/* Соцсети — правый верхний угол */}
        <div className="absolute top-4 right-5 flex gap-2 z-30">
          {[
            { href: "https://vk.com", el: <VkIcon /> },
            { href: "mailto:museym-igs@rambler.ru", el: <MailIcon /> },
            { href: "https://youtube.com", el: <YoutubeIcon /> },
          ].map((s, i) => (
            <a key={i} href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/85 border border-gray-200 flex items-center justify-center hover:bg-white shadow-sm transition text-gray-600">
              {s.el}
            </a>
          ))}
        </div>

        {/* Картинка шапки — полная, без обрезки, на всю ширину */}
        <img
          src={HERO_IMG}
          alt="Ильменский заповедник"
          className="w-full block"
          style={{ objectFit: "contain", objectPosition: "top center" }}
        />

        {/* Навигация — поверх внизу, с запасом пространства */}
        <div className="absolute bottom-0 left-0 right-0 pb-6 flex justify-center z-10">
          {/* Тонкий градиент для читаемости кнопок */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.55) 0%, transparent 100%)" }} />
          <nav className="relative flex flex-wrap justify-center gap-2 px-4">
            {navLinks.map((link, idx) =>
              link.isRoute ? (
                <Link key={link.label} to={link.href}
                  className="px-5 py-2 rounded-full text-sm transition-colors"
                  style={{ fontFamily: KT, fontWeight: 400, backgroundColor: "rgba(255,255,255,0.9)", color: "#444", border: "1px solid rgba(0,0,0,0.15)" }}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href}
                  className="px-5 py-2 rounded-full text-sm transition-colors"
                  style={{
                    fontFamily: KT, fontWeight: 400,
                    backgroundColor: idx === 0 ? G : "rgba(255,255,255,0.9)",
                    color: idx === 0 ? "#fff" : "#444",
                    border: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.15)",
                  }}>
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════
          О ЗАПОВЕДНИКЕ
      ══════════════════════════════ */}
      <section className="relative py-14 px-6 md:px-16 max-w-6xl mx-auto">
        {/* Декор: ветка справа */}
        <div className="absolute top-4 right-0 pointer-events-none select-none">
          <BranchSVG />
        </div>

        <h2 style={T} className="mb-8">О заповеднике</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img src={MUSEUM_IMG} alt="Музей заповедника"
            className="w-full md:w-72 h-52 object-cover rounded-lg flex-shrink-0"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=420&h=280&fit=crop" }} />
          <div>
            <p className="text-gray-600 leading-relaxed text-base font-light">
              Заповедник был учреждён 14 мая 1920 года по декрету В. И. Ленина. Первоначально он создавался как минералогический, а с 1 декабря 1935 года преобразован в комплексный — для сохранения и изучения не только минеральных богатств, но и природных ресурсов Ильменских гор и Южного Урала.
            </p>
            <a href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: G }}>
              подробнее
            </a>
          </div>
        </div>

        {/* Декор: птица внизу */}
        <div className="mt-5 -mb-2">
          <BirdSVG />
        </div>
      </section>

      {/* ══════════════════════════════
          ИНФОРМАЦИЯ ДЛЯ ПОСЕТИТЕЛЕЙ
          Точно по макету:
          - серо-зелёный фон
          - фото луга как текстура
          - кристалл справа
          - тёмный блок контактов
          - выделенный блок часов работы
          - цены справа
      ══════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: INFO_BG }}>
        {/* Фото луга — фон */}
        <img src={GRASS_IMG} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.17, objectPosition: "center" }} />

        {/* Кристалл — правый нижний угол */}
        <div className="absolute right-4 bottom-0 pointer-events-none select-none z-0">
          <CrystalSVG />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-14">
          <h2 className="mb-10" style={{ ...T, color: "#fff" }}>
            Информация<br />для посетителей
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            {/* Левый столбец */}
            <div className="space-y-3">
              {/* Контакты */}
              <div className="rounded-xl p-5 text-sm text-white"
                style={{ backgroundColor: "rgba(22,26,14,0.84)" }}>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3"
                  style={{ fontFamily: KT, fontWeight: 600, letterSpacing: "0.15em" }}>
                  Контакты
                </p>
                <p className="mb-1 font-light">+7 (351) 59-82-72 — основной</p>
                <p className="font-light">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
                <p className="mt-2" style={{ color: "#c5d55a" }}>museym-igs@rambler.ru</p>
                <p style={{ color: "#c5d55a" }}>museym-igs@yandex.ru</p>
              </div>

              {/* ЧАСЫ РАБОТЫ — выделенный блок как в макете */}
              <div className="rounded-xl p-5 text-white"
                style={{ backgroundColor: "rgba(22,26,14,0.84)" }}>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4"
                  style={{ fontFamily: KT, fontWeight: 600, letterSpacing: "0.15em" }}>
                  Часы работы:
                </p>
                <div className="flex gap-8 items-start">
                  {/* Пн–Пт */}
                  <div>
                    <p className="text-white/45 text-[10px] uppercase tracking-wide mb-1">Пн — Пт</p>
                    <p className="font-black leading-none" style={{ fontSize: "2.8rem", color: "#fff" }}>09:00</p>
                    <p className="text-white/45 text-xs mt-1">— 17:00</p>
                  </div>
                  <div className="w-px self-stretch bg-white/12 mx-1" />
                  {/* Сб–Вс */}
                  <div>
                    <p className="text-white/45 text-[10px] uppercase tracking-wide mb-1">Сб — Вс</p>
                    <p className="font-black leading-none" style={{ fontSize: "2.8rem", color: "#fff" }}>10:00</p>
                    <p className="text-white/45 text-xs mt-1">— 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правый столбец — цены */}
            <div className="text-sm space-y-1.5 leading-relaxed text-white font-light">
              <p>
                <span className="font-semibold">Входной билет для взрослых</span> — 200 ₽
              </p>
              <p>
                <span className="font-semibold">Входной билет для льготных категорий</span>
                <span className="text-white/65"> (дети, школьники, студенты, пенсионеры)</span> — 100 ₽
              </p>
              <p><span className="font-semibold">Билет семейный</span> (2 взрослых + 2 детей) — 450 ₽</p>
              <p className="pt-3 pb-0.5 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Экскурсии</p>
              <p>Для малых групп (1–7 человек) — 400 ₽</p>
              <p>Для групп от 8 до 25 человек — 1 000 ₽</p>
              <p className="pt-2 pb-0.5 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Обзорные экскурсии</p>
              <p>Для малых групп (1–7 человек) — 1 400 ₽</p>
              <p>Для групп от 25+ человек — 2 000 ₽</p>
              <p>Тематические экскурсии — 2 500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ЭКСКУРСИИ
          Вертикальный заголовок по
          высоте сетки, сетка 3×2
      ══════════════════════════════ */}
      <section id="excursions" className="relative py-14 px-6 md:px-16">
        {/* Декор: скелет рыбы */}
        <div className="absolute right-4 top-6 pointer-events-none select-none">
          <FishSVG />
        </div>

        <div className="max-w-6xl mx-auto flex gap-6 items-stretch">
          {/* Вертикальный заголовок — растянут по высоте сетки */}
          <div className="flex-shrink-0 flex items-center">
            <h2 className="select-none"
              style={{
                ...T,
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                /* Размер подбираем так, чтобы слово «ЭКСКУРСИИ» заняло всю высоту сетки */
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                height: "100%",
              }}>
              Экскурсии
            </h2>
          </div>

          {/* Сетка 3×2 */}
          <div className="grid grid-cols-3 gap-3 flex-1">
            {excursions.map((ex, i) => (
              <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg block"
                style={{ aspectRatio: "4/3", backgroundColor: "#1a1a1a" }}>
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${EX_IMG})`,
                    backgroundSize: "300% 200%",
                    backgroundPosition: ex.pos,
                  }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="text-white font-semibold text-sm leading-tight max-w-[82%]">{ex.title}</p>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/25 flex items-center justify-center ml-1">
                      <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M2 6h8M7 3l3 3-3 3"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs leading-tight">{ex.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          КОЛЛЕКЦИИ
      ══════════════════════════════ */}
      <section id="collections" className="py-14 px-6 md:px-16" style={{ backgroundColor: G }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ ...T, color: "#fff" }} className="mb-8">Коллекции</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden group block hover:shadow-lg transition-shadow">
                <img src={col.img} alt={col.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = col.fb }} />
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-800 leading-tight">{col.title}</p>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5 font-light">{col.subtitle}</p>
                  <span className="inline-block mt-2 px-4 py-1 rounded-full text-white text-xs cursor-pointer"
                    style={{ backgroundColor: G }}>подробнее</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          АНОНСЫ
      ══════════════════════════════ */}
      <section className="py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 style={T}>Анонсы</h2>
            <div className="flex gap-1">
              <button onClick={() => setAnnouncePage(Math.max(0, announcePage - 1))}
                className="w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity"
                style={{ color: G }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button onClick={() => setAnnouncePage(announcePage + 1 < Math.ceil(announcements.length / 4) ? announcePage + 1 : 0)}
                className="w-8 h-8 flex items-center justify-center hover:opacity-60 transition-opacity"
                style={{ color: G }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleAnnounce.map((a, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={a.img} alt={a.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <span className="text-[10px] uppercase tracking-wide font-semibold" style={{ color: G }}>{a.tag}</span>
                  <p className="text-xs mt-1 leading-tight text-gray-700 font-light">{a.title}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{a.date}</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-white text-[10px] cursor-pointer"
                    style={{ backgroundColor: G }}>подробнее</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ГАЛЕРЕЯ
      ══════════════════════════════ */}
      <section className="py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setGalleryIndex(Math.max(0, galleryIndex - 1))}
              className="hover:opacity-60 transition-opacity flex-shrink-0" style={{ color: G }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <h2 style={T}>Галерея</h2>
          </div>
          <div className="flex gap-3 items-stretch">
            {visibleGallery.map((src, i) => (
              <div key={i} className="flex-1 rounded-lg overflow-hidden">
                <img src={src} alt="" className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
            <button onClick={() => setGalleryIndex(galleryIndex + 1 < gallery.length - 2 ? galleryIndex + 1 : 0)}
              className="self-center ml-2 hover:opacity-60 transition-opacity flex-shrink-0" style={{ color: G }}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          КОНЕЦ СТРАНИЦЫ — по макету:
          сосна слева, трава, «Ждём вас
          в гости!», сосна справа
      ══════════════════════════════ */}
      <div className="relative overflow-hidden bg-white" style={{ minHeight: 380 }}>

        {/* Сосна большая — слева */}
        <img src={PINE_IMG} alt="" aria-hidden="true"
          className="absolute left-0 bottom-0 pointer-events-none select-none"
          style={{
            height: "94%", width: "auto", maxWidth: "23%",
            objectFit: "contain", objectPosition: "bottom left",
            mixBlendMode: "multiply",
          }} />

        {/* Сосна меньше — правее центра */}
        <img src={PINE_IMG} alt="" aria-hidden="true"
          className="absolute bottom-0 pointer-events-none select-none"
          style={{
            right: "5%",
            height: "70%", width: "auto", maxWidth: "16%",
            objectFit: "contain", objectPosition: "bottom right",
            mixBlendMode: "multiply", opacity: 0.85,
          }} />

        {/* Трава — нижняя полоса */}
        <img src={GRASS_IMG} alt="" aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none"
          style={{
            height: "42%", objectFit: "cover",
            objectPosition: "bottom center", mixBlendMode: "multiply",
          }} />

        {/* Надпись по центру */}
        <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center px-4">
          <h2 style={{
            fontFamily: RADIO,
            fontWeight: 900,
            fontSize: "clamp(3rem, 8.5vw, 6.5rem)",
            color: G,
            textTransform: "uppercase",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
          }}>
            Ждем вас<br />в гости!
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════
          ФУТЕР
      ══════════════════════════════ */}
      <footer className="text-white py-10 px-6 md:px-16" style={{ backgroundColor: "#252a14" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-4 text-white/35 font-semibold"
              style={{ letterSpacing: "0.14em" }}>Контакты</p>
            <p className="text-sm font-light mb-1">+7 (351) 59-82-72 — основной</p>
            <p className="text-sm font-light mb-3">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
            <p className="text-sm" style={{ color: "#c5d55a" }}>museym-igs@rambler.ru</p>
            <p className="text-sm" style={{ color: "#c5d55a" }}>museym-igs@yandex.ru</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-4 text-white/35 font-semibold"
              style={{ letterSpacing: "0.14em" }}>Адрес</p>
            <p className="text-sm font-light text-white/60">456317 Челябинская обл., г. Миасс,</p>
            <p className="text-sm font-light text-white/60">Ильменский заповедник</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-5 border-t border-white/10">
          <p className="text-xs text-white/20">© 2026 Ильменский заповедник</p>
        </div>
      </footer>

    </div>
  )
}

export default Index
