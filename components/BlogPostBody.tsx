type BlogPostBodyProps = {
  html: string
}

function wrapArticleTables(html: string): string {
  return html
    .replace(/<table\b/gi, '<div class="prose-table-wrap"><table')
    .replace(/<\/table>/gi, '</table></div>')
}

export function BlogPostBody({ html }: BlogPostBodyProps) {
  return (
    <div
      className="prose-content mt-10"
      dangerouslySetInnerHTML={{ __html: wrapArticleTables(html) }}
    />
  )
}
