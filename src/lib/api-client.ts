export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

export const isApiConfigured = Boolean(baseUrl);

export async function apiRequest<T>(
  endpoint: string,
  init: RequestInit = {},
): Promise<T> {
  if (!baseUrl) {
    throw new Error(
      "The backend API URL is not configured. Set NEXT_PUBLIC_API_BASE_URL in .env.local.",
    );
  }

  const response = await fetch(
    `${baseUrl}/${endpoint.replace(/^\/+/, "")}`,
    {
      ...init,
      headers: {
        Accept: "application/json",
        ...(init.body ? { "Content-Type": "application/json" } : {}),
        ...init.headers,
      },
    },
  );

  if (!response.ok) {
    const message = await response.text();
    throw new ApiError(
      message || `The backend returned HTTP ${response.status}.`,
      response.status,
    );
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
