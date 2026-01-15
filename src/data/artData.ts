export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  year: number;
  style: string;
  period: string;
  theme: string;
  description: string;
  imageUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  birthYear: number;
  deathYear: number;
  nationality: string;
  biography: string;
  notableWorks: string[];
  style: string;
  imageUrl: string;
}

export interface ArtPeriod {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  keyArtists: string[];
  characteristics: string[];
}

export interface ArtStyle {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  techniques: string[];
  examples: string[];
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Starry Night",
    artist: "Vincent van Gogh",
    artistId: "vangogh",
    year: 1889,
    style: "Post-Impressionism",
    period: "Modern Art",
    theme: "Nature",
    description: "A swirling night sky over a village, painted during Van Gogh's stay at the Saint-Paul-de-Mausole asylum.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    id: "2",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    artistId: "davinci",
    year: 1503,
    style: "Renaissance",
    period: "Renaissance",
    theme: "Portraits",
    description: "Perhaps the most famous portrait in the world, known for her enigmatic smile and masterful sfumato technique.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    id: "3",
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    artistId: "dali",
    year: 1931,
    style: "Surrealism",
    period: "Modern Art",
    theme: "Abstract",
    description: "Famous for its melting clocks, this painting explores the concept of soft and hard and the relativity of time.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
  },
  {
    id: "4",
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    artistId: "hokusai",
    year: 1831,
    style: "Ukiyo-e",
    period: "Edo Period",
    theme: "Nature",
    description: "An iconic Japanese woodblock print depicting a towering wave with Mount Fuji in the background.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg"
  },
  {
    id: "5",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    artistId: "vermeer",
    year: 1665,
    style: "Baroque",
    period: "Dutch Golden Age",
    theme: "Portraits",
    description: "Often called the 'Mona Lisa of the North', this tronie depicts a girl in exotic dress with a large pearl earring.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg"
  },
  {
    id: "6",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    artistId: "botticelli",
    year: 1485,
    style: "Renaissance",
    period: "Renaissance",
    theme: "Mythology",
    description: "Depicts the goddess Venus arriving at the shore after her birth, emerging from the sea as a fully grown woman.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
  },
  {
    id: "7",
    title: "Water Lilies",
    artist: "Claude Monet",
    artistId: "monet",
    year: 1906,
    style: "Impressionism",
    period: "Impressionism",
    theme: "Nature",
    description: "Part of a series of approximately 250 oil paintings depicting Monet's flower garden at Giverny.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg"
  },
  {
    id: "8",
    title: "The Scream",
    artist: "Edvard Munch",
    artistId: "munch",
    year: 1893,
    style: "Expressionism",
    period: "Modern Art",
    theme: "Emotion",
    description: "An iconic image of human anxiety, showing a figure with an agonized expression against a tumultuous orange sky.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
  }
];

export const artists: Artist[] = [
  {
    id: "vangogh",
    name: "Vincent van Gogh",
    birthYear: 1853,
    deathYear: 1890,
    nationality: "Dutch",
    biography: "A Post-Impressionist painter whose work had a far-reaching influence on 20th-century art. His bold colors and emotional expression made him one of the most famous painters in history.",
    notableWorks: ["Starry Night", "Sunflowers", "The Bedroom"],
    style: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
  },
  {
    id: "davinci",
    name: "Leonardo da Vinci",
    birthYear: 1452,
    deathYear: 1519,
    nationality: "Italian",
    biography: "The quintessential Renaissance man, Leonardo was a painter, sculptor, architect, musician, mathematician, engineer, inventor, and writer. His paintings are among the most famous in the world.",
    notableWorks: ["Mona Lisa", "The Last Supper", "Vitruvian Man"],
    style: "Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/800px-Leonardo_self.jpg"
  },
  {
    id: "monet",
    name: "Claude Monet",
    birthYear: 1840,
    deathYear: 1926,
    nationality: "French",
    biography: "A founder of French Impressionist painting, Monet's approach to landscape painting became the inspiration for the entire Impressionist movement.",
    notableWorks: ["Water Lilies", "Impression, Sunrise", "Haystacks"],
    style: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg"
  },
  {
    id: "dali",
    name: "Salvador Dalí",
    birthYear: 1904,
    deathYear: 1989,
    nationality: "Spanish",
    biography: "A leading figure in the Surrealist movement, Dalí was known for his technical skill, precise draftsmanship, and striking, bizarre imagery.",
    notableWorks: ["The Persistence of Memory", "The Elephants", "Swans Reflecting Elephants"],
    style: "Surrealism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/800px-Salvador_Dal%C3%AD_1939.jpg"
  },
  {
    id: "vermeer",
    name: "Johannes Vermeer",
    birthYear: 1632,
    deathYear: 1675,
    nationality: "Dutch",
    biography: "A Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life, known for his masterful treatment of light.",
    notableWorks: ["Girl with a Pearl Earring", "The Milkmaid", "The Art of Painting"],
    style: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg/800px-Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg"
  },
  {
    id: "botticelli",
    name: "Sandro Botticelli",
    birthYear: 1445,
    deathYear: 1510,
    nationality: "Italian",
    biography: "An Italian painter of the Early Renaissance, Botticelli belonged to the Florentine School under the patronage of Lorenzo de' Medici.",
    notableWorks: ["The Birth of Venus", "Primavera", "The Mystical Nativity"],
    style: "Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/800px-Sandro_Botticelli_083.jpg"
  }
];

