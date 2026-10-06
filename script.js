// --- DATABASE ---
const CUSTOM_AMMO_TYPES = {
  compact: ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "High Velocity Ammo", "Bleed (Dumdum) Ammo"],
  medium: ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "High Velocity Ammo", "Bleed (Dumdum) Ammo"],
  long: ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "High Velocity Ammo", "Spitzer Ammo"],
  shotgun: ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon's Breath"],
  special: ["Custom Bolt/Arrow/Ammo"]
};

const WEAPONS = [
  // 3-SLOT WEAPONS
  { name: "Berthier Mle 1892", slots: 3, ammo: "Long Ammo", custom: ["Spitzer Ammo", "Incendiary Ammo"] },
  { name: "Bomb Lance", slots: 3, ammo: "Special Ammo", custom: ["Dragon's Breath", "Steel Bolt", "Waxed Charge"] },
  { name: "Crossbow", slots: 3, ammo: "Special Ammo", custom: ["Shotgun Bolt", "Explosive Bolt", "Poison Bolt"] },
  { name: "Crown & King Auto-5", slots: 3, ammo: "Shotgun", custom: ["Slug Ammo", "Flechette Ammo"] },
  { name: "Drilling", slots: 3, ammo: "Medium / Shotgun", custom: ["Bleed (Dumdum) Ammo", "Slug Ammo"] },
  { name: "Infantry 73L", slots: 3, ammo: "Compact Ammo", custom: ["FMJ Ammo", "Incendiary Ammo"] },
  { name: "Krag Rifle", slots: 3, ammo: "Long Ammo", custom: ["FMJ Ammo", "Incendiary Ammo"] },
  { name: "Lebel 1886", slots: 3, ammo: "Long Ammo", custom: ["FMJ Ammo", "Spitzer Ammo"] },
  { name: "LeMat Carbine", slots: 3, ammo: "Compact / Shotgun", custom: ["FMJ Ammo", "Slug Ammo"] },
  { name: "Mako 1895 Carbine", slots: 3, ammo: "Long Ammo", custom: ["Explosive Ammo", "FMJ Ammo"] },
  { name: "Marathon", slots: 3, ammo: "Compact Ammo", custom: ["FMJ Ammo", "Poison Ammo"] },
  { name: "Martini-Henry IC1", slots: 3, ammo: "Long Ammo", custom: ["Explosive Ammo", "Incendiary Ammo", "FMJ Ammo"] },
  { name: "Mosin-Nagant M1891", slots: 3, ammo: "Long Ammo", custom: ["Spitzer Ammo", "FMJ Ammo"] },
  { name: "Mosin-Nagant M1891 Avtomat", slots: 3, ammo: "Long Ammo", custom: [] },
  { name: "Nitro Express Rifle", slots: 3, ammo: "Special Ammo", custom: ["Shredder Ammo"] },
  { name: "Romero 77", slots: 3, ammo: "Shotgun", custom: ["Slug Ammo", "Half-Slug", "Dragon's Breath", "Penny Shot"] },
  { name: "Sparks LRR", slots: 3, ammo: "Long Ammo", custom: ["Poison Ammo", "FMJ Ammo", "Incendiary Ammo"] },
  { name: "Specter 1882", slots: 3, ammo: "Shotgun", custom: ["Slug Ammo", "Flechette Ammo"] },
  { name: "Vetterli 71 Karabiner", slots: 3, ammo: "Medium Ammo", custom: ["High Velocity Ammo", "Silenced / FMJ Ammo"] },
  { name: "Winfield 1887 Terminus", slots: 3, ammo: "Shotgun", custom: ["Levering Slugs", "Flechette Ammo"] },
  { name: "Winfield M1873", slots: 3, ammo: "Compact Ammo", custom: ["High Velocity Ammo", "FMJ Ammo"] },
  { name: "Winfield M1873 Swift", slots: 3, ammo: "Compact Ammo", custom: ["High Velocity Ammo", "FMJ Ammo"] },
  { name: "Winfield M1876 Centennial", slots: 3, ammo: "Medium Ammo", custom: ["High Velocity Ammo", "Poison Ammo"] },
  { name: "Winfield Slate", slots: 3, ammo: "Shotgun", custom: ["Slug Ammo", "Penny Shot"] },

  // 2-SLOT WEAPONS
  { name: "Bornheim No. 3 Match", slots: 2, ammo: "Compact Ammo", custom: ["High Velocity Ammo", "Incendiary Ammo"] },
  { name: "Caldwell Rival 78 Handcannon", slots: 2, ammo: "Shotgun", custom: ["Slug Ammo", "Flechette Ammo"] },
  { name: "Combat Axe", slots: 2, ammo: "Melee", custom: [] },
  { name: "Dolch 96 Precision", slots: 2, ammo: "Special Ammo", custom: ["FMJ Ammo"] },
  { name: "Hunting Bow", slots: 2, ammo: "Special Ammo", custom: ["Poison Arrow", "Concertina Arrow", "Frag Arrow"] },
  { name: "Katana", slots: 2, ammo: "Melee", custom: [] },
  { name: "Mosin-Nagant M1891 Obrez", slots: 2, ammo: "Long Ammo", custom: ["Spitzer Ammo"] },
  { name: "Nagant M1895 Precision", slots: 2, ammo: "Compact Ammo", custom: ["Poison Ammo", "High Velocity Ammo"] },
  { name: "Romero 77 Handcannon", slots: 2, ammo: "Shotgun", custom: ["Slug Ammo", "Dragon's Breath"] },
  { name: "Romero 77 Hatchet", slots: 2, ammo: "Shotgun / Melee", custom: ["Slug Ammo", "Penny Shot"] },
  { name: "Scottfield Model 3 Precision", slots: 2, ammo: "Medium Ammo", custom: ["FMJ Ammo", "High Velocity Ammo"] },
  { name: "Specter 1882 Compact", slots: 2, ammo: "Shotgun", custom: ["Flechette Ammo", "Slug Ammo"] },
  { name: "Springfield 1866 Compact", slots: 2, ammo: "Medium Ammo", custom: ["Bleed (Dumdum) Ammo", "Explosive Ammo"] },
  { name: "Vetterli 71 Karabiner Cyclone", slots: 2, ammo: "Medium Ammo", custom: ["FMJ Ammo", "High Velocity Ammo"] },
  { name: "Winfield 1887 Terminus Handcannon", slots: 2, ammo: "Shotgun", custom: ["Flechette Ammo"] },
  { name: "Winfield M1873C Vandal", slots: 2, ammo: "Compact Ammo", custom: ["FMJ Ammo", "High Velocity Ammo"] },
  { name: "Winfield M1876 Centennial Shorty", slots: 2, ammo: "Medium Ammo", custom: ["Poison Ammo", "FMJ Ammo"] },

  // 1-SLOT WEAPONS
  { name: "Baseball Bat", slots: 1, ammo: "Melee", custom: [] },
  { name: "Bornheim No. 3", slots: 1, ammo: "Compact Ammo", custom: ["High Velocity Ammo"] },
  { name: "Caldwell 92 New Army", slots: 1, ammo: "Compact Ammo", custom: ["Bleed (Dumdum) Ammo", "FMJ Ammo"] },
  { name: "Caldwell Conversion Pistol", slots: 1, ammo: "Compact Ammo", custom: ["FMJ Ammo"] },
  { name: "Caldwell Conversion Uppercut", slots: 1, ammo: "Long Ammo", custom: ["Explosive Ammo"] },
  { name: "Caldwell Pax", slots: 1, ammo: "Medium Ammo", custom: ["Bleed (Dumdum) Ammo", "FMJ Ammo", "Poison Ammo"] },
  { name: "Caldwell Pax Trueshot", slots: 1, ammo: "Medium Ammo", custom: ["Bleed (Dumdum) Ammo", "High Velocity Ammo"] },
  { name: "Cavalry Saber", slots: 1, ammo: "Melee", custom: [] },
  { name: "Derringer Penny Shot", slots: 1, ammo: "Special Ammo", custom: [] },
  { name: "Dolch 96", slots: 1, ammo: "Special Ammo", custom: ["FMJ Ammo"] },
  { name: "Flare Pistol", slots: 1, ammo: "Special Ammo", custom: [] },
  { name: "Hand Crossbow", slots: 1, ammo: "Special Ammo", custom: ["Poison Bolt", "Choke Bolt", "Chaos Bolt"] },
  { name: "Haymaker", slots: 1, ammo: "Shotgun", custom: ["Slug Ammo"] },
  { name: "LeMat Mark II", slots: 1, ammo: "Compact / Shotgun", custom: ["FMJ Ammo", "Slug Ammo"] },
  { name: "Machete", slots: 1, ammo: "Melee", custom: [] },
  { name: "Nagant M1895", slots: 1, ammo: "Compact Ammo", custom: ["Poison Ammo", "Silencer FMJ"] },
  { name: "Nagant M1895 Officer", slots: 1, ammo: "Compact Ammo", custom: ["High Velocity Ammo", "Bleed (Dumdum) Ammo"] },
  { name: "Railroad Spike", slots: 1, ammo: "Melee", custom: [] },
  { name: "Scottfield Model 3", slots: 1, ammo: "Medium Ammo", custom: ["FMJ Ammo", "High Velocity Ammo"] },
  { name: "Sparks Pistol", slots: 1, ammo: "Long Ammo", custom: ["Poison Ammo", "FMJ Ammo", "Incendiary Ammo"] }
];

