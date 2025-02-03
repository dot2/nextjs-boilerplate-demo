import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-24 bg-pink-100">
      <h1 className="text-4xl font-bold">I'm alive!</h1>
      <div className="flex gap-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </div>
  );
}
