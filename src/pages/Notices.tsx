import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Bell, TrendingUp, AlertCircle, Info, ExternalLink } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "PM-KISAN Scheme - New Registration Open",
    date: "March 15, 2025",
    type: "Scheme",
    priority: "high",
    description: "The government has opened new registration for PM-KISAN scheme. Eligible farmers can receive ₹6000 annually in three equal installments.",
    link: "#"
  },
  {
    id: 2,
    title: "Weather Alert: Heavy Rainfall Expected",
    date: "March 14, 2025",
    type: "Alert",
    priority: "high",
    description: "IMD has issued a heavy rainfall warning for Madhya Pradesh. Farmers are advised to take necessary precautions for their crops.",
    link: "#"
  },
  {
    id: 3,
    title: "Crop Insurance Deadline Extension",
    date: "March 12, 2025",
    type: "Scheme",
    priority: "medium",
    description: "The deadline for Pradhan Mantri Fasal Bima Yojana has been extended to March 31, 2025. Insure your crops now.",
    link: "#"
  },
  {
    id: 4,
    title: "Market Price Update - Wheat",
    date: "March 10, 2025",
    type: "Market",
    priority: "medium",
    description: "Wheat prices have increased by 8% in major mandis. Current MSP stands at ₹2125 per quintal.",
    link: "#"
  },
  {
    id: 5,
    title: "Soil Health Card Distribution",
    date: "March 8, 2025",
    type: "Scheme",
    priority: "low",
    description: "Free soil health cards are being distributed at all Krishi Vigyan Kendras. Get your soil tested for better crop planning.",
    link: "#"
  },
  {
    id: 6,
    title: "New Subsidy for Drip Irrigation",
    date: "March 5, 2025",
    type: "Scheme",
    priority: "medium",
    description: "Government announces 60% subsidy on drip irrigation systems. Apply now through the MP Kissan portal.",
    link: "#"
  }
];

const Notices = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Alert":
        return <AlertCircle className="h-4 w-4" />;
      case "Market":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded bg-primary">
            <Bell className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">सूचनाएं और योजनाएं</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {notices.map((notice) => (
            <Card
              key={notice.id}
              className="p-5 md:p-6 hover:shadow-md transition-shadow border-l-4 border-l-primary"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded bg-muted">
                      {getTypeIcon(notice.type)}
                    </div>
                    <Badge className={`${getPriorityColor(notice.priority)} text-xs`}>
                      {notice.priority}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">{notice.type}</Badge>
                </div>
                
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">{notice.title}</h3>
                  <span className="text-xs md:text-sm text-muted-foreground">{notice.date}</span>
                </div>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {notice.description}
                </p>
                
                <Button variant="link" className="p-0 h-auto self-start text-sm">
                  विस्तार से पढ़ें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {notices.length} नवीनतम सूचनाएं दिख रही हैं
          </p>
          <Button variant="outline">और देखें</Button>
        </div>
      </div>
    </div>
  );
};

export default Notices;