export const artPeriods: ArtPeriod[] = [
  {
    id: "renaissance",
    name: "Renaissance",
    startYear: 1400,
    endYear: 1600,
    description: "A cultural movement that profoundly affected European intellectual life, emphasizing humanism and classical learning.",
    keyArtists: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Botticelli"],
    characteristics: ["Linear perspective", "Realistic proportions", "Classical themes", "Sfumato technique"]
  },
  {
    id: "baroque",
    name: "Baroque",
    startYear: 1600,
    endYear: 1750,
    description: "An artistic style that used exaggerated motion and clear, easily interpreted detail to produce drama and grandeur.",
    keyArtists: ["Caravaggio", "Rembrandt", "Vermeer", "Rubens"],
    characteristics: ["Dramatic lighting", "Rich colors", "Emotional intensity", "Ornate detail"]
  },
  {
    id: "impressionism",
    name: "Impressionism",
    startYear: 1860,
    endYear: 1890,
    description: "A movement characterized by relatively small, thin brush strokes and emphasis on accurate depiction of light.",
    keyArtists: ["Claude Monet", "Pierre-Auguste Renoir", "Edgar Degas", "Camille Pissarro"],
    characteristics: ["Visible brushstrokes", "Light emphasis", "Ordinary subjects", "Open composition"]
  },
  {
    id: "modern",
    name: "Modern Art",
    startYear: 1860,
    endYear: 1970,
    description: "Art that rejected traditional techniques and styles, experimenting with new ways of seeing and fresh ideas.",
    keyArtists: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Wassily Kandinsky"],
    characteristics: ["Abstract forms", "Experimental techniques", "Breaking conventions", "Personal expression"]
  }
];

export const artStyles: ArtStyle[] = [
  {
    id: "impressionism",
    name: "Impressionism",
    description: "A 19th-century art movement characterized by small, visible brush strokes and emphasis on light and movement.",
    characteristics: ["Visible brushstrokes", "Emphasis on light", "Ordinary subject matter", "Movement capture"],
    techniques: ["En plein air painting", "Short brush strokes", "Pure unblended colors", "Wet-on-wet technique"],
    examples: ["Water Lilies", "Impression, Sunrise", "Dance at Le Moulin de la Galette"]
  },
  {
    id: "surrealism",
    name: "Surrealism",
    description: "A cultural movement that aimed to resolve the contradictory conditions of dream and reality into an absolute reality.",
    characteristics: ["Dreamlike scenes", "Unexpected juxtapositions", "Symbolic imagery", "Unconscious mind"],
    techniques: ["Automatism", "Frottage", "Decalcomania", "Collage"],
    examples: ["The Persistence of Memory", "The Elephants", "The Son of Man"]
  },
  {
    id: "realism",
    name: "Realism",
    description: "An artistic movement that attempted to represent subject matter truthfully, without artificiality.",
    characteristics: ["Accurate depiction", "Contemporary subjects", "Social themes", "Detailed observation"],
    techniques: ["Precise brushwork", "Tonal gradation", "Perspective accuracy", "Natural lighting"],
    examples: ["The Stone Breakers", "Olympia", "A Burial at Ornans"]
  },
  {
    id: "expressionism",
    name: "Expressionism",
    description: "A modernist movement emphasizing emotional experience over physical reality.",
    characteristics: ["Bold colors", "Distorted forms", "Emotional intensity", "Subjective perspective"],
    techniques: ["Thick paint application", "Exaggerated lines", "Intense contrasts", "Symbolic color"],
    examples: ["The Scream", "The Starry Night", "The Blue Rider"]
  },
  {
    id: "abstract",
    name: "Abstract Art",
    description: "Art that does not attempt to represent external reality, but seeks to achieve its effect using shapes, colors, and textures.",
    characteristics: ["Non-representational", "Geometric forms", "Color relationships", "Emotional expression"],
    techniques: ["Color field", "Geometric abstraction", "Action painting", "Minimalism"],
    examples: ["Composition VIII", "Black Square", "No. 5, 1948"]
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "Who painted 'Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    correctAnswer: "Vincent van Gogh",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which art movement is characterized by visible brushstrokes and emphasis on light?",
    options: ["Baroque", "Surrealism", "Impressionism", "Expressionism"],
    correctAnswer: "Impressionism",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "The 'Mona Lisa' was painted during which period?",
    options: ["Baroque", "Renaissance", "Modern Art", "Impressionism"],
    correctAnswer: "Renaissance",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Which artist is famous for painting melting clocks?",
    options: ["René Magritte", "Salvador Dalí", "Max Ernst", "Joan Miró"],
    correctAnswer: "Salvador Dalí",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "What nationality was Johannes Vermeer?",
    options: ["French", "Italian", "Dutch", "Spanish"],
    correctAnswer: "Dutch",
    difficulty: "Medium"
  },
  {
    id: 6,
    question: "Which painting style emerged in France in the 1860s?",
    options: ["Expressionism", "Cubism", "Impressionism", "Surrealism"],
    correctAnswer: "Impressionism",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "'The Scream' was painted by which artist?",
    options: ["Edvard Munch", "Ernst Ludwig Kirchner", "Emil Nolde", "Franz Marc"],
    correctAnswer: "Edvard Munch",
    difficulty: "Easy"
  },
  {
    id: 8,
    question: "Which technique did Leonardo da Vinci use to create soft, hazy backgrounds?",
    options: ["Impasto", "Sfumato", "Chiaroscuro", "Pointillism"],
    correctAnswer: "Sfumato",
    difficulty: "Hard"
  }
];

export const themes = [
  { id: "nature", name: "Nature", icon: "🌿", count: 45 },
  { id: "portraits", name: "Portraits", icon: "👤", count: 38 },
  { id: "mythology", name: "Mythology", icon: "⚡", count: 22 },
  { id: "religion", name: "Religion", icon: "✨", count: 31 },
  { id: "abstract", name: "Abstract", icon: "🎨", count: 28 },
  { id: "emotion", name: "Emotion", icon: "💭", count: 19 }
];