const MELEE_TOOLS = ["Knuckle Knife", "Duster", "Knife", "Heavy Knife", "Throwing Knives", "Throwing Axes"];
const MEDICAL_TOOLS = ["First Aid Kit"];
const OTHER_TOOLS = ["Flare Pistol", "Fusees", "Alert Trip Mines", "Concertina Trip Mines", "Poison Trip Mines", "Decoys", "Blank Fire Decoys", "Choke Bombs", "Spyglass", "Electric Lamp"];
const CONSUMABLES = ["Weak Vitality Shot", "Vitality Shot", "Weak Stamina Shot", "Stamina Shot", "Weak Antidote Shot", "Antidote Shot", "Regeneration Shot", "Dynamite Stick", "Waxed Dynamite Stick", "Dynamite Bundle", "Big Dynamite Bundle", "Frag Bomb", "Liquid Fire Bomb", "Fire Bomb", "Hellfire Bomb", "Poison Bomb", "Flash Bomb", "Concertina Bomb", "Sticky Bomb", "Ammo Box", "Tool Box", "Beetle (Stalker)", "Beetle (Fire)"];

const MEME_LOADOUTS = [
  { primary: "Sparks LRR", secondary: "Sparks Pistol", note: "Sparks Poison Overload", ammoOverride: "Poison Ammo" },
  { primary: "Bomb Lance", secondary: "Derringer Penny Shot", note: "The Swamp Executioner" },
  { primary: "Crossbow", secondary: "Hand Crossbow", note: "Robin Hood Mode" },
  { primary: "Mosin-Nagant M1891 Avtomat", secondary: "Caldwell Conversion Uppercut", note: "Spray & Pray" },
  { primary: "Baseball Bat", secondary: "Cavalry Saber", note: "Gangs of New York" },
  { primary: "Romero 77", secondary: "Romero 77 Handcannon", note: "Double Slug Surprise", ammoOverride: "Slug Ammo" },
  { primary: "Hunting Bow", secondary: "Katana", note: "The Silent Samurai" },
  { primary: "Nitro Express Rifle", secondary: "Dolch 96", note: "Bank Breaker" }
];

