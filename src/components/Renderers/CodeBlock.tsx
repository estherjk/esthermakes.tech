import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// Import the desired style using `cjs` instead of `esm`
// See: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// References:
//  - https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
//  - https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/479#issuecomment-1267772279
export const CodeBlock = (codeProps: CodeProps) => {
  const { node, inline, className, children, style, ...props } = codeProps;

  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <div className="tracking-normal text-sm my-8">
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        codeTagProps={{ style: { fontFamily: 'var(--font-fira-code)' } }}
        {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 tracking-normal text-[85%] break-words px-1.5 py-0.5 rounded-md">
      {children}
    </code>
  );
};
