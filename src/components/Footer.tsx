export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12 lg:py-16">
      <div className="mx-auto max-w-[--max-width-content] px-6 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div>
            <span className="font-display text-xl font-bold text-white">CommitKit</span>
            <p className="mt-2 font-body text-sm text-white/40">
              Every step to your commit.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <a href="#features" className="font-body text-sm text-white/60 transition-colors hover:text-white">
                Features
              </a>
              <a href="#pricing" className="font-body text-sm text-white/60 transition-colors hover:text-white">
                Pricing
              </a>
              <a href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">
                Blog
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-white/60 transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="font-body text-sm text-white/30">
            &copy; 2026 CommitKit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
