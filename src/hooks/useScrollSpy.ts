import { useEffect, useState } from "react";

export function useScrollSpy(
  selectors: string[],
  rootMargin = "-40% 0px -40% 0px"
) {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const elements = selectors
      .map((s) => document.querySelector(s))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // ambil SEMUA section yang lagi kelihatan
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: e.target.id,
            top: e.boundingClientRect.top,
          }));

        if (!visible.length) return;

        visible.sort((a, b) => a.top - b.top);

        setActiveId(visible[0].id);
      },
      { rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectors, rootMargin]);

  return activeId;
}