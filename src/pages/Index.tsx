import { Instagram, Facebook, Leaf } from "lucide-react";
import { Linkedin } from "lucide-react";
import liroLogo from "@/assets/SIDE LOGO.png";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/Creation process-cuate.png";

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Index = () => {
  const emailAddress = "contact@lirostudios.com";
  const emailSubject = "Notify me when you launch!";
  const emailBody = "Hi Liro Studios team,\n\nPlease notify me when your new website launches!\n\nThank you!";
  
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Main Container */}
      <div className="relative min-h-screen flex">
        {/* Left Content Section */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between p-8 lg:p-16 z-10">
          {/* Logo */}
          <header className="flex items-center gap-2">
            <img src={liroLogo} alt="Liro Studios Logo" className="h-16 w-auto" />
          </header>

          {/* Hero Content */}
          <main className="flex-1 flex flex-col justify-center max-w-md">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Our New Landing Page Is Coming Soon.
            </h1>
            <p className="text-muted-foreground mb-2 text-lg">
              Crafting creativity, design, and digital experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              We’re building a clean and creative landing page that reflects the vision and digital approach of Liro Studios. Be the first to know when we launch.
            </p>
            {/* CTA Button with mailto */}
            <div className="mb-8">
              <Button 
                asChild
                variant="hero"
                className="px-8"
              >
                <a href={mailtoLink}>NOTIFY ME</a>
              </Button>
            </div>
          </main>

          {/* Social Links */}
          <footer className="flex items-center gap-4">
            <a 
              href="https://instagram.com/liro_studios" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61577393215357" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/+918778796477" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/liro-medias" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </footer>
        </div>

        {/* Right Illustration Section with Organic Curved Shape */}
        <div className="hidden lg:block absolute right-0 top-0 w-[58%] h-full">
          {/* Organic Curved Shape Background */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 800"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(175, 70%, 45%)" />
                <stop offset="50%" stopColor="hsl(180, 60%, 40%)" />
                <stop offset="100%" stopColor="hsl(210, 80%, 45%)" />
              </linearGradient>
            </defs>
            {/* Organic flowing curve like in reference */}
            <path
              d="M 120 0 
                 C 30 100, -20 200, 30 350 
                 C 80 500, -20 600, 60 800 
                 L 600 800 
                 L 600 0 
                 Z"
              fill="url(#heroGradient)"
            />
          </svg>

          {/* Illustration Container */}
          <div className="absolute inset-0 flex items-center justify-center pl-24 pr-12">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={heroIllustration}
                alt="Team working on new website"
                className="max-w-[120%] max-h-[110%] object-contain relative z-10 drop-shadow-2xl rounded-xl"
              />
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute top-24 right-24 w-3 h-3 rounded-full bg-background/30 animate-pulse" />
          <div className="absolute bottom-40 right-40 w-4 h-4 rounded-full bg-background/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-background/25 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-16 w-5 h-5 rounded-full bg-background/15 animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Mobile Bottom Curved Section */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="heroGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(175, 70%, 45%)" />
                <stop offset="50%" stopColor="hsl(180, 60%, 40%)" />
                <stop offset="100%" stopColor="hsl(210, 80%, 45%)" />
              </linearGradient>
            </defs>
            <path
              d="M 0 80 
                 Q 100 20, 200 60 
                 Q 300 100, 400 40 
                 L 400 200 
                 L 0 200 
                 Z"
              fill="url(#heroGradientMobile)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;
