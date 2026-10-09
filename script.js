// ==================== DATABASE ====================
const weapons = [
  // ==================== 5-SLOT WEAPONS ====================
  { name: "Auto-5", slot: 5, type: "shotgun", cost: 600 },
  { name: "Maynard Sniper Silencer", slot: 5, type: "long", cost: 159 },
  { name: "Mosin-Nagant Avtomat", slot: 5, type: "long", cost: 1250 },
  { name: "Nitro Express", slot: 5, type: "special", cost: 1015 },

  // ==================== 4-SLOT WEAPONS ====================
  { name: "Centennial", slot: 4, type: "medium", cost: 157 },
  { name: "Centennial Sniper", slot: 4, type: "medium", cost: 181 },
  { name: "Centennial Trauma", slot: 4, type: "medium", cost: 167 },
  { name: "Crossbow", slot: 4, type: "special", cost: 50 },
  { name: "Crossbow Deadeye", slot: 4, type: "special", cost: 53 },
  { name: "Drilling", slot: 4, type: "medium", cost: 510 },
  { name: "Homestead 78", slot: 4, type: "shotgun", cost: 0 }, // SCARCE
  { name: "Infantry 73L", slot: 4, type: "compact", cost: 78 },
  { name: "Infantry 73L Bayonet", slot: 4, type: "compact", cost: 88 },
  { name: "Infantry 73L Sniper", slot: 4, type: "compact", cost: 90 },
  { name: "Krag", slot: 4, type: "long", cost: 450 },
  { name: "Krag Bayonet", slot: 4, type: "long", cost: 460 },
  { name: "Krag Silencer", slot: 4, type: "long", cost: 517 },
  { name: "Krag Sniper", slot: 4, type: "long", cost: 517 },
  { name: "Lebel 1886", slot: 4, type: "long", cost: 397 },
  { name: "Lebel 1886 Aperture", slot: 4, type: "long", cost: 417 },
  { name: "Lebel 1886 Marksman", slot: 4, type: "long", cost: 437 },
  { name: "Lebel 1886 Talon", slot: 4, type: "long", cost: 407 },
  { name: "Mako 1895", slot: 4, type: "long", cost: 360 },
  { name: "Mako 1895 Aperture", slot: 4, type: "long", cost: 378 },
  { name: "Mako 1895 Claw", slot: 4, type: "long", cost: 370 },
  { name: "Marathon", slot: 4, type: "compact", cost: 68 },
  { name: "Marathon Swift", slot: 4, type: "compact", cost: 95 },
  { name: "Martini-Henry", slot: 4, type: "long", cost: 122 },
  { name: "Martini-Henry Deadeye", slot: 4, type: "long", cost: 128 },
  { name: "Martini-Henry Ironside", slot: 4, type: "long", cost: 159 },
  { name: "Martini-Henry Marksman", slot: 4, type: "long", cost: 134 },
  { name: "Martini-Henry Riposte", slot: 4, type: "long", cost: 132 },
  { name: "Maynard Sniper", slot: 4, type: "long", cost: 139 },
  { name: "Mosin-Nagant", slot: 4, type: "long", cost: 620 },
  { name: "Mosin-Nagant Bayonet", slot: 4, type: "long", cost: 630 },
  { name: "Mosin-Nagant Sniper", slot: 4, type: "long", cost: 713 },
  { name: "Ranger 73", slot: 4, type: "compact", cost: 75 },
  { name: "Ranger 73 Aperture", slot: 4, type: "compact", cost: 79 },
  { name: "Ranger 73 Swift", slot: 4, type: "compact", cost: 128 },
  { name: "Ranger 73 Talon", slot: 4, type: "compact", cost: 85 },
  { name: "Rival 78", slot: 4, type: "shotgun", cost: 170 },
  { name: "Rival 78 Trauma", slot: 4, type: "shotgun", cost: 180 },
  { name: "Romero 77", slot: 4, type: "shotgun", cost: 66 },
  { name: "Romero 77 Alamo", slot: 4, type: "shotgun", cost: 98 },
  { name: "Romero 77 Talon", slot: 4, type: "shotgun", cost: 76 },
  { name: "Slate", slot: 4, type: "shotgun", cost: 313 },
  { name: "Slate Riposte", slot: 4, type: "shotgun", cost: 323 },
  { name: "Sparks", slot: 4, type: "long", cost: 130 },
  { name: "Sparks Silencer", slot: 4, type: "long", cost: 150 },
  { name: "Sparks Sniper", slot: 4, type: "long", cost: 149 },
  { name: "Specter 1882", slot: 4, type: "shotgun", cost: 188 },
  { name: "Specter 1882 Bayonet", slot: 4, type: "shotgun", cost: 198 },
  { name: "Springfield 1866", slot: 4, type: "medium", cost: 38 },
  { name: "Springfield 1866 Bayonet", slot: 4, type: "medium", cost: 48 },
  { name: "Springfield 1866 Marksman", slot: 4, type: "medium", cost: 42 },
  { name: "Terminus", slot: 4, type: "shotgun", cost: 168 },
  { name: "Vetterli 71 Cyclone", slot: 4, type: "medium", cost: 280 },
  { name: "Wildland", slot: 4, type: "compact", cost: 0 }, // SCARCE

  // ==================== 3-SLOT WEAPONS ====================
  { name: "1865 Carbine", slot: 3, type: "medium", cost: 70 },
  { name: "1865 Carbine Aperture", slot: 3, type: "medium", cost: 74 },
  { name: "1865 Carbine Silencer", slot: 3, type: "medium", cost: 80 },
  { name: "1890 Cavalry", slot: 3, type: "compact", cost: 56 },
  { name: "Auto-4 Shorty", slot: 3, type: "shotgun", cost: 300 },
  { name: "Berthier 1892", slot: 3, type: "long", cost: 380 },
  { name: "Berthier 1892 Deadeye", slot: 3, type: "long", cost: 397 },
  { name: "Berthier 1892 Marksman", slot: 3, type: "long", cost: 423 },
  { name: "Berthier 1892 Riposte", slot: 3, type: "long", cost: 390 },
  { name: "Bomb Lance", slot: 3, type: "special", cost: 199 },
  { name: "Burgess", slot: 3, type: "shotgun", cost: 300 },
  { name: "Burgess Bayonet", slot: 3, type: "shotgun", cost: 320 },
  { name: "Burgess Trauma", slot: 3, type: "shotgun", cost: 340 },
  { name: "Dolch 96 Precision", slot: 3, type: "special", cost: 730 },
  { name: "Frontier 73C", slot: 3, type: "compact", cost: 41 },
  { name: "Frontier 73C Marksman", slot: 3, type: "compact", cost: 45 },
  { name: "Frontier 73C Silencer", slot: 3, type: "compact", cost: 47 },
  { name: "Hunting Bow", slot: 3, type: "special", cost: 57 },
  { name: "LeMat Carbine", slot: 3, type: "compact", cost: 115 },
  { name: "LeMat Carbine Marksman", slot: 3, type: "compact", cost: 127 },
  { name: "Mosin Obrez Match", slot: 3, type: "long", cost: 345 },
  { name: "Mosin Obrez Sharpeye", slot: 3, type: "long", cost: 362 },
  { name: "Officer Carbine", slot: 3, type: "compact", cost: 183 },
  { name: "Officer Carbine Deadeye", slot: 3, type: "compact", cost: 192 },
  { name: "Uppercut Deadeye", slot: 3, type: "long", cost: 337 },
  { name: "Uppercut Precision", slot: 3, type: "long", cost: 321 },
  { name: "Vetterli 71", slot: 3, type: "medium", cost: 105 },
  { name: "Vetterli 71 Bayonet", slot: 3, type: "medium", cost: 115 },
  { name: "Vetterli 71 Deadeye", slot: 3, type: "medium", cost: 110 },
  { name: "Vetterli 71 Marksman", slot: 3, type: "medium", cost: 116 },
  { name: "Vetterli 71 Silencer", slot: 3, type: "medium", cost: 120 },

  // ==================== 2-SLOT WEAPONS ====================
  { name: "Bomb Launcher", slot: 2, type: "special", cost: 110 },
  { name: "Bornheim No. 3 Match", slot: 2, type: "compact", cost: 180 },
  { name: "Centennial Pointman", slot: 2, type: "medium", cost: 114 },
  { name: "Centennial Shorty", slot: 2, type: "medium", cost: 103 },
  { name: "Centennial Shorty Silencer", slot: 2, type: "medium", cost: 118 },
  { name: "Chu Ko Nu", slot: 2, type: "special", cost: 75 },
  { name: "Combat Axe", slot: 2, type: "special", cost: 40 },
  { name: "Dolch 96", slot: 2, type: "special", cost: 690 },
  { name: "Dolch 96 Bullseye", slot: 2, type: "special", cost: 725 },
  { name: "Dolch 96 Claw", slot: 2, type: "special", cost: 700 },
  { name: "Drilling Hatchet", slot: 2, type: "medium", cost: 340 },
  { name: "Drilling Shorty", slot: 2, type: "medium", cost: 330 },
  { name: "Flame Rifle", slot: 2, type: "special", cost: 0 }, // SCARCE
  { name: "Haymaker", slot: 2, type: "shotgun", cost: 279 },
  { name: "Katana", slot: 2, type: "special", cost: 115 },
  { name: "Mosin Obrez", slot: 2, type: "long", cost: 290 },
  { name: "Mosin Obrez Extended", slot: 2, type: "long", cost: 350 },
  { name: "Mosin Obrez Mace", slot: 2, type: "long", cost: 300 },
  { name: "Nagant M1895 Deadeye", slot: 2, type: "compact", cost: 30 },
  { name: "Nagant M1895 Precision", slot: 2, type: "compact", cost: 29 },
  { name: "Railroad Hammer", slot: 2, type: "special", cost: 45 },
  { name: "Rival 78 Mace", slot: 2, type: "shotgun", cost: 155 },
  { name: "Rival 78 Shorty", slot: 2, type: "shotgun", cost: 145 },
  { name: "Romero 77 Hatchet", slot: 2, type: "shotgun", cost: 56 },
  { name: "Romero 77 Shorty", slot: 2, type: "shotgun", cost: 46 },
  { name: "Scottfield Precision", slot: 2, type: "medium", cost: 85 },
  { name: "Specter 1882 Shorty", slot: 2, type: "shotgun", cost: 164 },
  { name: "Springfield 1866 Bullseye", slot: 2, type: "medium", cost: 35 },
  { name: "Springfield 1866 Shorty", slot: 2, type: "medium", cost: 33 },
  { name: "Springfield 1866 Striker", slot: 2, type: "medium", cost: 43 },
  { name: "Terminus Shorty", slot: 2, type: "shotgun", cost: 148 },
  { name: "Uppercut", slot: 2, type: "long", cost: 310 },
  { name: "Vandal 73C", slot: 2, type: "compact", cost: 35 },
  { name: "Vandal 73C Bullseye", slot: 2, type: "compact", cost: 37 },
  { name: "Vandal 73C Striker", slot: 2, type: "compact", cost: 45 },

  // ==================== 1-SLOT WEAPONS ====================
  { name: "Baseball Bat", slot: 1, type: "special", cost: 40 },
  { name: "Bornheim No. 3", slot: 1, type: "compact", cost: 146 },
  { name: "Bornheim No. 3 Extended", slot: 1, type: "compact", cost: 203 },
  { name: "Bornheim No. 3 Silencer", slot: 1, type: "compact", cost: 167 },
  { name: "Cavalry Saber", slot: 1, type: "special", cost: 50 },
  { name: "Conversion", slot: 1, type: "compact", cost: 55 },
  { name: "Conversion Chain Pistol", slot: 1, type: "compact", cost: 84 },
  { name: "Hand Crossbow", slot: 1, type: "special", cost: 30 },
  { name: "LeMat", slot: 1, type: "compact", cost: 83 },
  { name: "Machete", slot: 1, type: "special", cost: 30 },
  { name: "Nagant M1895", slot: 1, type: "compact", cost: 24 },
  { name: "Nagant M1895 Silencer", slot: 1, type: "compact", cost: 27 },
  { name: "New Army", slot: 1, type: "compact", cost: 90 },
  { name: "New Army Swift", slot: 1, type: "compact", cost: 108 },
  { name: "Officer", slot: 1, type: "compact", cost: 96 },
  { name: "Officer Brawler", slot: 1, type: "compact", cost: 106 },
  { name: "Pax", slot: 1, type: "medium", cost: 80 },
  { name: "Pax Claw", slot: 1, type: "medium", cost: 90 },
  { name: "Pax Trueshot", slot: 1, type: "medium", cost: 141 },
  { name: "Scottfield", slot: 1, type: "medium", cost: 77 },
  { name: "Scottfield Brawler", slot: 1, type: "medium", cost: 87 },
  { name: "Scottfield Spitfire", slot: 1, type: "medium", cost: 108 },
  { name: "Scottfield Swift", slot: 1, type: "medium", cost: 95 },
  { name: "Sparks Pistol", slot: 1, type: "long", cost: 155 },
  { name: "Sparks Pistol Silencer", slot: 1, type: "long", cost: 178 }
];

