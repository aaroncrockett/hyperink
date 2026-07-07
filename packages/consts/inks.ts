export type InkEntry = {
  name: string;
  id: string;
  type: string;
  receipe: string;
};

export type Ink = {
  name: string;
  id: string;
  brand: string;
};

export const RecipeMasuringSystems = {
  percent: "%",
  drops: "d",
  remainder: "remainder",
};

export const INK_TYPES = {
  custom: "custom",
  branded: "standard",
};
export const INKS: Ink[] = [

//   { name: "Black", id: "BLK", brand: "Dynamic" },
//   { name: "White", id: "WHT", brand: "Dynamic" },

  { name: "Fire Red", id: "FRD", brand: "Dynamic" },
  { name: "Chinese Red", id: "RD2", brand: "Dynamic" },
//   { name: "Bordeaux Red", id: "BRD", brand: "Dynamic" },

  { name: "Canary Yellow", id: "YD4", brand: "Dynamic" },
//   { name: "Golden Yellow", id: "GYL", brand: "Dynamic" },
//   { name: "Orange", id: "ORG", brand: "Dynamic" },

//   { name: "Lime Green", id: "LGR", brand: "Dynamic" },
//   { name: "Green", id: "GRN", brand: "Dynamic" },
//   { name: "Dark Green", id: "DGR", brand: "Dynamic" },
//   { name: "Olive Green", id: "OGR", brand: "Dynamic" },
  {name: "Hot Pink", id: "HTP", brand:"Dynamic"}

  { name: "Sky Blue", id: "SKB", brand: "Dynamic" },
  { name: "Blue", id: "BLU", brand: "Dynamic" },
  { name: "Electric Blue", id: "ELB", brand: "Dynamic" },
//   { name: "Navy Blue", id: "NBL", brand: "Dynamic" },

//   { name: "Lavender", id: "LAV", brand: "Dynamic" },
//   { name: "Purple", id: "PUR", brand: "Dynamic" },
  { name: "Tropical Purple", id: "TRP", brand: "Dynamic" },
//   { name: "Magenta", id: "MAG", brand: "Dynamic" },

//   { name: "Brown", id: "BRN", brand: "Dynamic" },

  {
    name: "Ultra Light Gray Smoke",
    id: "ULGS",
    brand: "Dynamic",
  },
  {
    name: "Light Gray Smoke",
    id: "LGS",
    brand: "Dynamic",
  },
  {
    name: "Medium Gray Smoke",
    id: "MGS",
    brand: "Dynamic",
  },
  {
    name: "Dark Gray Smoke",
    id: "DGS",
    brand: "Dynamic",
  },
  {
    name: "Ultra Dark Gray Smoke",
    id: "UDGS",
    brand: "Dynamic",
  },
];
