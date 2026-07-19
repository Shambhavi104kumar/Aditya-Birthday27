import { PageIntro } from '@/components/section'
import { MemoriesMap } from '@/components/memories-map'

export default function MemoriesPage() {
  return (
    <div className="pb-16">
      <PageIntro
        eyebrow="Mischief Managed"
        title="The Marauder's Memories"
        subtitle="A map of our moments — hidden in plain sight, revealed only to those who know where to look."
      />
      <MemoriesMap />
    </div>
  )
}
