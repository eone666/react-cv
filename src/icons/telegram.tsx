import { G, Path, Rect, Svg } from "@react-pdf/renderer";
import { IconProps } from "../types/icon.ts";

export default function Telegram({ width, height, color }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G>
        <Path
          fill={color}
          d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.9,8.1l-1.7,8.2c-0.1,0.6-0.5,0.7-0.9,0.4l-2.6-2 c-0.6,0.6-1.2,1.1-1.3,1.3c-0.2,0.1-0.3,0.3-0.5,0.3c-0.3,0-0.3-0.2-0.4-0.4l-0.9-3L5.9,12c-0.6-0.2-0.6-0.6,0.1-0.9l10.2-3.9 C16.6,7.1,17.1,7.3,16.9,8.1z M14.5,9l-5.7,3.6l0.9,3l0.2-2l4.9-4.4C15.1,8.9,14.9,8.9,14.5,9z"
        ></Path>
        <Rect width="24" height="24"></Rect>
      </G>
    </Svg>
  );
}
