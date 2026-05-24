import HomeContent from "@/components/Home/HomeContent"

export const metadata = {
  title: 'CSS Play',
  description: 'CSS Play is a free, interactive platform where you learn CSS by solving visual challenges. No setup. No account. Just play.',
  openGraph: {
    title: 'CSS Play',
    description: 'Learn CSS by solving visual challenges. No setup. No account. Just play.',
    type: 'website',
  },
}

export default function HomePage() {
  return <HomeContent/>
}
