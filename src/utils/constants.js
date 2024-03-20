export const API_MOVIES = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDkwZGNjOTE2NjEwZTg2ZmExOGNjNTc2YTVjMTdiZSIsInN1YiI6IjY1Zjg0NDFhNTk0Yzk0MDE3YzNhM2ZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tVYQzvgmSUV_bnCTAFy2shBHhgUhWjFql9u5GYR8sgA'
    }
};

export const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANG = [
    {identify: "en", name: "English"},
    {identify: "hindi", name: "Hindi"},
    {identify: "gujarati", name: "Gujarati"},
]