// Pristabell för Tools och Consumables
const GEAR_PRICES = {
  // Tools
  "Knife": 40,
  "Heavy Knife": 20,
  "Duster": 30,
  "Knuckle Knife": 50,
  "Throwing Knives": 40,
  "Throwing Axes": 80,
  "Throwing Spear": 145,
  "First Aid Kit": 30,
  "Flare Pistol": 36,
  "Fusees": 10,
  "Choke Bombs": 25,
  "Spyglass": 8,
  "Quad Derringer": 30,
  "Pennyshot Derringer": 100,
  "Alert Trip Mines": 30,
  "Concertina Trip Mines": 90,
  "Poison Trip Mines": 30,
  "Decoys": 6,
  "Blank Fire Decoys": 45,
  "Decoy Fuses": 15,

  // Consumables
  "Weak Vitality Shot": 20,
  "Vitality Shot": 85,
  "Weak Stamina Shot": 60,
  "Stamina Shot": 100,
  "Weak Antidote Shot": 30,
  "Antidote Shot": 55,
  "Weak Regeneration Shot": 40,
  "Regeneration Shot": 105,
  "Dynamite Stick": 18,
  "Waxed Dynamite Stick": 24,
  "Dynamite Bundle": 75,
  "Big Dynamite Bundle": 110,
  "Frag Bomb": 103,
  "Sticky Bomb": 64,
  "Fire Bomb": 30,
  "Liquid Fire Bomb": 35,
  "Hellfire Bomb": 70,
  "Poison Bomb": 25,
  "Concertina Bomb": 48,
  "Flash Bomb": 25,
  "Ammo Box": 65,
  "Tool Box": 25,
  "Stalker Beetle": 45,
  "Fire Beetle": 57,
  "Choke Beetle": 22
};

