'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

function WaxSeal({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#7a2436] to-[#5a1e2c] shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_2px_6px_rgba(255,255,255,0.15)]"
      aria-label="Break the seal and open the letter"
    >
      <span className="absolute inset-2 rounded-full border border-[#e7d7b6]/30" />
      <span className="font-display text-3xl text-[#e7d7b6]/90">A</span>
      <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap font-display text-[10px] tracking-[0.3em] text-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100">
        BREAK THE SEAL
      </span>
    </motion.button>
  )
}

export function BirthdayLetter() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="sealed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-10 rounded-2xl border border-[#d4af37]/20 bg-gradient-to-b from-[#241d18] to-[#1a1512] px-10 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <p className="max-w-sm font-serif text-lg italic leading-relaxed text-[#e7d7b6]/70">
                An envelope of heavy parchment rests before you, addressed in
                emerald ink. It hums faintly, as if it has been waiting.
              </p>
              <WaxSeal onClick={() => setOpen(true)} />
            </motion.div>
          ) : (
            <motion.article
              key="letter"
              initial={{ opacity: 0, rotateX: -85, y: -20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top center', perspective: 1000 }}
              className="parchment w-full rounded-lg border border-[#7a5c45]/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:p-12"
            >
              <header className="mb-8 text-center">
                <p className="font-display text-xs tracking-[0.3em] text-[#5a1e2c]">
                  BY OWL POST — STRICTLY CONFIDENTIAL
                </p>
                <h2 className="mt-4 font-display text-3xl text-[#2a2018] md:text-4xl">
                  A Letter For You
                </h2>
                <div className="mx-auto mt-4 h-px w-24 bg-[#7a5c45]/50" />
              </header>

              <div className="space-y-5 font-serif text-[17px] leading-[1.8] text-[#2a2018]">
                <p>Hey hon,</p>
                <p>
                It’s your birthday again, but I think you already know that. Honestly, who needs a single day to celebrate you when you deserve it every day? But since you’ve been locked in for so long ... this definitely calls for a big celebration today. It also just happens to be the one day I get to blabber the most about everything, all at once, without you freaking tf out.
It’s safe to say I’ve known you for a very long time now. I’ve known you since you were 24, and now you’re 27. I’ve watched you come such a long way since then, and I couldn’t be prouder of the person you are. (Still a long way to go, obviously.)
Goodness, I just realized it has been almost three years. God damn. Time just flies by, huh? I didn't even realize how quickly it went. Yet, I still get that same spark of excitement every time I see your name pop up on my screen, and I look forward to your texts the most and love getting on calls with you (Just can't get enough of those haha). So, I'd say we're doing pretty good.
We’ve seen each other through a lot of highs and lows. This past year had a lot of lows for both of us, but I think we can agree that finding each other was the best thing that could’ve happened. Even when we were both medicated, we still had a wonderful time haha. We still have a whole lot to do together… yeah, that as well 😉. We’ll have our time, and I seriously can’t wait for it. And we must take pictures together in person next time! I don’t fuckin know how we managed to forget about that, but we’ve got some major making up to do.
                </p>
                <p>
                Despite all the rough patches, I am so incredibly grateful to have you. I know things have been heavy lately and you’ve got a lot on your plate, but things have a way of working themselves out. It’s going to turn out exactly how it’s supposed to. You’ll have my support no matter what. Just know I’ve always got your back... and I know you’ve got mine, too.
                </p>
                <p>
                I know sometimes you feel guilty about me and try to push me away. But let's be real—that ain’t gonna work, my boi. You’ve got to stop doing that based on whatever stupid-ass logic you’ve got running in your brain. You are one of the best things that has ever happened to me, and I know exactly what I signed up for... so stop worrying about things. I know what I want, and I’m entirely sure about it. Maybe I've done a few stupid things along the way to figure that out, but some people are absolutely worth fighting for. Some things aren’t supposed to make sense; you just have to enjoy them to the fullest for as long as possible. </p>
                <p>You’re still readable AF to me, but I still always want to know what’s going on inside that ADHD brain of yours. I hope you’ll let me peek in from time to time. Somehow, you’re also the calmer one between us... which is highly necessary (You know how chaotic I can be sometimes), and I’m so glad it’s you.
I know you think things are a lot worse for me when you’re not around. That’s not true, but I do deeply miss having you around and being able to talk to you about anything and everything, and I hope you’ll come around soon. I know we both have our own lives and our own shit to handle. I truly admire how incredibly hardworking you are, and I love that about you. But let's not lose track of making time to prioritize each other, too—the way we always have. It'd be nice to talk more often once things are in place, but it'd be nice to catch up weekly as well... It'll be good for both of us and it's much needed. We’ll find our way back to that easy rhythm with time. It’ll turn out just fine.
</p>
<p>By just being in my life, you’ve given me the greatest gift. I’ve experienced a lot of growth and realized I can practice a level of patience I never even knew I was capable of—in a really good way, of course. You make me feel understood in ways I didn't think were possible. I see so much of myself in you, and I’ve never felt more entirely myself than when I'm with you. You’ve put in effort when it mattered the most, and I see all of it. I still stand by the fact that you’re my best friend above all else, and having you in my life brings me so much genuine happiness. You’re still my person, hon… and I’m still your girl and you’ll look out for me too. There will be rough moments, but they’re just going to make us stronger. I wouldn’t have it any other way. Like I’ve said, I’m here for all of it—the good and the bad. This might just be a bad phase, but it will pass, and things are going to be even better. Just trust me on that.
I love you as my best friend haha... chill... Shut the fuck up. Seriously, chill out, it’s not that deep. We’ve both said our "I love you"s once anyway... though you definitely don’t remember it haha.</p>
<p>My dearest one, I adore you and I care for you so much. I hope you always know that. And yes, you’re still incredibly sexy, but you are so much more than just that to me.</p>
<p> I can’t wait to keep growing with you, being silly, sharing random-ass shit, and indulging in endless gossip. I am so excited to celebrate you for a lot more years to come—we have so many birthdays to look forward to. May this year be kind to you, may it surprise you, and may you always know how deeply you are loved. Don't you dare rob me of the privilege of watching you flourish. Just remember, I’ll be in your corner forever.
                </p>
                <p className="pt-4 font-display text-lg text-[#5a1e2c]">
                Happy birthday, hon!


                </p>
                <p className="font-serif text-xl italic text-[#2a2018]">
                Love,
Shambhavi</p>

<p>PS: Still not a love letter, cutie!</p>
                
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
