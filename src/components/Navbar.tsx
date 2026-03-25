"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home", id: "home" as const, label: "首页" },
  { href: "#about", id: "about" as const, label: "关于" },
  { href: "#projects", id: "projects" as const, label: "项目" },
  { href: "#skills", id: "skills" as const, label: "技能" },
  { href: "#contact", id: "contact" as const, label: "联系" },
] as const;

const SECTION_ORDER = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [activeId, setActiveId] = useState<(typeof SECTION_ORDER)[number]>("home");

  useEffect(() => {
    const headerOffset = 96;

    const update = () => {
      const scrollY = window.scrollY;
      let current: (typeof SECTION_ORDER)[number] = "home";

      for (let i = SECTION_ORDER.length - 1; i >= 0; i--) {
        const id = SECTION_ORDER[i];
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollY + headerOffset >= el.offsetTop) {
          current = id;
          break;
        }
      }

      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/50 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <Link
          href="#home"
          className="text-sm font-medium tracking-wide text-white transition hover:text-zinc-200"
        >
          钟利娜
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 sm:gap-x-8">
          {NAV_LINKS.map((item, i) => {
            const isActive = activeId === item.id;
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.45 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm transition ${
                    isActive
                      ? "font-medium text-accent"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive ? (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent/90"
                      aria-hidden
                    />
                  ) : null}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
