export const AppProperties = {
  ACCESS_TOKEN_KEY: 'accessToken',
  ACTIVE_THEME: 'activeTheme',
  BASE_URL: process.env.REACT_APP_BASE_URL,
  DEFAULT_LANGUAGE: {
    code: 'en',
    name: 'English'
  },
  LANGUAGES: [{
    code: 'en',
    name: 'English'
  }, {
    code: 'fr',
    name: 'French'
  }, {
    code: 'es',
    name: 'Spanish'
  }],
  ROLES: 'roles',
  RULES_UPDATED: 'rulesUpdated',
  SELECTED_LANGUAGE_KEY: 'language',
  SIDEBAR_EXPANDED: 'sidebarExpanded',
  TABLE_PROPS: {
    LIMIT: 10
  },
  TENANT: 'tenant',
  USER_ID: 'userId',
  USER_SESSION: 'userSession'
};
