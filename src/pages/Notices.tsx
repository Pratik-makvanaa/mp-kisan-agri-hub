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
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <div className="p-3 rounded-full bg-gradient-primary">
            <Bell className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Notice Board</h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {notices.map((notice, index) => (
            <Card
              key={notice.id}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-muted">
                      {getTypeIcon(notice.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{notice.title}</h3>
                        <Badge className={getPriorityColor(notice.priority)}>
                          {notice.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{notice.type}</Badge>
                        <span className="text-sm text-muted-foreground">{notice.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{notice.description}</p>
                      <Button variant="link" className="p-0 h-auto">
                        Read More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Showing {notices.length} latest announcements and schemes
          </p>
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  );
};

export default Notices;
