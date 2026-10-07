// --- DATABASE ---
const weapons = [
  // ==================== 5-SLOT WEAPONS ====================
  { name: "Auto-5", slot: 5, type: "shotgun" },
  { name: "Maynard Sniper Silencer", slot: 5, type: "long" },
  { name: "Mosin-Nagant Avtomat", slot: 5, type: "long" },
  { name: "Nitro Express", slot: 5, type: "special" },

  // ==================== 4-SLOT WEAPONS ====================
  { name: "Centennial", slot: 4, type: "medium" },
  { name: "Centennial Sniper", slot: 4, type: "medium" },
  { name: "Centennial Trauma", slot: 4, type: "medium" },
  { name: "Crossbow", slot: 4, type: "special" },
  { name: "Crossbow Deadeye", slot: 4, type: "special" },
  { name: "Drilling", slot: 4, type: "medium" },
  { name: "Homestead 78", slot: 4, type: "shotgun" },
  { name: "Infantry 73L", slot: 4, type: "compact" },
  { name: "Infantry 73L Bayonet", slot: 4, type: "compact" },
  { name: "Infantry 73L Sniper", slot: 4, type: "compact" },
  { name: "Krag", slot: 4, type: "long" },
  { name: "Krag Bayonet", slot: 4, type: "long" },
  { name: "Krag Silencer", slot: 4, type: "long" },
  { name: "Krag Sniper", slot: 4, type: "long" },
  { name: "Lebel 1886", slot: 4, type: "long" },
  { name: "Lebel 1886 Aperture", slot: 4, type: "long" },
  { name: "Lebel 1886 Marksman", slot: 4, type: "long" },
  { name: "Lebel 1886 Talon", slot: 4, type: "long" },
  { name: "Mako 1895", slot: 4, type: "long" },
  { name: "Mako 1895 Aperture", slot: 4, type: "long" },
  { name: "Mako 1895 Claw", slot: 4, type: "long" },
  { name: "Marathon", slot: 4, type: "compact" },
  { name: "Marathon Swift", slot: 4, type: "compact" },
  { name: "Martini-Henry", slot: 4, type: "long" },
  { name: "Martini-Henry Deadeye", slot: 4, type: "long" },
  { name: "Martini-Henry Ironside", slot: 4, type: "long" },
  { name: "Martini-Henry Marksman", slot: 4, type: "long" },
  { name: "Martini-Henry Riposte", slot: 4, type: "long" },
  { name: "Maynard Sniper", slot: 4, type: "long" },
  { name: "Mosin-Nagant", slot: 4, type: "long" },
  { name: "Mosin-Nagant Bayonet", slot: 4, type: "long" },
  { name: "Mosin-Nagant Sniper", slot: 4, type: "long" },
  { name: "Ranger 73", slot: 4, type: "compact" },
  { name: "Ranger 73 Aperture", slot: 4, type: "compact" },
  { name: "Ranger 73 Swift", slot: 4, type: "compact" },
  { name: "Ranger 73 Talon", slot: 4, type: "compact" },
  { name: "Rival 78", slot: 4, type: "shotgun" },
  { name: "Rival 78 Trauma", slot: 4, type: "shotgun" },
  { name: "Romero 77", slot: 4, type: "shotgun" },
  { name: "Romero 77 Alamo", slot: 4, type: "shotgun" },
  { name: "Romero 77 Talon", slot: 4, type: "shotgun" },
  { name: "Slate", slot: 4, type: "shotgun" },
  { name: "Slate Riposte", slot: 4, type: "shotgun" },
  { name: "Sparks", slot: 4, type: "long" },
  { name: "Sparks Silencer", slot: 4, type: "long" },
  { name: "Sparks Sniper", slot: 4, type: "long" },
  { name: "Specter 1882", slot: 4, type: "shotgun" },
  { name: "Specter 1882 Bayonet", slot: 4, type: "shotgun" },
  { name: "Springfield 1866", slot: 4, type: "medium" },
  { name: "Springfield 1866 Bayonet", slot: 4, type: "medium" },
  { name: "Springfield 1866 Marksman", slot: 4, type: "medium" },
  { name: "Terminus", slot: 4, type: "shotgun" },
  { name: "Vetterli 71 Cyclone", slot: 4, type: "medium" },
  { name: "Wildland", slot: 4, type: "compact" },

  // ==================== 3-SLOT WEAPONS ====================
  { name: "1865 Carbine", slot: 3, type: "medium" },
  { name: "1865 Carbine Aperture", slot: 3, type: "medium" },
  { name: "1865 Carbine Silencer", slot: 3, type: "medium" },
  { name: "1890 Cavalry", slot: 3, type: "compact" },
  { name: "Auto-4 Shorty", slot: 3, type: "shotgun" },
  { name: "Berthier 1892", slot: 3, type: "long" },
  { name: "Berthier 1892 Deadeye", slot: 3, type: "long" },
  { name: "Berthier 1892 Marksman", slot: 3, type: "long" },
  { name: "Berthier 1892 Riposte", slot: 3, type: "long" },
  { name: "Bomb Lance", slot: 3, type: "special" },
  { name: "Burgess", slot: 3, type: "shotgun" },
  { name: "Burgess Bayonet", slot: 3, type: "shotgun" },
  { name: "Burgess Trauma", slot: 3, type: "shotgun" },
  { name: "Dolch 96 Precision", slot: 3, type: "special" },
  { name: "Frontier 73C", slot: 3, type: "compact" },
  { name: "Frontier 73C Marksman", slot: 3, type: "compact" },
  { name: "Frontier 73C Silencer", slot: 3, type: "compact" },
  { name: "Hunting Bow", slot: 3, type: "special" },
  { name: "LeMat Carbine", slot: 3, type: "compact" },
  { name: "LeMat Carbine Marksman", slot: 3, type: "compact" },
  { name: "Mosin Obrez Match", slot: 3, type: "long" },
  { name: "Mosin Obrez Sharpeye", slot: 3, type: "long" },
  { name: "Officer Carbine", slot: 3, type: "compact" },
  { name: "Officer Carbine Deadeye", slot: 3, type: "compact" },
  { name: "Uppercut Deadeye", slot: 3, type: "long" },
  { name: "Uppercut Precision", slot: 3, type: "long" },
  { name: "Vetterli 71", slot: 3, type: "medium" },
  { name: "Vetterli 71 Bayonet", slot: 3, type: "medium" },
  { name: "Vetterli 71 Deadeye", slot: 3, type: "medium" },
  { name: "Vetterli 71 Marksman", slot: 3, type: "medium" },
  { name: "Vetterli 71 Silencer", slot: 3, type: "medium" },

  // ==================== 2-SLOT WEAPONS ====================
  { name: "Bomb Launcher", slot: 2, type: "special" },
  { name: "Bornheim No. 3 Match", slot: 2, type: "compact" },
  { name: "Centennial Pointman", slot: 2, type: "medium" },
  { name: "Centennial Shorty", slot: 2, type: "medium" },
  { name: "Centennial Shorty Silencer", slot: 2, type: "medium" },
  { name: "Chu Ko Nu", slot: 2, type: "special" },
  { name: "Combat Axe", slot: 2, type: "special" },
  { name: "Dolch 96", slot: 2, type: "special" },
  { name: "Dolch 96 Bullseye", slot: 2, type: "special" },
  { name: "Dolch 96 Claw", slot: 2, type: "special" },
  { name: "Drilling Hatchet", slot: 2, type: "medium" },
  { name: "Drilling Shorty", slot: 2, type: "medium" },
  { name: "Flame Rifle", slot: 2, type: "special" },
  { name: "Haymaker", slot: 2, type: "shotgun" },
  { name: "Katana", slot: 2, type: "special" },
  { name: "Mosin Obrez", slot: 2, type: "long" },
  { name: "Mosin Obrez Extended", slot: 2, type: "long" },
  { name: "Mosin Obrez Mace", slot: 2, type: "long" },
  { name: "Nagant M1895 Deadeye", slot: 2, type: "compact" },
  { name: "Nagant M1895 Precision", slot: 2, type: "compact" },
  { name: "Railroad Hammer", slot: 2, type: "special" },
  { name: "Rival 78 Mace", slot: 2, type: "shotgun" },
  { name: "Rival 78 Shorty", slot: 2, type: "shotgun" },
  { name: "Romero 77 Hatchet", slot: 2, type: "shotgun" },
  { name: "Romero 77 Shorty", slot: 2, type: "shotgun" },
  { name: "Scottfield Precision", slot: 2, type: "medium" },
  { name: "Specter 1882 Shorty", slot: 2, type: "shotgun" },
  { name: "Springfield 1866 Bullseye", slot: 2, type: "medium" },
  { name: "Springfield 1866 Shorty", slot: 2, type: "medium" },
  { name: "Springfield 1866 Striker", slot: 2, type: "medium" },
  { name: "Terminus Shorty", slot: 2, type: "shotgun" },
  { name: "Uppercut", slot: 2, type: "long" },
  { name: "Vandal 73C", slot: 2, type: "compact" },
  { name: "Vandal 73C Bullseye", slot: 2, type: "compact" },
  { name: "Vandal 73C Striker", slot: 2, type: "compact" },

  // ==================== 1-SLOT WEAPONS ====================
  { name: "Baseball Bat", slot: 1, type: "special" },
  { name: "Bornheim No. 3", slot: 1, type: "compact" },
  { name: "Bornheim No. 3 Extended", slot: 1, type: "compact" },
  { name: "Bornheim No. 3 Silencer", slot: 1, type: "compact" },
  { name: "Cavalry Saber", slot: 1, type: "special" },
  { name: "Conversion", slot: 1, type: "compact" },
  { name: "Conversion Chain Pistol", slot: 1, type: "compact" },
  { name: "Hand Crossbow", slot: 1, type: "special" },
  { name: "LeMat", slot: 1, type: "compact" },
  { name: "Machete", slot: 1, type: "special" },
  { name: "Nagant M1895", slot: 1, type: "compact" },
  { name: "Nagant M1895 Silencer", slot: 1, type: "compact" },
  { name: "New Army", slot: 1, type: "compact" },
  { name: "New Army Swift", slot: 1, type: "compact" },
  { name: "Officer", slot: 1, type: "compact" },
  { name: "Officer Brawler", slot: 1, type: "compact" },
  { name: "Pax", slot: 1, type: "medium" },
  { name: "Pax Claw", slot: 1, type: "medium" },
  { name: "Pax Trueshot", slot: 1, type: "medium" },
  { name: "Scottfield", slot: 1, type: "medium" },
  { name: "Scottfield Brawler", slot: 1, type: "medium" },
  { name: "Scottfield Spitfire", slot: 1, type: "medium" },
  { name: "Scottfield Swift", slot: 1, type: "medium" },
  { name: "Sparks Pistol", slot: 1, type: "long" },
  { name: "Sparks Pistol Silencer", slot: 1, type: "long" }
];

