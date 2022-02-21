interface ISeo {
  origin?: string
  image?: string
  url?: string
  title?: string
  description?: string
  keywords?: string
}

export function getSocialMetas({
  title = 'Jon Major Condon',
  description = 'Jesus Follower | "This is adrenaline mixed in with my melanin"',
  image = '',
  keywords = '',
}: ISeo = {}) {
  return {
    title,
    description,
    keywords,
    image,
  }
}
