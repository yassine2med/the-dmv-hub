import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/config'

const channels = [
  { name: 'Chill Hangout', description: 'Low-key conversation and casual community time.' },
  { name: 'Gaming Lounge', description: 'A place to coordinate games and casual voice hangs.' },
  { name: 'Event Coordination', description: 'Discuss proposed plans and confirm event details.' },
  { name: 'Vibe Room', description: 'Talk about the kinds of DMV activities members want to try.' },
]

export function DiscordWidget() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="hub-panel-strong rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-hub-teal">
              Discord HQ
            </p>
            <h2 className="mt-2 text-2xl font-black text-hub-text">Live server window</h2>
          </div>
          <span className="live-pulse" />
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            src={`https://discord.com/widget?id=${siteConfig.discordServerId}&theme=dark`}
            width="100%"
            height="390"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="bg-hub-card"
            title="The DMV Hub Discord"
          />
        </div>
      </div>

      <div className="space-y-5">
        <div className="hub-panel rounded-2xl p-6">
          <p className="section-label">What happens inside</p>
          <h3 className="mt-5 text-3xl font-black leading-tight text-hub-text">
            The website is the front door. Discord is the living room.
          </h3>
          <p className="mt-4 text-hub-muted">
            The current public channels are shown below. The server is still in its founding stage,
            so channel names and structure may evolve with the community.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {channels.map((ch) => (
            <div key={ch.name} className="hub-panel rounded-xl p-4 hover-glow">
              <p className="font-mono text-sm font-black text-hub-pink">{ch.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-hub-muted">{ch.description}</p>
            </div>
          ))}
        </div>

        <Button href={siteConfig.discordInvite} size="lg" className="w-full" external>
          Join the Server
        </Button>
      </div>
    </div>
  )
}
