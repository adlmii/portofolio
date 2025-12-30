import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { FeaturedProjects } from "@/components/featured-projects";
import { CodePhilosophy } from "@/components/code-philosophy";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <CodePhilosophy />
      <Footer />
    </div>
  );
}