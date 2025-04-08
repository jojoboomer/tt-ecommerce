interface Props {
  width?: string;
  height?: string;
}

export const ArrowLeft = ({ width = "16px", height = "16px" }: Props) => {
  return (
    <svg
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 80.593 122.88"
      enable-background="new 0 0 80.593 122.88"
    >
      <g>
        <polygon points="80.593,0 49.771,0 0,61.44 49.771,122.88 80.593,122.88 30.82,61.44 80.593,0" />
      </g>
    </svg>
  );
};
