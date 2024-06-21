declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  import { PngProps } from 'react-native-svg';
  const content: React.FC<PngProps>;
  export default content;
}