const MELEE_TOOLS = [
  "Knife", "Heavy Knife", "Duster", "Knuckle Knife", "Throwing Knives", "Throwing Axes", "Throwing Spear"
];

const MEDICAL_TOOLS = [
  "First Aid Kit"
];

const OTHER_TOOLS = [
  "Flare Pistol", "Fusees", "Choke Bombs", "Spyglass", "Quad Derringer", 
  "Pennyshot Derringer", "Alert Trip Mines", "Concertina Trip Mines", 
  "Poison Trip Mines", "Decoys", "Blank Fire Decoys", "Decoy Fuses"
];

const CONSUMABLES = [
  "Weak Vitality Shot", "Vitality Shot", "Weak Stamina Shot", "Stamina Shot", 
  "Weak Antidote Shot", "Antidote Shot", "Weak Regeneration Shot", "Regeneration Shot", 
  "Dynamite Stick", "Waxed Dynamite Stick", "Dynamite Bundle", "Big Dynamite Bundle", 
  "Frag Bomb", "Sticky Bomb", "Fire Bomb", "Liquid Fire Bomb", "Hellfire Bomb", 
  "Poison Bomb", "Concertina Bomb", "Flash Bomb", "Ammo Box", "Tool Box", 
  "Stalker Beetle", "Fire Beetle", "Choke Beetle"
];

