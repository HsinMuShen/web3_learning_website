import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import AnimatedHeading from '@/components/ui/AnimatedHeading'
import AnimatedDiv from '@/components/ui/AnimatedDiv'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Terms & Privacy Policy',
  description: 'Terms of use and privacy policy for Web3 Learn.',
}

export default function Terms() {
  return (
    <>
      <Section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedHeading
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Terms & Privacy Policy
          </AnimatedHeading>
          <AnimatedDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600"
          >
            <p>
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </AnimatedDiv>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
          {/* Terms of Use */}
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Terms of Use
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Acceptance of Terms
                </h3>
                <p>
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Educational Content
                </h3>
                <p>
                  The content on this website is provided for educational
                  purposes only. While we strive to provide accurate information,
                  we make no representations or warranties of any kind,
                  express or implied, about the completeness, accuracy,
                  reliability, or suitability of the information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Not Financial Advice
                </h3>
                <p>
                  The information on this website does not constitute financial,
                  investment, or trading advice. We are not financial advisors,
                  and you should consult with a qualified financial professional
                  before making any financial decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Intellectual Property
                </h3>
                <p>
                  All content on this website, including text, graphics, logos,
                  and images, is the property of Web3 Learn or its content
                  suppliers and is protected by copyright and other intellectual
                  property laws.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Privacy Policy */}
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Information We Collect
                </h3>
                <p>
                  We are committed to protecting your privacy. Currently, we do
                  not collect personal information unless you voluntarily provide
                  it to us. If we add features that require data collection in
                  the future, we will update this policy accordingly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cookies and Tracking
                </h3>
                <p>
                  This website may use cookies to enhance your browsing
                  experience. You can choose to disable cookies through your
                  browser settings, though this may affect site functionality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Third-Party Services
                </h3>
                <p>
                  We may use third-party services for analytics or other
                  purposes. These services have their own privacy policies
                  governing the use of your information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Your Rights
                </h3>
                <p>
                  You have the right to access, update, or delete any personal
                  information we may hold about you. If you have questions about
                  your privacy rights, please contact us.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions about these Terms & Privacy Policy,
              please contact us through our website.
            </p>
          </AnimatedSection>
        </div>
      </Section>
    </>
  )
}

