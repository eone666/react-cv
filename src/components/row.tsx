import { ReactNode } from "react";
import { View } from "@react-pdf/renderer";

export interface RowProps {
  children: ReactNode;
  gap?: string;
  itemsCenter?: boolean;
}
export default function Row({ children, gap, itemsCenter }: RowProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: gap,
        alignItems: itemsCenter ? "center" : undefined,
      }}
    >
      {children}
    </View>
  );
}
