export interface YearWinnerResponse {
    years: YearWinnerCount[];
}

export interface YearWinnerCount {
    year: number;
    winnerCount: number
}