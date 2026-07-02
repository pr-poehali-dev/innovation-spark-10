import { G, KT, T, RADIO, announcements, gallery } from "./constants"

interface BottomSectionsProps {
  galleryIndex: number
  setGalleryIndex: (i: number) => void
  announcePage: number
  setAnnouncePage: (i: number) => void
  visibleGallery: string[]
  visibleAnnounce: typeof announcements
}

export const BottomSections = ({
  galleryIndex,
  setGalleryIndex,
  announcePage,
  setAnnouncePage,
  visibleGallery,
  visibleAnnounce,
}: BottomSectionsProps) => (
  <>
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

    <div className="relative">
      <img
        src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/c5ad0bad-64a3-4e3a-922c-4f66039ec385.png"
        alt="Ждём вас в гости"
        className="w-full block"
        decoding="sync"
        fetchPriority="high"
        style={{
          objectFit: "cover",
          imageRendering: "crisp-edges",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        } as React.CSSProperties}
      />
      <div className="absolute inset-0 flex items-start justify-center"
        style={{ paddingTop: "5%", paddingLeft: "25%", paddingRight: "20%" }}>
        <h2 style={{
          fontFamily: RADIO,
          fontWeight: 900,
          fontSize: "clamp(1.4rem, 4.5vw, 3.8rem)",
          color: "rgb(82, 102, 102)",
          textTransform: "uppercase",
          lineHeight: 1.0,
          letterSpacing: "0.03em",
          textAlign: "center",
          WebkitTextStroke: "2px rgb(82, 102, 102)",
          paintOrder: "stroke fill",
        } as React.CSSProperties}>
          Ждём вас<br />в гости!
        </h2>
      </div>
    </div>

    <footer className="text-white py-8 px-8" style={{ backgroundColor: "#2d3022", fontFamily: KT }}>
      <div className="max-w-6xl mx-auto">
        <p className="font-bold mb-4" style={{ color: "#fff", fontSize: "0.85rem", letterSpacing: "0.05em", fontFamily: KT }}>
          • КОНТАКТЫ
        </p>
        <p className="mb-1 font-light" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", fontFamily: KT }}>
          + 7 (351) 59-82-72 — основной
        </p>
        <p className="mb-4 font-light" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", fontFamily: KT }}>
          +7 (351) 59-38-48 — отдел экологической просветительской работы
        </p>
        <p className="mb-0.5" style={{ color: "#c5d55a", fontSize: "0.82rem", fontFamily: KT }}>museym-igs@rambler.ru</p>
        <p style={{ color: "#c5d55a", fontSize: "0.82rem", fontFamily: KT }}>museym-igs@yandex.ru</p>
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="w-20 h-[3px]" style={{ backgroundColor: G }} />
        </div>
      </div>
    </footer>
  </>
)

export default BottomSections