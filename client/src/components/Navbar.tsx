import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent cursor-pointer">
              Prime Data Works
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <div className={`hover:text-primary transition-colors cursor-pointer ${location === "/" ? "text-primary" : ""}`}>
                Home
              </div>
            </Link>
            <Link href="/services">
              <div className={`hover:text-primary transition-colors cursor-pointer ${location === "/services" ? "text-primary" : ""}`}>
                Services
              </div>
            </Link>
            <Link href="/case-studies">
              <div className={`hover:text-primary transition-colors cursor-pointer ${location === "/case-studies" ? "text-primary" : ""}`}>
                Case Studies
              </div>
            </Link>
            <Link href="/contact">
              <div className={`hover:text-primary transition-colors cursor-pointer ${location === "/contact" ? "text-primary" : ""}`}>
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}