// ==================== STATE ====================
let quartermaster = false;
let onlyWeapons = false;
let isRolling = false;
let hasRolledOnce = false;

// ==================== UTILS ====================
function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatPrice(cost) {
  return cost === 0 ? "SCARCE" : `$${cost}`;
}

function canBeDualWielded(weapon) {
  if (!weapon || weapon.slot !== 1) return false;
  const nonDualWieldable = ["Baseball Bat", "Cavalry Saber", "Machete", "Hand Crossbow"];
  return !nonDualWieldable.includes(weapon.name);
}

function getCustomAmmoForWeapon(weapon) {
  if (!weapon || !weapon.name) return [];
  const name = weapon.name;
  
  if (name.includes("Conversion")) return ["FMJ Ammo", "Dumdum Ammo"];
  if (name.includes("Nagant M1895")) return ["Poison Ammo", "High Velocity Ammo"];
  if (name.includes("Officer")) return ["High Velocity Ammo", "Poison Ammo", "Subsonic Ammo"];
  if (name.includes("New Army")) return ["FMJ Ammo", "Dumdum Ammo"];
  if (name.includes("Bornheim")) return ["High Velocity Ammo", "Incendiary Ammo", "Subsonic Ammo"];
  if (name.includes("Marathon")) return ["FMJ Ammo", "Poison Ammo"];
  if (name.includes("Infantry 73L") || name.includes("Frontier 73C") || name.includes("Ranger 73") || name.includes("Vandal 73C")) {
    return ["FMJ Ammo", "High Velocity Ammo", "Incendiary Ammo", "Poison Ammo", "Subsonic Ammo"];
  }
  if (name.includes("LeMat")) return ["FMJ Ammo", "High Velocity Ammo", "Incendiary Ammo"];

  if (name.includes("Centennial")) return ["FMJ Ammo", "Poison Ammo", "High Velocity Ammo", "Subsonic Ammo"];
  if (name.includes("Scottfield")) return ["FMJ Ammo", "Incendiary Ammo", "High Velocity Ammo", "Dumdum Ammo"];
  if (name.includes("Pax")) return ["FMJ Ammo", "Incendiary Ammo", "Dumdum Ammo", "Poison Ammo"];
  if (name.includes("Vetterli")) return ["FMJ Ammo", "Incendiary Ammo", "High Velocity Ammo"];
  if (name.includes("Springfield 1866")) return ["Bleed (Dumdum) Ammo", "Explosive Ammo"];
  if (name.includes("Drilling")) return ["Dumdum Ammo", "FMJ Ammo"];
  if (name.includes("1865 Carbine")) return ["FMJ Ammo", "High Velocity Ammo", "Subsonic Ammo"];
  if (name.includes("Maynard")) return ["High Velocity Ammo", "Subsonic Ammo", "Dumdum Ammo"];
  if (name.includes("Flame Rifle")) return ["🔥!!FIRE!!🔥"];

  if (name.includes("Mosin-Nagant") || name.includes("Mosin Obrez")) return ["Spitzer Ammo", "Incendiary Ammo"];
  if (name.includes("Lebel")) return ["Spitzer Ammo", "Incendiary Ammo"];
  if (name.includes("Krag")) return ["Incendiary Ammo", "FMJ Ammo", "Subsonic Ammo"];
  if (name.includes("Sparks")) return ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "Subsonic Ammo"];
  if (name.includes("Martini-Henry")) return ["Explosive Ammo", "Incendiary Ammo", "Dumdum Ammo"];
  if (name.includes("Berthier")) return ["Spitzer Ammo", "Incendiary Ammo"];
  if (name.includes("Uppercut")) return ["Explosive Ammo", "Incendiary Ammo", "FMJ Ammo"];
  if (name.includes("Mako 1895")) return ["Explosive Ammo", "FMJ Ammo"];

  if (name.includes("Romero")) return ["Slug Ammo", "Penny Shot", "Dragon Breath", "Starshell"];
  if (name.includes("Rival")) return ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon Breath"];
  if (name.includes("Specter")) return ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon Breath"];
  if (name.includes("Terminus")) return ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon Breath"];
  if (name.includes("Slate")) return ["Slug Ammo", "Penny Shot"];
  if (name.includes("Auto-5") || name.includes("Auto-4")) return ["Slug Ammo", "Penny Shot", "Flechette"];
  if (name.includes("Burgess")) return ["Slug Ammo", "Penny Shot", "Flechette", "Dragon Breath"];
  if (name.includes("Homestead")) return ["Slug Ammo", "Penny Shot", "Dragon Breath", "Flechette"];
  
  if (name.includes("Hand Crossbow")) return ["Poison Bolt", "Choke Bolt", "Dragon Bolt"];
  if (name.includes("Crossbow")) return ["Shot Bolt", "Explosive Bolt", "Steel Bolt"];
  if (name.includes("Bomb Lance") || name.includes("Bomb Launcher")) return ["Steel Ball", "Dragon Breath"];
  if (name.includes("Dolch")) return ["FMJ Ammo"];

  return [];
}

