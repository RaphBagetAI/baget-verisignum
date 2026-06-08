'use client'

import { useState } from "react";

export function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    };

    return (
        <button onClick={handleCopy} className="!p-2 !w-auto !text-xs">
            {copied ? 'Copied!' : 'Copy Link'}
        </button>
    );
}
