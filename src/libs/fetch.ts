const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

const fetcher = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> => {
  const res = await fetch(input, init);
  return res.json();
};

const createBaseOptions = (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  params?: any,
) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: params ? JSON.stringify(params) : null,
  };
};

const get = async <T>(url: string) => {
  try {
    const res = await fetcher<T>(`${baseUrl}${url}`, createBaseOptions('GET'));
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const post = async <T>(url: string, params: T) => {
  try {
    const res = await fetcher<T>(
      `${baseUrl}${url}`,
      createBaseOptions('POST', params),
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const put = async <T>(url: string, params: T) => {
  try {
    const res = await fetcher<T>(
      `${baseUrl}${url}`,
      createBaseOptions('PUT', params),
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const del = async <T>(url: string, params: T) => {
  try {
    const res = await fetcher<T>(
      `${baseUrl}${url}`,
      createBaseOptions('DELETE', params),
    );
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { get, post, put, del };
