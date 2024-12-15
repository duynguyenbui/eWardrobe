export function parse(data: any): string {
  if (!data || !data.image || !data.image.url) {
    return ''
  }

  return `${process.env.NEXT_PUBLIC_SERVER_URL}${data.image.url}`
}
