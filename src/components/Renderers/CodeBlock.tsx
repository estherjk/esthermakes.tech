import { ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// Import the desired style using `cjs` instead of `esm`
// See: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  inline?: boolean;
  className?: string;
  children: ReactNode;
};

// Reference: https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
export const CodeBlock = (props: Props) => {
  const { inline, className, children } = props;

  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <div className="my-8">
      <SyntaxHighlighter style={dracula} language={match[1]}>
        {children}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code>{children}</code>
  );
};
