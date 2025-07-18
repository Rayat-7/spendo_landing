"use client"
import { Check } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useRef } from "react"

// Example Data
const heading = {
  tag: "Popular Features",
  title: "Why Choose Our Platform?",
  subtitle:
    "Our platform is built to make your workflow faster, smoother, and more reliable. Explore what makes us stand out.",
}

const features = [
  {
    title: "Blazing Fast Performance",
    description:
      "Optimized from the ground up for performance, our infrastructure ensures your application runs without hiccups.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Dashboard Screenshot",
    characteristics: [
      { title: "99.99% Uptime Guarantee" },
      { title: "SSD-Powered Hosting" },
      { title: "Edge Network Delivery" },
    ],
  },
  {
    title: "Advanced Security Features",
    description:
      "Security is not an afterthought. Enjoy peace of mind with our industry-standard protection mechanisms.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Security Shield",
    characteristics: [
      { title: "Built-in Firewall & DDoS" },
      { title: "Automatic Backups" },
      { title: "Two-Factor Authentication" },
    ],
  },
  {
    title: "Flexible Integrations",
    description:
      "Easily connect your tools and services. We support major APIs and popular third-party integrations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Integrations Diagram",
    characteristics: [
      { title: "Webhook Support" },
      { title: "Zapier & Make Integrations" },
      { title: "REST & GraphQL APIs" },
    ],
  },
]

export function FeaturesList() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLDivElement
            element.style.opacity = '1'
            element.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    refs.current.forEach(ref => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full mb-4">
            {heading.tag}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {heading.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {heading.subtitle}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-10">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              ref={el => (refs.current[index] = el as HTMLDivElement | null)}
              className={`group flex flex-col md:flex-row items-center rounded-2xl border border-border bg-card p-2 transition-all duration-700 ease-out hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `}
              style={{ 
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
              }}
            >
              {/* Image Section */}
              <figure className="md:w-[360px] lg:w-[480px] xl:w-[560px] p-2">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="rounded-xl object-cover aspect-video w-full border border-border shadow-md transition-all duration-300 group-hover:shadow-lg"
                />
              </figure>

              {/* Content Section */}
              <div className="flex flex-col gap-6 md:flex-1 p-6 md:p-10">
                <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>

                <ul className="flex flex-col gap-3 md:text-lg">
                  {feature.characteristics.map(char => (
                    <li key={char.title} className="flex items-center gap-4 text-muted-foreground">
                      <span className="flex size-6 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                        <Check className="h-4 w-4 text-violet-600 dark:text-violet-300" />
                      </span>
                      {char.title}
                    </li>
                  ))}
                </ul>

                {/* Avatar Row */}
                <div className="space-y-1 pt-4">
                  <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                    <div className="flex -space-x-2 overflow-hidden mr-2">
                      <img
                        alt="Avatar 1"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&auto=format&fit=crop&q=80"
                      />
                      <img
                        alt="Avatar 2"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      />
                      <img
                        alt="Avatar 3"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      />
                    </div>
                    1,254 happy customers
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}




// import { Check } from "lucide-react"
// import Image from "next/image"

// // Interfaces
// interface FeatureCharacteristic {
//   title: string
// }

// interface FeatureCard {
//   title: string
//   description: string
//   image: string
//   imageAlt: string
//   characteristics: FeatureCharacteristic[]
// }

// interface Heading {
//   subtitle: string
//   tag: string
//   title: string
// }

// // Example data
// const heading: Heading = {
//   tag: "Popular Features",
//   title: "Why Choose Our Platform?",
//   subtitle:
//     "Our platform is built to make your workflow faster, smoother, and more reliable. Explore what makes us stand out.",
// }

// const features: FeatureCard[] = [
//   {
//     title: "Blazing Fast Performance",
//     description:
//       "Optimized from the ground up for performance, our infrastructure ensures your application runs without hiccups.",
//     image: "/images/feature1.jpg",
//     imageAlt: "Dashboard Screenshot",
//     characteristics: [
//       { title: "99.99% Uptime Guarantee" },
//       { title: "SSD-Powered Hosting" },
//       { title: "Edge Network Delivery" },
//     ],
//   },
//   {
//     title: "Advanced Security Features",
//     description:
//       "Security is not an afterthought. Enjoy peace of mind with our industry-standard protection mechanisms.",
//     image: "/images/feature2.jpg",
//     imageAlt: "Security Shield",
//     characteristics: [
//       { title: "Built-in Firewall & DDoS" },
//       { title: "Automatic Backups" },
//       { title: "Two-Factor Authentication" },
//     ],
//   },
//   {
//     title: "Flexible Integrations",
//     description:
//       "Easily connect your tools and services. We support major APIs and popular third-party integrations.",
//     image: "/images/feature3.jpg",
//     imageAlt: "Integrations Diagram",
//     characteristics: [
//       { title: "Webhook Support" },
//       { title: "Zapier & Make Integrations" },
//       { title: "REST & GraphQL APIs" },
//     ],
//   },
// ]

// // Component
// export function FeaturesList() {
//   return (
//     <section className="w-full py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
//             {heading.tag}
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             {heading.title}
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             {heading.subtitle}
//           </p>
//         </div>

//         {/* Features */}
//         <div className="flex flex-col gap-8">
//           {features.map((feature, index) => (
//             <article
//               key={feature.title}
//               className={`group flex min-h-96 w-full flex-col rounded-xl border border-transparent bg-card p-1 shadow-sm transition-all hover:border-primary/40 hover:shadow-md md:flex-row ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               } xl:gap-8`}
//             >
//               {/* Image */}
//               <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
//                 <img
//                   src={feature.image}
//                   alt={feature.imageAlt}
//                   className="block aspect-video h-[200px] w-full rounded-lg border object-cover md:h-full"
//                 />
//               </figure>

//               {/* Content */}
//               <div className="flex flex-col gap-8 p-6 md:flex-1 md:p-10">
//                 <div className="flex flex-col items-start gap-4">
//                   <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
//                     {feature.title}
//                   </h3>
//                   <p className="text-muted-foreground md:text-lg leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>

//                 {/* Characteristics */}
//                 <ul className="flex flex-col items-start gap-3 md:text-lg">
//                   {feature.characteristics.map((characteristic) => (
//                     <li
//                       key={characteristic.title}
//                       className="flex items-center gap-4 text-muted-foreground"
//                     >
//                       <span className="flex size-6 items-center justify-center rounded-full bg-primary/10">
//                         <Check className="h-4 w-4 text-primary" />
//                       </span>
//                       {characteristic.title}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Avatar Section */}
//                 <div className="space-y-1 pt-4">
//                   <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
//                     <div className="flex -space-x-2 overflow-hidden mr-2">
//                       <Image
//                         alt="Avatar 1"
//                         className="inline-block h-6 w-6 rounded-full ring-2 ring-background"
//                         height={24}
//                         src="/avatars/avatar-1.jpg"
//                         style={{ objectFit: "cover" }}
//                         width={24}
//                       />
//                       <Image
//                         alt="Avatar 2"
//                         className="inline-block h-6 w-6 rounded-full ring-2 ring-background"
//                         height={24}
//                         src="/avatars/avatar-2.jpg"
//                         style={{ objectFit: "cover" }}
//                         width={24}
//                       />
//                       <Image
//                         alt="Avatar 3"
//                         className="inline-block h-6 w-6 rounded-full ring-2 ring-background"
//                         height={24}
//                         src="/avatars/avatar-3.jpg"
//                         style={{ objectFit: "cover" }}
//                         width={24}
//                       />
//                     </div>
//                     1,254 happy customers
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
