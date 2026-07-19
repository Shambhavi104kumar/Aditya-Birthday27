import { PageIntro } from '@/components/section'
import { OwlPost } from '@/components/owl-post'
import { PatronusEnding } from '@/components/patronus-ending'

export default function OwlPostPage() {
  return (
    <div className="pb-8">
      <PageIntro
        eyebrow="Owl Post"
        title="A Message on Silent Wings"
        subtitle="An owl waited patiently to carry these words to you."
      />
      <OwlPost />
      <PatronusEnding />
    </div>
  )
}
