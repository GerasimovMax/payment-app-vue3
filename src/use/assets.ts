export function useAssets() {
  const svgs = import.meta.globEager('/src/assets/**/*.svg')

  return {
    icons: {
      user: svgs['/src/assets/images/icons/user.svg'].default,
      card: svgs['/src/assets/images/icons/card.svg'].default,
      mail: svgs['/src/assets/images/icons/mail.svg'].default,
      plus: svgs['/src/assets/images/icons/plus.svg'].default,
      chevronLeft: svgs['/src/assets/images/icons/chevronLeft.svg'].default
    }
  }
}
