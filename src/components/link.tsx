import { ReactNode } from "react";
import { Link as PDFLink } from "@react-pdf/renderer";

export interface LinkProps {
  src: string;
  children: ReactNode;
}

export default function Link({ children, src }: LinkProps) {
  return (
    <PDFLink style={{ color: "#000" }} src={src}>
      {children}
    </PDFLink>
  );
}
