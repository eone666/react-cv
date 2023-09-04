import { G, Path, Rect, Svg } from "@react-pdf/renderer";
import { IconProps } from "../types/icon.ts";

export default function Email({ width, height, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G>
        <Path
          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></Path>
        <Rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
        ></Rect>
      </G>
    </Svg>
  );
}
