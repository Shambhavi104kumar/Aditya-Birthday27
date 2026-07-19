import { PageIntro } from '@/components/section'
import { StoryTimeline } from '@/components/story-timeline'

export default function StoryPage() {
  return (
    <div className="pb-16">
      <PageIntro
        eyebrow="Our Story"
        title="A Tale Told in Moments"
        subtitle="Every milestone, inked onto parchment and kept safe like a treasured spell."
      />
      <StoryTimeline />
    </div>
  )
}