function getAmmoDisplay(weapon) {
  if (!weapon) return { text: "STANDARD" };
  
  const customList = getCustomAmmoForWeapon(weapon);
  if (customList.length > 0 && Math.random() < 0.5) {
    const chosenCustom = getRandomItem(customList);
    return {
      text: `${weapon.type ? weapon.type.toUpperCase() : "SPECIAL"} (${chosenCustom})`
    };
  }
  
  return {
    text: weapon.type ? weapon.type.toUpperCase() : "STANDARD"
  };
}

// ==================== CORE LOGIC ====================
function toggleQuartermaster() {
  quartermaster = !quartermaster;
  const qmBtn = document.getElementById("qm-btn");
  if (qmBtn) {
    qmBtn.textContent = `Quartermaster: ${quartermaster ? "ON (6 Slots)" : "OFF (5 Slots)"}`;
    qmBtn.classList.toggle("bg-amber-500/20", quartermaster);
    qmBtn.classList.toggle("border-amber-500/60", quartermaster);
    qmBtn.classList.toggle("text-amber-400", quartermaster);
  }
  if (hasRolledOnce) rollAllAnimated();
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
  if (equipmentSection && hasRolledOnce) {
    equipmentSection.classList.toggle("hidden", onlyWeapons);
  }
  if (hasRolledOnce) rollAllAnimated();
}

