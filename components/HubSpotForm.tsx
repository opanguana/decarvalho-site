import { getSite } from "@/lib/content";

export default function HubSpotForm() {
  const site = getSite();
  const { portalId, formGuid } = site.hubspot;
  const action = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${formGuid}`;

  return (
    <form
      action={action}
      method="POST"
      className="mt-6 grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-2">
        <label htmlFor="firstname" className="text-sm font-medium text-zinc-900">First name</label>
        <input
          id="firstname"
          name="firstname"
          required
          className="h-11 rounded-xl border border-zinc-200 px-3 text-sm"
          autoComplete="given-name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="lastname" className="text-sm font-medium text-zinc-900">Last name</label>
        <input
          id="lastname"
          name="lastname"
          required
          className="h-11 rounded-xl border border-zinc-200 px-3 text-sm"
          autoComplete="family-name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-900">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 rounded-xl border border-zinc-200 px-3 text-sm"
          autoComplete="email"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-900">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-xl border border-zinc-200 px-3 py-2 text-sm"
          placeholder="Objectives, constraints, timeline, and what you need validated."
        />
      </div>

      <input type="hidden" name="redirect_uri" value={`${site.baseUrl.replace(/\/$/, "")}/contact`} />

      <button
        type="submit"
        className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white hover:bg-zinc-800"
      >
        Send
      </button>

      <p className="text-xs text-zinc-500">
        This form posts directly to HubSpot. Replace field names to match your HubSpot form configuration.
      </p>
    </form>
  );
}
