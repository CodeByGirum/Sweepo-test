import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="login-container">
      <div className="login-panel-left">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Sweepo.ai
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center">
            <p className="text-lg text-white/90 italic">
              "2024's must-have AI data platform."
            </p>
            <span className="text-sm text-white/70 mt-1">
              – Business Insider
            </span>
          </div>
        </div>
      </div>
      <div className="login-panel-right">
        <div className="login-form-container">
          <div className="text-center mb-8">
            <h1 className="heading-text">Terms of Service</h1>
            <p className="subheading-text">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8 overflow-auto max-h-[600px] pr-4">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Sweepo.ai, you agree to be bound by these Terms of Service...
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">2. Use of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use Sweepo.ai in accordance with all applicable laws and regulations...
              </p>
            </section>

            {/* Add more sections as needed */}
          </div>

          <div className="mt-8 text-center">
            <Link href="/login" className="link-text">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 