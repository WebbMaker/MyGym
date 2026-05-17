import { MapPin, Navigation, Mail, Phone, Clock, Facebook, Instagram, Star, CheckCircle2, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Reveal } from './components/Reveal';
import logoImage from './assets/images/regenerated_image_1779029530460.jpg';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-dark">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col items-start cursor-pointer" onClick={() => scrollTo('home')}>
            <div className={`font-display text-3xl font-black tracking-tighter flex items-center gap-3 ${isScrolled ? 'text-white' : 'text-white'}`}>
              <img 
                src={logoImage} 
                alt="Logo MyGym" 
                className="w-10 h-10 rounded-sm object-cover"
              />
              <div className="flex flex-col">
                <span>myGym</span>
                <span className="text-[10px] tracking-widest uppercase mt-0 opacity-80 text-primary">siłownia & fitness</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['O nas', 'Strefy', 'Karnety', 'Treningi', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => scrollTo(item.toLowerCase().replace(' ', '-'), e)}
                className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors ${
                  isScrolled ? 'text-white/90' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#karnety"
              onClick={(e) => scrollTo('karnety', e)}
              className="bg-primary text-black font-black uppercase text-xs px-6 py-3 rounded-xl tracking-widest hover:brightness-110 transition-all inline-block"
            >
              Dołącz teraz
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden pb-10">
            {['O nas', 'Strefy', 'Karnety', 'Treningi', 'Kontakt'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => scrollTo(item.toLowerCase().replace(' ', '-'), e)}
                className="text-white uppercase tracking-wider text-left py-2 hover:text-primary transition-colors text-lg inline-block"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] min-h-[600px] flex gap-6 items-center flex-col justify-center overflow-hidden">
        {/* Abstract dark gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark z-10 opacity-90" />
        <div className="absolute inset-0 bg-dark/40 z-10" />
        
        {/* High quality gym background image */}
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop" 
          alt="MyGym Wnętrze" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />

        <div className="absolute -left-12 top-20 opacity-10 select-none z-0 hidden lg:block overflow-hidden pointer-events-none">
          <h1 className="hero-text text-[180px] text-white">FITNESS</h1>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
          <Reveal delay={0.2}>
            <div className="inline-flex glass items-center space-x-2 px-4 py-2 rounded-xl mb-6">
              <Star className="text-primary fill-primary" size={16} />
              <span className="text-white font-bold uppercase tracking-widest text-[10px]">4.9/5 w Google | 100% poleceń</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h2 className="hero-text text-[40px] sm:text-[60px] md:text-[90px] uppercase font-black italic mb-4 sm:mb-6 text-white leading-none">
              Twój cel.<br className="hidden md:block"/>
              <span className="text-primary">Nasza pasja.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-sm sm:text-lg md:text-xl text-white/70 max-w-2xl font-normal mb-8 sm:mb-10 text-balance mx-auto">
              Nowoczesny klub sportowy w Olsztynie. Strefa wolnych ciężarów, maszyny izotoniczne i cardio. Profesjonalne wsparcie na każdym kroku.
            </p>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#karnety"
                onClick={(e) => scrollTo('karnety', e)}
                className="bg-primary text-black font-black uppercase text-[10px] sm:text-xs px-6 py-3 sm:px-8 sm:py-4 rounded-xl tracking-widest hover:brightness-110 transition-all flex items-center justify-center"
              >
                Wybierz Karnet
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#o-nas"
                onClick={(e) => scrollTo('o-nas', e)}
                className="glass text-white/80 font-black uppercase text-[10px] sm:text-xs tracking-widest px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Poznaj Klub
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro / About Section */}
      <section id="o-nas" className="py-16 sm:py-24 bg-dark text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl sm:text-[40px] md:text-5xl font-display font-black mb-4 sm:mb-6 uppercase tracking-tight text-white leading-none">
                  Więcej niż siłownia. <br />
                  <span className="text-primary italic">Twoja nowa strefa komfortu.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-white/70 text-sm sm:text-lg mb-8 font-normal leading-relaxed">
                  Zlokalizowani przy ulicy <strong className="text-white font-bold">Jagiellońskiej 59A w Olsztynie</strong>, tworzymy miejsce, w którym pasja do sportu spotyka się z profesjonalizmem. Od pierwszego wejścia powita Cię nasza recepcja, a najlepsi trenerzy i nowoczesny sprzęt pozwolą Ci wejść na wyższy poziom.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl border-l-4 border-primary">
                    <Clock className="text-primary mb-3" size={32} />
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Otwarte od 08:00</h3>
                    <p className="text-sm text-white/50">W dni powszednie. Twój poranny trening bez pośpiechu.</p>
                  </div>
                  <div className="glass p-6 rounded-xl border-l-4 border-white/20">
                    <Star className="text-primary mb-3" size={32} />
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Renoma</h3>
                    <p className="text-sm text-white/50">Ponad 188 opinii w Google z oceną 4.9. 100% zadowolenia.</p>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop" 
                  alt="MyGym Przestrzeń" 
                  className="relative z-10 w-full h-[300px] sm:h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zones Section */}
      <section id="strefy" className="py-16 sm:py-24 bg-dark border-b border-white/5 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 sm:mb-3">Infrastruktura</h2>
              <h3 className="hero-text text-3xl sm:text-[40px] md:text-[60px] font-black uppercase italic leading-none">Strefy Treningowe</h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/60 font-normal">Przemyślany podział dla maksymalnej efektywności każdego treningu.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {[
              { title: 'Strefa Siłowa', desc: 'Klasyczne i nowoczesne maszyny na każdą partię mięśniową.', icon: '💪' },
              { title: 'Maszyny Izotoniczne', desc: 'Precyzyjna izolacja i bezpieczeństwo podczas ćwiczeń.', icon: '⚙️' },
              { title: 'Wolne Ciężary', desc: 'Wyposażona m.in. w profesjonalną ławkę płaską i squat rack.', icon: '🏋️' },
              { title: 'Strefa Cardio', desc: 'Bieżnie, rowerki, orbitreki. Zbuduj żelazną kondycję.', icon: '🏃' },
              { title: 'Strefa Funkcjonalna', desc: 'Przestrzeń do treningu obwodowego i pracy z masą ciała.', icon: '🤸' },
              { title: 'Sala Fitness', desc: 'Dedykowana na wyselekcjonowane zajęcia zorganizowane.', icon: '🎵' },
            ].map((zone, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group glass p-4 sm:p-8 rounded-xl border-l-[3px] sm:border-l-4 border-white/20 hover:border-primary hover:bg-primary/5 transition-all h-full flex flex-col items-start cursor-default">
                  <span className="text-2xl sm:text-4xl mb-2 sm:mb-4 grayscale group-hover:grayscale-0 transition-all">{zone.icon}</span>
                  <h4 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">{zone.title}</h4>
                  <p className="text-white/50 text-[10px] sm:text-sm font-normal leading-snug">{zone.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Karnety */}
      <section id="karnety" className="py-16 sm:py-28 bg-dark border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-4">
              <h2 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 sm:mb-3">Wybierz swój plan</h2>
              <h3 className="hero-text text-3xl sm:text-[40px] md:text-[60px] font-black uppercase italic leading-none mb-4 sm:mb-6">Karnety, które pasują do Ciebie</h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {/* Pakiet 4 */}
            <Reveal delay={0.1}>
              <div className="glass p-4 sm:p-6 rounded-xl flex flex-col h-full border-l-[3px] sm:border-l-4 border-white/20 hover:border-primary hover:bg-primary/5 hover:-translate-y-2 transition-all">
                <h3 className="text-white/60 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 mt-1 truncate">Jednorazowe</h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-4xl font-black">30</span><span className="text-[7px] sm:text-[10px] font-bold opacity-50 uppercase tracking-widest">PLN / 1 DZIEŃ</span>
                </div>
                <ul className="text-[9px] sm:text-xs space-y-2 sm:space-y-3 opacity-80 flex-1 font-medium mt-1 sm:mt-2">
                  <li>• Ważny na 1 dzień</li>
                  <li>• Brak wpisowego</li>
                  <li>• Bez limitu godzin</li>
                </ul>
              </div>
            </Reveal>

            {/* Pakiet 1 */}
            <Reveal delay={0.2}>
              <div className="glass p-4 sm:p-6 rounded-xl flex flex-col h-full border-l-[3px] sm:border-l-4 border-primary hover:bg-primary/5 hover:-translate-y-2 transition-all">
                <h3 className="text-primary text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 mt-1 truncate">Half-Time</h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-4xl font-black">99</span><span className="text-[7px] sm:text-[10px] font-bold opacity-50 uppercase tracking-widest">PLN / 30 DNI</span>
                </div>
                <ul className="text-[9px] sm:text-xs space-y-2 sm:space-y-3 opacity-80 flex-1 font-medium mt-1 sm:mt-2">
                  <li>• Wejścia 08:00-15:00</li>
                  <li>• Wszystkie strefy</li>
                  <li>• Szatnie i prysznice</li>
                </ul>
              </div>
            </Reveal>

            {/* Pakiet 2 (Bestseller) */}
            <Reveal delay={0.3}>
              <div className="bg-primary p-4 sm:p-6 rounded-xl flex flex-col h-full text-black transform hover:-translate-y-2 transition-all shadow-2xl shadow-yellow-500/20 lg:scale-105 z-10">
                <h3 className="text-black text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 mt-1 truncate">Karnet OPEN</h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-4xl font-black">139</span><span className="text-[7px] sm:text-[10px] font-bold opacity-60 uppercase tracking-widest">PLN / 30 DNI</span>
                </div>
                <ul className="text-[9px] sm:text-xs space-y-2 sm:space-y-3 font-bold flex-1 mt-1 sm:mt-2">
                  <li>• Brak limitów</li>
                  <li>• Wszystkie strefy</li>
                  <li>• Szatnia, darmowe WiFi</li>
                  <li>• Czas wizyty nielimitowany</li>
                </ul>
              </div>
            </Reveal>

            {/* Pakiet 3 */}
            <Reveal delay={0.4}>
              <div className="glass p-4 sm:p-6 rounded-xl flex flex-col h-full border-l-[3px] sm:border-l-4 border-white/20 hover:border-primary hover:bg-primary/5 hover:-translate-y-2 transition-all">
                <h3 className="text-white/60 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-1 mt-1 truncate">OPEN + Fitness</h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-1 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-4xl font-black">169</span><span className="text-[7px] sm:text-[10px] font-bold opacity-50 uppercase tracking-widest">PLN / 30 DNI</span>
                </div>
                <ul className="text-[9px] sm:text-xs space-y-2 sm:space-y-3 opacity-80 flex-1 font-medium mt-1 sm:mt-2">
                  <li>• Wszystko co w OPEN</li>
                  <li>• Zajęcia fitness</li>
                  <li>• Trening startowy</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <div className="mt-12 text-center glass rounded-xl p-4 max-w-4xl mx-auto">
               <p className="text-[11px] text-white/50 font-bold uppercase tracking-widest flex items-center justify-center flex-wrap gap-2">
                 <span className="text-primary">INFO:</span>
                 WPISOWE I KARTA CZŁONKOWSKA: 20 ZŁ | DUPLIKAT: 20 ZŁ
               </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Personal Training */}
      <section id="treningi" className="py-16 sm:py-24 bg-dark text-white border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
               <Reveal direction="right">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary translate-x-3 -translate-y-3 sm:translate-x-4 sm:-translate-y-4 rounded-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop" 
                    alt="Trening personalny" 
                    className="relative z-10 w-full h-[300px] sm:h-[500px] object-cover rounded-xl shadow-xl grayscale" 
                  />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-primary text-black p-4 sm:p-6 rounded-xl shadow-2xl z-20">
                    <h4 className="font-display font-black text-xl sm:text-2xl uppercase mb-1 sm:mb-2">Pamiętaj!</h4>
                    <p className="font-bold text-black/80 text-xs sm:text-sm">Szybciej osiągniesz swój cel pod okiem profesjonalisty. Zadbaj o zdrowie, technikę i efektywność.</p>
                  </div>
                </div>
               </Reveal>

               <div>
                 <Reveal>
                  <h2 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 sm:mb-3">Współpraca 1 na 1</h2>
                  <h3 className="hero-text text-3xl sm:text-[40px] md:text-[60px] font-black uppercase italic leading-none mb-4 sm:mb-6">Treningi Personalne</h3>
                  <p className="text-white/70 text-sm sm:text-lg mb-8 sm:mb-10 text-balance leading-relaxed font-normal">Zaplanuj swój progres z naszymi ekspertami. Pełna uwaga, indywidualny plan i motywacja, która zaprowadzi Cię do sukcesu.</p>
                 </Reveal>

                 <div className="space-y-4">
                   {[
                     { label: 'Pojedyncza sesja', sessions: '1 trening (60 min)', price: '130 zł', highlight: false, desc: 'Idealny start m.in. na analizę sylwetki i techniki.' },
                     { label: 'Pakiet 4 treningów', sessions: 'Ważny przez 30 dni', price: '480 zł', highlight: false, desc: 'Wychodzi 120 zł na jedną sesje. Zbuduj rutynę.' },
                     { label: 'Pakiet 8 treningów', sessions: 'Ważny przez 45 dni', price: '880 zł', highlight: true, desc: 'Wychodzi tylko 110 zł na sesje. Najwyższa opłacalność.' },
                   ].map((pkg, i) => (
                     <Reveal key={i} delay={i * 0.1}>
                       <div className={`p-6 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 transition-all hover:bg-primary/5 cursor-default ${pkg.highlight ? 'bg-primary border border-primary text-black hover:bg-primary hover:brightness-110' : 'glass'}`}>
                         <div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline mb-1">
                              <h4 className="font-bold text-lg uppercase tracking-wide">{pkg.label}</h4>
                              <span className={`text-[10px] sm:ml-3 mt-1 sm:mt-0 tracking-widest ${pkg.highlight ? 'text-black/60 font-bold uppercase' : 'text-primary uppercase font-bold'}`}>{pkg.sessions}</span>
                            </div>
                            <p className={`text-xs mt-1 font-medium ${pkg.highlight ? 'text-black/80' : 'text-white/60'}`}>{pkg.desc}</p>
                         </div>
                         <div className={`text-3xl font-black shrink-0 ${pkg.highlight ? 'text-black' : 'text-white'}`}>
                           {pkg.price}
                         </div>
                       </div>
                     </Reveal>
                   ))}
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Info & CTA Section */}
      <section className="py-16 sm:py-20 bg-primary relative overflow-hidden text-center sm:text-left">
        <div className="absolute inset-0 bg-dark/5 rotate-3 -scale-110"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <Reveal>
            <div className="mb-6 sm:mb-8 md:mb-0">
              <h2 className="hero-text text-3xl sm:text-[40px] md:text-[60px] font-black uppercase italic leading-none text-black tracking-tight mb-2">Zostań częścią MyGym.</h2>
              <p className="text-black/80 font-bold text-sm sm:text-lg">Podejmij decyzję dziś i przyjdź na pierwszy trening.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2} direction="left">
            <a 
              href="#kontakt"
              onClick={(e) => scrollTo('kontakt', e)}
              className="bg-dark text-white font-black px-8 py-4 sm:px-10 sm:py-5 rounded-xl uppercase text-[10px] sm:text-xs tracking-widest hover:bg-black transition-all shadow-xl flex items-center justify-center max-w-fit mx-auto md:mx-0"
            >
              Znajdź nas
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section id="kontakt" className="bg-dark border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRkZEMDE2IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20 sm:pb-16 relative z-10">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 sm:mb-3">Jak dojechać</h2>
              <h3 className="hero-text text-3xl sm:text-[40px] md:text-[60px] font-black uppercase italic leading-none text-white">Kontakt & Lokalizacja</h3>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <Reveal delay={0.1}>
              <div className="glass p-4 sm:p-8 rounded-xl flex flex-col items-center text-center h-full">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-6 text-primary border border-primary/20 shrink-0">
                  <MapPin size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2 text-white uppercase tracking-wide">Adres</h4>
                <p className="text-white/60 font-medium text-[9px] sm:text-base leading-tight sm:leading-normal">ul. Jagiellońska 59A<br/>10-283 Olsztyn</p>
                <div className="mt-2 sm:mt-4 text-[7px] sm:text-[10px] border border-white/10 text-white/50 px-2 py-1 rounded font-bold uppercase tracking-widest break-all">
                  Plus Code:<br className="sm:hidden" /> QFVW+VM
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass p-4 sm:p-8 rounded-xl flex flex-col items-center text-center h-full">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-6 text-primary border border-primary/20 shrink-0">
                  <Phone size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2 text-white uppercase tracking-wide">Telefon</h4>
                <p className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest mb-1">Recepcja</p>
                <a href="tel:511217744" className="text-white font-black text-sm sm:text-2xl hover:text-primary transition-colors mt-1 sm:mt-2">
                  511 217 744
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass p-4 sm:p-8 rounded-xl flex flex-col items-center text-center h-full col-span-2 md:col-span-1">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-6 text-primary border border-primary/20 shrink-0">
                  <Mail size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="font-bold text-sm sm:text-xl mb-1 sm:mb-2 text-white uppercase tracking-wide">E-mail</h4>
                <p className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest mb-1">Napisz do nas</p>
                <a href="mailto:mygym59a@gmail.com" className="text-white font-bold hover:text-primary transition-colors block mt-1 sm:mt-2 break-all text-[11px] sm:text-base">
                  mygym59a@gmail.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map Full Width Base */}
        <div className="relative w-full h-[300px] sm:h-[500px] border-y border-white/10">
          <Reveal>
            <div className="absolute inset-0">
              <iframe 
                src="https://maps.google.com/maps?q=Jagiello%C5%84ska%2059A,%20Olsztyn&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-50 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              ></iframe>
            </div>
          </Reveal>
          
          <div className="absolute bottom-8 left-1/2 flex w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 z-20">
            {/* The Google Maps native URL pattern handles auto-launching app on Mobile, and web maps on Desktop. */}
            <Reveal delay={0.4} direction="up" className="w-full">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Jagiellońska+59A,+10-283+Olsztyn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-accent text-black bg-primary font-black uppercase text-xs py-5 rounded-xl text-center tracking-widest hover:brightness-110 transition-all flex items-center justify-center shadow-2xl shadow-primary/20"
              >
                Nawiguj do celu
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white/50 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-white/5 text-center sm:text-left relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          <div>
            <div className={`font-display text-xl sm:text-2xl font-black tracking-tighter flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-white/80`}>
              <img 
                src={logoImage} 
                alt="Logo MyGym" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm object-cover"
              />
              <div className="flex flex-col">
                <span>myGym</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm mt-3 sm:mt-4 font-normal max-w-sm mx-auto md:mx-0 text-balance opacity-80">Osiągaj swoje cele w najlepszych warunkach na mapie Olsztyna.</p>
          </div>

          <div className="flex space-x-3 sm:space-x-4 mt-6 md:mt-0">
            <a 
              href="https://www.facebook.com/p/MyGym-100048098631858/?locale=pl_PL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Facebook MyGym"
            >
              <Facebook className="fill-current w-3 h-3 sm:w-[18px] sm:h-[18px]" />
            </a>
            <a 
              href="https://www.instagram.com/mygym.olsztyn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all"
              aria-label="Instagram MyGym"
            >
              <Instagram className="w-3 h-3 sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-white/40">
          <p>&copy; {new Date().getFullYear()} MyGym Olsztyn</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
            <a href="#" className="hover:text-primary transition-colors">Prywatność</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
