import { cn } from "@/lib/utils"
import Link from "next/link"
import avatar1 from "@/public/assets/avatar-1.png"
import avatar2 from "@/public/assets/avatar-2.jpg"
import avatar3 from "@/public/assets/avatar-3.jpg"
import avatar4 from "@/public/assets/avatar-4.jpg" 
import VideoSection from "./video"

// Local Button Component
type TrackedButtonLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  intent?: "primary" | "secondary"
  [key: string]: any
}
function AnimatedText({ text }: { text: string }) {
  return (
    <span className="inline-flex overflow-hidden whitespace-nowrap">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="opacity-0 inline-block fade-in-up"
          style={{ animationDelay: `${i * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function TrackedButtonLink({
  href,
  children,
  className,
  intent = "primary",
  ...props
}: TrackedButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-transparent border border-border hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <Link
      href={href}
      className={cn(baseClasses, variants[intent], className)}
      {...props}
    >
      {children}
    </Link>
  )
}

// Main Hero Component
export function Hero() {
  const avatarImages = [avatar1, avatar2, avatar3, avatar4]

  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10"
    style={{
    background: "radial-gradient(ellipse at bottom, rgba(var(--accent-rgb-400), 0.7) 0%, rgba(var(--accent-rgb-400), 0.2) 10%, transparent 80%)",
    zIndex: 1
  }}
    >
      {/* Grid and background blur decoration */}
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border dark:border-border">
        <div />
        <div className="border-x border-border dark:border-border" />
        <div />
      </div>
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-hero-accent blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-hero-surface opacity-50 blur-[100px] dark:bg-muted md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-hero-surface opacity-50 blur-[100px] dark:bg-muted md:block" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col divide-y divide-border pt-[35px] dark:divide-border">
        {/* Avatars banner (your style) */}
        <div className="flex flex-col items-center justify-end">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground border border-border">
            <div className="flex -space-x-2 overflow-hidden mr-2">
              {avatarImages.map((src, index) => (
                <img
                  key={index}
                  src={src.src}
                  alt={`User ${index + 1}`}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-background object-cover"
                  width={24}
                  height={24}
                  loading="lazy"
                />
              ))}
            </div>
            10,000+ satisfied customers
          </div>
        </div>

        {/* Title and Subtitle */}
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-foreground md:tracking-[-2.16px]">
  <AnimatedText text="Manage Your Expenses Like" /> 
  <AnimatedText text=" Never Before" />
</h1>
            {/* <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-foreground md:tracking-[-2.16px]">
              Manage Your Expenses Like Never Before
            </h1> */}
            <style>{`
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .fade-in-up {
    animation-name: fade-in-up;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
`}</style>
            <h2 className="text-md max-w-2xl text-pretty text-center text-muted-foreground md:text-lg bg-gradient-to-l from-slate-400 via-white to-slate-400 bg-clip-text text-transparent">
              Take control of your finances with our intuitive expense tracking platform. Simple, secure, and powerful.
            </h2>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
           <TrackedButtonLink
  href="/auth/register"
  intent="primary"
  className="
    !h-14 flex w-full flex-col items-center justify-center rounded-none !text-base
    bg-white text-black border border-border
    dark:bg-violet-700 dark:text-white dark:border-border
    transition-colors duration-150 
  "
>
  Get Started Free
</TrackedButtonLink>
            <TrackedButtonLink
              href="/features"
              intent="secondary"
              className="!h-14  flex w-full flex-col items-center justify-center rounded-none !text-base max-w-sm:!border-x-0 !border-x !border-y-0 border-border !bg-transparent backdrop-blur-xl transition-colors duration-150 hover:!bg-accent"
            >
              Learn More
            </TrackedButtonLink>
          </div>
        </div>
      </div>
      <VideoSection videoId={"5zd7m3Rh5B0"}/>
    </section>
  )
}



















// import { Button } from "@/components/ui/button"
// import clsx from "clsx"
// import Image from "next/image"

// export function HeroSection() {
//   return (
//     <section className="relative h-[80vh] w-full pl-10 py-8 md:py-12 lg:py-14 xl:py-22 "
//   style={{
//     background: "radial-gradient(ellipse at bottom, rgba(var(--accent-rgb-400), 0.7) 0%, rgba(var(--accent-rgb-400), 0.2) 10%, transparent 80%)",
//     zIndex: 1
//   }}>
//       {/* Background Grid */}
//        <div className="absolute  hidden lg:grid left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[--border] dark:border-[--dark-border]">
//         <div />
//         <div className="border-x border-[--border] dark:border-[--dark-border]" />
//         <div />
//       </div>
      

//       {/* Content */}
//       <div className="relative z-10 w-full flex justify-center items-start  container  ">
//         <div className="flex-col items-center  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-600 via-gray-900 to-blackspace-y-4 text-center">
//           <div className="space-y-1 ">
//             <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
//               <div className="flex -space-x-2 overflow-hidden mr-2">
//                 <Image
//                   alt="Avatar"
//                   className="inline-block h-6 w-6 rounded-full ring-2 ring-background"
//                   height={24}
//                   src="/placeholder.svg"
//                   style={{ objectFit: "cover" }}
//                   width={24}
//                 />
//                 <Image
//                   alt="Avatar"
//                   className="inline-block h-6 w-6 rounded-full ring-2 ring-background"
//                   height={24}
//                   src="/placeholder.svg"
//                   style={{ objectFit: "cover" }}
//                   width={24}
//                 />
//                 <Image
//                   alt="Avatar"
//                   className="inline-block h-6 w-6 rounded-full ring-2 ring-background"
//                   height={24}
//                   src="/placeholder.svg"
//                   style={{ objectFit: "cover" }}
//                   width={24}
//                 />
//               </div>
//               1,254 happy customers
//             </div>
//             <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
//                 <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-[--text-primary] dark:text-[--dark-text-primary] md:tracking-[-2.16px]">
//               Streamlined Financial Insights for Smarter Decisions
//                 </h1>
//                 <h2 className="text-md hidden lg:block max-w-2xl text-pretty text-center text-gray-600 dark:text-[--dark-text-gray-300] md:text-lg">
//               Spendo is your personal AI financial advisor, designed to help you manage your finances, track expenses,
//               and make informed investment decisions.
//                 </h2>
//             </div>

//             {/* <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-[--text-primary] dark:text-[--dark-text-primary] md:tracking-[-2.16px]">
//               Streamlined Financial Insights for Smarter Decisions
//             </h1>
//             <h2 className="text-md max-w-2xl ml-44 text-pretty text-center text-gray-400 md:text-lg">
//               Spendo is your personal AI financial advisor, designed to help you manage your finances, track expenses,
//               and make informed investment decisions. 
//             </h2> */}
//           </div>
//           <div className="flex flex-col  gap-4 mt-6 w-full max-w-[370px] mx-auto">
//             <Button
//               variant="outline"
//               className={clsx(
//                 "!h-14 flex-col items-center justify-center rounded-none !text-base max-w-sm:!border-x-0 w-full border-x border-y-0 border-[--border] !bg-transparent backdrop-blur-xl transition-colors duration-150 hover:!bg-black/5 dark:border-[--dark-border] dark:hover:!bg-white/5"
//               )}
//             >
//               Request Demo
//             </Button>
//             <Button
//               className={clsx(
//                 "!h-14 flex w-full flex-col items-center justify-center bg-violet-500 rounded-none !text-base"
//               )}
//             >
//               Get Started for Free
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
