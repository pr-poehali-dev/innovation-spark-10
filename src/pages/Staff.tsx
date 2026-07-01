import { Compass } from "lucide-react"
import { Link } from "react-router-dom"

const keepers = [
  {
    name: "Махотлов\nЕвгений Павлович",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Чацин\nПавел Владимирович",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Никандров\nАндрей Сергеевич",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
]

const guides = [
  {
    name: "Равенко\nЮлия Анатольевна",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Выхрева\nГалина Ивановна",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Гулиева\nЮлия Николаевна",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
]

const scientists = [
  {
    name: "Медведева\nЕлена Владимировна",
    role: "Старший научный сотрудник, кандидат геолого-минералогических наук",
    photo: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Россимахин\nМихаил Анатольевич",
    role: "Младший научный сотрудник Института Минералогии",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
]

const Staff = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero — на всю ширину страницы, навигация поверх */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/425a6007-c78c-4075-a54c-6ab952084b9f/bucket/e2ceb8c9-54e4-4fc0-a655-eff0c0b5d7fa.png"
          alt="Музей заповедника"
          className="w-full block"
          style={{ maxHeight: 420, objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Навигация поверх шапки */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-sm font-medium backdrop-blur hover:bg-white transition-colors">
            <Compass className="w-4 h-4" />
            <span>Ильменский заповедник</span>
          </Link>
          <Link to="/" className="px-4 py-2 text-sm font-medium rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors">
            ← На главную
          </Link>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight"
            style={{ fontFamily: "'Nunito Sans','Rubik',sans-serif" }}>
            Сотрудники музея<br />заповедника
          </h1>
        </div>
      </div>

      {/* Хранители фондов */}
      <section className="bg-[#8b9a3a] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-10">
            {/* Фото */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {keepers.map((p, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-28 h-28 border-2 border-white/60 overflow-hidden">
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="text-white text-xs mt-2 text-center whitespace-pre-line leading-tight">{p.name}</p>
                </div>
              ))}
            </div>
            {/* Заголовок */}
            <div className="md:ml-auto">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight text-right">
                Хранители<br />фондов
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Экскурсоводы */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-10">
            {/* Заголовок слева */}
            <div className="md:mr-auto">
              <h2 className="text-5xl md:text-7xl font-black text-black uppercase leading-tight">
                Экскурсо<br />воды
              </h2>
            </div>
            {/* Фото */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-end">
              {guides.map((p, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-28 h-28 border-2 border-gray-300 overflow-hidden">
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="text-black text-xs mt-2 text-center whitespace-pre-line leading-tight">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Научные сотрудники */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Фото с подписями */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {scientists.map((p, i) => (
                <div key={i} className="flex flex-col items-start max-w-[140px]">
                  <div className="w-28 h-36 border-2 border-gray-300 overflow-hidden">
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="text-black text-xs mt-2 font-semibold whitespace-pre-line leading-tight">{p.name}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">{p.role}</p>
                </div>
              ))}
            </div>
            {/* Заголовок */}
            <div className="md:ml-4">
              <h2 className="text-5xl md:text-6xl font-black text-black uppercase leading-tight">
                Научные<br />сотрудники
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a3a3a] text-white py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Контакты</h3>
          <p className="text-white/80 text-sm mb-1">+7 (351) 59-82-72 — основной</p>
          <p className="text-white/80 text-sm mb-4">+7 (351) 59-38-48 — отдел экологической просветительской работы</p>
          <p className="text-[#a8c060] text-sm">museym-igs@rambler.ru</p>
          <p className="text-[#a8c060] text-sm">museym-igs@yandex.ru</p>
          <p className="text-white/50 text-xs mt-4">456317 Челябинская обл., г. Миасс, Ильменский заповедник</p>
        </div>
      </footer>
    </div>
  )
}

export default Staff