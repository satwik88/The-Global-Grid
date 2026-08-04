import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for The Global Grid.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="ui-text text-ink-secondary mb-8">
        Last updated: August 1, 2026
      </p>

      <h2>1. Agreement</h2>
      <p>
        By accessing or using The Global Grid, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.
      </p>

      <h2>2. The Service</h2>
      <p>
        The Global Grid is a news aggregation platform that provides a curated reading experience. The service is provided free of charge on a best-effort basis. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        By using The Global Grid, you confirm that you are at least 13 years of age, or the applicable age of majority in your jurisdiction. 
      </p>

      <h2>4. Account Responsibilities</h2>
      <p>
        If you create an account to personalize your reading profile, you are solely responsible for maintaining the security of your account credentials. You agree to notify us immediately of any unauthorized access to your account.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>
        You agree not to use the service for any illegal or unauthorized purpose. Specifically, you agree not to:
      </p>
      <ul>
        <li>Scrape, crawl, or automate access to the service beyond normal browser use.</li>
        <li>Attempt to bypass security measures or access data not intended for you.</li>
        <li>Reverse engineer or decompile any part of the service.</li>
        <li>Use the service to distribute spam or malicious content.</li>
      </ul>
      <p>
        We reserve the right to block IP addresses, terminate sessions, or delete accounts that violate these Acceptable Use terms.
      </p>

      <h2>6. Aggregated News Content</h2>
      <p>
        The Global Grid is an aggregator. All news articles, headlines, images, and content displayed on the platform are sourced dynamically via third-party APIs (such as NewsAPI) from external publishers. 
      </p>
      <p>
        <strong>We do not originally author, own, or control this content.</strong> 
        The copyright for any aggregated news content remains with the original publisher or author. You are responsible for complying with the terms of service of the original publishers when interacting with their content. We do not guarantee the accuracy, completeness, or reliability of any aggregated news.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        Excluding the aggregated news content mentioned above, The Global Grid owns the website design, source code, UI, and branding. You may not copy, modify, or redistribute our intellectual property without prior written permission.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p className="uppercase text-sm tracking-wide bg-border/20 p-4 rounded-md">
        The service is provided on an "as is" and "as available" basis, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, title, and non-infringement. The Global Grid does not warrant that the service will be uninterrupted, error-free, or secure, or that aggregated news content will be accurate, appropriate, or free of infringing content.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, The Global Grid and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
      </p>
      <p>
        <em>Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In those jurisdictions, our liability is limited to the maximum extent permitted by law, and the above limitations may not apply to you.</em>
      </p>

      <h2>10. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless The Global Grid and its operators from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from your use of the service or your violation of these Terms.
      </p>

      <h2>11. Governing Law & Venue</h2>
      <p>
        These Terms are governed by the laws of India, without regard to conflict-of-law principles. Disputes will be brought exclusively in the competent courts located in India.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be posted with a new "Last updated" date. <strong>Your continued use of The Global Grid after changes are posted constitutes your acceptance of the revised Terms.</strong>
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions about these Terms, or if you need to report a copyright or DMCA claim regarding aggregated content, please contact us at <a href="mailto:contact@theglobalgrid.app">contact@theglobalgrid.app</a>.
      </p>
    </>
  );
}
