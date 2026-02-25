import { useState } from "react";
import { Copy, Check } from "lucide-react";

const TERMINAL_TEXT = `curl -X POST api.opencomputer.dev/v1/computers \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{"template": "claude-agent-sdk"}'`;

const CodeBlock = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TERMINAL_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <div className="my-14 rounded-lg overflow-hidden border border-border/50 shadow-lg">
    <div className="bg-[hsl(0,0%,95%)] border-b border-[hsl(0,0%,88%)] px-4 py-2.5 flex justify-between items-center">
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-[hsl(0,0%,75%)]" />
        <span className="w-3 h-3 rounded-full bg-[hsl(0,0%,75%)]" />
        <span className="w-3 h-3 rounded-full bg-[hsl(0,0%,75%)]" />
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono-brand text-xs text-[hsl(0,0%,55%)]">terminal</span>
        <button
          onClick={handleCopy}
          className="text-[hsl(0,0%,55%)] hover:text-[hsl(0,0%,30%)] transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
    <div className="px-6 py-5 bg-[hsl(0,0%,8%)] font-mono-brand text-[13.5px] leading-[1.9] overflow-x-auto">
      <div>
        <span className="text-[hsl(130,50%,60%)]">❯</span>{" "}
        <span className="text-[hsl(210,60%,70%)]">curl</span>{" "}
        <span className="text-[hsl(35,70%,65%)]">-X</span>{" "}
        <span className="text-[hsl(0,0%,85%)]">POST</span>{" "}
        <span className="text-[hsl(0,0%,55%)] underline decoration-[hsl(0,0%,30%)]">api.opencomputer.dev/v1/computers</span>{" "}
        <span className="text-[hsl(0,0%,40%)]">\</span>
      </div>
      <div className="pl-4">
        <span className="text-[hsl(35,70%,65%)]">-H</span>{" "}
        <span className="text-[hsl(130,40%,60%)]">"Authorization: Bearer</span>{" "}
        <span className="text-[hsl(180,50%,60%)]">$API_KEY</span>
        <span className="text-[hsl(130,40%,60%)]">"</span>{" "}
        <span className="text-[hsl(0,0%,40%)]">\</span>
      </div>
      <div className="pl-4">
        <span className="text-[hsl(35,70%,65%)]">-d</span>{" "}
        <span className="text-[hsl(130,40%,60%)]">{"'"}</span>
        <span className="text-[hsl(0,0%,40%)]">{"{"}</span>
        <span className="text-[hsl(210,60%,70%)]">"template"</span>
        <span className="text-[hsl(0,0%,40%)]">:</span>{" "}
        <span className="text-[hsl(130,40%,60%)]">"claude-agent-sdk"</span>
        <span className="text-[hsl(0,0%,40%)]">{"}"}</span>
        <span className="text-[hsl(130,40%,60%)]">{"'"}</span>
      </div>
    </div>
  </div>
  );
};

export default CodeBlock;
