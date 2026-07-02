import { Link } from "react-router-dom"

const KT = "'Nunito Sans', 'Rubik', sans-serif"
const G = "#9a9f3b"

const keepers = [
  {
    name: "Махотлов",
    fullName: "Евгений Павлович",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=600&fit=crop&crop=face&q=100",
  },
  {
    name: "Чацин",
    fullName: "Павел Владимирович",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face&q=100",
  },
  {
    name: "Никандров",
    fullName: "Андрей Сергеевич",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face&q=100",
  },
]

const guides = [
  {
    name: "Равенко",
    fullName: "Юлия Анатольевна",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face&q=100",
  },
  {
    name: "Выхрева",
    fullName: "Галина Ивановна",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face&q=100",
  },
  {
    name: "Гулиева",
    fullName: "Юлия Николаевна",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=face&q=100",
  },
]

const scientists = [
  {
    name: "Медведева",
    fullName: "Елена Владимировна",
    role: "Старший научный сотрудник, кандидат геолого-минералогических наук",
    photo: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&h=700&fit=crop&crop=face&q=100",
  },
  {
    name: "Россимахин",
    fullName: "Михаил Анатольевич",
    role: "Младший научный сотрудник Института Минералогии",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=face&q=100",
  },
]

const partners = [
  { name: "100 лет", img: "https://museum-igz.chelscience.ru/local/templates/ilmen2020/img/logo.svg" },
  { name: "Партнёр", img: "" },
  { name: "Партнёр", img: "" },
  { name: "1841", img: "" },
]

const VkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.08 13.16h-1.7c-.64 0-.84-.51-2-1.67-1-.98-1.44-.98-1.69-.98-.34 0-.44.1-.44.57v1.52c0 .41-.13.65-1.2.65-1.77 0-3.73-1.07-5.11-3.07C4.1 9.97 3.57 7.76 3.57 7.3c0-.25.1-.48.57-.48h1.7c.43 0 .59.19.75.65.83 2.4 2.22 4.5 2.8 4.5.21 0 .31-.1.31-.65V9.38c-.07-1.17-.68-1.27-.68-1.69 0-.21.17-.43.44-.43h2.67c.36 0 .49.19.49.62v3.33c0 .36.16.49.26.49.21 0 .39-.13.78-.52 1.21-1.36 2.07-3.45 2.07-3.45.11-.25.31-.48.74-.48h1.7c.51 0 .62.26.51.62-.21 1-.92 2.2-1.65 3.24-.21.3-.3.47 0 .8.21.25.91.88 1.38 1.4.86.94 1.52 1.73 1.7 2.28.18.52-.08.79-.61.79z"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
)

