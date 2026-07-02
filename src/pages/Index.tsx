import { useState } from "react"
import { KT, gallery, announcements } from "./index-parts/constants"
import { HeroSection } from "./index-parts/HeroSection"
import { AboutSection, VisitorsSection, ExcursionsSection, CollectionsSection } from "./index-parts/InfoSections"
import { BottomSections } from "./index-parts/BottomSections"

const Index = () => {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [announcePage, setAnnouncePage] = useState(0)
  const visibleGallery = gallery.slice(galleryIndex, galleryIndex + 3)
  const visibleAnnounce = announcements.slice(announcePage * 4, announcePage * 4 + 4)

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a] overflow-x-hidden" style={{ fontFamily: KT }}>
      <HeroSection />
      <AboutSection />
      <VisitorsSection />
      <ExcursionsSection />
      <CollectionsSection />
      <BottomSections
        galleryIndex={galleryIndex}
        setGalleryIndex={setGalleryIndex}
        announcePage={announcePage}
        setAnnouncePage={setAnnouncePage}
        visibleGallery={visibleGallery}
        visibleAnnounce={visibleAnnounce}
      />
    </div>
  )
}

export default Index
