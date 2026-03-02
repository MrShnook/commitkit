import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CommitKit — The Recruiting Command Center for Sports Families",
  description:
    "Track schools, manage coach outreach, and hit every NCAA deadline. The organized way to navigate college recruiting. Free to start.",
  metadataBase: new URL("https://commitkit.io"),
  openGraph: {
    title: "CommitKit — The Recruiting Command Center for Sports Families",
    description:
      "Track schools, manage coach outreach, and hit every NCAA deadline. The organized way to navigate college recruiting. Free to start.",
    url: "https://commitkit.io",
    siteName: "CommitKit",
    type: "website",
  },
  alternates: {
    canonical: "https://commitkit.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {children}
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onFeatureFlags onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_9TMFjbNVTpD33mYuvU0NecgXuy2POIXmCenP8TRYj8Z', {api_host: 'https://us.i.posthog.com'});
          `}
        </Script>
      </body>
    </html>
  );
}