const MELEE_TOOLS = ["Knuckle Knife", "Duster", "Knife", "Heavy Knife", "Throwing Knives", "Throwing Axes", "Throwing Spear"];
const MEDICAL_TOOLS = ["First Aid Kit"];
const OTHER_TOOLS = ["Flare Pistol", "Fusees", "Alert Trip Mines", "Concertina Trip Mines", "Poison Trip Mines", "Decoys", "Blank Fire Decoys", "Choke Bombs", "Spyglass"];
const CONSUMABLES = ["Weak Vitality Shot", "Vitality Shot", "Weak Stamina Shot", "Stamina Shot", "Weak Antidote Shot", "Antidote Shot", "Regeneration Shot", "Dynamite Stick", "Waxed Dynamite Stick", "Dynamite Bundle", "Big Dynamite Bundle", "Frag Bomb", "Liquid Fire Bomb", "Fire Bomb", "Hellfire Bomb", "Poison Bomb", "Flash Bomb", "Concertina Bomb", "Sticky Bomb", "Ammo Box", "Tool Box", "Beetle (Stalker)", "Beetle (Fire)"];

// --- STATE ---
let quartermaster = false;
let onlyWeapons = false;

// --- UTILS ---
function getRandomItem(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}
function canBeDualWielded(weapon) {
  if (!weapon || weapon.slot !== 1) return false;
  // Exkludera melee-vapen i 1-slot kategorin
  const nonPistols = ["Baseball Bat", "Cavalry Saber", "Machete"];
  return !nonPistols.includes(weapon.name);
}

