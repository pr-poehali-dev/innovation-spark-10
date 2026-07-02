import { G, KT, T, INFO_BG, MUSEUM_IMG, AGATE_IMG, CONES_IMG, BIRD_IMG, EX_IMG, collections, excursions } from "./constants"

export const AboutSection = () => (
  <section className="relative py-14 px-6 md:px-16 max-w-6xl mx-auto overflow-visible">
    <h2 style={T} className="mb-8">О заповеднике</h2>
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <img src={MUSEUM_IMG} alt="Музей заповедника"
        className="w-full md:w-72 h-52 object-cover rounded-lg flex-shrink-0"
        decoding="async"
        style={{ imageRendering: "high-quality" } as React.CSSProperties}
        onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=560&fit=crop" }} />
      <div>
        <p className="text-gray-600 leading-relaxed font-light" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
          Заповедник был учреждён 14 мая 1920 года по декрету В. И. Ленина. Первоначально он создавался как минералогический, а с 1 декабря 1935 года преобразован в комплексный — для сохранения и изучения не только минеральных богатств, но и природных ресурсов Ильменских гор и Южного Урала.
        </p>
        <a href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
          className="inline-block mt-5 px-6 py-2 rounded-full text-white text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: G }}>
          подробнее
        </a>
      </div>
    </div>
    <div className="relative mt-2">
      <img src={BIRD_IMG} alt="" aria-hidden="true"
        className="pointer-events-none select-none"
        style={{ width: "clamp(200px, 24vw, 340px)", opacity: 0.32 }} />
    </div>
  </section>
)

