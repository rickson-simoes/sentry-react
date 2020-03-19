import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: process.env.REACT_APP_SENTRY_PROJECT_RELEASE
});