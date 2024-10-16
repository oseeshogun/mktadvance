"use client"

import { useMemo, useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export type GalleryItem = {
  src: string
  caption: string
  alt?: string
  isSelected: false
  width: number
  height: number
  customOverlay?: React.ReactNode
}

const GalleriesComponent = ({ items }: { items: GalleryItem[] }) => {
  const [index, setIndex] = useState(-1)

  const currentImage = useMemo(() => items[index], [index, items])
  const nextIndex = useMemo(() => (index + 1) % items.length, [index, items])
  const nextImage = useMemo(() => items[nextIndex] || currentImage, [index, items])
  const prevIndex = (index + items.length - 1) % items.length
  const prevImage = items[prevIndex] || currentImage

  const handleClick = (index: number) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div className="min-h-screen px-[5%] py-[10%]">
      <Gallery
        images={items}
        enableImageSelection={false}
        onClick={(i, _) => handleClick(i)}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}

export default GalleriesComponent
