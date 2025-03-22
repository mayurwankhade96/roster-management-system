type IconProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export const Icon = ({
  src,
  alt = "icon",
  width = 24,
  height = 24,
}: IconProps) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};