function rollWeapons() {
  const maxSlots = quartermaster ? 6 : 5;
  let totalWeaponCost = 0;
  
  const validPrimaries = weapons.filter(w => w.slot <= maxSlots - 1);
  let rawPrimary = getRandomItem(validPrimaries) || weapons[0];
  let primary = { ...rawPrimary };

  let isPrimaryPair = false;
  if (canBeDualWielded(primary) && (maxSlots - 2 >= 1) && Math.random() < 0.3) {
    primary.name = `${primary.name} (Pair)`;
    primary.slot = 2;
    isPrimaryPair = true;
  }
  
  let primaryCost = isPrimaryPair ? primary.cost * 2 : primary.cost;
  const primaryAmmo = getAmmoDisplay(primary);
  totalWeaponCost += primaryCost;

  let availableSlotsForSecondary = maxSlots - primary.slot;
  let validSecondaries = weapons.filter(w => w.slot <= availableSlotsForSecondary);
  let rawSecondary = validSecondaries.length > 0 ? getRandomItem(validSecondaries) : getRandomItem(weapons.filter(w => w.slot === 1));
  let secondary = { ...rawSecondary };

  let isSecondaryPair = false;
  if (canBeDualWielded(secondary) && availableSlotsForSecondary >= 2 && Math.random() < 0.3) {
    secondary.name = `${secondary.name} (Pair)`;
    secondary.slot = 2;
    isSecondaryPair = true;
  }

  let secondaryCost = isSecondaryPair ? secondary.cost * 2 : secondary.cost;
  const secondaryAmmo = getAmmoDisplay(secondary);
  totalWeaponCost += secondaryCost;

  // Render Primary
  const pName = document.getElementById("primary-name");
  const pSlot = document.getElementById("primary-slot");
  const pAmmo = document.getElementById("primary-ammo");
  const pCost = document.getElementById("primary-cost");
  if (pName) pName.textContent = primary.name;
  if (pSlot) pSlot.textContent = `${primary.slot}-SLOT`;
  if (pAmmo) pAmmo.textContent = primaryAmmo.text;
  if (pCost) pCost.textContent = formatPrice(primaryCost);

  // Render Secondary
  const sName = document.getElementById("secondary-name");
  const sSlot = document.getElementById("secondary-slot");
  const sAmmo = document.getElementById("secondary-ammo");
  const sCost = document.getElementById("secondary-cost");
  if (sName) sName.textContent = secondary.name;
  if (sSlot) sSlot.textContent = `${secondary.slot}-SLOT`;
  if (sAmmo) sAmmo.textContent = secondaryAmmo.text;
  if (sCost) sCost.textContent = formatPrice(secondaryCost);

  const slotCounter = document.getElementById("slot-counter");
  if (slotCounter) {
    slotCounter.textContent = `${primary.slot + secondary.slot} / ${maxSlots}`;
  }

  return totalWeaponCost;
}

