import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Info } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const serviceDetails: Record<string, {
  title: string;
  description: string;
  features: string[];
  requirements: string[];
  howToUse: string[];
}> = {
  "crop-advisory": {
    title: "Crop Advisory Service",
    description: "Get personalized crop recommendations based on your soil type, climate, and market demand. Our experts analyze your farm conditions to suggest the best crops for maximum yield.",
    features: [
      "Soil analysis and recommendations",
      "Climate-based crop suggestions",
      "Seasonal planting calendar",
      "Expert consultation available",
      "Pest and disease management tips"
    ],
    requirements: [
      "Farm location details",
      "Soil test report (if available)",
      "Previous crop history",
      "Farm size information"
    ],
    howToUse: [
      "Fill in your farm details",
      "Upload soil test report",
      "Select your preferred crop types",
      "Get AI-powered recommendations",
      "Consult with experts if needed"
    ]
  },
  "market-prices": {
    title: "Market Prices",
    description: "Access real-time market rates for agricultural produce across different mandis in Madhya Pradesh. Make informed selling decisions with historical price trends.",
    features: [
      "Real-time price updates",
      "Multiple mandi comparisons",
      "Historical price trends",
      "Price alerts and notifications",
      "Demand-supply analysis"
    ],
    requirements: [
      "Select your crop type",
      "Choose nearby mandis",
      "Set price alerts"
    ],
    howToUse: [
      "Select the crop you want to check",
      "View prices across different mandis",
      "Set up price alerts",
      "Track historical trends",
      "Plan your selling strategy"
    ]
  },
  "weather": {
    title: "Weather Forecast",
    description: "Get accurate 5-day weather predictions for your farm location. Plan your farming activities with detailed information on rainfall, temperature, and wind patterns.",
    features: [
      "5-day detailed forecast",
      "Hourly weather updates",
      "Rainfall predictions",
      "Temperature and humidity data",
      "Severe weather alerts"
    ],
    requirements: [
      "Farm location (auto-detected or manual)",
      "Enable location permissions"
    ],
    howToUse: [
      "Allow location access",
      "View current weather",
      "Check 5-day forecast",
      "Set up weather alerts",
      "Plan farming activities accordingly"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceDetails[serviceId || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-muted-foreground">{service.description}</p>
          </div>

          <div className="grid gap-6">
            {/* Features */}
            <Card className="p-6 animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Requirements */}
            <Card className="p-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-secondary" />
                <h2 className="text-2xl font-semibold">Requirements</h2>
              </div>
              <ul className="space-y-3">
                {service.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* How to Use */}
            <Card className="p-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
              <ol className="space-y-3">
                {service.howToUse.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>

            {/* Action Button */}
            <div className="text-center mt-8">
              <Button variant="hero" size="lg" className="px-12">
                Start Using This Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
