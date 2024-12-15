export function parse(data: any): string | null {
  if (!data || !data.image || !data.image.url) {
    return null
  }

  return `${process.env.NEXT_PUBLIC_SERVER_URL}${data.image.url}`
}
