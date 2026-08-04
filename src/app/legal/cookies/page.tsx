import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for The Global Grid.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="ui-text text-ink-secondary mb-8">
        Last updated: August 1, 2026
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device by websites you visit. They help sites remember your preferences, maintain your logged-in state, and understand how you use them.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>
        The Global Grid uses <strong>only Strictly Necessary / Essential cookies</strong>. Because our service respects your privacy, we do not use any third-party marketing, advertising, or cross-site tracking cookies.
      </p>

      <h3>Cookie Notice</h3>
      <p>
        By using The Global Grid and logging into your account, you agree to our use of these essential session cookies as they are required for the service to function properly.
      </p>

      <h2>3. Cookie Inventory</h2>
      <div className="overflow-x-auto my-8">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-border/40">
              <th className="py-2 pr-4 font-bold">Cookie Name</th>
              <th className="py-2 pr-4 font-bold">Type</th>
              <th className="py-2 pr-4 font-bold">Purpose</th>
              <th className="py-2 pr-4 font-bold">Duration</th>
              <th className="py-2 font-bold">How to Opt Out</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-border/20">
              <td className="py-3 pr-4 font-mono">Session ID / Auth</td>
              <td className="py-3 pr-4">Essential</td>
              <td className="py-3 pr-4">Maintains your logged-in state across page loads.</td>
              <td className="py-3 pr-4">Session / 30 Days</td>
              <td className="py-3">Log out of your account or clear browser cookies.</td>
            </tr>
            <tr className="border-b border-border/20">
              <td className="py-3 pr-4 font-mono">CSRF Token</td>
              <td className="py-3 pr-4">Essential</td>
              <td className="py-3 pr-4">Prevents cross-site request forgery attacks.</td>
              <td className="py-3 pr-4">Session</td>
              <td className="py-3">Required for security; cannot be disabled.</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-mono">Theme Preference</td>
              <td className="py-3 pr-4">Functional</td>
              <td className="py-3 pr-4">Remembers your dark/light mode preference.</td>
              <td className="py-3 pr-4">Session / Persistent</td>
              <td className="py-3">Clear browser data.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. Third-Party Cookies</h2>
      <p>
        We do not set any third-party advertising or marketing cookies. If we integrate basic, anonymized analytics in the future, we will update this policy accordingly.
      </p>

      <h2>5. How to Manage Cookies</h2>
      <p>
        You can control and manage cookies using your browser settings. Please note that removing or blocking our essential cookies will prevent you from staying logged into your account.
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Manage cookies in Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noreferrer">Manage cookies in Firefox</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noreferrer">Manage cookies in Safari</a></li>
      </ul>

      <h2>6. Do Not Track (DNT)</h2>
      <p>
        The Global Grid does not currently respond to browser Do Not Track (DNT) signals because no uniform technological standard exists. However, we inherently honor your privacy by not utilizing cross-site tracking cookies in the first place.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have any questions about this Cookie Policy, please contact us at <a href="mailto:contact@theglobalgrid.app">contact@theglobalgrid.app</a>.
      </p>
    </>
  );
}
