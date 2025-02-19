import httpClient from "@/request/client"

export namespace Collection {
  export interface TaskParams {
    name?: string
    taskType?: string
    status?: string
    current: number
    size: number
  }

  export interface TaskResult {
    id?: number
    taskName: string
    taskType: number
    sources: number[]
    keywords: string[]
    startTime: number
    endTime: number
    status?: string
    frequency?: string
  }
}

export async function tasks(data: Collection.TaskParams) {
  return httpClient.post<{ records: Collection.TaskResult[] }>(
    "collection",
    data,
  )
}

export async function addTask(data: Collection.TaskResult) {
  return httpClient.put("collection", data)
}
