import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export const ServiceCard = ({ title, description, icon: Icon, to }: ServiceCardProps) => {
  return (
    <Link to={to}>
      <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary animate-fade-in">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-full bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
