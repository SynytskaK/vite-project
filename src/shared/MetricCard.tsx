// components/MetricCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface MetricCardProps {
    title: string
    value: string | number
    icon?: ReactNode
    description?: string
    additionalBlock?: ReactNode
}

export const MetricCard = ({ title, value, icon, description, additionalBlock }: MetricCardProps) => {
    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col items-start gap-2 pb-2">
                {icon}
                <CardTitle className="text-base font-medium text-gray-500">{title}</CardTitle>
            </CardHeader>
            <CardContent className="gap-2 flex flex-col items-start">
                <div className="text-2xl font-semibold">{value}</div>
                <div className="text-sm text-gray-500">{description}</div>
                {additionalBlock}
            </CardContent>
        </Card>
    )
}
