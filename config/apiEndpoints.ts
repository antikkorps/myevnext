const BASE_URL = process.env.BASE_URL

export const API_ENDPOINTS = {
  //AUTH RELATED
  LOGIN: `${BASE_URL}/auth/signin`,
  REGISTER: `${BASE_URL}/auth/signup`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  FORGOTTEN_PASSWORD: `${BASE_URL}/auth/forgotten-password`,
  RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,

  //USER RELATED
  USERS: `${BASE_URL}/users/all`,
  USERS_PROFILE: `${BASE_URL}/users/me`,
  USER_BY_ID: `${BASE_URL}/users/`,

  //COMPANY RELATED
  COMPANIES: `${BASE_URL}/companies/all`,
  COMPANY_BY_ID: `${BASE_URL}/companies/`,
  COMPANY_BY_USER_ID: `${BASE_URL}/companies/user/`,
}
