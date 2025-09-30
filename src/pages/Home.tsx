import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Sprout, 
  TrendingUp, 
  Newspaper, 
  ShoppingCart, 
  BookOpen,
  CloudRain,
  LineChart,
  Landmark,
  FileText
} from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import { Navbar } from "@/components/Navbar";

const services = [
  {
    title: "Crop Advisory",
    description: "Get expert advice on crop selection and farming practices",
    icon: Sprout,
    to: "/service/crop-advisory",
  },
  {
    title: "Market Prices",
    description: "Real-time market rates for your agricultural produce",
    icon: TrendingUp,
    to: "/service/market-prices",
  },
  {
    title: "Weather Forecast",
    description: "5-day weather predictions for better planning",
    icon: CloudRain,
    to: "/service/weather",
  },
  {
    title: "Government Schemes",
    description: "Access to latest agricultural schemes and subsidies",
    icon: Landmark,
    to: "/service/schemes",
  },
  {
    title: "Marketplace",
    description: "Buy and sell agricultural products directly",
    icon: ShoppingCart,
    to: "/service/marketplace",
  },
  {
    title: "Farming Tips",
    description: "Learn modern farming techniques and best practices",
    icon: BookOpen,
    to: "/service/tips",
  },
  {
    title: "Yield Analytics",
    description: "Track and analyze your farm's productivity",
    icon: LineChart,
    to: "/service/analytics",
  },
  {
    title: "News & Updates",
    description: "Latest agricultural news and policy updates",
    icon: Newspaper,
    to: "/service/news",
  },
  {
    title: "Certifications",
    description: "Apply for agricultural certifications and licenses",
    icon: FileText,
    to: "/service/certifications",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Welcome to MP Kissan
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-slide-up">
            Empowering farmers with digital tools, government schemes, and market intelligence
          </p>
          <Button variant="hero" size="lg" className="animate-scale-in">
            Get Started
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-card rounded-lg shadow-lg p-6 animate-slide-up">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="px-8">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div key={service.title} style={{ animationDelay: `${index * 50}ms` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        {filteredServices.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No services found matching your search.
          </p>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Farmers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Government Schemes</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