function rollGear() {
  if (onlyWeapons) return 0;

  let totalGearCost = 0;

  const selectedGear = [
    { item: getRandomItem(MELEE_TOOLS), type: "Melee Tool" },
    { item: getRandomItem(MEDICAL_TOOLS), type: "Medical Tool" },
    { item: getRandomItem(OTHER_TOOLS), type: "Support Tool" },
    { item: getRandomItem(OTHER_TOOLS), type: "Support Tool" },
    { item: getRandomItem(CONSUMABLES), type: "Consumable" },
    { item: getRandomItem(CONSUMABLES), type: "Consumable" },
    { item: getRandomItem(CONSUMABLES), type: "Consumable" },
    { item: getRandomItem(CONSUMABLES), type: "Consumable" }
  ];

  selectedGear.forEach((gear, index) => {
    const gearElem = document.getElementById(`gear-${index}`);
    const typeElem = document.getElementById(`gear-${index}-type`);
    const priceElem = document.getElementById(`gear-${index}-price`);
    const itemPrice = GEAR_PRICES[gear.item] || 0;
    totalGearCost += itemPrice;

    if (gearElem) gearElem.textContent = gear.item;
    if (typeElem) typeElem.textContent = gear.type;
    if (priceElem) priceElem.textContent = formatPrice(itemPrice);
  });

  return totalGearCost;
}

function rollAll() {
  const weaponCost = rollWeapons();
  const gearCost = rollGear();
  const currentTotalCost = weaponCost + gearCost;

  const totalCostElem = document.getElementById("total-cost");
  if (totalCostElem) {
    totalCostElem.textContent = formatPrice(currentTotalCost);
  }
}

// ==================== ANIMATION ====================
function rollAllAnimated() {
  if (isRolling) return;
  isRolling = true;

  if (!hasRolledOnce) {
    hasRolledOnce = true;
    const weaponsSection = document.getElementById("weapons-section");
    const equipmentSection = document.getElementById("equipment-section");
    const costDisplay = document.getElementById("cost-display");
    if (weaponsSection) weaponsSection.classList.remove("hidden");
    if (equipmentSection && !onlyWeapons) equipmentSection.classList.remove("hidden");
    if (costDisplay) costDisplay.classList.remove("hidden");
  }

  const rollBtn = document.getElementById("roll-btn");
  const container = document.body;

  if (rollBtn) rollBtn.disabled = true;
  container.classList.add("rolling");

  let counter = 0;
  const maxRolls = 18;
  const intervalTime = 50;

  const interval = setInterval(() => {
    rollAll();
    counter++;

    if (counter >= maxRolls) {
      clearInterval(interval);
      rollAll();
      container.classList.remove("rolling");
      if (rollBtn) rollBtn.disabled = false;
      isRolling = false;
    }
  }, intervalTime);
}

// ==================== INIT ====================
function init() {
  const rollBtn = document.getElementById("roll-btn");
  const qmBtn = document.getElementById("qm-btn");
  const weaponsBtn = document.getElementById("weapons-btn");
  const yearElem = document.getElementById("year");

  if (rollBtn) rollBtn.addEventListener("click", rollAllAnimated);
  if (qmBtn) qmBtn.addEventListener("click", toggleQuartermaster);
  if (weaponsBtn) weaponsBtn.addEventListener("click", toggleOnlyWeapons);
  if (yearElem) yearElem.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