const Staff = () => {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: KT }}>

      {/* ══ ШАПКА ══ */}
      <div className="relative w-full" style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Соцсети — правый верхний угол */}
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          {[
            { href: "mailto:museym-igs@rambler.ru", el: <MailIcon /> },
            { href: "https://vk.com", el: <VkIcon /> },
            { href: "https://youtube.com", el: <YoutubeIcon /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white shadow-sm transition text-gray-600">
              {s.el}
            </a>
          ))}
        </div>

        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/e2ceb8c9-54e4-4fc0-a655-eff0c0b5d7fa.png"
          alt="Музей заповедника"
          className="w-full block"
          style={{ maxHeight: 320, objectFit: "cover", objectPosition: "center top" }}
          decoding="sync"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Заголовок — нижний левый угол */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-white uppercase leading-tight font-black"
            style={{ fontFamily: KT, fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}>
            Сотрудники музея<br />заповедника
          </h1>
        </div>

        {/* Кнопка назад */}
        <div className="absolute top-4 left-4 z-20">
          <Link to="/" className="px-4 py-2 text-sm font-medium rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors">
            ← На главную
          </Link>
        </div>
      </div>

      {/* ══ ХРАНИТЕЛИ ФОНДОВ — зелёный фон ══ */}
      <section style={{ backgroundColor: G, maxWidth: 900, margin: "0 auto" }} className="py-10 px-8">
        <div className="flex items-start gap-8">
          {/* Фото — квадратные без скруглений */}
          <div className="flex gap-5 flex-shrink-0">
            {keepers.map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="overflow-hidden" style={{ width: 140, height: 140, border: "2px solid rgba(255,255,255,0.5)" }}>
                  <img src={p.photo} alt={p.name}
                    className="w-full h-full object-cover grayscale"
                    decoding="async" />
                </div>
                <p className="text-white mt-2 leading-tight" style={{ fontSize: "0.7rem", fontWeight: 400 }}>
                  {p.name}<br />{p.fullName}
                </p>
              </div>
            ))}
          </div>
          {/* Заголовок — справа, огромный, прозрачный */}
          <div className="ml-auto flex items-center">
            <h2 className="font-black uppercase leading-none text-right"
              style={{
                fontFamily: KT,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.02em",
              }}>
              Хранители<br />фондов
            </h2>
          </div>
        </div>
      </section>

      {/* ══ ЭКСКУРСОВОДЫ — белый фон ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto" }} className="py-10 px-8 bg-white">
        <div className="flex items-start gap-8">
          {/* Заголовок — слева, огромный тёмный */}
          <div className="flex-shrink-0 flex items-center" style={{ minWidth: 220 }}>
            <h2 className="font-black uppercase leading-none"
              style={{
                fontFamily: KT,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
              }}>
              Экскурсо<br />воды
            </h2>
          </div>
          {/* Фото справа */}
          <div className="flex gap-5 flex-wrap">
            {guides.map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="overflow-hidden" style={{ width: 130, height: 160, border: "1px solid #e0e0e0" }}>
                  <img src={p.photo} alt={p.name}
                    className="w-full h-full object-cover grayscale"
                    decoding="async" />
                </div>
                <p className="text-black mt-2 leading-tight" style={{ fontSize: "0.7rem", fontWeight: 400 }}>
                  {p.name}<br />{p.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ НАУЧНЫЕ СОТРУДНИКИ — белый фон ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto" }} className="py-10 px-8 bg-white border-t border-gray-100">
        <div className="flex items-start gap-8">
          {/* Фото слева — вертикальные */}
          <div className="flex gap-5 flex-shrink-0">
            {scientists.map((p, i) => (
              <div key={i} className="flex flex-col items-start" style={{ maxWidth: 150 }}>
                <div className="overflow-hidden" style={{ width: 140, height: 175, border: "1px solid #e0e0e0" }}>
                  <img src={p.photo} alt={p.name}
                    className="w-full h-full object-cover grayscale"
                    decoding="async" />
                </div>
                <p className="text-black mt-2 leading-tight font-semibold" style={{ fontSize: "0.7rem" }}>
                  {p.name}<br />{p.fullName}
                </p>
                <p className="text-gray-500 mt-1 leading-tight" style={{ fontSize: "0.65rem" }}>{p.role}</p>
              </div>
            ))}
          </div>
          {/* Заголовок справа */}
          <div className="ml-auto flex items-center">
            <h2 className="font-black uppercase leading-none"
              style={{
                fontFamily: KT,
                fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
                color: "#1a1a1a",
                letterSpacing: "0.02em",
              }}>
              Научные<br />сотрудники
            </h2>
          </div>
        </div>
      </section>

      {/* ══ НАШИ ПАРТНЁРЫ ══ */}
      <section style={{ maxWidth: 900, margin: "0 auto" }} className="py-10 px-8 bg-white border-t border-gray-100">
        <h3 className="text-center mb-8 font-light" style={{ fontFamily: KT, fontSize: "1.4rem", color: "#333" }}>
          Наши партнёры
        </h3>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {/* Заглушки логотипов партнёров */}
          {["", "", "", ""].map((_, i) => (
            <div key={i} className="w-20 h-16 flex items-center justify-center"
              style={{ border: "1px solid #e0e0e0", borderRadius: 4 }}>
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-400 font-light">лого</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ КОНЕЦ — луг с оленем ══ */}
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/4ab69fff-d32b-400e-a103-26bb02bc7616.jpg"
          alt=""
          aria-hidden="true"
          className="w-full block"
          style={{ maxHeight: 260, objectFit: "cover", objectPosition: "center bottom" }}
          decoding="async"
        />
      </div>

      {/* ══ ФУТЕР ══ */}
      <footer style={{ backgroundColor: "#2d3022", maxWidth: 900, margin: "0 auto" }} className="text-white py-8 px-8">
        <p className="font-bold mb-4" style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}>
          КОНТАКТЫ
        </p>
        <p className="mb-1 font-light" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>
          +7(351)59-82-72 — основной
        </p>
        <p className="mb-4 font-light" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>
          +7(351)59-38-48 — отдел экологической просветительской работы
        </p>
        <p className="mb-0.5" style={{ color: "#c5d55a", fontSize: "0.85rem" }}>museym-igs@rambler.ru</p>
        <p style={{ color: "#c5d55a", fontSize: "0.85rem" }}>museym-igs@yandex.ru</p>
        <p className="mt-4 font-light" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>
          456317 Челябинская обл., г. Миасс, Ильменский заповедник
        </p>
      </footer>

    </div>
  )
}

export default Staff
