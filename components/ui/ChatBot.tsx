'use client'

import { useState, useRef, useEffect } from 'react'
import { siteConfig } from '@/lib/config'

type Message = {
  id: string
  sender: 'bot' | 'user'
  text: string
}

type ReplyOption = {
  label: string
  response: string
  subOptions?: ReplyOption[]
}

// Build the nested dialogue tree
const chatTree: ReplyOption[] = [
  { 
    label: 'How does this work?', 
    response: 'Join the Discord, read the rules, and see which plans are currently being discussed. Confirm the venue, host, cost, and accessibility details before attending anything.',
    subOptions: [
      { label: 'Do I need to pay?', response: 'Joining the Discord is 100% free. Event costs vary—many are free, while others just require you to buy your own coffee or ticket.' },
      { label: 'Can I just observe?', response: 'Of course! Feel free to lurk in the Discord until you find an event you are comfortable attending.' }
    ]
  },
  { 
    label: 'What kind of events?', 
    response: 'The Vibes page lists ideas such as speed-friending, coffee crawls, games, and pickup sports. It is a planning menu, not a promise that every format is currently scheduled.',
    subOptions: [
      { label: 'Active & Sports', response: 'Bouldering, pickup soccer, and run clubs are proposed formats. Check Discord for what is actually active.' },
      { label: 'Chill & Coffee', response: 'Cafe crawls and book clubs are proposed low-pressure formats. Check Discord for confirmed plans.' },
      { label: 'Nightlife', response: 'Rooftop mixers and barcade nights are ideas for a higher-energy crowd; no recurring schedule is implied.' }
    ]
  },
  { 
    label: 'I am extremely introverted.', 
    response: 'Planned formats such as speed-friending and gaming nights use prompts or activities to make introductions easier.',
    subOptions: [
      { label: 'What is Speed Friending?', response: 'It is like speed dating, but for making platonic friends! You get 5 minutes to chat with someone before rotating.' },
      { label: 'Are there small groups?', response: 'Some proposed formats target smaller groups. Check each confirmed event for its actual capacity.' }
    ]
  },
  { 
    label: 'Can I host an event?', 
    response: 'Absolutely. We are community-driven! Hit the Contact button in the navigation bar to pitch your event idea to the team.' 
  },
  {
    label: 'I need to contact you directly.',
    response: 'Sure thing! You can email me at hello@thedmvhub.com, or just use the Contact form in the top navigation bar.',
    subOptions: [
      {
        label: 'Do you have a phone number?',
        response: 'I mean, theoretically... yes. But I really, really prefer text messages or WhatsApp over phone calls.',
        subOptions: [
          {
            label: 'I promise to just text/WhatsApp.',
            response: 'Alright, fine. If it is urgent, you can <a href="https://wa.me/12024463447" target="_blank" rel="noopener noreferrer" class="font-bold text-hub-teal underline decoration-hub-teal/40 underline-offset-2 hover:text-white transition-colors">WhatsApp me here</a>. But seriously, texts only! My ringtone gives me anxiety.'
          },
          {
            label: 'No, I want to call you.',
            response: 'Error 404: Phone anxiety detected. The network connection has mysteriously failed. Please use email or Discord instead!'
          }
        ]
      }
    ]
  },
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: "Hey! I'm the Hub Bot. I'm just a simple script right now, but I can help you find your way around." }
  ])
  const [currentOptions, setCurrentOptions] = useState<ReplyOption[]>(chatTree)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, currentOptions, isTyping])

  const handleReplyClick = (reply: ReplyOption) => {
    // Add user message
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: reply.label }])
    
    // Clear current options to hide them while typing
    setCurrentOptions([])

    // Simulate typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: reply.response }])
      
      // Load nested options or loop back to start
      if (reply.subOptions && reply.subOptions.length > 0) {
        setCurrentOptions(reply.subOptions)
      } else {
        // If dead end, give them a 'Start Over' option that points back to the root
        setCurrentOptions([
          { label: 'Start Over', response: 'What else can I help you with?', subOptions: chatTree }
        ])
      }
    }, 1200)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-hub-gradient text-hub-black shadow-[0_0_20px_rgba(67,206,162,0.4)] transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(67,206,162,0.6)] ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <svg className="h-7 w-7 drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
          <circle cx="12" cy="12" r="8" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
        </svg>
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-hub-pink text-[10px] font-bold text-white shadow-[0_0_10px_rgba(255,107,157,0.8)] border border-white/20">1</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] origin-bottom-right rounded-2xl border border-white/10 bg-hub-dark/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-hub-teal/20 text-hub-teal ring-1 ring-hub-teal/40">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-hub-teal shadow-[0_0_8px_#43CEA2]" />
            </div>
            <div>
              <p className="font-bold text-hub-text text-sm leading-none">Hub Bot</p>
              <p className="text-[10px] text-hub-teal font-mono uppercase tracking-widest mt-1">Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="rounded-md p-1.5 text-hub-muted hover:bg-white/10 hover:text-white transition-colors">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex h-[320px] flex-col gap-4 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-hub-gradient text-black rounded-tr-sm font-medium' : 'bg-white/[0.05] border border-white/5 text-hub-text rounded-tl-sm'}`}
                dangerouslySetInnerHTML={{ __html: msg.text }} 
              />
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-white/5 bg-white/[0.05] px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-hub-muted" style={{ animationDelay: '0ms' }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-hub-muted" style={{ animationDelay: '150ms' }} />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-hub-muted" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="border-t border-white/10 bg-white/[0.02] p-3 rounded-b-2xl">
          <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-hub-muted">Quick Replies</p>
          <div className="flex flex-wrap gap-2">
            {!isTyping && currentOptions.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => handleReplyClick(reply)}
                className="rounded-full border border-hub-teal/30 bg-hub-teal/10 px-3 py-1.5 text-xs font-bold text-hub-teal transition-colors hover:bg-hub-teal/20"
              >
                {reply.label}
              </button>
            ))}
            {!isTyping && (
              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-hub-pink/30 bg-hub-pink/10 px-3 py-1.5 text-xs font-bold text-hub-pink transition-colors hover:bg-hub-pink/20"
              >
                Join Discord Instead
              </a>
            )}
          </div>
        </div>

      </div>
    </>
  )
}
