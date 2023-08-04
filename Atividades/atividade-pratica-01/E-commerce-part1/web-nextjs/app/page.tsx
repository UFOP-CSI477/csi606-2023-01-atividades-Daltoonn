//seria tipo um html 

import Image from 'next/image'
import Link from 'next/link'
//seria o link para entrar na navegacao

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1>Sistema de e-commerce</h1>

      <Link href="/estados">Estados</Link>

    </main>
  )
}
