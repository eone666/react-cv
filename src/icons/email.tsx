import { G, Path, Svg } from "@react-pdf/renderer";
import { IconProps } from "../types/icon.ts";

export default function Email({ width, height, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 -3.5 32 32">
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(-414.000000, -261.000000)" fill={color}>
          <Path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"></Path>
        </G>
      </G>
    </Svg>
  );
}
