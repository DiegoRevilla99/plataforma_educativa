import { Header } from "@/components/Header";
import AnimatedOutlet from "./AnimatedOutlet";

export const PublicLayout = () => {
  return (
    <main>
      <Header />
      <AnimatedOutlet />
    </main>
  );
};
