export default class MovueApi {

    constructor(
        apiKey = process.env.API_KEY,
        baseUrl = 'https://api.themoviedb.org',
        version = 3,
    ) {
        try {
            if (apiKey !== undefined && apiKey.length !== 0) {
                this.apiKey = apiKey;
            }
        } catch (error) {
            throw new Error('You did not define your api key.');
        }
        this.baseUrl = baseUrl;
        this.version = version;
    }

    getApiKey() {
        console.log(process.env.API_KEY);
        return this.apiKey;
    }
}
