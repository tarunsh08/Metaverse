import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {/* <UserButton /> */}
        <Navbar />
        <Hero/>
      </SignedIn>
    </header>
  )
}