export type ThemeCategory = "base" | "holiday";

export interface Theme {
  id: string;
  name: string;
  icon: string;
  category: ThemeCategory;
  blurb: string;
  ornaments: string[];
  accent: string;
  /** Short looping MP4 rendered by the real AetherDesk renderer (optional). */
  video?: string;
  screenshot: string;
}

const media = (id: string, hasVideo = false) => ({
  screenshot: `/media/screens/${id}.jpg`,
  ...(hasVideo ? { video: `/media/videos/${id}.mp4` } : {}),
});

export const themes: Theme[] = [
  {
    id: "spring",
    name: "Spring Blossom",
    icon: "🌸",
    category: "base",
    blurb: "Notched sakura blossoms, tender sprouts and morning dew drifting on a gentle breeze.",
    ornaments: ["Sakura blossom", "Sakura petal", "Spring sprout", "Dew drop"],
    accent: "#F472B6",
    ...media("spring", true),
  },
  {
    id: "summer",
    name: "Summer Solstice",
    icon: "✨",
    category: "base",
    blurb: "Bioluminescent fireflies, golden sunbursts and citrus lamps that dart away from your cursor.",
    ornaments: ["Firefly", "Sunburst", "Palm leaf", "Citrus lamp"],
    accent: "#FACC15",
    ...media("summer"),
  },
  {
    id: "autumn",
    name: "Autumn Harvest",
    icon: "🍁",
    category: "base",
    blurb: "Botanically accurate maple, oak and ginkgo leaves tumbling down past your windows.",
    ornaments: ["Sugar maple", "White oak", "Ginkgo fan", "Acorn"],
    accent: "#EA580C",
    ...media("autumn", true),
  },
  {
    id: "winter",
    name: "Winter Frost",
    icon: "❄️",
    category: "base",
    blurb: "Crystalline icicles, 6-branch snowflakes and a soft snow drift settling on your Dock.",
    ornaments: ["Icicle", "Snowflake", "Pine cone", "Holly"],
    accent: "#7DD3FC",
    ...media("winter", true),
  },
  {
    id: "tropical_dry",
    name: "Tropical Dry · Kemarau",
    icon: "🌺",
    category: "base",
    blurb: "Frangipani, hibiscus and palm fronds for equatorial dry seasons (Apr–Sep).",
    ornaments: ["Kamboja", "Hibiscus", "Palm frond", "Sunburst"],
    accent: "#FB923C",
    ...media("tropical_dry"),
  },
  {
    id: "tropical_wet",
    name: "Tropical Wet · Penghujan",
    icon: "🌧️",
    category: "base",
    blurb: "Lotus, banana leaves with dew and white melati under monsoon rain (Oct–Mar).",
    ornaments: ["Teratai lotus", "Banana leaf", "Melati", "Monsoon dew"],
    accent: "#34D399",
    ...media("tropical_wet", true),
  },
  {
    id: "christmas",
    name: "Christmas Festivitas",
    icon: "🎄",
    category: "holiday",
    blurb: "Faceted C9 lamps, pine trees, candy canes, Bethlehem stars and jingle bells.",
    ornaments: ["C9 lamp", "Pine tree", "Candy cane", "Star", "Jingle bell"],
    accent: "#EF4444",
    ...media("christmas", true),
  },
  {
    id: "ramadan",
    name: "Ramadan Kareem",
    icon: "🌙",
    category: "holiday",
    blurb: "Brass fanous lanterns, hilal crescents, masjid domes and 8-point geometric stars.",
    ornaments: ["Fanous lantern", "Hilal crescent", "Masjid dome", "Rub el Hizb"],
    accent: "#FBBF24",
    ...media("ramadan", true),
  },
  {
    id: "eid_fitr",
    name: "Eid al-Fitr · Idul Fitri",
    icon: "🕌",
    category: "holiday",
    blurb: "Woven ketupat pouches, emerald-gold lanterns, crescents and melati buds.",
    ornaments: ["Ketupat", "Fanous lantern", "Crescent", "Melati"],
    accent: "#10B981",
    ...media("eid_fitr"),
  },
  {
    id: "eid_adha",
    name: "Eid al-Adha",
    icon: "✨",
    category: "holiday",
    blurb: "Golden geometric lattice stars cascading alongside masjid dome lanterns.",
    ornaments: ["Rub el Hizb", "Masjid dome", "Crescent", "Lantern"],
    accent: "#F59E0B",
    ...media("eid_adha"),
  },
  {
    id: "halloween",
    name: "Halloween Spook",
    icon: "🎃",
    category: "holiday",
    blurb: "Jack-o'-lanterns whose eyes flare near your cursor, bats, ghosts and witch hats.",
    ornaments: ["Jack-o'-lantern", "Vampire bat", "Ghost", "Witch hat"],
    accent: "#F97316",
    ...media("halloween", true),
  },
  {
    id: "thanksgiving",
    name: "Thanksgiving Hearth",
    icon: "🦃",
    category: "holiday",
    blurb: "Cornucopias, ribbed pumpkins, golden wheat sheaves and harvest leaves.",
    ornaments: ["Cornucopia", "Pumpkin", "Wheat sheaf", "Oak leaf"],
    accent: "#D97706",
    ...media("thanksgiving"),
  },
  {
    id: "new_year",
    name: "New Year Midnight",
    icon: "🎆",
    category: "holiday",
    blurb: "Firework starbursts, champagne flutes and midnight shimmer stars.",
    ornaments: ["Firework", "Champagne", "Shimmer star", "C9 lamp"],
    accent: "#FDE047",
    ...media("new_year", true),
  },
  {
    id: "cny",
    name: "Lunar New Year",
    icon: "🏮",
    category: "holiday",
    blurb: "Scarlet silk tassel lanterns, Fu lucky knots, hongbao and red plum blossoms.",
    ornaments: ["Tassel lantern", "Fu knot", "Hongbao", "Plum blossom"],
    accent: "#EF4444",
    ...media("cny"),
  },
  {
    id: "diwali",
    name: "Diwali",
    icon: "🪔",
    category: "holiday",
    blurb: "Clay diyas whose flames bow to your cursor, marigold garlands and rangoli stars.",
    ornaments: ["Clay diya", "Marigold", "Rangoli lotus"],
    accent: "#FB923C",
    ...media("diwali"),
  },
  {
    id: "good_friday",
    name: "Good Friday & Easter",
    icon: "🕊️",
    category: "holiday",
    blurb: "White Easter lilies, olive peace branches, pastel eggs and dawn rays.",
    ornaments: ["Easter lily", "Olive branch", "Pastel egg", "Dawn ray"],
    accent: "#C4B5FD",
    ...media("good_friday"),
  },
];

export const baseThemes = themes.filter((t) => t.category === "base");
export const holidayThemes = themes.filter((t) => t.category === "holiday");
export const videoThemes = themes.filter((t) => t.video);
