export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full min-h-screen py-8 px-48 bg-white dark:bg-black">
      <article className="prose dark:prose-invert max-w-none space-y-8">
        <h1 className="mb-2 text-4xl font-extrabold text-black dark:text-white">
          Terms of Service
        </h1>
        <p>
          <strong>Effective Date:</strong>{' '}
          <span className="italic">27/01/2026</span>
        </p>
        <p>
          Welcome to Eric&apos;s Barber Shop. These Terms of Service
          (&quot;Terms&quot;) govern your access to and use of our services (the
          &quot;Services&quot;) through our web application, APIs, and any
          related services provided by Eric&apos;s Barber Shop. By using our
          Services, you agree to these Terms. If you do not agree, you may not
          use our Services.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          1. Your Responsibilities
        </h2>
        <p>When using our Services, you agree to:</p>
        <ul className="list-disc ml-6">
          <li>
            Provide accurate and up-to-date personal information when
            registering or booking services (e.g., name, email).
          </li>
          <li>
            Keep your login credentials secure and not share them with others.
          </li>
          <li>
            Avoid engaging in harmful, abusive, fraudulent, or illegal conduct
            while using our Services.
          </li>
          <li>
            Use our Services only for their intended purpose, which includes
            booking barbering services and managing profiles.
          </li>
        </ul>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          2. Prohibited Activities
        </h2>
        <p>
          You will not engage in any activities that could harm the platform or
          other users. Prohibited activities include:
        </p>
        <ul className="list-disc ml-6">
          <li>Making fraudulent bookings or false entries into the system.</li>
          <li>
            Attempting to gain unauthorized access to databases, APIs, or user
            accounts.
          </li>
          <li>
            Uploading malicious content, such as viruses, malware, or harmful
            scripts.
          </li>
          <li>
            Using the Services to send spam or unsolicited communications.
          </li>
        </ul>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          3. Account Management
        </h2>
        <p>
          Your account is personal to you and may be used only by you. You are
          responsible for keeping your account secure. If you suspect
          unauthorized access to your account, please contact our support team
          at{' '}
          <a href="mailto:support@erics-barbers-luton.co.uk">
            support@erics-barbers-luton.co.uk
          </a>
          .
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          4. Privacy
        </h2>
        <p>
          Our Privacy Policy describes how we collect, use, and protect your
          personal information. By using our Services, you agree to our{' '}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          5. Changes to Services
        </h2>
        <p>
          We reserve the right to modify or discontinue our Services at any time
          without prior notice. We may also update these Terms periodically, and
          you agree to review them regularly. Continued use of the Services
          after any updates constitutes your acceptance of the revised Terms.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          6. Payment and Cancellations
        </h2>
        <p>
          Payment processing for barber services is handled by a third-party
          payment processor. We do not store full payment details. If you need
          to cancel or reschedule a booking, please refer to the cancellation
          policy outlined during the booking process. Failure to cancel in
          accordance with our policy may result in charges or penalties.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          7. Limitation of Liability
        </h2>
        <p>
          Eric&apos;s Barber Shop will not be held liable for any direct,
          indirect, incidental, special, or consequential damages arising from
          your use of our Services, including but not limited to data loss,
          unauthorized access, downtime, and service interruptions.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          8. Termination
        </h2>
        <p>
          We reserve the right to terminate your account or restrict access to
          our Services for violations of these Terms. This includes, but is not
          limited to, fraudulent bookings, abusive behavior, or other breaches
          of permissible use.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          9. Governing Law
        </h2>
        <p>
          These Terms will be governed by the laws of England and Wales. Any
          disputes will be resolved in courts located in England and Wales.
        </p>

        <h2 className="mb-2 text-2xl font-bold text-blue-700 dark:text-blue-300">
          10. Contact Us
        </h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul className="list-none ml-0">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@erics-barbers-luton.co.uk">
              support@erics-barbers-luton.co.uk
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +44 7704 548662
          </li>
          <li>
            <strong>Address:</strong> 277A Dunstable Road, Luton, LU4 8DS
          </li>
        </ul>
      </article>
    </div>
  );
}
