import { Link } from "react-router-dom"
import { G, KT, HERO_IMG, navLinks, VkIcon, MailIcon, YoutubeIcon } from "./constants"

export const HeroSection = () => (
  <div className="relative w-full" style={{ background: "#fff" }}>

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

    <img
      src={HERO_IMG}
      alt="Ильменский заповедник"
      className="w-full block"
      decoding="sync"
      fetchPriority="high"
      style={{
        objectFit: "contain",
        objectPosition: "top center",
        imageRendering: "crisp-edges",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      } as React.CSSProperties}
    />

    <div className="absolute bottom-0 left-0 right-0 pb-6 flex justify-center z-10">
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
)

export default HeroSection
