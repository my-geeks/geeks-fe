import { env } from '@shared/config/env';

type RequestOptions = RequestInit & {
  path: string;
};

export async function request<T>({ path, ...options }: RequestOptions) {
  const response = await fetch(`${env.apiBaseUrl}${path}`, options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
