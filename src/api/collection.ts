import httpClient from "@/request/client"

export namespace Collection {
  export interface TaskParams {
    name?: string
    taskType?: string
    status?: string
  }

  export interface TaskResult {
    id?: number
    taskName: string
    taskType: number
    sources: number[]
    startTime: number
    endTime: number
    status: number
    frequency?: string
  }
}

export async function tasks(data: any) {
  return httpClient.post("", data)
}

export async function addTask(data: Collection.TaskResult) {
  return httpClient.put("collection", data)
}
