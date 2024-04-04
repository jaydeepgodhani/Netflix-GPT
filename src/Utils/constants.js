export const NF_LOGO = process.env.REACT_APP_NF_LOGO;

export const USER_AVATAR =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE2YjQ5ZDZjM2NjZTE3Y2YxY2QwNjc2NGY5OWU5ZCIsInN1YiI6IjY2MDk0ZmRjOGEwZTliMDE2MjRlM2I2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qONr4ECCum97wYqia7-e2wT_UH4ohiSJl6xzfRHSvmE",
    },
  };

export const IMG_URL = "http://image.tmdb.org/t/p/w500";

export const LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hn", name: "Hindi" },
  { identifier: "sp", name: "Spanish" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;