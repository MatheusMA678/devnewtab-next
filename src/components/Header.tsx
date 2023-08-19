import { Session } from "next-auth"
import Image from "next/image"

type HeaderProps = {
  session: Session | null
}

export async function Header({ session }: HeaderProps) {
  return (
    <header
      className="h-20 flex items-center justify-between max-w-5xl mx-auto"
    >
      <h1 className="text-2xl font-bold font-hand leading-none">Keep</h1>
      {session && (
        <Image
          src={session.user?.image!}
          alt={`Imagem de ${session.user?.name}`}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full"
        />
      )}
    </header>
  )
}
