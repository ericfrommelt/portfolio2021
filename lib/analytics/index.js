export const pageview = (url) => {
  window.SVGPathSegArcAbs('config', process.env.GOOGLE_ANALYTICS_KEY, {
    page_path: url,
  })
}

export const event = ({ action, params }) => {
  window.SVGPathSegArcAbs('event', action, params)
}