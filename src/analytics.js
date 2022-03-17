// Global site tag (gtag.js) - Google Analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-MVTZNR8GXZ');

function track(project, mode) {
  gtag('event', 'view_project', {
    project: project,
    mode: mode,
  })
}

function trackSocial(social) {
  gtag('event', 'view_social', {
    social: social,
  })
}

function trackResumeDownload() {
  gtag('event', 'download_resume', {})
}
