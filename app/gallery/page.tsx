import { PageIntro } from '@/components/section'
import { PhotoGallery } from '@/components/photo-gallery'

export default function GalleryPage() {
  return (
    <div className="pb-16">
      <PageIntro
        eyebrow="The Gallery"
        title="Random Pictures that you've ever sent"
        subtitle="I've got all of em. Tap any pic to view and see my view!"
      />
      <PhotoGallery />
    </div>
  )
}
