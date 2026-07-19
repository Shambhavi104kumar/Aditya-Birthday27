import { PageIntro } from '@/components/section'
import { TriwizardAward } from '@/components/triwizard-award'

export default function AwardPage() {
  return (
    <div className="pb-16">
      <PageIntro
        eyebrow="The Tournament"
        title="Triwizard Champion"
        subtitle="Three tasks, one worthy victor — though to me, you won long ago."
      />
      <TriwizardAward />
    </div>
  )
}
