import Link from 'next/link'
import { Translations } from '@/lib/i18n/translations'

interface FooterProps {
  translations: Translations
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary-600 mb-4">
              {translations.footer.brand}
            </h3>
            <p className="text-gray-600 text-sm">
              {translations.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {translations.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {translations.common.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {translations.common.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {translations.common.blog}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {translations.common.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              {translations.footer.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {translations.terms.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                >
                  {translations.terms.termsOfUse}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} {translations.footer.brand}. {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

