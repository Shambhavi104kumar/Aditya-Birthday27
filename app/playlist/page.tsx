import { PageIntro } from '@/components/section'
import PlaylistSection from '@/components/playlist-section'

export default function PlaylistPage() {
  return (
    <div className="pb-16">
      <PageIntro
        eyebrow="Sonorus"
        title="Something random"
        subtitle="I love these songs and I hope you do too "
      />
      <PlaylistSection />
    </div>
  )
}