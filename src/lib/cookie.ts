import Cookies from 'js-cookie'

const TokenKey = 'mx-token';

export function getToken(): string | null {
  const token = Cookies.get(TokenKey)

  return token || null
}
