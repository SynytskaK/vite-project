import type { ChartConfig } from "@/components/ui/chart";
import { MetricCard } from "@/shared/MetricCard";
import { ChartArea, Coins, ShoppingCart } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart"
import { Bar, BarChart } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#C4D8FB",
    },
    mobile: {
        label: "Mobile",
        color: "#E3EAF6",
    },
} satisfies ChartConfig

export const Overview = () => {
    return (
        <div className="flex-1 gap-6 flex-col flex">
            <h1 className="text-2xl font-semibold">Overview</h1>
            <div className="gap-4 p-4 flex-col flex">
                <div className="gap-4 flex-row flex">
                    <MetricCard value={`1000 units`} title='Sales' icon={<ShoppingCart />} description='Since last month' />
                    <MetricCard value={`$10MM usd`} title='Revenue' icon={<Coins />} />
                </div>
                <MetricCard value='$30MM usd' title='Total Sales' icon={<ChartArea />} description='Since black friday 2025' additionalBlock={<AdditionalComponent />} />
            </div>
        </div>
    );
}


const AdditionalComponent = () => {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <ChartTooltip content={<ChartTooltipContent />} />

                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}