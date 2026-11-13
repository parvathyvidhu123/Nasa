import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Orbit, 
  Database, 
  Clock, 
  Atom, 
  GraduationCap, 
  Info, 
  Menu, 
  X, 
  Radio, 
  Globe2,
  ChevronRight,
  Compass
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [utcTime, setUtcTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${mins}:${secs} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Globe2 },
    { name: 'Solar System', path: '/solar-system', icon: Orbit, badge: '3D' },
    { name: 'Hardware', path: '/archive', icon: Database },
    { name: 'Timeline', path: '/timeline', icon: Clock },
    { name: 'Discoveries', path: '/discoveries', icon: Atom },
    { name: 'Space Lab', path: '/space-lab', icon: GraduationCap, badge: 'Quiz' },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-space-dark/95 backdrop-blur-xl border-b border-space-border/90 py-2.5 shadow-card-elevated' 
            : 'bg-gradient-to-b from-space-dark/95 via-space-dark/80 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-11">
            {/* Left: Brand Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-space-card border border-space-accent/40 flex items-center justify-center shadow-glow-accent group-hover:border-space-accent transition-all duration-300">
                <Orbit className="w-5 h-5 text-space-accent group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 leading-none">
                  <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-space-text group-hover:text-space-accent transition-colors">
                    SPACE TIME CAPSULE
                  </span>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-space-accent/15 border border-space-accent/30 text-space-accent hidden xl:inline-block">
                    NASA ARCHIVE
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-space-muted uppercase mt-0.5 hidden sm:block">
                  Humanity's Footprints Beyond Earth
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links (Centered, Sleek Aerospace Floating Bar) */}
            <nav className="hidden lg:flex items-center gap-1 bg-space-card/70 border border-space-border/70 rounded-xl px-1.5 py-1 backdrop-blur-md shadow-sm">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path || 
                  (link.path !== '/' && location.pathname.startsWith(link.path));

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive 
                        ? 'bg-space-accent text-space-dark font-bold shadow-glow-accent/30' 
                        : 'text-space-muted hover:text-space-text hover:bg-space-secondary/80'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-space-dark' : 'text-space-accent/80'}`} />
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                        isActive 
                          ? 'bg-space-dark text-space-accent font-bold' 
                          : 'bg-space-secondary border border-space-border text-space-accent'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Live Telemetry & Mobile Hamburger */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              {/* Telemetry Clock */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-card/80 border border-space-border text-xs font-mono text-space-muted">
                <Radio className="w-3.5 h-3.5 text-space-success animate-pulse" />
                <span className="text-space-text font-medium tracking-wider">{utcTime || 'UTC SYNC'}</span>
              </div>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-space-card border border-space-border text-space-muted hover:text-space-text hover:border-space-accent/50 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-space-accent" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-space-dark/95 backdrop-blur-2xl pt-20 pb-8 px-5 overflow-y-auto border-b border-space-border">
          <div className="flex flex-col gap-2 max-w-md mx-auto">
            {/* Live Telemetry Pill */}
            <div className="p-3 rounded-xl bg-space-card border border-space-border mb-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2 text-space-success">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>DSN FEED ACTIVE</span>
                </span>
                <span className="text-space-text font-bold">{utcTime}</span>
              </div>
            </div>

            <p className="text-[10px] font-mono text-space-muted uppercase tracking-widest px-2 mb-1">
              Mission Navigation
            </p>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path || 
                (link.path !== '/' && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between p-3 rounded-xl border text-sm font-mono transition-all ${
                    isActive 
                      ? 'bg-space-accent/20 border-space-accent/60 text-space-accent' 
                      : 'bg-space-card/60 border-space-border/60 text-space-text hover:border-space-accent/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-space-accent' : 'text-space-muted'}`} />
                    <span className="font-medium">{link.name}</span>
                  </div>
                  {link.badge ? (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-secondary text-space-accent border border-space-border">
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-space-muted" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
