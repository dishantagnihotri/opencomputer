import FadeIn from "@/components/FadeIn";
import CodeBlock from "@/components/CodeBlock";

const Index = () => (
  <div className="min-h-screen">
    {/* Nav */}
    <nav className="max-w-[994px] mx-auto px-10 py-6 flex items-center">
      <span className="font-mono-brand text-[15px] font-medium tracking-tight logo-ai-hover cursor-pointer" data-text="opencomputer">opencomputer</span>
    </nav>

    {/* Main */}
    <main className="max-w-[994px] mx-auto px-10 pt-10 pb-[120px]">
      <FadeIn>
        <h1 className="font-heading text-[clamp(42px,6vw,64px)] leading-[1.15] tracking-[-1.5px] mb-10">
          Agents are becoming the application.
        </h1>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mb-10 space-y-7">
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px]">
            Today, people build an app and the app calls an agent to do a task. The app is the product, the agent is a feature. That's{" "}
            <em className="font-heading text-[19px]">sandbox-as-tool</em> territory.
          </p>
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px]">
            We think the agent <em className="font-heading text-[19px]">is</em> the product. Someone builds a support agent, a research agent, a coding agent—that agent needs to live somewhere, have a URL, and run. Stop treating it like a function call. Deploy it like a service.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.16}>
        <p className="font-heading text-[clamp(28px,4vw,38px)] leading-[1.35] tracking-[-0.8px] mt-2 mb-2">
          And services need computers, not sandboxes.
        </p>
      </FadeIn>

      <FadeIn delay={0.24}>
        <div className="w-12 h-px bg-border my-14" />
      </FadeIn>

      <FadeIn>
        <div className="mb-14 space-y-7">
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px]">
            Every OpenComputer is a real VM. Not a microVM, not a container. A full Linux machine with root access. It hibernates when idle and wakes when you need it. No timeouts, no snapshots to manage. Your computer is just{" "}
            <em className="font-heading text-[19px]">there</em>.
          </p>
          <p className="text-[17px] leading-[1.75] tracking-[-0.1px]">
            Secrets live in a vault. Checkpoint anytime. Break something, roll back in a second.
          </p>
        </div>
      </FadeIn>

      <FadeIn>
        <CodeBlock />
      </FadeIn>

      <FadeIn>
        <div className="mt-20 pt-14 border-t border-border">
          <div className="flex gap-3 items-center flex-wrap">
            <a
              href="#"
              className="inline-block text-sm font-medium px-7 py-3 rounded-md bg-primary text-primary-foreground border border-primary hover:bg-foreground/90 transition-all duration-150"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-block text-sm font-medium px-7 py-3 rounded-md bg-background text-foreground border border-border hover:border-foreground transition-all duration-150"
            >
              Read the docs
            </a>
          </div>
        </div>
      </FadeIn>
    </main>

    {/* Footer */}
    <footer className="max-w-[994px] mx-auto px-10 py-10 border-t border-border">
      <span className="font-mono-brand text-[13px] text-muted-foreground">© 2026 opencomputer</span>
    </footer>
  </div>
);

export default Index;
