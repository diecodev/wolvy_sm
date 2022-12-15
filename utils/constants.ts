export const JWTSECRET = new TextEncoder().encode(process.env.JWT_SECRET as string)
export const baseURL = process.env.BASE_FETCH_URL as string
