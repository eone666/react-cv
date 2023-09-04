import { G, Path, Svg } from "@react-pdf/renderer";
import { IconProps } from "../types/icon.ts";

export default function MapMarker({ width, height, color }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <G>
        <Path
          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></Path>
        <Path
          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></Path>
      </G>
    </Svg>
  );
}