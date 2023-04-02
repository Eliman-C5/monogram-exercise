import { Header } from '@/components/sections/header/Header'
import { Markup } from '@/components/sections/markup/Markup'
import { Javascript } from '@/components/sections/javascript/Javascript'
import { Tools } from '@/components/sections/tools/Tools'
import { Scores } from '@/components/sections/scores/Scores'


export default function Home() {
  return (
    <>
      <Header />
      <Javascript />
      <Tools />
      <Markup />
      <Scores />
    </>
  )
}