// --- STATE ---
let quartermaster = false;
let onlyWeapons = false;

// --- UTILS ---
function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function getAmmoDisplay(weapon) {
  // 50% chons för custom ammo om vapnet stödjer det
  if (weapon.custom && weapon.custom.length > 0 && Math.random() < 0.5) {
    const chosenCustom = getRandomItem(weapon.custom);
    return `${weapon.ammo} (${chosenCustom})`;
  }
  return weapon.ammo;
}

// --- LOGIC ---
function toggleQuartermaster() {
  quartermaster = !quartermaster;
  const qmBtn = document.getElementById("qm-btn");
  if (qmBtn) {
    qmBtn.textContent = `Quartermaster: ${quartermaster ? "ON (6 Slots)" : "OFF (5 Slots)"}`;
    qmBtn.classList.toggle("bg-amber-500/20", quartermaster);
    qmBtn.classList.toggle("border-amber-500/60", quartermaster);
    qmBtn.classList.toggle("text-amber-400", quartermaster);
  }
}

function toggleOnlyWeapons() {
  onlyWeapons = !onlyWeapons;
  const weaponsBtn = document.getElementById("weapons-btn");
  const equipmentSection = document.getElementById("equipment-section");
  if (weaponsBtn) {
    weaponsBtn.textContent = `Only Weapons: ${onlyWeapons ? "ON" : "OFF"}`;
    weaponsBtn.classList.toggle("bg-amber-500/20", onlyWeapons);
    weaponsBtn.classList.toggle("border-amber-500/60", onlyWeapons);
    weaponsBtn.classList.toggle("text-amber-400", onlyWeapons);
  }
  if (equipmentSection) {
    equipmentSection.classList.toggle("hidden", onlyWeapons);
  }
}

function rollWeapons() {
  const maxSlots = quartermaster ? 6 : 5;
  let primary = getRandomItem(WEAPONS);
  let availableSlotsForSecondary = maxSlots - primary.slots;

  let validSecondaries = WEAPONS.filter(w => w.slots <= availableSlotsForSecondary);
  let secondary = validSecondaries.length > 0 ? getRandomItem(validSecondaries) : WEAPONS[0];

  // Rendera Primär
  const pName = document.getElementById("primary-name");
  const pSlot = document.getElementById("primary-slot");
  const pAmmo = document.getElementById("primary-ammo");
  if (pName) pName.textContent = primary.name;
  if (pSlot) pSlot.textContent = `${primary.slots}-SLOT`;
  if (pAmmo) pAmmo.textContent = getAmmoDisplay(primary);

  // Rendera Sekundär
  const sName = document.getElementById("secondary-name");
  const sSlot = document.getElementById("secondary-slot");
  const sAmmo = document.getElementById("secondary-ammo");
  if (sName) sName.textContent = secondary.name;
  if (sSlot) sSlot.textContent = `${secondary.slots}-SLOT`;
  if (sAmmo) sAmmo.textContent = getAmmoDisplay(secondary);

  // Uppdatera slot-räknare
  const slotCounter = document.getElementById("slot-counter");
  if (slotCounter) {
    slotCounter.textContent = `${primary.slots + secondary.slots} / ${maxSlots}`;
  }
}

function rollGear() {
  if (onlyWeapons) return;

  const gear