// --- SPECIFIK CUSTOM AMMO PER VAPENFAMILJ ---
function getCustomAmmoForWeapon(weapon) {
  if (!weapon || !weapon.name) return [];
  const name = weapon.name;
  
  // COMPACT
  if (name.includes("Conversion")) return ["FMJ Ammo", "Dumdum Ammo"];
  if (name.includes("Nagant M1895")) return ["Poison Ammo", "High Velocity Ammo"];
  if (name.includes("Officer")) return ["High Velocity Ammo", "Poison Ammo", "Subsonic Ammo"];
  if (name.includes("New Army")) return ["FMJ Ammo", "Dumdum Ammo"];
  if (name.includes("Bornheim")) return ["High Velocity Ammo", "Incendiary Ammo", "Subsonic Ammo"];
  if (name.includes("Marathon")) return ["FMJ Ammo", "Poison Ammo"];
  if (name.includes("Infantry 73L") || name.includes("Frontier 73C") || name.includes("Ranger 73") || name.includes("Vandal 73C")) {
    return ["FMJ Ammo", "High Velocity Ammo", "Incendiary Ammo", "Poison Ammo", "Subsonic Ammo"];
  if (name.includes("LeMat")) return ["FMJ Ammo", "High Velocity Ammo", "Incendiary Ammo"];
  }

  // MEDIUM
  if (name.includes("Centennial")) return ["FMJ Ammo", "Poison Ammo", "High Velocity Ammo", "Subsonic Ammo"];
  if (name.includes("Scottfield")) return ["FMJ Ammo", "Incendiary Ammo", "High Velocity Ammo", "Dumdum Ammo"];
  if (name.includes("Pax")) return ["FMJ Ammo", "Incendiary Ammo", "Dumdum Ammo", "Poison Ammo"];
  if (name.includes("Vetterli")) return ["FMJ Ammo", "Incendiary Ammo", "High Velocity Ammo"];
  if (name.includes("Springfield 1866")) return ["Bleed (Dumdum) Ammo", "Explosive Ammo"];
  if (name.includes("Drilling")) return ["Dumdum Ammo", "FMJ Ammo"];
  if (name.includes("1865 Carbine")) return ["FMJ Ammo", "High Velocity Ammo", "Subsonic Ammo"];
  if (name.includes("Maynard")) return ["High Velocity Ammo", "Subsonic Ammo", "Dumdum Ammo"];
  if (name.includes("Flame Rifle")) return ["🔥!!FIRE!!🔥"];

  // LONG
  if (name.includes("Mosin-Nagant") || name.includes("Mosin Obrez")) return ["Spitzer Ammo", "Incendiary Ammo"];
  if (name.includes("Lebel")) return ["Spitzer Ammo", "Incendiary Ammo"];
  if (name.includes("Krag")) return ["Incendiary Ammo", "FMJ Ammo", "Subsonic Ammo"];
  if (name.includes("Sparks")) return ["FMJ Ammo", "Incendiary Ammo", "Poison Ammo", "Subsonic Ammo"];
  if (name.includes("Martini-Henry")) return ["Explosive Ammo", "Incendiary Ammo", "Dumdum Ammo"];
  if (name.includes("Berthier")) return ["Spitzer Ammo", "Incendiary Ammo"];
  if (name.includes("Uppercut")) return ["Explosive Ammo", "Incendiary Ammo", "FMJ Ammo"];
  if (name.includes("Mako 1895")) return ["Explosive Ammo", "FMJ Ammo"];

  // --- SHOTGUNS ---
  if (name.includes("Romero")) return ["Slug Ammo", "Penny Shot", "Dragon Breath", "Starshell"];
  if (name.includes("Rival")) return ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon Breath"];
  if (name.includes("Specter")) return ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon Breath"];
  if (name.includes("Terminus")) return ["Slug Ammo", "Flechette Ammo", "Penny Shot", "Dragon Breath"];
  if (name.includes("Slate")) return ["Slug Ammo", "Penny Shot"];
  if (name.includes("Auto-5") || name.includes("Auto-4")) return ["Slug Ammo", "Penny Shot", "Flechette"];
  if (name.includes("Burgess")) return ["Slug Ammo", "Penny Shot", "Flechette", "Dragon Breath"];
  if (name.includes("Homestead")) return ["Slug Ammo", "Penny Shot", "Dragon Breath", "Flechette"];
  
  // SPECIAL
  if (name.includes("Hand Crossbow")) return ["Poison Bolt", "Choke Bolt", "Dragon Bolt"];
  if (name.includes("Crossbow")) return ["Shot Bolt", "Explosive Bolt", "Steel Bolt"];
  if (name.includes("Bomb Lance") || name.includes("Bomb Launcher")) return ["Steel Ball", "Dragon's Breath Shell"];
  if (name.includes("Dolch")) return ["FMJ Ammo"];

  return []; // Närstridsvapen eller vapen utan custom ammo
}

