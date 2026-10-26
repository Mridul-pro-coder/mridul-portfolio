// Temporary type shims used ONLY for offline type-checking while node_modules
// is unavailable. Next.js provides these modules at build time; this file lets
// `tsc` verify our own code. Delete once dependencies are installed.

declare module "next/link" {
  import type { AnchorHTMLAttributes, ReactNode } from "react";
  export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children?: ReactNode;
  }
  const Link: (props: LinkProps) => React.JSX.Element;
  export default Link;
}

declare module "next/navigation" {
  export function usePathname(): string;
  export function useRouter(): {
    push: (href: string) => void;
    replace: (href: string) => void;
    back: () => void;
  };
}

declare module "next/font/google" {
  import type { CSSProperties } from "react";
  export interface FontOptions {
    subsets?: string[];
    weight?: string[] | string;
    display?: string;
    style?: string[] | string;
  }
  interface FontDefinition {
    (options?: FontOptions): {
      className: string | undefined;
      style: CSSProperties;
      variable?: string;
    };
  }
  type Font = FontDefinition & {
    style?: CSSProperties;
  };
  export const Inter: Font;
}

declare module "next" {
  export type NextConfig = Record<string, unknown>;
  export interface Metadata {
    title?: string;
    description?: string;
  }
}
