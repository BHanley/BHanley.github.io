import type { ReactNode } from "react";
import { Nav } from "@/components/Nav/Nav";
import { Footer } from "@/components/Footer/Footer";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  wide?: boolean;
}

export function Layout({ children, wide = false }: LayoutProps) {
  return (
    <div className={styles.root}>
      <Nav />
      <main className={styles.main}>
        <div className={wide ? styles.contentWide : styles.content}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
