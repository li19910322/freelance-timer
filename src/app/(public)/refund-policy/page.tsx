import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - FreelanceTimer",
  description: "7-day money-back guarantee for FreelanceTimer Pro subscriptions",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="April 10, 2026">
      <h2>1. Our 7-Day Money-Back Guarantee</h2>
      <p>
        We want you to be completely satisfied with FreelanceTimer Pro. If you are not happy with your subscription
        within the first <strong>7 days</strong> of any billing period, we will issue a full refund — no questions asked.
      </p>
      <p>
        This guarantee applies to both monthly and annual subscriptions and covers any reason whatsoever:
        feature dissatisfaction, billing errors, accidental purchases, or simply changed mind.
      </p>

      <h2>2. Eligibility</h2>
      <p>To request a refund under this policy:</p>
      <ul>
        <li>Your request must be made within <strong>7 calendar days</strong> of the original purchase date</li>
        <li>You must be the account holder (verified via the email used at checkout)</li>
        <li>Refund requests for the same account are limited to <strong>one (1) per 12-month period</strong></li>
        <li>
          After a refund, your subscription will be immediately downgraded to the Free tier and access
          to Pro features will be revoked
        </li>
      </ul>

      <h2>3. How to Request a Refund</h2>
      <p>Contact us via email with your account details:</p>
      <blockquote>
        <strong>Email:</strong> support@freelancetimer.com<br />
        <strong>Subject:</strong> Refund Request — [Your Account Email]<br />
        <strong>Include:</strong> Your registered email address and the subscription date
      </blockquote>
      <p>
        We process all refund requests within <strong>3 business days</strong>. Refunds are issued to your
        original payment method (PayPal or credit card). Please allow an additional 5–10 business days
        for the refund to appear on your statement, depending on your payment provider.
      </p>

      <h2>4. Automatic Subscription Renewals</h2>
      <p>
        Subscriptions renew automatically at the end of each billing period. If you cancel before
        the renewal date, you will retain access to Pro features until the end of the current
        paid period. <strong>No refunds are issued for unused time on cancelled subscriptions</strong> outside
        the 7-day window.
      </p>

      <h2>5. Chargebacks and Payment Disputes</h2>
      <p>
        We kindly ask that you contact us directly before initiating a chargeback or payment dispute
        with your bank or PayPal. Chargebacks can result in your account being permanently suspended
        and may delay the refund process. We are always happy to resolve issues directly.
      </p>

      <h2>6. Refunds for Fraud or Abuse</h2>
      <p>
        We reserve the right to deny refund requests if we detect fraudulent activity, systematic
        abuse of the refund policy, or violations of our{" "}
        <a href="/terms-of-service">Terms of Service</a>.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Refund Policy from time to time. Changes will be posted on this page with an
        updated revision date. Continued use of FreelanceTimer Pro after any changes constitutes
        acceptance of the revised policy.
      </p>

      <h2>8. Contact</h2>
      <p>
        FreelanceTimer<br />
        Email: support@freelancetimer.com<br />
        Effective Date: April 10, 2026
      </p>
    </LegalPage>
  );
}
