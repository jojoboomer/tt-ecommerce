interface Props {
  width?: string;
  height?: string;
}

export const ArrowRight = ({ width = "16px", height = "16px" }: Props) => {
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
        <polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" />
      </g>
    </svg>
  );
};
