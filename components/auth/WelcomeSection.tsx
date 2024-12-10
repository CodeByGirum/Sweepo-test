export default function WelcomeSection() {
  return (
    <div className="login-panel-left relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center -z-20" 
        style={{ 
          backgroundImage: 'url("/neon-glasses.jpg")',
          filter: 'brightness(0.6)'
        }} 
      />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <div className="relative">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Sweepo.ai
        </h1>
        
        <div className="flex flex-col items-center mt-8 space-y-4">
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
  )
} 