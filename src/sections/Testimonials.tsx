import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    src: avatar1,
  },
  {
    quote: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    src: avatar2,
  },
  {
    quote: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    src: avatar3,
  },
  {
    quote: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    src: avatar4,
  },
];

export const Testimonials = () => {
  return (
      <section className="py-20 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-5xl tracking-tigther font-medium text-center">Beyond Expectations</h2>
        <p className="text-white/70 text-lg text-center mt-5 max-w-2xl">Our Revolutionary AI Teaching tool have transformed how both Students And Teachers interact</p>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </section>
  );
};
