import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight as style } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Code({ source }) {
  return (
    <SyntaxHighlighter
      language='cshtml'
    //   wrapLongLines
      style={style}
    >
      {source}
    </SyntaxHighlighter>
  )
}
