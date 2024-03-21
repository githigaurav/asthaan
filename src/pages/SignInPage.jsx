import { SignIn } from "@clerk/clerk-react"
 
export default function SignInPage() {
  
  return  <>
          <div className="h-screen flex justify-center items-center">
            <section className="w-full max-w-[1440px] flex justify-center items-center">
            <SignIn afterSignInUrl="/profile"/>
            </section>
          </div>
          </>
}