import { useState } from "react";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function CalmCornerPage() {
  const { t } = useLanguage();

  const videos = [
    { key: "home.musicVideo1", embedUrl: "https://www.youtube.com/embed/Dgrzah0z5zo" },
    { key: "home.musicVideo2", embedUrl: "https://www.youtube.com/embed/2pXFIYjMXKk" },
    { key: "home.musicVideo3", embedUrl: "https://www.youtube.com/embed/XtY7kkuC4qc" },
    { key: "home.musicVideo4", embedUrl: "https://www.youtube.com/embed/hMhJhRLsl34" },
    { key: "home.musicVideo5", embedUrl: "https://www.youtube.com/embed/jVPxEk5_bBQ" },
    { key: "home.musicVideo6", embedUrl: "https://www.youtube.com/embed/P5DEsG8-Ksw" },
    { key: "home.musicVideo7", embedUrl: "https://www.youtube.com/embed/LAD2GEqUemU" },
    { key: "home.musicVideo8", embedUrl: "https://www.youtube.com/embed/HOmjFCECnOU" },
    { key: "home.musicVideo9", embedUrl: "https://www.youtube.com/embed/6g3QiE4IB-4" },
    { key: "home.musicVideo10", embedUrl: "https://www.youtube.com/embed/ipf7ifVSeDU" },
    { key: "home.musicVideo11", embedUrl: "https://www.youtube.com/embed/DXzk5i4Ofe8" },
    { key: "home.musicVideo12", embedUrl: "https://www.youtube.com/embed/u_gD5ErXOvc" },
    { key: "home.musicVideo13", embedUrl: "https://www.youtube.com/embed/70VpNGdTGng" },
    { key: "home.musicVideo14", embedUrl: "https://www.youtube.com/embed/mSX3OyW9Rao" },
    { key: "home.musicVideo15", embedUrl: "https://www.youtube.com/embed/-Yye4owQMsQ" },
    { key: "home.musicVideo16", embedUrl: "https://www.youtube.com/embed/GRxofEmo3HA" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0].embedUrl);

  return (
    <div className="calm-corner-page">
      <section className="calm-corner-hero speakable-block" aria-labelledby="calm-corner-title">
        <ReadAloudButton text={t("calmCorner.read")}/>
        <p className="page-kicker">{t("calmCorner.eyebrow")}</p>
        <h1 id="calm-corner-title" className="page-title">
          {t("calmCorner.title")}
        </h1>
        <p className="page-copy page-copy--lg">{t("calmCorner.copy")}</p>
      </section>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Calming Video Player */}
        <section
          className="calm-corner-player speakable-block panel"
          aria-labelledby="calm-player-title"
          style={{
            flex: '1 1 340px',
            minWidth: 320,
            maxWidth: 600,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '480px',
            background: 'linear-gradient(135deg, rgba(249, 147, 120, 0.16), rgba(0, 27, 38, 0.92))',
          }}
        >
          <ReadAloudButton text={t("calmCorner.playerRead")}/>
          <h2 id="calm-player-title" className="page-title page-title--compact" style={{ marginBottom: '1rem' }}>
            {t("calmCorner.playerTitle")}
          </h2>
          <p className="page-copy" style={{ marginBottom: '1rem', textAlign: 'center' }}>{t("calmCorner.playerCopy")}</p>

          <label className="support-form__label" htmlFor="calm-video-select" style={{ marginBottom: '0.5rem' }}>
            {t("calmCorner.chooseVideo")}
          </label>
          <select
            id="calm-video-select"
            className="support-form__input music-picker"
            value={selectedVideo}
            onChange={(event) => setSelectedVideo(event.target.value)}
            style={{ marginBottom: '1rem', width: '100%' }}
          >
            {videos.map((video) => (
              <option key={video.embedUrl} value={video.embedUrl}>
                {t(video.key)}
              </option>
            ))}
          </select>

          <div className="music-video-wrap" style={{ width: '100%', aspectRatio: '16/9', marginBottom: '1rem' }}>
            <iframe
              className="music-video-frame"
              src={selectedVideo}
              title={t("calmCorner.videoTitle")}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%', borderRadius: '1rem', border: 'none', background: '#fff' }}
            />
          </div>
          <p className="field-helper" style={{ textAlign: 'center', color: '#64748b' }}>{t("calmCorner.sourceNote")}</p>
        </section>

        {/* Teacher Corner Container */}
        <aside
          className="teacher-corner-link-block speakable-block panel"
          style={{
            flex: '1 1 340px',
            minWidth: 320,
            maxWidth: 600,
            minHeight: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(249, 147, 120, 0.16), rgba(0, 27, 38, 0.92))',
            border: '1px solid rgba(247, 232, 213, 0.12)',
            boxShadow: '0 14px 30px rgba(0, 0, 0, 0.24)',
            borderRadius: '1.25rem',
            color: '#f7e8d5',
            padding: '2rem',
          }}
        >
          <a
            href="/teacher-corner"
            className="services-cta__button"
            style={{ marginBottom: '1rem' }}
          >
            Go to Paint Corner
          </a>
          <a
            href="/regulation"
            className="services-cta__button"
            style={{ marginBottom: '1rem' }}
          >
            Go to Regulation
          </a>
          <a
            href="/reels"
            className="services-cta__button"
          >
            Go to Reels
          </a>
        </aside>
      </div>
    </div>
  );
}

export default CalmCornerPage;
