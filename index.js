$(document).ready(init)

function getPageImages() {
  return $('img')
}

function setSrc(image, newImageUrl) {
  if (typeof image !== 'undefined') {
    image.src = newImageUrl
  }
}

function sortRandom() {
  return generateRandomInt(-1, 1)
}

function init() {
  const pageImages = getPageImages()
  const percentOfPage = generateRandomInt(1, 20)
  const valueToCut = Math.floor(pageImages.length * percentOfPage / 100)
  const sortedHalfPageImages = pageImages
    .sort(sortRandom)
    .slice(0, valueToCut)

  selectOneAndSetNewImage(sortedHalfPageImages, imagesDatabase)
}

function selectOneAndSetNewImage(pageImages, images) {
  const selectedImagesIndex = generateRandomInt(0, images.length - 1)
  const lastArrayIndex = pageImages.length - 1

  setSrc(
    pageImages.get(lastArrayIndex),
    images[selectedImagesIndex]
  )

  if (pageImages.length) {
    const arrayPopSize = pageImages.length - 1
    const newImages = images.length
      ? images.slice(0, images.length - 1)
      : imagesDatabase

    selectOneAndSetNewImage(pageImages.slice(0, arrayPopSize), newImages)
  }
}