function getAmmoDisplay(weapon) {
  if (!weapon) return "STANDARD";
  
  const customList = getCustomAmmoForWeapon(weapon);
  
  // 50% chans för Custom Ammo om det finns tillgängligt för vapnet
  if (customList.length > 0 && Math.random() < 0.5) {
    const chosenCustom = getRandomItem(customList);
    return `${weapon.type ? weapon.type.toUpperCase() : "SPECIAL"} (${chosenCustom})`;
  }
  
  return weapon.type ? weapon.type.toUpperCase() : "STANDARD";
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
  rollWeapons();
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
  
  // Välj primärt vapen
  const validPrimaries = weapons.filter(w => w.slot <= maxSlots - 1);
  let rawPrimary = getRandomItem(validPrimaries) || weapons[0];
  
  // Skapa en kopia så vi inte ändrar i grunddatabasen
  let primary = { ...rawPrimary };

  // 30% chans för Dual Wield / Pair om det är en giltig 1-slot pistol
  // och det finns tillräckligt med slots kvar (maxSlots - 1)
  if (canBeDualWielded(primary) && (maxSlots - 2 >= 1) && Math.random() < 0.3) {
    primary.name = `${primary.name} (Pair)`;
    primary.slot = 2; // Pair tar 2 slots
  }
  
  // Välj sekundärt vapen baserat på återstående slots
  let availableSlotsForSecondary = maxSlots - primary.slot;
  let validSecondaries = weapons.filter(w => w.slot <= availableSlotsForSecondary);
  let rawSecondary = validSecondaries.length > 0 ? getRandomItem(validSecondaries) : getRandomItem(weapons.filter(w => w.slot === 1));
  
  let secondary = { ...rawSecondary };

  // 30% chans för Dual Wield på sekundärt vapen om slots finns kvar
  if (canBeDualWielded(secondary) && availableSlotsForSecondary >= 2 && Math.random() < 0.3) {
    secondary.name = `${secondary.name} (Pair)`;
    secondary.slot = 2;
  }

  // Rendera Primär
  const pName = document.getElementById("primary-name");
  const pSlot = document.getElementById("primary-slot");
  const pAmmo = document.getElementById("primary-ammo");
  if (pName) pName.textContent = primary.name;
  if (pSlot) pSlot.textContent = `${primary.slot}-SLOT`;
  if (pAmmo) pAmmo.textContent = getAmmoDisplay(primary);

  // Rendera Sekundär
  const sName = document.getElementById("secondary-name");
  const sSlot = document.getElementById("secondary-slot");
  const sAmmo = document.getElementById("secondary-ammo");
  if (sName) sName.textContent = secondary.name;
  if (sSlot) sSlot.textContent = `${secondary.slot}-SLOT`;
  if (sAmmo) sAmmo.textContent = getAmmoDisplay(secondary);

  // Uppdatera slot-räknare
  const slotCounter = document.getElementById("slot-counter");
  if (slotCounter) {
    slotCounter.textContent = `${primary.slot + secondary.slot} / ${maxSlots}`;
  }
}

function rollGear() {
  if (onlyWeapons) return;

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
    if (gearElem) gearElem.textContent = gear.item;
    if (typeElem) typeElem.textContent = gear.type;
  });
}

function rollAll() {
  rollWeapons();
  rollGear();
}

// --- INIT & EVENT LISTENERS ---
function init() {
  const rollBtn = document.getElementById("roll-btn");
  const qmBtn = document.getElementById("qm-btn");
  const weaponsBtn = document.getElementById("weapons-btn");
  const yearElem = document.getElementById("year");

  if (rollBtn) rollBtn.addEventListener("click", rollAll);
  if (qmBtn) qmBtn.addEventListener("click", toggleQuartermaster);
  if (weaponsBtn) weaponsBtn.addEventListener("click", toggleOnlyWeapons);
  if (yearElem) yearElem.textContent = new Date().getFullYear();

  rollAll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
