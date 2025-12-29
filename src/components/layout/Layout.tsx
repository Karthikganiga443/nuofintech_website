import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import MouseGradient from "@/components/effects/MouseGradient";
import ParticleField from "@/components/effects/ParticleField";
import ScrollProgress from "@/components/effects/ScrollProgress";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <CustomCursor />
      <MouseGradient />
      <ParticleField />
      <ScrollProgress />
      <NoiseOverlay />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;