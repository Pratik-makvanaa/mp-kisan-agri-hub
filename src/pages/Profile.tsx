import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { User, MapPin, Phone, Mail, Briefcase, CheckCircle, Clock } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">My Profile</h1>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="p-6 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Ramesh Kumar</h2>
                <p className="text-muted-foreground mb-3">Farmer ID: MK2025001</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary text-primary-foreground">Verified Farmer</Badge>
                  <Badge variant="outline">Active Since 2024</Badge>
                </div>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </Card>

          {/* KYC Status */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              KYC Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Aadhaar Verification</span>
                <Badge className="bg-primary text-primary-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Land Records</span>
                <Badge className="bg-primary text-primary-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span>Bank Account</span>
                <Badge variant="secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  Pending
                </Badge>
              </div>
            </div>
          </Card>

          {/* Personal Information */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input id="name" defaultValue="Ramesh Kumar" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input id="phone" defaultValue="+91 98765 43210" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input id="email" type="email" defaultValue="ramesh.kumar@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Village/Location
                </Label>
                <Input id="location" defaultValue="Khargone, Madhya Pradesh" />
              </div>
            </div>
          </Card>

          {/* Farm Information */}
          <Card className="p-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Farm Information
            </h3>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="farmSize">Farm Size (in acres)</Label>
                <Input id="farmSize" defaultValue="5.5" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="soilType">Soil Type</Label>
                <Input id="soilType" defaultValue="Black Cotton Soil" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="crops">Primary Crops</Label>
                <Input id="crops" defaultValue="Wheat, Soybean, Cotton" />
              </div>
            </div>
          </Card>

          {/* Suggestions */}
          <Card className="p-6 bg-gradient-primary text-primary-foreground animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold mb-3">Personalized Suggestions</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Complete your bank account verification to receive direct subsidy payments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>New PM-KISAN scheme available - Check eligibility now</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Weather alert: Heavy rainfall expected next week</span>
              </li>
            </ul>
          </Card>

          <div className="flex gap-4">
            <Button className="flex-1" size="lg">Save Changes</Button>
            <Button variant="outline" className="flex-1" size="lg">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
