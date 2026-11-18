'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { vibes } from '@/data/vibes'
import { siteConfig } from '@/lib/config'

type Question = {
  text: string
  options: {
    text: string
    weights: Record<string, number>
  }[]
}

const questions: Question[] = [
  {
    text: "What's your ideal weekend energy?",
    options: [
      { text: "High Energy & Social", weights: { 'nightlife': 2, 'live-music': 2, 'speed-friending': 1, 'dating-mixers': 1 } },
      { text: "Chill & Cozy", weights: { 'coffee-crawls': 2, 'movies': 2, 'gaming': 2, 'dog-parks': 1, 'thrifting': 1 } },
      { text: "Active & Moving", weights: { 'outdoors': 2, 'fitness': 2, 'rec-sports': 2, 'day-trips': 1 } },
      { text: "Creative & Cultural", weights: { 'food': 2, 'museum-nights': 2, 'volunteering': 1 } }
    ]
  },
  {
    text: "What's your preferred setting?",
    options: [
      { text: "Loud & Crowded", weights: { 'nightlife': 2, 'live-music': 2, 'speed-friending': 1, 'dating-mixers': 1 } },
      { text: "Quiet & Intimate", weights: { 'coffee-crawls': 2, 'museum-nights': 2, 'movies': 1, 'gaming': 1 } },
      { text: "Fresh Air", weights: { 'outdoors': 2, 'fitness': 1, 'rec-sports': 1, 'day-trips': 2, 'dog-parks': 2 } },
      { text: "Exploring the City", weights: { 'food': 2, 'thrifting': 2, 'volunteering': 2 } }
    ]
  },
  {
    text: "What's your primary goal right now?",
    options: [
      { text: "Finding Romance", weights: { 'dating-mixers': 5 } },
      { text: "Deep Connections", weights: { 'gaming': 2, 'coffee-crawls': 2, 'speed-friending': 3, 'volunteering': 2 } },
      { text: "Just getting out of the house", weights: { 'movies': 2, 'live-music': 2, 'food': 1, 'museum-nights': 1, 'thrifting': 2, 'dog-parks': 1 } },
      { text: "Breaking a sweat", weights: { 'fitness': 3, 'rec-sports': 3, 'outdoors': 2, 'day-trips': 1 } }
    ]
  }
]

export function VibeQuiz() {
  const [step, setStep] = useState<number>(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnswer = (weights: Record<string, number>) => {
    setIsAnimating(true)
    
    const newScores = { ...scores }
    for (const [vibeId, weight] of Object.entries(weights)) {
      newScores[vibeId] = (newScores[vibeId] || 0) + weight
    }
    
    setTimeout(() => {
      setScores(newScores)
      setStep(step + 1)
      setIsAnimating(false)
    }, 400)
  }

  const resetQuiz = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setStep(0)
      setScores({})
      setIsAnimating(false)
    }, 400)
  }

  let topVibe = vibes[0]
  if (step >= questions.length) {
    let maxScore = -1
    let winnerId = 'gaming'
    for (const [vibeId, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score
        winnerId = vibeId
      }
    }
    topVibe = vibes.find(v => v.id === winnerId) || vibes[0]
  }

  return (
    <div className="hub-panel-strong relative overflow-hidden rounded-3xl p-6 sm:p-10 transition-all duration-500 min-h-[360px] flex flex-col justify-center mt-12">
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-hub-teal/[0.1] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-hub-pink/[0.1] blur-3xl" />

      <div className={`transition-opacity duration-400 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        
        {step === 0 && (
          <div className="text-center">
            <h2 className="text-3xl font-black text-hub-text sm:text-4xl mb-4">
              Not sure where to start?
            </h2>
            <p className="text-lg text-hub-muted max-w-xl mx-auto mb-8">
              Take the 3-question <GradientText>Vibe Matcher</GradientText> to find your scene. We&apos;ll drop you straight into the right Discord channel.
            </p>
            <button 
              onClick={() => { setIsAnimating(true); setTimeout(() => { setStep(1); setIsAnimating(false); }, 400); }}
              className="btn-sheen inline-flex items-center justify-center rounded-xl bg-hub-text px-8 py-3.5 font-bold text-hub-black transition-transform hover:scale-105"
            >
              Find My Scene
            </button>
          </div>
        )}

        {step > 0 && step <= questions.length && (
          <div className="max-w-2xl mx-auto w-full">
            <div className="mb-8 flex items-center justify-between">
              <p className="font-mono text-sm font-bold text-hub-teal uppercase tracking-widest">Question {step} / {questions.length}</p>
              <div className="flex gap-1.5">
                {[1, 2, 3].map(i => (
                  <span key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-hub-teal' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-black text-hub-text sm:text-3xl mb-8">
              {questions[step - 1].text}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {questions[step - 1].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.weights)}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left transition-all hover:border-hub-teal/40 hover:bg-white/[0.08]"
                >
                  <span className="relative z-10 font-bold text-hub-text group-hover:text-hub-teal transition-colors">
                    {opt.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step > questions.length && (
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono text-sm font-bold text-hub-pink uppercase tracking-widest mb-4">Your Perfect Match</p>
            <div className="mb-6 flex justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 text-4xl shadow-[0_0_30px_rgba(255,107,157,0.15)] ring-1 ring-white/10">
                {topVibe.emoji}
              </span>
            </div>
            <h2 className="text-4xl font-black text-hub-text sm:text-5xl mb-4">
              {topVibe.name}
            </h2>
            <p className="text-lg text-hub-muted mb-8 leading-relaxed">
              {topVibe.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={siteConfig.discordInvite} size="lg" external>
                Join the {topVibe.name} Channel
              </Button>
              <button 
                onClick={resetQuiz}
                className="text-sm font-bold text-hub-muted hover:text-hub-text transition-colors underline underline-offset-4"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
