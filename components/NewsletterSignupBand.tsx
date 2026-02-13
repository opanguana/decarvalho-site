import styles from "@/components/NewsletterSignupBand.module.css";

export default function NewsletterSignupBand() {
  return (
    <section aria-labelledby="newsletter-title" className="w-full bg-[#8EC5E3] text-[#0E4E86]">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:px-8 lg:py-16">
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
                  className="h-12 w-full border border-[#7AA8C3] bg-[#E6E6E6] px-4 text-sm font-bold uppercase tracking-wide text-[#0E4E86] placeholder:text-[#0E4E86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4E86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#8EC5E3]"
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
                  className="h-12 w-full border border-[#7AA8C3] bg-[#E6E6E6] px-4 text-sm font-bold uppercase tracking-wide text-[#0E4E86] placeholder:text-[#0E4E86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4E86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#8EC5E3]"
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
                  className="h-12 w-full border border-[#7AA8C3] bg-[#E6E6E6] px-4 text-sm font-bold uppercase tracking-wide text-[#0E4E86] placeholder:text-[#0E4E86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4E86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#8EC5E3]"
                />
              </div>
              <button
                type="submit"
                className="h-12 min-w-[132px] bg-[#0C0C0C] px-6 text-sm font-extrabold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E4E86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#8EC5E3]"
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
