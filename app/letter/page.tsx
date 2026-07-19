import { PageIntro } from '@/components/section'
import { BirthdayLetter } from '@/components/birthday-letter'

export default function LetterPage() {
  return (
    <div className="pb-16">
      <PageIntro
        eyebrow="Owl Delivered"
        title="An Acceptance Letter"
        subtitle="Some words are meant to be unsealed slowly. Break the seal when you're ready."
      />
      <BirthdayLetter />
    </div>
  )
}
