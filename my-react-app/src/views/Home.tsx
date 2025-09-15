import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { increment } from '@/features/counter/counterSlice'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  const count = useAppSelector((s: any) => s.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Vite + React + Tailwind + shadcn</CardTitle>
          <CardDescription>Starter integrated with Router, Redux, Axios.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Input placeholder="Type something..." />
            <Button onClick={() => dispatch(increment())}>Count: {count}</Button>
          </div>
          <div>
            <Link className="text-primary underline" to="/about">Go to About</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
