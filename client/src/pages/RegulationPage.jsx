



import { Link } from "react-router-dom";
import ReadAloudButton from "../components/ReadAloudButton";

const icons = {
  break: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" style={{marginRight: 12}}><circle cx="16" cy="16" r="15" stroke="#c995a4" strokeWidth="2" fill="#f7e8d5" /><path d="M10 18c2-2 10-2 12 0" stroke="#00697e" strokeWidth="2" strokeLinecap="round"/><circle cx="13" cy="14" r="1.5" fill="#00697e"/><circle cx="19" cy="14" r="1.5" fill="#00697e"/></svg>
  ),
  escape: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" style={{marginRight: 12}}><rect x="2" y="8" width="28" height="16" rx="8" fill="#e6f2f7" stroke="#72bfa4" strokeWidth="2"/><path d="M8 16h16" stroke="#72bfa4" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  regulate: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" style={{marginRight: 12}}><circle cx="16" cy="16" r="14" fill="#e6f2f7" stroke="#f99378" strokeWidth="2"/><path d="M10 16c2-4 10-4 12 0" stroke="#f99378" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  tools: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" style={{marginRight: 12}}><rect x="6" y="6" width="20" height="20" rx="6" fill="#f7e8d5" stroke="#c995a4" strokeWidth="2"/><path d="M10 22l12-12M10 10l12 12" stroke="#c995a4" strokeWidth="2"/></svg>
  ),
  support: (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32" style={{marginRight: 12}}><ellipse cx="16" cy="20" rx="10" ry="6" fill="#e6f2f7" stroke="#72bfa4" strokeWidth="2"/><circle cx="16" cy="12" r="6" fill="#f7e8d5" stroke="#c995a4" strokeWidth="2"/></svg>
  ),
};


export default function RegulationPage() {
  return (
    <div className="regulation-timeline-bg regulation-page">
      <section className="speakable-block" aria-labelledby="regulation-hero-title" style={{textAlign: 'center', padding: '3.5rem 0 2.5rem 0'}}>
        <ReadAloudButton text="Regulation for Teachers. Calm, ND-friendly, practical support for real classrooms." />
        <h1 id="regulation-hero-title" style={{
          fontSize: '2.8rem',
          fontWeight: 900,
          color: 'var(--primary)',
          letterSpacing: '-0.03em',
          marginBottom: 0
        }}>Regulation toolkit</h1>
        <p style={{
          fontSize: '1.35rem',
          color: 'var(--success-mint)',
          margin: '1.2rem auto 0',
          maxWidth: 680,
          fontWeight: 500
        }}>
          A calm, practical toolkit for anyone who needs a moment to reset, recharge and remember you are human        </p>
      </section>
      <div className="regulation-timeline-wrapper">
        <div className="regulation-timeline-line"></div>
        <div className="timeline-stop" style={{marginTop: 0}}>
          <div className="timeline-stop-header">{icons.break}<span className="timeline-stop-title" style={{color: 'var(--support-lavender)'}}>Break Room</span></div>
          <ul className="timeline-stop-list">
            <li>If you’re overwhelmed, it’s because the job is overwhelming.</li>
            <li>If you’re autistic and teaching, your sensory system is working overtime.</li>
            <li>If you’re ADHD and teaching, you’re juggling 14 mental tabs at once.</li>
            <li>If you’re shy and teaching, you’re performing all day.</li>
            <li>If you’re exhausted, it’s because you’ve been regulating everyone else’s nervous systems.</li>
            <li>If you feel guilty for needing a break, that’s a sign you need two.</li>
          </ul>
          <div className="timeline-stop-desc">A place to breathe, hide, decompress and remember you’re a human being</div>
        </div>
        <div className="timeline-stop" style={{marginTop: 60}}>
          <div className="timeline-stop-header">{icons.escape}<span className="timeline-stop-title" style={{color: 'var(--success-mint)'}}>Micro‑Escapes</span></div>
          <ul className="timeline-stop-list">
            <li>Look at one still object for 10 seconds.</li>
            <li>Drop your shoulders.</li>
            <li>Unclench your jaw.</li>
            <li>Put both feet flat on the floor.</li>
            <li>Name one thing that’s not on fire.</li>
            <li>Breathe out longer than you breathe in.</li>
            <li>Let your face go blank.</li>
            <li>Stare at the wall. It counts.</li>
          </ul>
          <div className="timeline-stop-label" style={{color: 'var(--support-lavender)'}}>Sarcastic Truths</div>
          <ul className="timeline-stop-list timeline-stop-list-secondary">
            <li>“Just stay calm.” Sure, let me switch off my nervous system like a lamp.</li>
            <li>“Just follow the policy.” Which one - today’s or yesterday’s.</li>
            <li>“Just regulate them.” I left my magic wand in the staffroom.</li>
            <li>“Just make it fun.” With what time, exactly.</li>
            <li>“Just be consistent.” While everything around me changes hourly.</li>
          </ul>
        </div>
        <div className="timeline-stop" style={{marginTop: 120}}>
          <div className="timeline-stop-header">{icons.regulate}<span className="timeline-stop-title" style={{color: 'var(--accent-coral)'}}>Regulate in 30s</span></div>
          <ul className="timeline-stop-list">
            <li>Put your hand on something cold.</li>
            <li>Press your tongue to the roof of your mouth.</li>
            <li>Look at something that isn’t moving.</li>
            <li>Touch something with texture.</li>
            <li>Count five things that are the same colour.</li>
            <li>Let your shoulders drop.</li>
            <li>Exhale like you’re annoyed.</li>
            <li>Sit back in your chair and let gravity do the work.</li>
          </ul>
          <div className="timeline-stop-label" style={{color: 'var(--accent-coral)'}}>Sensory Reset</div>
          <ul className="timeline-stop-list timeline-stop-list-secondary">
            <li>Close your eyes for 3 seconds.</li>
            <li>Open them slowly.</li>
            <li>Look at the furthest object in the room.</li>
            <li>Look at the closest object.</li>
            <li>Repeat once.</li>
          </ul>
        </div>
        <div className="timeline-stop" style={{marginTop: 180}}>
          <div className="timeline-stop-header">{icons.tools}<span className="timeline-stop-title" style={{color: 'var(--support-lavender)'}}>Survival Tools</span></div>
          <div className="timeline-stop-label" style={{color: 'var(--support-lavender)'}}>Scripts for Overwhelm</div>
          <ul className="timeline-stop-list">
            <li>“I’m going to answer one question at a time.”</li>
            <li>“Let’s pause for a moment.”</li>
            <li>“I hear you. Give me a second.”</li>
            <li>“We’ll come back to this.”</li>
            <li>“Let’s slow this down.”</li>
          </ul>
          <div className="timeline-stop-label" style={{color: 'var(--accent-coral)'}}>Behaviour Reframes</div>
          <ul className="timeline-stop-list timeline-stop-list-secondary">
            <li>Fidgeting = regulation</li>
            <li>Avoidance = overwhelm</li>
            <li>Talking back = dysregulation</li>
            <li>Shutdown = overload</li>
            <li>Meltdown = release</li>
            <li>Masking = survival</li>
          </ul>
        </div>
      </div>
      <section
        className="timeline-stop timeline-stop-wide"
        aria-labelledby="nd-support-title"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(0, 105, 126, 0.38), transparent 34%), radial-gradient(circle at 74% 62%, rgba(249, 147, 120, 0.26), transparent 26%), linear-gradient(135deg, rgba(247, 232, 213, 0.04), rgba(0, 27, 38, 0.82))'
        }}
      >
        <div className="timeline-stop-header">{icons.support}<span className="timeline-stop-title" style={{color: 'var(--success-mint)'}}>Support for Teachers Who Don’t Fit the Stereotype</span></div>
        <p className="timeline-stop-wide-desc">
          You don’t need to be loud to be effective.<br/>
          You don’t need to be extroverted to connect.<br/>
          You don’t need to mask to be respected.<br/>
          You don’t need to burn out to prove you care.<br/>
          You don’t need to be loud to be effective. <br/>
