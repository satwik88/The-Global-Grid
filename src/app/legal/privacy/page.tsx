import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Global Grid.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="ui-text text-ink-secondary mb-8">
        Last updated: August 1, 2026
      </p>

      <h2>1. Who We Are</h2>
      <p>
        The Global Grid is a premium international news aggregation service. Our mission is to provide you with a curated reading experience across World, Business, Technology, Science, and Culture. You can contact us regarding this Privacy Policy at <a href="mailto:contact@theglobalgrid.app">contact@theglobalgrid.app</a>.
      </p>

      <h2>2. What The Global Grid Does</h2>
      <p>
        We aggregate top news stories from around the globe using NewsAPI. Our service is free to use and allows you to read the news. We also offer optional user accounts to personalize your reading profile.
      </p>

      <h2>3. Information We Collect</h2>
      
      <h3>What We Do NOT Collect</h3>
      <p>
        We believe in a private reading experience. To that end, we explicitly <strong>do not</strong> collect:
      </p>
      <ul>
        <li>No payment information.</li>
        <li>No contact lists or address books.</li>
        <li>No precise location data.</li>
        <li>No third-party advertising trackers or pixels.</li>
      </ul>

      <h3>Account Data You Submit</h3>
      <p>
        If you choose to create an account for a personalized profile, we collect your email address and a password. Passwords are never stored in plain text; they are securely hashed. We may also collect profile preferences and session data tied to your account to keep you logged in.
      </p>
      
      <h3>Analytics Data</h3>
      <p>
        We may collect basic, anonymized analytics data (such as page views or general browser type) to understand how the site is performing and to improve our service. This data does not personally identify you.
      </p>

      <h2>4. How We Use Information</h2>
      <p>
        We use the information we collect solely to provide, secure, and improve the service. Specifically, your email and hashed password are used exclusively for account authentication and maintaining your personalized profile. 
      </p>
      <p>
        <strong>AI Model Training Disclosure:</strong> Your personal data and account information are <strong>not</strong> used to train AI models.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We use essential cookies to maintain your session and login state. For detailed information, please see our <Link href="/legal/cookies">Cookie Policy</Link>.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        Account data (such as your email and hashed password) is retained for as long as your account is active. If you request account deletion, your data will be permanently deleted from our active databases within 30 days.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Regardless of where you live, you have the right to request access to, correction of, or deletion of your personal data. 
      </p>
      <p>
        <strong>How to Exercise:</strong> To request account deletion or data removal, please contact us at <a href="mailto:contact@theglobalgrid.app">contact@theglobalgrid.app</a> from the email address associated with your account.
      </p>

      <h2>8. India DPDP Act Compliance</h2>
      <p>
        As a service developed in India, we adhere to the principles of the Digital Personal Data Protection Act, 2023 (DPDP Act). We process your personal data only with your consent (provided when you create an account) and solely for the purpose of providing the agreed-upon service. You may withdraw your consent at any time by requesting account deletion.
      </p>

      <h2>9. Security</h2>
      <p>
        We use standard industry practices, such as HTTPS encryption in transit and secure password hashing at rest, to protect your data. Since we do not collect payment data or extensive personal profiles, the risk footprint of your data is minimized.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be posted on this page with a new "Last updated" date. We encourage you to review this page periodically.
      </p>
    </>
  );
}
