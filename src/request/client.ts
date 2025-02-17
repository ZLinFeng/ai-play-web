import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios"

class RequestClient {
  private readonly instance: AxiosInstance

  constructor(options: CreateAxiosDefaults = {}) {
    const defaultOptions: CreateAxiosDefaults = {
      baseURL: "/api",
      timeout: 10_000,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }

    const requestConfig = {
      ...defaultOptions,
      ...options,
      headers: { ...defaultOptions.headers, ...options.headers },
    }

    this.instance = axios.create(requestConfig)

    // 解析响应
    this.instance.interceptors.response.use((response) => {
      const { data: responseData, status } = response
      const { code, msg, data } = responseData
      if (status >= 200 && status < 400 && code === 0) {
        return data
      }
      throw new Error(`Error ${code}: ${msg}`)
    })
  }

  public post<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request(url, { ...config, data, method: "POST" })
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request(url, { ...config, method: "GET" })
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request(url, { ...config, method: "DELETE" })
  }

  public put<T>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request(url, { ...config, data, method: "PUT" })
  }

  public async request<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance({ url, ...config })
      return response as T
    } catch (error: any) {
      throw error.response ? error.response.data : error
    }
  }
}

const httpClient = new RequestClient()

export default httpClient