You don’t need to apologise for being shy - quiet presence is still presence.<br/>
You don’t need to shrink yourself because you over‑explain when you’re trying to feel safe.<br/>
You don’t need to fight your freeze response to show that you’re committed.<br/>
You don’t need to rush your words to sound confident.<br/>
You don’t need to hide your pauses, your stumbles or your shaking hands.<br/>
You don’t need to pretend clarity when your brain is foggy or overwhelmed.<br/>
You don’t need to perform certainty to be taken seriously.<br/>

You get to take your time.<br/>
You get to breathe before you respond. <br/>
You get to regulate before you engage. <br/>
You get to show up as a whole human - not a polished version of yourself.
        </p>
        
        <div className="timeline-stop-label" style={{color: 'var(--support-lavender)', marginTop: '2.2rem'}}>Why This Matters</div>
        <div className="timeline-stop-desc">Because teachers are humans with nervous systems too.<br/>And yours deserves support, not pressure.</div>
        <div className="timeline-stop-wide-flex">
          <div>
            <div className="timeline-stop-label" style={{color: 'var(--success-mint)'}}>Micro‑Regulation Tools</div>
            <ul className="timeline-stop-list">
              <li>Look at one still object for 10 seconds.</li>
              <li>Drop your shoulders.</li>
              <li>Unclench your jaw.</li>
              <li>Put both feet flat on the floor.</li>
              <li>Touch something with texture.</li>
              <li>Exhale longer than you inhale.</li>
              <li>Let your face go blank.</li>
              <li>Stare at the wall. It counts.</li>
            </ul>
          </div>
          <div>
            <div className="timeline-stop-label" style={{color: 'var(--accent-coral)'}}>Sensory Resets</div>
            <ul className="timeline-stop-list timeline-stop-list-secondary">
              <li>Hold something cold.</li>
              <li>Press your tongue to the roof of your mouth.</li>
              <li>Close your eyes for 3 seconds.</li>
              <li>Look at something far away.</li>
              <li>Look at something close.</li>
            </ul>
            <div className="timeline-stop-label" style={{color: 'var(--support-lavender)', marginTop: 18}}>Cognitive Unclutter</div>
            <ul className="timeline-stop-list">
              <li>“This is a moment, not a failure.”</li>
              <li>“My brain is overstimulated, not broken.”</li>
              <li>“I don’t need to fix everything right now.”</li>
              <li>“I can do the next tiny thing.”</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Calm Corner button */}
      <div style={{ textAlign: 'center', margin: '2.5rem 0 3.5rem 0' }}>
        <Link to="/calm-corner" className="back-home-btn">
          Back to Calm Corner
        </Link>
      </div>
    </div>
  );
}
