export interface Pokemon{
    id: number,
    name: {
        english: string,
        japanese: string,
        chinese: string,
        french: string
    },
    type:[],
    base:{
        HP: number,
        Attack: number,
        Defense: number,
        "Sp. Attack": number,
        "Sp. Defense": number,
        Speed: number
    },
    species: string,
    description: string,
    evolution: {
      next: [[]]
    },
    profile: {
      height: string,
      weight: string,
      egg: [],
      ability: [[],[]],
      gender: string
    },
    image: {
      sprite: string,
      thumbnail: string,
      hires: string
    }
  }