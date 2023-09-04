import { Path, Svg } from "@react-pdf/renderer";
import { IconProps } from "../types/icon.ts";

export default function MapMarker({ width, height, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 1920 1920">
      <Path
        d="M956.952 0c-362.4 0-657 294.6-657 656.88 0 180.6 80.28 347.88 245.4 511.56 239.76 237.96 351.6 457.68 351.6 691.56v60h120v-60c0-232.8 110.28-446.16 357.6-691.44 165.12-163.8 245.4-331.08 245.4-511.68 0-362.28-294.6-656.88-663-656.88"
        fill-rule="evenodd"
        fill={color}
      />
    </Svg>
  );
}
