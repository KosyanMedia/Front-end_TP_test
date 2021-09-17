declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.svg' {
  const image: any;
  export = image;
}
