export interface StudioWinnerResponse {
    studios: StudioWinner[];
}

export interface StudioWinner {
    name: string;
    winCount: number
}