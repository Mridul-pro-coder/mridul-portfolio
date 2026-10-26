import type { ReactNode } from "react";

export type Category = {
  key: "me" | "projects" | "skills" | "fun" | "contact";
  label: string;
  href: string;
  color: string;
  icon: ReactNode;
};

// The five section icons, shared by the home CategoryCards row and the Nav
// icon strip so they stay in lock-step.
export const CATEGORIES: Category[] = [
  {
    key: "me",
    label: "Me",
    href: "/me",
    color: "#14B8A6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="10" r="1.2" fill="currentColor" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" />
        <path d="M8.5 14c1 1.4 2.2 2.1 3.5 2.1s2.5-.7 3.5-2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
    color: "#F59E0B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8M4 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "skills",
    label: "Skills",
    href: "/skills",
    color: "#6366F1",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m4 12 8 4.2L20 12M4 16.5 12 20.7l8-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "fun",
    label: "Fun",
    href: "/fun",
    color: "#EC4899",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 4c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M18.5 14.5c.2 1.6 1.3 2.7 2.9 2.9-1.6.2-2.7 1.3-2.9 2.9-.2-1.6-1.3-2.7-2.9-2.9 1.6-.2 2.7-1.3 2.9-2.9ZM5.5 3.5c.2 1.6 1.3 2.7 2.9 2.9C6.8 6.6 5.7 7.7 5.5 9.3c-.2-1.6-1.3-2.7-2.9-2.9 1.6-.2 2.7-1.3 2.9-2.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    color: "#F59E0B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9.5" cy="9.5" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m13.5 13.5 6 6M16.5 16.5l2-2M18.5 18.5l2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];
