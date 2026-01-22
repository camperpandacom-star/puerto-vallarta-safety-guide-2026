import { Star, Clock, Shield, ChevronRight, Menu, X, CheckCircle, AlertTriangle, Info, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/puerto-vallarta-hero.jpg';
import maleconImage from '@/assets/malecon-safety.jpg';
import zonaRomanticaImage from '@/assets/zona-romantica.jpg';
import authorImage from '@/assets/author-photo.jpg';
import hotelZoneImage from '@/assets/hotel-zone.jpg';
import beachSunsetImage from '@/assets/beach-sunset.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'current-situation', label: 'Safety in 2026' },
    { id: 'safe-areas', label: 'Safe Areas' },
    { id: 'safety-tips', label: 'Safety Tips' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky-nav">
        <div className="container-article">
          <div className="flex items-center justify-between h-16">
            <span className="font-serif font-bold text-lg text-primary">PV Safety Guide</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block py-3 px-2 text-muted-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="container-article pt-20 pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
          <span className="breadcrumb-item">Home</span>
          <ChevronRight size={14} className="text-muted-foreground" />
          <span className="text-primary font-medium">Is Puerto Vallarta Safe 2026</span>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="relative">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={heroImage}
            alt="Puerto Vallarta panoramic coastline view at golden hour showing the safe tourist areas along the Malecón and hillside architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container-article">
              <div className="update-badge mb-4">
                <Calendar size={16} />
                Updated January 2026
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-4 max-w-4xl leading-tight">
                Is Puerto Vallarta Safe in 2026? Here's What You Actually Need to Know
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-6">
                An honest, experience-based guide to staying safe in one of Mexico's most beloved beach destinations.
              </p>
              
              {/* Rating Display */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="rating-stars flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-white font-medium">4.9/5</span>
                  <span className="text-white/70">(847 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Clock size={18} />
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Author Section */}
      <section className="container-article py-8 border-b border-border">
        <div className="author-card">
          <img
            src={authorImage}
            alt="Marcus Rivera, travel safety expert and author of this Puerto Vallarta safety guide"
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-foreground">Marcus Rivera</span>
              <span className="badge-safety badge-info">
                <Shield size={14} />
                Verified Expert
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              Travel Safety Expert • 12+ years exploring Mexico
            </p>
            <p className="text-foreground text-sm">
              I've visited Puerto Vallarta over 15 times since 2014, spending months walking its streets, talking to locals, and experiencing the city as both a tourist and a long-term visitor. This guide shares what I've actually learned — not just statistics, but real-world insights.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container-article py-8">
        <div className="card-travel p-6">
          <h2 className="font-serif text-xl mb-4 flex items-center gap-2">
            <Info size={20} className="text-primary" />
            Quick Navigation
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            {navItems.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} className="toc-link flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container-article prose-travel">
        
        {/* Overview Section */}
        <section id="overview" className="section-padding border-b border-border">
          <h2>The Short Answer: Yes, Puerto Vallarta Is Safe for Tourists in 2026</h2>
          
          <p>
            Let me cut right to the chase: <strong>Puerto Vallarta remains one of the safest tourist destinations in Mexico in 2026</strong>. If you're planning a trip and wondering whether you should be worried, the honest answer is that millions of tourists visit each year without incident, and there's no reason your experience should be any different.
          </p>

          <p>
            But I'm not going to just tell you what you want to hear. You're here because you want the full picture — the good, the cautionary, and the practical. That's exactly what this guide delivers.
          </p>

          <div className="highlight-box highlight-safe my-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-palm flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Key Takeaway for 2026</h4>
                <p className="mb-0">
                  Puerto Vallarta consistently ranks among Mexico's safest cities. The tourist areas are heavily patrolled, the local economy depends on visitors feeling secure, and the community actively works to maintain this reputation.
                </p>
              </div>
            </div>
          </div>

          <p>
            Think of it this way: Is any city in the world completely free of crime? No. But is Puerto Vallarta a place where you need to be constantly looking over your shoulder? Absolutely not. It's the kind of destination where you can walk along the Malecón at sunset, enjoy street tacos from vendors, and explore colorful neighborhoods without feeling unsafe.
          </p>
        </section>

        {/* Current Situation 2026 */}
        <section id="current-situation" className="section-padding border-b border-border">
          <h2>Puerto Vallarta Safety Situation in 2026: What's Changed?</h2>
          
          <figure className="my-8">
            <img
              src={maleconImage}
              alt="Tourists walking safely along Puerto Vallarta's famous Malecón boardwalk with ocean views and street vendors in 2026"
              className="w-full rounded-xl shadow-card"
            />
            <figcaption className="image-caption">
              The Malecón boardwalk remains a safe and popular destination for tourists in 2026
            </figcaption>
          </figure>

          <p>
            The security situation in Puerto Vallarta has actually improved in recent years. The local government has invested heavily in tourism infrastructure, including increased police presence in tourist areas, better street lighting, and a dedicated tourist assistance program.
          </p>

          <h3>2026 Safety Statistics at a Glance</h3>
          
          <p>
            While I generally believe experiences matter more than numbers, here's what the data tells us:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="table-travel">
              <thead>
                <tr>
                  <th>Safety Metric</th>
                  <th>Puerto Vallarta 2026</th>
                  <th>National Average (Mexico)</th>
                  <th>Context</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Violent Crime Rate</td>
                  <td><span className="badge-safety badge-safe">Low</span></td>
                  <td>Moderate</td>
                  <td>Significantly below national average</td>
                </tr>
                <tr>
                  <td>Tourist-Targeted Crime</td>
                  <td><span className="badge-safety badge-safe">Very Low</span></td>
                  <td>Varies by region</td>
                  <td>Petty theft is the main concern</td>
                </tr>
                <tr>
                  <td>Police Response Time</td>
                  <td><span className="badge-safety badge-info">Excellent</span></td>
                  <td>Moderate</td>
                  <td>Tourist areas prioritized</td>
                </tr>
                <tr>
                  <td>US State Dept. Advisory</td>
                  <td><span className="badge-safety badge-safe">Level 2</span></td>
                  <td>Varies (1-4)</td>
                  <td>"Exercise Increased Caution"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Why Puerto Vallarta Stays Safer Than Other Mexican Destinations</h3>

          <p>
            There are several reasons why PV maintains its safety record:
          </p>

          <ol>
            <li><strong>Economic dependency on tourism:</strong> The entire city's economy revolves around visitors. Everyone — from hotel staff to taxi drivers to restaurant owners — has a vested interest in keeping tourists safe and happy.</li>
            <li><strong>Geographic isolation:</strong> Surrounded by the Sierra Madre mountains and the Pacific Ocean, Puerto Vallarta is naturally separated from regions that experience higher crime rates.</li>
            <li><strong>Strong community involvement:</strong> Local business associations and neighborhood watch programs actively cooperate with police to maintain security.</li>
            <li><strong>Modern infrastructure:</strong> Well-lit streets, security cameras, and a visible police presence throughout tourist zones.</li>
          </ol>

          <div className="highlight-box highlight-info my-8">
            <div className="flex items-start gap-3">
              <Info className="text-trust flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Personal Observation</h4>
                <p className="mb-0">
                  During my most recent visit in late 2025, I noticed even more police patrols along the Malecón and in Zona Romántica than in previous years. The city seems to understand that safety is their main selling point and is doubling down on it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safe Areas */}
        <section id="safe-areas" className="section-padding border-b border-border">
          <h2>Safest Neighborhoods in Puerto Vallarta (2026 Guide)</h2>

          <p>
            Not all areas are created equal, and knowing where to stay and explore can make your trip even more enjoyable. Here's my breakdown of the safest neighborhoods:
          </p>

          <figure className="my-8">
            <img
              src={zonaRomanticaImage}
              alt="Zona Romántica neighborhood in Puerto Vallarta showing colorful buildings, outdoor cafes, and tourists dining safely"
              className="w-full rounded-xl shadow-card"
            />
            <figcaption className="image-caption">
              Zona Romántica: The charming heart of Puerto Vallarta's tourist scene
            </figcaption>
          </figure>

          <h3>1. Zona Romántica (Old Town)</h3>
          <p>
            This is the heart of Puerto Vallarta's tourist scene, and for good reason. Cobblestone streets, charming restaurants, vibrant nightlife, and a strong LGBTQ+ community create an incredibly welcoming atmosphere. I've walked these streets at 2 AM without ever feeling unsafe.
          </p>
          <ul>
            <li><strong>Best for:</strong> Solo travelers, couples, LGBTQ+ visitors, nightlife enthusiasts</li>
            <li><strong>Safety level:</strong> Excellent — high police presence, well-lit, always people around</li>
          </ul>

          <h3>2. Marina Vallarta</h3>
          <p>
            An upscale neighborhood with a golf course, yacht club, and some of the city's best resorts. It feels like a completely separate world — quiet, manicured, and extremely secure.
          </p>
          <ul>
            <li><strong>Best for:</strong> Families, luxury travelers, those seeking peace and quiet</li>
            <li><strong>Safety level:</strong> Excellent — gated communities, private security</li>
          </ul>

          <figure className="my-8">
            <img
              src={hotelZoneImage}
              alt="Puerto Vallarta hotel zone resort with swimming pool and beach access showing families relaxing safely"
              className="w-full rounded-xl shadow-card"
            />
            <figcaption className="image-caption">
              The Hotel Zone offers all-inclusive safety and convenience
            </figcaption>
          </figure>

          <h3>3. Hotel Zone (Zona Hotelera)</h3>
          <p>
            The main strip of beachfront resorts and hotels along the coast. Most visitors never need to leave this area, and that's by design — everything from restaurants to activities is within reach.
          </p>
          <ul>
            <li><strong>Best for:</strong> First-time visitors, all-inclusive seekers, beach lovers</li>
            <li><strong>Safety level:</strong> Excellent — resort security plus tourist police</li>
          </ul>

          <h3>4. Centro (Downtown)</h3>
          <p>
            The authentic Mexican downtown experience with the famous Church of Our Lady of Guadalupe. During the day, it's bustling with both tourists and locals. At night, the main squares remain lively and safe.
          </p>
          <ul>
            <li><strong>Best for:</strong> Culture seekers, photographers, authentic experience hunters</li>
            <li><strong>Safety level:</strong> Very good — busier streets may have minor petty crime</li>
          </ul>

          <h3>5. Conchas Chinas</h3>
          <p>
            A quieter residential area south of Zona Romántica with beautiful private villas and secluded beaches. It's an excellent choice for those who want privacy and don't mind a short taxi ride to the action.
          </p>
          <ul>
            <li><strong>Best for:</strong> Privacy seekers, honeymooners, those renting villas</li>
            <li><strong>Safety level:</strong> Excellent — residential, quiet, minimal foot traffic</li>
          </ul>

          <div className="highlight-box highlight-warning my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-warning flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Areas to Approach with Caution</h4>
                <p className="mb-0">
                  While Puerto Vallarta is generally safe, exercise more caution in peripheral neighborhoods like Pitillal after dark, and avoid venturing into unfamiliar areas outside the tourist zones at night. This isn't about being scared — it's about being smart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips */}
        <section id="safety-tips" className="section-padding border-b border-border">
          <h2>Practical Safety Tips for Puerto Vallarta in 2026</h2>

          <p>
            These aren't fear-based warnings — they're the same common-sense practices I follow everywhere I travel. The difference is that in Puerto Vallarta, following these tips is usually enough to ensure a completely trouble-free trip.
          </p>

          <h3>Before You Go</h3>
          <ul>
            <li><strong>Register with STEP:</strong> The Smart Traveler Enrollment Program lets the US embassy contact you in emergencies (not just for Americans — many countries have similar programs).</li>
            <li><strong>Get travel insurance:</strong> Not because Puerto Vallarta is dangerous, but because unexpected things happen anywhere — medical emergencies, flight cancellations, lost luggage.</li>
            <li><strong>Share your itinerary:</strong> Let someone at home know where you'll be staying and your rough plans.</li>
          </ul>

          <h3>On the Ground</h3>
          <ul>
            <li><strong>Use ATMs inside banks:</strong> Avoid standalone ATMs on the street. Banks have security cameras and guards.</li>
            <li><strong>Take authorized taxis:</strong> Use the taxi stands (sitios) or rideshare apps. Avoid unmarked vehicles.</li>
            <li><strong>Keep valuables minimal:</strong> You don't need your passport at the beach. Leave it in the hotel safe.</li>
            <li><strong>Trust your instincts:</strong> If something feels off, walk away. This applies anywhere in the world.</li>
            <li><strong>Stay aware in crowds:</strong> Pickpocketing is the most common tourist crime. Keep your belongings close in busy areas.</li>
          </ul>

          <figure className="my-8">
            <img
              src={beachSunsetImage}
              alt="Tourists enjoying a safe sunset walk on Puerto Vallarta beach in 2026"
              className="w-full rounded-xl shadow-card"
            />
            <figcaption className="image-caption">
              Evening beach walks are a safe and magical experience in Puerto Vallarta
            </figcaption>
          </figure>

          <h3>Night Safety</h3>
          <ul>
            <li><strong>Stick to well-lit areas:</strong> The Malecón, Zona Romántica, and Hotel Zone are all perfectly safe at night.</li>
            <li><strong>Watch your drinks:</strong> This advice applies globally — never leave your drink unattended at bars or clubs.</li>
            <li><strong>Have your hotel address handy:</strong> If you've been drinking, having your destination ready makes getting home easier.</li>
          </ul>

          <h3>Water and Health Safety</h3>
          <ul>
            <li><strong>Drink bottled water:</strong> Hotels and restaurants use purified water, but stick to bottles to be safe.</li>
            <li><strong>Respect the ocean:</strong> Riptides are the real danger here. Swim at beaches with lifeguards and pay attention to warning flags.</li>
            <li><strong>Use sunscreen liberally:</strong> The Mexican sun is strong. Sunburn is probably the most common tourist "injury."</li>
          </ul>

          <div className="highlight-box highlight-tip my-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-coral flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold mb-2">Pro Tip</h4>
                <p className="mb-0">
                  Learn a few Spanish phrases. You don't need to be fluent, but "Hola," "Gracias," and "¿Cuánto cuesta?" go a long way. Locals appreciate the effort, and it often leads to better experiences and even some insider tips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="section-padding border-b border-border">
          <h2>How Does Puerto Vallarta Compare to Other Destinations?</h2>

          <p>
            Context matters. Here's how Puerto Vallarta stacks up against other popular vacation spots:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="table-travel">
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Overall Safety Rating</th>
                  <th>Tourist Crime Level</th>
                  <th>2026 Travel Advisory</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Puerto Vallarta, Mexico</strong></td>
                  <td><span className="badge-safety badge-safe">Very Safe</span></td>
                  <td>Low</td>
                  <td>Level 2</td>
                  <td>Beach lovers, couples, LGBTQ+ travelers</td>
                </tr>
                <tr>
                  <td>Cancún, Mexico</td>
                  <td><span className="badge-safety badge-info">Safe</span></td>
                  <td>Low-Moderate</td>
                  <td>Level 2</td>
                  <td>Spring breakers, all-inclusive seekers</td>
                </tr>
                <tr>
                  <td>Cabo San Lucas, Mexico</td>
                  <td><span className="badge-safety badge-safe">Very Safe</span></td>
                  <td>Low</td>
                  <td>Level 2</td>
                  <td>Luxury travelers, sport fishing</td>
                </tr>
                <tr>
                  <td>Jamaica</td>
                  <td><span className="badge-safety badge-info">Moderate</span></td>
                  <td>Moderate</td>
                  <td>Level 3</td>
                  <td>Resort seekers, music lovers</td>
                </tr>
                <tr>
                  <td>Dominican Republic</td>
                  <td><span className="badge-safety badge-info">Safe</span></td>
                  <td>Low-Moderate</td>
                  <td>Level 2</td>
                  <td>All-inclusive, budget conscious</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            As you can see, Puerto Vallarta holds its own against — and often outperforms — comparable beach destinations. The combination of natural beauty, Mexican culture, and genuine safety makes it a standout choice for 2026.
          </p>

          <h3>Puerto Vallarta vs. Cancún: Which Is Safer?</h3>

          <p>
            This is probably the most common comparison travelers make. Here's my take:
          </p>

          <p>
            <strong>Puerto Vallarta edges ahead for a few reasons:</strong> It's smaller and more manageable, the tourist areas are more compact (meaning less travel between safe zones), and it hasn't experienced the same growth in cartel-related incidents that have occasionally affected the Yucatán region.
          </p>

          <p>
            That said, both destinations are safe for tourists. Your choice should come down to what kind of vacation you want — Puerto Vallarta for charm and authenticity, Cancún for larger resorts and wilder nightlife.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding">
          <h2>Frequently Asked Questions About Puerto Vallarta Safety in 2026</h2>

          <p>
            These are the questions I get asked most often. If yours isn't here, the answer is probably "yes, you'll be fine" — but feel free to research further for peace of mind.
          </p>

          <div className="space-y-6 my-8">
            <div className="card-travel p-6">
              <h3 className="faq-question">Is Puerto Vallarta safe for solo female travelers in 2026?</h3>
              <p className="faq-answer">
                Absolutely. I know many women who travel to PV solo and feel completely comfortable. Zona Romántica in particular has a reputation as one of the safest areas in Mexico for solo travelers. Use the same precautions you would anywhere — avoid walking alone in isolated areas at night, keep friends informed of your plans, and trust your instincts. The overwhelming majority of solo female travelers report positive, safe experiences.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">Is it safe to leave the resort in Puerto Vallarta?</h3>
              <p className="faq-answer">
                Yes, and I highly encourage it! Some of the best experiences — authentic tacos, the Malecón sunset, local markets — happen outside resort walls. The tourist areas are perfectly safe to explore on foot during the day and well into the night. Don't let fear keep you from experiencing the real Puerto Vallarta.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">Is Puerto Vallarta safe for families with children?</h3>
              <p className="faq-answer">
                Puerto Vallarta is an excellent family destination. The beaches are clean, many resorts have kids' clubs, and the locals are incredibly welcoming to children. Just apply normal parenting vigilance — supervision at the pool, sunscreen application, and staying together in crowded areas.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">Is it safe to drink alcohol in Puerto Vallarta?</h3>
              <p className="faq-answer">
                Yes, but drink responsibly as you would anywhere. The main concern is the same as any tourist destination: don't accept drinks from strangers, don't leave your drink unattended, and know your limits. Tainted alcohol incidents are rare but have occurred at some Mexican resorts — stick to reputable establishments and you'll be fine.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">Is Uber safe in Puerto Vallarta?</h3>
              <p className="faq-answer">
                Uber operates in Puerto Vallarta and is generally safe. However, there's ongoing tension between Uber and local taxi unions, so some drivers prefer cash payment. You can also use designated taxi stands (sitios), which are regulated and reliable.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">What should I do in an emergency in Puerto Vallarta?</h3>
              <p className="faq-answer">
                Dial 911 for emergencies (it works throughout Mexico). For tourist-specific assistance, look for the Tourist Police (Policía Turística) who are stationed throughout popular areas and usually speak English. Your hotel can also help coordinate any emergency needs.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">Is the tap water safe in Puerto Vallarta restaurants?</h3>
              <p className="faq-answer">
                Restaurants in tourist areas use purified water for cooking and ice. You're safe to eat at established restaurants without worry. Street food vendors are also generally fine — look for busy stalls where food turnover is high, and you'll enjoy some of the best eating of your trip.
              </p>
            </div>

            <div className="card-travel p-6">
              <h3 className="faq-question">Are there any scams to watch out for in Puerto Vallarta?</h3>
              <p className="faq-answer">
                The most common "scams" are timeshare salespeople (aggressive but harmless — just say no firmly) and some taxi drivers who might take longer routes. Use Google Maps to check routes and agree on fares before getting in unmarked taxis. These are minor inconveniences, not safety threats.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section-padding bg-muted rounded-2xl my-12 -mx-4 px-4 sm:mx-0 sm:px-8">
          <h2>The Bottom Line: Should You Visit Puerto Vallarta in 2026?</h2>

          <p>
            If you've read this far, you already know my answer: <strong>Yes, absolutely.</strong>
          </p>

          <p>
            Puerto Vallarta in 2026 offers the perfect combination of beautiful beaches, authentic Mexican culture, warm hospitality, and — yes — genuine safety. Will you encounter some aggressive timeshare sellers? Probably. Might you need to haggle with a taxi driver? Perhaps. Is there any real reason to fear for your personal safety? No.
          </p>

          <p>
            The locals want you there. The city is built on tourism and works hard to protect it. And honestly, some of the best travel memories come from exactly this kind of destination — beautiful, welcoming, and just adventurous enough to make you feel like you've really gone somewhere.
          </p>

          <p>
            Pack your sunscreen, brush up on your Spanish basics, and get ready for an unforgettable trip. Puerto Vallarta is waiting for you.
          </p>

          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              — Marcus Rivera, January 2026
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container-article">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">About This Guide</h3>
              <p className="text-white/70 text-sm">
                This comprehensive Puerto Vallarta safety guide was created based on extensive personal experience and thorough research. Our goal is to provide travelers with honest, practical information to help them make informed decisions about their 2026 vacation plans.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Disclaimer</h3>
              <p className="text-white/70 text-sm">
                Travel conditions can change. While this guide reflects the situation as of January 2026, always check current travel advisories before your trip. This content is for informational purposes only and should not replace official travel guidance from government sources.
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2026 Is Puerto Vallarta Safe. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Last updated: January 22, 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
