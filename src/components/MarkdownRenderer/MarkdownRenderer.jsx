import ReactMardown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import propTypes from 'prop-types'

function MarkdownRenderer({ content }) {
  return (
    <ReactMardown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className='mt-2 text-3xl font-bold' {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className='mt-2 text-2xl font-bold' {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className='mt-2 text-xl font-bold' {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className='mt-2 text-lg font-bold' {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className='mt-2 text-base font-bold' {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className='text-base lg:text-lg' {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className='text-base lg:text-lg' {...props} />
        ),
        ul: ({ node, ...props }) => <ul className='list-disc p-4' {...props} />,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag='div' {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMardown>
  )
}

export default MarkdownRenderer

MarkdownRenderer.propTypes = {
  content: propTypes.string,
}
