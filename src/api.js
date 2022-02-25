//Base URL
const base_url = "https://api.rawg.io/api/";

// Key things
const key = "bdbdae2ca8f24d4faf1eb5f4c0c913e6"; // YOUR KEY GOES HERE
const key_url = `key=${key}`;

// Getting the date
const getCurrrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting the date
const getCurrrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrrentMonth();
const currentDay = getCurrrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-release&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;



//Game Details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?${key_url}`;
//Game Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${key_url}`;


  