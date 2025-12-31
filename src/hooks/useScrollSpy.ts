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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectors, rootMargin]);

  return activeId;
}