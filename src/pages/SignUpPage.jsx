import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {

  return  <>
            <div className="h-screen flex justify-center items-center">
              <section className="w-full max-w-[1440px] flex justify-center items-center">
                <SignUp afterSignUpUrl="/profile" />
              </section>
            </div>
        </>
}
