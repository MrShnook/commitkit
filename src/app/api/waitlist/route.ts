import { NextRequest, NextResponse } from "next/server";

const POSTHOG_KEY = "phc_9TMFjbNVTpD33mYuvU0NecgXuy2POIXmCenP8TRYj8Z";
const POSTHOG_HOST = "https://us.i.posthog.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source_section } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send to PostHog
    await fetch(`${POSTHOG_HOST}/capture/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: POSTHOG_KEY,
        event: "waitlist_signup",
        distinct_id: email,
        properties: {
          email,
          signup_source: source_section || "unknown",
          signup_date: new Date().toISOString(),
        },
        $set: {
          email,
          signup_source: source_section || "unknown",
          signup_date: new Date().toISOString(),
        },
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