export const VisitorsSection = () => (
  <section className="relative overflow-hidden" style={{ backgroundColor: INFO_BG }}>
    <img
      src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=95&fit=crop&auto=format"
      alt="" aria-hidden="true"
      className="absolute top-0 right-0 h-full pointer-events-none select-none"
      style={{ width: "50%", objectFit: "cover", objectPosition: "center", imageRendering: "auto" }}
      decoding="async"
    />
    <img src={AGATE_IMG} alt="" aria-hidden="true"
      className="absolute pointer-events-none select-none z-10"
      style={{ right: 0, bottom: 0, width: "clamp(460px, 58vw, 780px)", opacity: 0.75 }} />

    <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-16 py-14">
      <h2 className="mb-8" style={{ ...T, color: "#fff" }}>
        Информация<br />для посетителей
      </h2>

      <div className="flex gap-5 items-start" style={{ maxWidth: "58%" }}>
        <div className="flex flex-col gap-4 flex-shrink-0" style={{ minWidth: 220 }}>
          <div className="p-4 text-sm text-white"
            style={{ backgroundColor: "rgba(22,26,14,0.88)", borderRadius: 8 }}>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2"
              style={{ fontFamily: KT, fontWeight: 600, letterSpacing: "0.15em" }}>Контакты</p>
            <p className="mb-1 font-light">+7 (351) 59-82-72 — основной</p>
            <p className="font-light">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
            <p className="mt-2" style={{ color: "#c5d55a" }}>museym-igs@rambler.ru</p>
            <p style={{ color: "#c5d55a" }}>museym-igs@yandex.ru</p>
          </div>

          <div className="p-4 text-white"
            style={{ backgroundColor: "rgba(22,26,14,0.88)", borderRadius: 8 }}>
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3"
              style={{ fontFamily: KT, fontWeight: 600, letterSpacing: "0.15em" }}>Часы работы:</p>
            <div className="flex gap-6 items-start">
              <div>
                <p className="text-white/45 text-[10px] uppercase tracking-wide mb-1">Пн — Пт</p>
                <p className="font-black leading-none" style={{ fontSize: "2.4rem" }}>09:00</p>
                <p className="text-white/45 text-xs mt-1">до 17:00</p>
              </div>
              <div className="w-px self-stretch bg-white/15" />
              <div>
                <p className="text-white/45 text-[10px] uppercase tracking-wide mb-1">Сб — Вс</p>
                <p className="font-black leading-none" style={{ fontSize: "2.4rem" }}>10:00</p>
                <p className="text-white/45 text-xs mt-1">до 16:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 text-white text-sm flex-1"
          style={{ backgroundColor: "rgba(22,26,14,0.88)", borderRadius: 8 }}>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3"
            style={{ fontFamily: KT, fontWeight: 600, letterSpacing: "0.15em" }}>Стоимость посещения</p>
          <div className="space-y-1.5 font-light">
            <div className="flex justify-between gap-4">
              <span>Входной билет для взрослых</span>
              <span className="font-semibold whitespace-nowrap">200 ₽</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Льготный <span className="text-white/50 text-xs">(дети, студенты, пенсионеры)</span></span>
              <span className="font-semibold whitespace-nowrap">100 ₽</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Семейный билет <span className="text-white/50 text-xs">(2 взр. + 2 дет.)</span></span>
              <span className="font-semibold whitespace-nowrap">450 ₽</span>
            </div>
          </div>
          <div className="w-full h-px bg-white/10 my-3" />
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2"
            style={{ fontFamily: KT, fontWeight: 600, letterSpacing: "0.15em" }}>Экскурсии для групп от 6 до 25 человек</p>
          <div className="space-y-1.5 font-light">
            <div className="flex justify-between gap-4">
              <span>Обзорная экскурсия <span className="text-white/50 text-xs">(до 7 чел.)</span></span>
              <span className="font-semibold whitespace-nowrap">1 000 ₽</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Обзорная экскурсия <span className="text-white/50 text-xs">(8–25 чел.)</span></span>
              <span className="font-semibold whitespace-nowrap">1 400 ₽</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Обзорная экскурсия <span className="text-white/50 text-xs">(26–75 чел.)</span></span>
              <span className="font-semibold whitespace-nowrap">2 000 ₽</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Тематическая экскурсия</span>
              <span className="font-semibold whitespace-nowrap">2 500 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const ExcursionsSection = () => (
  <section id="excursions" className="relative py-10 px-6 md:px-16">
    <img src={CONES_IMG} alt="" aria-hidden="true"
      className="absolute pointer-events-none select-none"
      style={{ right: "-20px", top: "0", bottom: "0", height: "100%", width: "auto", maxWidth: "22vw", objectFit: "contain", objectPosition: "top right", opacity: 0.3 }} />

    <div className="max-w-6xl mx-auto">
      <div className="border border-gray-300 flex items-stretch" style={{ minHeight: 400 }}>
        <div className="flex-shrink-0 flex items-center justify-center border-r border-gray-300 px-3"
          style={{ width: "clamp(80px, 10vw, 130px)" }}>
          <h2 className="select-none"
            style={{
              ...T,
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}>
            Экскурсии
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 flex-1 p-3">
          {excursions.map((ex, i) => (
            <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "4/3", backgroundColor: "#1a1a1a" }}>
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${EX_IMG})`,
                  backgroundSize: "300% 200%",
                  backgroundPosition: ex.pos,
                }} />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <p className="text-white font-semibold text-sm leading-tight max-w-[82%]">{ex.title}</p>
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center ml-1">
                    <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M2 6h8M7 3l3 3-3 3"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/65 text-xs leading-tight">{ex.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export const CollectionsSection = () => (
  <section id="collections" className="relative pt-0 pb-10 px-0" style={{ backgroundColor: G }}>
    <div className="max-w-6xl mx-auto px-6 md:px-16 relative">
      <h2 style={{
        ...T,
        color: "#fff",
        textTransform: "uppercase",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        display: "block",
      }}>коллекции</h2>

      <div className="bg-white" style={{ padding: "28px 28px 32px", marginLeft: "0", marginRight: "0" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((col, i) => (
            <a key={i} href="https://museum-igz.chelscience.ru/" target="_blank" rel="noopener noreferrer"
              className="group block">
              <img src={col.img} alt={col.title}
                className="w-full object-cover group-hover:opacity-90 transition-opacity"
                decoding="async"
                style={{ height: 150, display: "block" } as React.CSSProperties}
                onError={(e) => { e.currentTarget.src = col.fb }} />
              <p className="text-xs text-gray-700 leading-snug mt-2 font-light" style={{ fontFamily: KT }}>{col.title}</p>
              <p className="text-[10px] text-gray-400 leading-tight mt-0.5 font-light" style={{ fontFamily: KT }}>{col.subtitle}</p>
              <span className="inline-block mt-3 px-5 py-1.5 rounded-full text-white text-xs cursor-pointer font-light"
                style={{ backgroundColor: G, fontFamily: KT }}>подробнее</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
)