import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ScrollArea } from "../../components/ui/scroll-area"
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="login-container">
      <div className="login-panel-left relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center -z-20" 
          style={{ 
            backgroundImage: 'url("/neon-glasses.jpg")',
            filter: 'brightness(0.6)'
          }} 
        />
        <div className="absolute inset-0 bg-black/40 -z-10" /> {/* Dark overlay */}
        <div className="relative">
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
      </div>
      <div className="login-panel-right">
        <div className="login-form-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-10 overflow-auto max-h-[65vh] pr-6 custom-scrollbar">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Sweepo.ai ("we," "our," or "us") is committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your data. This Privacy Policy outlines how we handle your information when you use our services, website, and platform. By using Sweepo.ai, you agree to the practices described in this Privacy Policy.
            </p>

            <section className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">1.1 Information You Provide</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may collect the following information when you interact with our platform:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Account Information: Name, email address, password, and other registration details.</li>
                    <li>Billing Information: Payment details for subscriptions or purchases.</li>
                    <li>Communication Data: Information you provide through customer support or feedback forms.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 mt-4">1.2 Information We Automatically Collect</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">When you use our platform, we automatically collect:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Usage Data: Details about your interactions with the platform, such as login times, pages visited, and features used.</li>
                    <li>Device Information: IP address, browser type, device type, operating system, and network provider.</li>
                    <li>Cookies and Tracking Technologies: Information from cookies, web beacons, and similar technologies to enhance user experience.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions, concerns, or feedback about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Sweepo.ai Support Team</p>
                <p>Email: support@sweep.ai</p>
                <p>Address: 5015 swe 167th ave</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center border-t border-border/50 pt-8">
            <Link href="/login" className="link-text hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 