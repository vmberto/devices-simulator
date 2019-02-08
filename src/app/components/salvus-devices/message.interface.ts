export interface DeviceMessage {
    temperature: number,
    deviceId: number,
    createdAt: Date
}

export interface DeviceSignal {
    deviceId: number,
    status: boolean
}