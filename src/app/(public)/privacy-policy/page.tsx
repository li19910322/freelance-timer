import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FreelanceTimer",
  description: "Privacy Policy for FreelanceTimer — GDPR & CCPA compliant",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="April 10, 2026">

      <p className="text-gray-600 italic mb-8">
        At FreelanceTimer (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we take your privacy seriously. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information when you use our website
        and services (the &quot;Service&quot;). This policy complies with the EU General Data Protection
        Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and other applicable privacy laws.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide Directly</h3>
      <ul>
        <li><strong>Account information:</strong> Name, email address, and profile information (managed via Clerk authentication)</li>
        <li><strong>Time tracking data:</strong> Time entries, project names, client names, hourly rates, descriptions</li>
        <li><strong>Invoice data:</strong> Client names, invoice content, payment details you enter</li>
        <li><strong>Communications:</strong> Any messages or support requests you send us</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage data:</strong> Pages visited, features used, session duration, click patterns</li>
        <li><strong>Device information:</strong> Browser type, operating system, device type, language preference</li>
        <li><strong>Log data:</strong> IP address, access times, referring URLs</li>
        <li><strong>Cookies and tracking:</strong> Authentication tokens, session IDs, analytics identifiers (see Section 7)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, maintain, and improve the FreelanceTimer Service</li>
        <li>Process transactions and send related information (invoices, receipts, subscription confirmations)</li>
        <li>Send technical notices, security alerts, and support messages</li>
        <li>Respond to your comments, questions, and customer service requests</li>
        <li>Monitor and analyze usage patterns to improve user experience</li>
        <li>Detect, prevent, and address fraud, abuse, and security threats</li>
        <li>Personalize your experience and deliver relevant content</li>
        <li>Comply with our legal obligations</li>
      </ul>

      <h2>3. Legal Basis for Processing (GDPR)</h2>
      <p>If you are located in the European Economic Area (EEA), we process your personal data only on the following legal bases:</p>
      <ul>
        <li><strong>Contract performance (Art. 6(1)(b)):</strong> Processing necessary to provide the Service you requested</li>
        <li><strong>Legitimate interests (Art. 6(1)(f)):</strong> Improving our Service, fraud prevention, direct marketing (with opt-out)</li>
        <li><strong>Consent (Art. 6(1)(a)):</strong> Marketing communications, optional cookies (you can withdraw at any time)</li>
        <li><strong>Legal compliance (Art. 6(1)(c)):</strong> Tax records, regulatory requirements</li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      <p>We do <strong>not</strong> sell your personal data. We may share information with:</p>
      <ul>
        <li><strong>Service providers:</strong> Clerk (authentication), Lemon Squeezy (payments), Supabase (database/cloud storage), analytics providers — all under strict data processing agreements</li>
        <li><strong>Legal requirements:</strong> When required by law, court order, or government request</li>
        <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred under the same privacy protections</li>
        <li><strong>With your consent:</strong> For any other sharing, we will obtain your explicit consent first</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>We retain your data for as long as your account is active and for a period thereafter as follows:</p>
      <ul>
        <li><strong>Account data:</strong> Retained until account deletion; deleted within 30 days of account closure</li>
        <li><strong>Time tracking & invoice data:</strong> Retained for 3 years after account closure for legal compliance</li>
        <li><strong>Support communications:</strong> Retained for 2 years</li>
        <li><strong>Analytics data (anonymized):</strong> Retained indefinitely for product improvement</li>
      </ul>
      <p>You may request earlier deletion of your data at any time (see Section 11).</p>

      <h2>6. Data Security</h2>
      <p>
        We implement industry-standard technical and organizational security measures, including:
        encryption in transit (TLS/SSL), encryption at rest, access controls, regular security audits,
        and staff data protection training. No method of internet transmission is 100% secure, and we
        cannot guarantee absolute security. If you suspect a security breach, contact us immediately
        at <a href="mailto:security@freelancetimer.com">security@freelancetimer.com</a>.
      </p>

      <h2>7. Cookies and Tracking</h2>
      <h3>7.1 Essential Cookies</h3>
      <p>
        Required for authentication and core functionality. Cannot be disabled without disabling the Service.
        Managed by Clerk (our authentication provider).
      </p>

      <h3>7.2 Analytics Cookies</h3>
      <p>
        We use anonymized analytics to understand how users interact with FreelanceTimer. These cookies
        do not identify you personally. You can opt out via your browser settings or by contacting us.
      </p>

      <h3>7.3 Managing Cookies</h3>
      <p>
        Most browsers allow you to block or delete cookies. Disabling non-essential cookies may impact
        certain features of the Service.
      </p>

      <h2>8. Your Rights Under GDPR (EEA Users)</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access (Art. 15):</strong> Request a copy of your personal data</li>
        <li><strong>Rectification (Art. 16):</strong> Correct inaccurate or incomplete data</li>
        <li><strong>Erasure (Art. 17):</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
        <li><strong>Restriction (Art. 18):</strong> Request limited processing of your data</li>
        <li><strong>Portability (Art. 20):</strong> Receive your data in a structured, machine-readable format</li>
        <li><strong>Objection (Art. 21):</strong> Object to processing based on legitimate interests or for direct marketing</li>
        <li><strong>Withdraw consent (Art. 7):</strong> Withdraw consent at any time where processing is based on consent</li>
        <li><strong>Lodge a complaint:</strong> File a complaint with your local data protection authority</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:privacy@freelancetimer.com">privacy@freelancetimer.com</a>. We will respond within <strong>30 days</strong>.</p>

      <h2>9. Your Rights Under CCPA/CPRA (California Residents)</h2>
      <p>California residents have the following rights:</p>
      <ul>
        <li><strong>Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected</li>
        <li><strong>Right to Delete:</strong> Request deletion of personal information (subject to legal exceptions)</li>
        <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
        <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell data — see below)</li>
        <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
      </ul>
      <p>
        <strong>We do not sell your personal information</strong> as defined under CCPA. We share data only
        with service providers as described in Section 4. We will respond to verifiable consumer requests
        within <strong>45 days</strong>.
      </p>

      <h2>10. International Data Transfers</h2>
      <p>
        FreelanceTimer is operated from the United States. If you are located outside the U.S.,
        your data will be transferred to and processed in the United States, which may have different
        data protection laws than your country. For EEA users, such transfers are covered by
        <strong>Standard Contractual Clauses (SCCs)</strong> or other adequate safeguards as required by GDPR.
      </p>

      <h2>11. Children&apos;s Privacy</h2>
      <p>
        FreelanceTimer is not intended for users under the age of 18. We do not knowingly collect
        personal information from children. If we become aware that we have collected data from a
        minor without verified parental consent, we will delete that data promptly.
      </p>

      <h2>12. Do Not Track</h2>
      <p>
        We respect Do Not Track signals from browsers. When we detect a DNT signal, we will not
        track browsing activity for that session.
      </p>

      <h2>13. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. For material changes, we will notify
        you via email or a prominent notice in the Service at least <strong>30 days</strong> before
        the change takes effect. The &quot;Last updated&quot; date at the top of this page reflects the
        effective date of the current policy.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        <strong>FreelanceTimer</strong><br />
        Data Protection Officer<br />
        Email: <a href="mailto:privacy@freelancetimer.com">privacy@freelancetimer.com</a><br />
        For GDPR data requests: <a href="mailto:dpo@freelancetimer.com">dpo@freelancetimer.com</a><br />
        Address: Delaware, United States<br />
        Effective Date: April 10, 2026
      </p>
    </LegalPage>
  );
}
