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
      <Card className="p-5 md:p-6 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/50 h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded bg-primary/10 flex-shrink-0">
            <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base md:text-lg mb-1.5 text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
