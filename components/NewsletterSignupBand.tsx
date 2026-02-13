import styles from "@/components/NewsletterSignupBand.module.css";

export default function NewsletterSignupBand() {
  return (
    <section
      aria-labelledby="newsletter-title"
      className="w-full bg-[radial-gradient(78%_110%_at_88%_50%,rgba(92,58,30,0.24)_0%,rgba(58,37,20,0.12)_40%,rgba(26,18,12,0)_72%),linear-gradient(104deg,#062C26_0%,#0C3F34_48%,#062C26_100%)] text-[#F5F7F6]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <h2 id="newsletter-title" className={`${styles.heading} font-black uppercase`}>
              <span className="block">Newsletter</span>
              <span className="block">Sign-Up</span>
            </h2>
            <div className={`${styles.brush} mt-2`} aria-hidden="true" />
            <p className="mt-10 max-w-2xl text-3xl font-extrabold uppercase leading-[1.1]">
              Stay up to date with our latest stories, resources, and other news from DeCarvalho.
            </p>
          </div>

          <form action="#" className="grid gap-4" method="post" aria-label="Newsletter sign-up form">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="newsletter-first-name" className="sr-only">
                  First name
                </label>
                <input
                  id="newsletter-first-name"
                  name="firstName"
                  type="text"
                  placeholder="FIRST NAME"
                  className="h-12 w-full border border-white/25 bg-white/10 px-4 text-sm font-bold uppercase tracking-wide text-[#F5F7F6] placeholder:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
                />
              </div>
              <div>
                <label htmlFor="newsletter-last-name" className="sr-only">
                  Last name
                </label>
                <input
                  id="newsletter-last-name"
                  name="lastName"
                  type="text"
                  placeholder="LAST NAME"
                  className="h-12 w-full border border-white/25 bg-white/10 px-4 text-sm font-bold uppercase tracking-wide text-[#F5F7F6] placeholder:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="EMAIL"
                  className="h-12 w-full border border-white/25 bg-white/10 px-4 text-sm font-bold uppercase tracking-wide text-[#F5F7F6] placeholder:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
                />
              </div>
              <button
                type="submit"
                className="h-12 min-w-[132px] bg-[#F5F7F6] px-6 text-sm font-extrabold uppercase tracking-wide text-[#062C26] transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
