import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardItem() {
  return (
    <Card className="w-full max-w-sm">
      <img
        src="/placeholder.svg"
        alt="Product Image"
        width={400}
        height={300}
        className="rounded-t-lg object-cover w-full aspect-[4/3]"
      />
      <CardContent className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Acme Gear Pro</h3>
          <span className="text-2xl font-bold">$99</span>
        </div>
        <p className="text-muted-foreground">High-quality gaming gear for the ultimate experience.</p>
      </CardContent>
      <CardFooter className="flex gap-2 p-4">
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Remove
        </Button>
      </CardFooter>
    </Card>
  )
}