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
      <section className="relative bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              MP Kissan Portal
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              किसान मित्र - आपकी खेती, आपकी सहायता
            </p>
            <p className="text-base md:text-lg mb-8 opacity-80">
              सरकारी योजनाएं, बाजार भाव, मौसम की जानकारी और कृषि सलाह - सब एक जगह
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="सेवा खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">सेवाएं</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        {filteredServices.length === 0 && (
          <p className="text-center text-muted-foreground mt-8 text-lg">
            कोई सेवा नहीं मिली।
          </p>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-card border-y py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground text-base md:text-lg">पंजीकृत किसान</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-base md:text-lg">सरकारी योजनाएं</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-base md:text-lg">सहायता उपलब्ध</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
