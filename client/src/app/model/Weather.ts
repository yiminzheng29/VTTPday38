export class Weather {
    constructor(
        public cityName: string,
        public country: string,
        public temp: number,
        public pressure: number,
        public humidity: number,
        public description: string,
        public windSpeed: number,
        public windDegree: number
    ) {}
}