import { ReactNode } from "react";
import "./Header.css";

export default function Header({ children }: { children: ReactNode }) {
  return <header>{children}</header>;
}
