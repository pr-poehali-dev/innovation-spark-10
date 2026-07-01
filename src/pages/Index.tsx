import { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

/* ─────────────────────────────────────────────────
   Изображения пользователя
───────────────────────────────────────────────── */
const DEER_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/4e8e6e66-dc65-484d-b915-8bcf9cac0bcf.jpg"
const GRASS_IMG = "https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/4ab69fff-d32b-400e-a103-26bb02bc7616.jpg"
// Главное фото музея с сайта (og:image)
const MUSEUM_HERO = "https://thb.tildacdn.com/tild6163-3066-4032-b938-613632366637/-/resize/504x/12244161494517696_65.jpg"

/* ─────────────────────────────────────────────────
   Данные (фото с сайта museum-igz.chelscience.ru,
   fallback — unsplash при ошибке загрузки)
───────────────────────────────────────────────── */
const collections = [
  {
    title: "Минералогический зал",
    subtitle: "Экспозиция минералов Ильменских гор",
    img: "https://thb.tildacdn.com/tild3439-6561-4534-a636-363036306266/-/resize/504x/photo.jpg",
    fallback: "https://images.unsplash.com/photo-1567428485548-c499e4962571?w=300&h=200&fit=crop",
  },
  {
    title: "Зал природы",
    subtitle: "Флора и фауна заповедника",
    img: "https://thb.tildacdn.com/tild3833-3035-4834-b430-373061363161/-/resize/504x/photo.jpg",
    fallback: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop",
  },
  {
    title: "Ильменский зал",
    subtitle: "Уральский зал самоцветов",
    img: "https://thb.tildacdn.com/tild3964-6432-4534-b833-336233313932/-/resize/504x/photo.jpg",
    fallback: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
  },
  {
    title: "Геологический зал",
    subtitle: "Горные породы С.З. Ушков",
    img: "https://thb.tildacdn.com/tild3763-6635-4331-b539-363864323366/-/resize/504x/photo.jpg",
    fallback: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=200&fit=crop",
  },
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
  { label: "Главная", href: "#" },
  { label: "Экскурсии", href: "#excursions" },
  { label: "Коллекции", href: "#collections" },
  { label: "Сотрудники", href: "/staff", isRoute: true },
  { label: "Документы", href: "#" },
]

/* ─────────────────────────────────────────────────
   Компонент
───────────────────────────────────────────────── */
const Index = () => {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [announcePage, setAnnouncePage] = useState(0)
  const visibleGallery = gallery.slice(galleryIndex, galleryIndex + 3)
  const visibleAnnounce = announcements.slice(announcePage * 4, announcePage * 4 + 4)

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a]" style={{ fontFamily: "'Rubik', 'Inter', sans-serif" }}>

      {/* ══ HERO ══ */}
      <div className="relative overflow-hidden bg-white" style={{ minHeight: 520 }}>

        {/* Соцсети — правый верхний угол */}
        <div className="absolute top-4 right-5 flex gap-2 z-30">
          {[{ icon: "AtSign" }, { icon: "Users" }, { icon: "Play" }].map((s, i) => (
            <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-white shadow-sm transition">
              <Icon name={s.icon} size={13} className="text-gray-500" />
            </a>
          ))}
        </div>

        {/* Сосна — слева */}
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/files/fcdc1f46-b998-490d-91db-9263ae932557.jpg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 bottom-0 pointer-events-none select-none z-10"
          style={{
            height: "88%",
            width: "22%",
            objectFit: "contain",
            objectPosition: "bottom left",
            mixBlendMode: "multiply",
          }}
        />

        {/* Сосна — правее центра (вторая, меньше) */}
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/files/fcdc1f46-b998-490d-91db-9263ae932557.jpg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none z-10"
          style={{
            right: "28%",
            bottom: 0,
            height: "72%",
            width: "14%",
            objectFit: "contain",
            objectPosition: "bottom center",
            mixBlendMode: "multiply",
            opacity: 0.85,
          }}
        />

        {/* Трава — нижний слой, на всю ширину */}
        <img
          src={GRASS_IMG}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none z-20"
          style={{
            height: "38%",
            objectFit: "cover",
            objectPosition: "bottom center",
            mixBlendMode: "multiply",
          }}
        />

        {/* Олень — справа, ч/б иллюстрация */}
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/files/53bd9520-a59c-4537-8958-2b9b3c2fef41.jpg"
          alt="Косуля Ильменского заповедника"
          className="absolute pointer-events-none select-none z-20"
          style={{
            right: "3%",
            bottom: "22%",
            height: "52%",
            width: "22%",
            objectFit: "contain",
            objectPosition: "bottom center",
            mixBlendMode: "multiply",
            filter: "grayscale(100%)",
          }}
        />

        {/* Заголовок — по центру */}
        <div className="relative z-25 flex flex-col items-center text-center pt-10 pb-2 px-4" style={{ zIndex: 25 }}>
          <p
            className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1"
            style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 300 }}
          >
            Южноуральский государственный
          </p>
          <h1
            className="uppercase leading-none text-[#2a2a2a]"
            style={{
              fontFamily: "'Radiotechnika', 'Rubik', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 9vw, 7rem)",
              letterSpacing: "0.01em",
              lineHeight: 1,
            }}
          >
            Ильменский<br />заповедник
          </h1>
          <p className="mt-3 text-gray-500 text-sm max-w-xs leading-relaxed">
            Охраняемая природная территория с уникальными экологическими ландшафтами Урала
          </p>
        </div>

        {/* Навигация — горизонтально по центру, поверх травы */}
        <nav className="relative flex flex-wrap justify-center gap-2 px-6 pb-6 pt-4" style={{ zIndex: 30 }}>
          {navLinks.map((link, idx) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="px-5 py-1.5 rounded-full text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: "#6b7c2e" }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-1.5 rounded-full text-sm font-medium transition-colors"
                style={{
                  backgroundColor: idx === 0 ? "#6b7c2e" : "rgba(255,255,255,0.85)",
                  color: idx === 0 ? "#fff" : "#444",
                  border: idx === 0 ? "none" : "1px solid #ddd",
                }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      {/* ══ О ЗАПОВЕДНИКЕ ══ */}
      <section className="py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl mb-6 text-gray-400 font-light lowercase" style={{ fontFamily: "'Rubik', sans-serif" }}>
          о заповеднике
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={MUSEUM_HERO}
            alt="Музей заповедника"
            className="w-full md:w-64 h-44 object-cover rounded-lg flex-shrink-0"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=420&h=280&fit=crop" }}
          />
          <div>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Заповедник был учреждён 14 мая 1920 года по декрету В. И. Ленина. Первоначально он создавался как минералогический, а с 1 декабря 1935 года преобразован в комплексный — для сохранения и изучения не только минеральных богатств, но и природных ресурсов Ильменских гор и Южного Урала. В мае 1940 года на его территории было организовано им. В. И. Ленина.
            </p>
            <a href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-5 px-6 py-2 rounded-full bg-[#7a8c35] text-white text-sm font-medium hover:bg-[#6b7c2e] transition-colors">
              подробнее
            </a>
          </div>
        </div>
      </section>

      {/* ══ ИНФОРМАЦИЯ ДЛЯ ПОСЕТИТЕЛЕЙ ══ */}
      <section className="relative py-14 px-6 md:px-12 overflow-hidden" style={{ backgroundColor: "#7a8a5a" }}>
        <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=400&fit=crop" alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-10 leading-tight max-w-xs"
            style={{ fontFamily: "'Radiotechnika', 'Rubik', sans-serif" }}>
            Информация для посетителей
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-[#3a3a3a]/90 rounded-2xl p-6 text-sm space-y-4 text-white">
              <div>
                <h3 className="font-bold uppercase text-xs tracking-widest text-white/50 mb-2">Контакты</h3>
                <p>+7 (351) 59-82-72 — основной</p>
                <p>+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
                <p className="text-[#a8c060] mt-2">museym-igs@rambler.ru</p>
                <p className="text-[#a8c060]">museym-igs@yandex.ru</p>
              </div>
              <div>
                <h3 className="font-bold uppercase text-xs tracking-widest text-white/50 mb-2">Часы работы:</h3>
                <p>Пн — Пт: 09:00 — 17:00</p>
                <p>Сб — Вс: 10:00 — 16:00</p>
              </div>
            </div>
            <div className="text-sm space-y-2 leading-relaxed text-white">
              <p><span className="font-semibold">Входной билет для взрослых</span> — 200 ₽</p>
              <p><span className="font-semibold">Входной билет для льготных категорий</span> (дети, школьники, студенты, пенсионеры) — 100 ₽</p>
              <p><span className="font-semibold">Билет семейный</span> (2 взрослых + 2 детей) — 450 ₽</p>
              <p className="mt-3 font-semibold text-white/60 text-xs uppercase tracking-wide">Экскурсии</p>
              <p>Для малых групп (1–7 человек) — 400 ₽</p>
              <p>Для групп от 8 до 25 человек — 1 000 ₽</p>
              <p className="mt-2 font-semibold text-white/60 text-xs uppercase tracking-wide">Обзорные экскурсии</p>
              <p>Для малых групп (1–7 человек) — 1 400 ₽</p>
              <p>Для всех групп от 25+ человек — 2 000 ₽</p>
              <p>Тематические экскурсии — 2 500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ЭКСКУРСИИ ══ */}
      <section id="excursions" className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex gap-8 items-start">
          <h2
            className="text-6xl md:text-8xl font-black uppercase text-[#2a2a2a] leading-none flex-shrink-0 select-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: "'Radiotechnika', 'Rubik', sans-serif" }}
          >
            Экскурсии
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1">
            {excursions.map((ex, i) => (
              <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={ex.img}
                    alt={ex.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = excursionFallbacks[i] || excursionFallbacks[0] }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
                  <div className="absolute top-2 right-2"><Icon name="ArrowRight" size={14} className="text-white drop-shadow" /></div>
                </div>
                <p className="text-xs font-medium mt-2 leading-tight text-gray-700">{ex.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ КОЛЛЕКЦИИ ══ */}
      <section id="collections" className="bg-[#7a8c35] py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-8"
            style={{ fontFamily: "'Radiotechnika', 'Rubik', sans-serif" }}>
            Коллекции
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((col, i) => (
              <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
                className="bg-white rounded-lg overflow-hidden group block hover:shadow-lg transition-shadow">
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = col.fallback }}
                />
                <div className="p-3">
                  <p className="text-xs font-semibold text-gray-800 leading-tight">{col.title}</p>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{col.subtitle}</p>
                  <span className="inline-block mt-2 px-4 py-1 rounded-full bg-[#7a8c35] text-white text-xs font-medium">подробнее</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ АНОНСЫ ══ */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ fontFamily: "'Radiotechnika', 'Rubik', sans-serif" }}>
              Анонсы
            </h2>
            <div className="flex gap-1">
              <button onClick={() => setAnnouncePage(Math.max(0, announcePage - 1))} className="w-8 h-8 flex items-center justify-center text-[#7a8c35] hover:text-[#5a6c25]">
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button onClick={() => setAnnouncePage(announcePage + 1 < Math.ceil(announcements.length / 4) ? announcePage + 1 : 0)} className="w-8 h-8 flex items-center justify-center text-[#7a8c35] hover:text-[#5a6c25]">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleAnnounce.map((a, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img src={a.img} alt={a.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <span className="text-[10px] uppercase tracking-wide text-[#7a8c35] font-semibold">{a.tag}</span>
                  <p className="text-xs mt-1 leading-tight text-gray-700 font-medium">{a.title}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{a.date}</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#7a8c35] text-white text-[10px] font-medium">подробнее</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ГАЛЕРЕЯ ══ */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => setGalleryIndex(Math.max(0, galleryIndex - 1))} className="text-[#7a8c35] hover:text-[#5a6c25]">
              <Icon name="ChevronLeft" size={28} />
            </button>
            <h2 className="text-4xl md:text-5xl font-black uppercase" style={{ fontFamily: "'Radiotechnika', 'Rubik', sans-serif" }}>
              Галерея
            </h2>
          </div>
          <div className="flex gap-3">
            {visibleGallery.map((src, i) => (
              <div key={i} className="flex-1 rounded-lg overflow-hidden">
                <img src={src} alt="" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
            <button onClick={() => setGalleryIndex(galleryIndex + 1 < gallery.length - 2 ? galleryIndex + 1 : 0)} className="self-center text-[#7a8c35] hover:text-[#5a6c25] ml-2">
              <Icon name="ChevronRight" size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ ЖДЁМ В ГОСТИ ══ */}
      <div className="relative overflow-hidden bg-white" style={{ minHeight: 300 }}>
        <img src={GRASS_IMG} alt="" aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none"
          style={{ height: "65%", objectFit: "cover", objectPosition: "bottom" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
          <h2
            className="text-5xl md:text-7xl font-black uppercase text-[#7a8c35] leading-tight"
            style={{ fontFamily: "'Radiotechnika', 'Rubik', sans-serif" }}
          >
            Ждем вас<br />в гости!
          </h2>
        </div>
      </div>

      {/* ══ ФУТЕР ══ */}
      <footer className="bg-[#3a3a3a] text-white py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/50">Контакты</h3>
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