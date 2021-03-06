import { registerEnumType } from 'type-graphql'

export enum Galaxy {
  technology = 'technology',
  science = 'science',
  movies_tv = 'movies_tv',
  music = 'music',
  art = 'art',
  gaming = 'gaming',
  podcasts_streams_videos = 'podcasts_streams_videos',
  memes_internet = 'memes_internet',
  funny = 'funny',
  pics_gifs = 'pics_gifs',
  programming = 'programming',
  news = 'news',
  politics = 'politics',
  business_economics_finance = 'business_economics_finance',
  marketplace_deals = 'marketplace_deals',
  animals_pets = 'animals_pets',
  outdoors_nature = 'outdoors_nature',
  reading_writing_literature = 'reading_writing_literature',
  spirituality_religion = 'spirituality_religion',
  philosophy_ethics = 'philosophy_ethics',
  fitness_nutrition = 'fitness_nutrition',
  health = 'health',
  hobbies = 'hobbies',
  sports = 'sports',
  crypto = 'crypto',
  anime = 'anime',
  home_garden = 'home_garden',
  places_travel = 'places_travel',
  food_drink = 'food_drink',
  learning_education = 'learning_education',
  careers = 'careers',
  family_relationships = 'family_relationships',
  law = 'law',
  history = 'history',
  beauty_makeup = 'beauty_makeup',
  crafts_diy = 'crafts_diy',
  fashion = 'fashion',
  celebrity = 'celebrity',
  vehicles = 'vehicles',
  tabletop_games = 'tabletop_games',
  military = 'military',
  activism = 'activism',
  culture_race_ethnicity = 'culture_race_ethnicity',
  sexuality_gender = 'sexuality_gender',
  mens_health = 'mens_health',
  womens_health = 'womens_health',
  addiction = 'addiction',
  trauma = 'trauma',
  nsfw = 'nsfw',
  meta = 'meta'
}

registerEnumType(Galaxy, { name: 'Galaxy' })
