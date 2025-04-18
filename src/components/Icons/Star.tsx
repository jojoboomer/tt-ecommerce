
interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

export const Star = ({ width, height, fill }: Props) => {
  return (
    <svg
    width={width}
    height={height}
    viewBox="0 -0.5 32 32"
    fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
          fill={fill}
        ></path>
      </g>
    </svg>
  );
};
