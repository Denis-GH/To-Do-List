type IconProps = {
  name: string;
  width?: number;
  height?: number;
  color?: string;
};

// name - название файла иконки в ./src/assets/icons

export const Icon = ({ name, width = 20, height = 20, color }: IconProps) => {
  return (
    <svg width={width} height={height} color={color}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};
