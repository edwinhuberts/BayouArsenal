// --- DATABASE ---
const CUSTOM_AMMO_TYPES = {
  compact: ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "High Velocity Ammo", "Bleed (Dumdum) Ammo"],
  medium: ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "High Velocity Ammo", "Bleed (Dumdum) Ammo"],
  long: ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "High Velocity Ammo", "Spitzer Ammo"],
  shotgun: ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon's Breath"],
  special: ["Custom Bolt/Arrow/Ammo"]
};

const weapons = [
  // ==================== 5-SLOT WEAPONS ====================
  { name: "Auto-5", slot: 5 },
  { name: "Maynard Sniper Silencer", slot: 5 },
  { name: "Mosin-Nagant Avtomat", slot: 5 },
  { name: "Nitro Express", slot: 5 },

  // ==================== 4-SLOT WEAPONS ====================
  { name: "Centennial", slot: 4 },
  { name: "Centennial Sniper", slot: 4 },
  { name: "Centennial Trauma", slot: 4 },
  { name: "Crossbow", slot: 4 },
  { name: "Crossbow Deadeye", slot: 4 },
  { name: "Drilling", slot: 4 },
  { name: "Homestead 78", slot: 4 },
  { name: "Infantry 73L", slot: 4 },
  { name: "Infantry 73L Bayonet", slot: 4 },
  { name: "Infantry 73L Sniper", slot: 4 },
  { name: "Krag", slot: 4 },
  { name: "Krag Bayonet", slot: 4 },
  { name: "Krag Silencer", slot: 4 },
  { name: "Krag Sniper", slot: 4 },
  { name: "Lebel 1886", slot: 4 },
  { name: "Lebel 1886 Aperture", slot: 4 },
  { name: "Lebel 1886 Marksman", slot: 4 },
  { name: "Lebel 1886 Talon", slot: 4 },
  { name: "Mako 1895", slot: 4 },
  { name: "Mako 1895 Aperture", slot: 4 },
  { name: "Mako 1895 Claw", slot: 4 },
  { name: "Marathon", slot: 4 },
  { name: "Marathon Swift", slot: 4 },
  { name: "Martini-Henry", slot: 4 },
  { name: "Martini-Henry Deadeye", slot: 4 },
  { name: "Martini-Henry Ironside", slot: 4 },
  { name: "Martini-Henry Marksman", slot: 4 },
  { name: "Martini-Henry Riposte", slot: 4 },
  { name: "Maynard Sniper", slot: 4 },
  { name: "Mosin-Nagant", slot: 4 },
  { name: "Mosin-Nagant Bayonet", slot: 4 },
  { name: "Mosin-Nagant Sniper", slot: 4 },
  { name: "Ranger 73", slot: 4 },
  { name: "Ranger 73 Aperture", slot: 4 },
  { name: "Ranger 73 Swift", slot: 4 },
  { name: "Ranger 73 Talon", slot: 4 },
  { name: "Rival 78", slot: 4 },
  { name: "Rival 78 Trauma", slot: 4 },
  { name: "Romero 77", slot: 4 },
  { name: "Romero 77 Alamo", slot: 4 },
  { name: "Romero 77 Talon", slot: 4 },
  { name: "Slate", slot: 4 },
  { name: "Slate Riposte", slot: 4 },
  { name: "Sparks", slot: 4 },
  { name: "Sparks Silencer", slot: 4 },
  { name: "Sparks Sniper", slot: 4 },
  { name: "Specter 1882", slot: 4 },
  { name: "Specter 1882 Bayonet", slot: 4 },
  { name: "Springfield 1866", slot: 4 },
  { name: "Springfield 1866 Bayonet", slot: 4 },
  { name: "Springfield 1866 Marksman", slot: 4 },
  { name: "Terminus", slot: 4 },
  { name: "Vetterli 71 Cyclone", slot: 4 },
  { name: "Wildland", slot: 4 },

  // ==================== 3-SLOT WEAPONS ====================
  { name: "1865 Carbine", slot: 3 },
  { name: "1865 Carbine Aperture", slot: 3 },
  { name: "1865 Carbine Silencer", slot: 3 },
  { name: "1890 Cavalry", slot: 3 },
  { name: "Auto-5 Shorty", slot: 3 },
  { name: "Berthier 1892", slot: 3 },
  { name: "Berthier 1892 Deadeye", slot: 3 },
  { name: "Berthier 1892 Marksman", slot: 3 },
  { name: "Berthier 1892 Riposte", slot: 3 },
  { name: "Bomb Lance", slot: 3 },
  { name: "Burgess", slot: 3 },
  { name: "Burgess Bayonet", slot: 3 },
  { name: "Burgess Trauma", slot: 3 },
  { name: "Dolch 96 Precision", slot: 3 },
  { name: "Frontier 73C", slot: 3 },
  { name: "Frontier 73C Marksman", slot: 3 },
  { name: "Frontier 73C Silencer", slot: 3 },
  { name: "Hunting Bow", slot: 3 },
  { name: "LeMat Carbine", slot: 3 },
  { name: "LeMat Carbine Marksman", slot: 3 },
  { name: "Mosin Obrez Match", slot: 3 },
  { name: "Mosin Obrez Sharpeye", slot: 3 },
  { name: "Officer Carbine", slot: 3 },
  { name: "Officer Carbine Deadeye", slot: 3 },
  { name: "Uppercut Deadeye", slot: 3 },
  { name: "Uppercut Precision", slot: 3 },
  { name: "Vetterli 71", slot: 3 },
  { name: "Vetterli 71 Bayonet", slot: 3 },
  { name: "Vetterli 71 Deadeye", slot: 3 },
  { name: "Vetterli 71 Marksman", slot: 3 },
  { name: "Vetterli 71 Silencer", slot: 3 },

  // ==================== 2-SLOT WEAPONS ====================
  { name: "Bomb Launcher", slot: 2 },
  { name: "Bornheim No. 3 Match", slot: 2 },
  { name: "Centennial Pointman", slot: 2 },
  { name: "Centennial Shorty", slot: 2 },
  { name: "Centennial Shorty Silencer", slot: 2 },
  { name: "Chu Ko Nu", slot: 2 },
  { name: "Combat Axe", slot: 2 },
  { name: "Dolch 96", slot: 2 },
  { name: "Dolch 96 Bullseye", slot: 2 },
  { name: "Dolch 96 Claw", slot: 2 },
  { name: "Drilling Hatchet", slot: 2 },
  { name: "Drilling Shorty", slot: 2 },
  { name: "Flame Rifle", slot: 2 },
  { name: "Haymaker", slot: 2 },
  { name: "Katana", slot: 2 },
  { name: "Mosin Obrez", slot: 2 },
  { name: "Mosin Obrez Extended", slot: 2 },
  { name: "Mosin Obrez Mace", slot: 2 },
  { name: "Nagant M1895 Deadeye", slot: 2 },
  { name: "Nagant M1895 Precision", slot: 2 },
  { name: "Railroad Hammer", slot: 2 },
  { name: "Rival 78 Mace", slot: 2 },
  { name: "Rival 78 Shorty", slot: 2 },
  { name: "Romero 77 Hatchet", slot: 2 },
  { name: "Romero 77 Shorty", slot: 2 },
  { name: "Scottfield Precision", slot: 2 },
  { name: "Specter 1882 Shorty", slot: 2 },
  { name: "Springfield 1866 Bullseye", slot: 2 },
  { name: "Springfield 1866 Shorty", slot: 2 },
  { name: "Springfield 1866 Striker", slot: 2 },
  { name: "Terminus Shorty", slot: 2 },
  { name: "Uppercut", slot: 2 },
  { name: "Vandal 73C", slot: 2 },
  { name: "Vandal 73C Bullseye", slot: 2 },
  { name: "Vandal 73C Striker", slot: 2 },

  // ==================== 1-SLOT WEAPONS ====================
  { name: "Baseball Bat", slot: 1 },
  { name: "Bornheim No. 3", slot: 1 },
  { name: "Bornheim No. 3 Extended", slot: 1 },
  { name: "Bornheim No. 3 Silencer", slot: 1 },
  { name: "Cavalry Saber", slot: 1 },
  { name: "Conversion", slot: 1 },
  { name: "Conversion Chain Pistol", slot: 1 },
  { name: "Hand Crossbow", slot: 1 },
  { name: "LeMat", slot: 1 },
  { name: "Machete", slot: 1 },
  { name: "Nagant M1895", slot: 1 },
  { name: "Nagant M1895 Silencer", slot: 1 },
  { name: "New Army", slot: 1 },
  { name: "New Army Swift", slot: 1 },
  { name: "Officer", slot: 1 },
  { name: "Officer Brawler", slot: 1 },
  { name: "Pax", slot: 1 },
  { name: "Pax Claw", slot: 1 },
  { name: "Pax Trueshot", slot: 1 },
  { name: "Scottfield", slot: 1 },
  { name: "Scottfield Brawler", slot: 1 },
  { name: "Scottfield Spitfire", slot: 1 },
  { name: "Scottfield Swift", slot: 1 },
  { name: "Sparks Pistol", slot: 1 },
  { name: "Sparks Pistol Silencer", slot: 1 }
];

const MELEE_TOOLS = ["Knuckle Knife", "Duster", "Knife", "Heavy Knife", "Throwing Knives", "Throwing Axes", "Throwing Spear"];
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
