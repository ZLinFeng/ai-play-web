import httpClient from "@/request/client"

export namespace Collection {
  export interface TaskParams {
    name?: string
    taskType?: string
    status?: string
  }

  export interface TaskResult {
    id: string
    taskName: string
    taskType: string
    sources: string[]
    startTime: string
    endTime: string
    status: string
    frequency: string
  }
}

export async function tasks(data: any) {
  return httpClient.post("", data)
}
