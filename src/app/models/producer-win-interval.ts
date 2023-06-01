export interface ProducerWinIntervalResponse {
    min: ProducerWinInterval[];
    max: ProducerWinInterval[];
}

export interface ProducerWinInterval {
    producer: string;
    interval: number
    previousWin: number
    followingWin: number
}