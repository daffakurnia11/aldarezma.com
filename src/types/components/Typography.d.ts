interface TextProps {
  children: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  tabIndex?: number;
  as?: keyof JSX.IntrinsicElements;
}
interface HeadingProps extends TextProps, React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
interface ParagraphProps extends TextProps, React.HTMLAttributes<HTMLParagraphElement> {
  size: 'lg' | 'base';
}
interface SmallProps extends TextProps, React.HTMLAttributes<HTMLSpanElement> {
  size: 'sm' | 'xs';
}
