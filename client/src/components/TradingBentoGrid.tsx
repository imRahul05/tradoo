import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
    TrendingUp,
    DollarSign,
    BarChart2,
    Globe,
    Clock,
} from "lucide-react";

const tradingItems: BentoItem[] = [
    {
        title: "Portfolio Overview",
        meta: "$12,450",
        description: "Track your current holdings, gains, and losses in real-time",
        icon: <DollarSign className="w-4 h-4 text-green-500" />,
        status: "Updated",
        tags: ["Investments", "Holdings"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Market Trends",
        meta: "NASDAQ ↑ 1.2%",
        description: "Live market trends and top movers across global exchanges",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Stocks", "Indices"],
    },
    {
        title: "Watchlist",
        meta: "15 items",
        description: "Monitor your favorite stocks, crypto, and commodities",
        icon: <BarChart2 className="w-4 h-4 text-purple-500" />,
        tags: ["Alerts", "Favorites"],
        colSpan: 2,
    },
    {
        title: "Global Financial News",
        meta: "Updated 2 min ago",
        description: "Stay informed with latest economic and corporate news",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Live",
        tags: ["News", "Updates"],
    },
    {
        title: "Order History",
        meta: "23 trades",
        description: "Review past transactions and order execution details",
        icon: <Clock className="w-4 h-4 text-orange-500" />,
        tags: ["Trading", "History"],
    },
];

export function TradingBentoGrid() {
    return <BentoGrid items={tradingItems} />;
}
