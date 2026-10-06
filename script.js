// --- DATABAS MED VAPEN & ITEMS ---
const weapons = [
  { name: "Mosin-Nagant M1891", slots: 3, category: "Long Ammo" },
  { name: "Lebel 1886", slots: 3, category: "Long Ammo" },
  { name: "Berthier Mle 1892", slots: 3, category: "Long Ammo" },
  { name: "Sparks LRR", slots: 3, category: "Long Ammo" },
  { name: "Martini-Henry IC1", slots: 3, category: "Long Ammo" },
  { name: "Vetterli 71 Karabiner", slots: 3, category: "Medium Ammo" },
  { name: "Centennial 1876", slots: 3, category: "Medium Ammo" },
  { name: "Winfield M1873", slots: 3, category: "Compact Ammo" },
  { name: "Crown & King Auto-5", slots: 3, category: "Shotgun" },
  { name: "Romero 77", slots: 3, category: "Shotgun" },
  { name: "Specter 1882", slots: 3, category: "Shotgun" },
  { name: "Caldwell Rival 71", slots: 3, category: "Shotgun" },
  { name: "Slate", slots: 3, category: "Shotgun" },
  { name: "Bomb Lance", slots: 3, category: "Special" },
  { name: "Crossbow", slots: 3, category: "Special" },

  // 2-Slot Weapons
  { name: "Springfield 1873 Compact", slots: 2, category: "Medium Ammo" },
  { name: "Winfield M1873C Vandal", slots: 2, category: "Compact Ammo" },
  { name: "Caldwell Rival 71 Handcannon", slots: 2, category: "Shotgun" },
  { name: "Romero 77 Handcannon", slots: 2, category: "Shotgun" },
  { name: "Hunting Bow", slots: 2, category: "Special" },
  { name: "Precision Pistols", slots: 2, category: "Pistol" },

  // 1-Slot Weapons
  { name: "Caldwell Conversion Pistol", slots: 1, category: "Compact Ammo" },
  { name: "Caldwell Pax", slots: 1, category: "Medium Ammo" },
  { name: "Nagant M1895", slots: 1, category: "Compact Ammo" },
  { name: "Officer Carbine / Pistol", slots: 1, category: "Compact Ammo" },
  { name: "Upperhand / Uppercut", slots: 1, category: "Long Ammo" },
  { name: "Bornheim No. 3", slots: 1, category: "Compact Ammo" },
  { name: "Dolch 96", slots: 1, category: "Special" },
  { name: "Hand Crossbow", slots: 1, category: "Special" },
  { name: "LeMat Mark II", slots: 1, category: "Compact / Shotgun" }
];

const meleeTools = [
  { name: "Knuckle Knife", category: "Melee Tool" },
  { name: "Duster", category: "Melee Tool" },
  { name: "Knife", category: "Melee Tool" },
  { name: "Heavy Knife", category: "Melee Tool" },
  { name: "Throwing Knives", category: "Melee Tool" },
  { name: "Throwing Axes", category: "Melee Tool" }
];

const tools = [
  { name: "First Aid Kit", category: "Medical" },
  { name: "Choke Bombs", category: "Utility" },
  { name: "Fusees", category: "Light" },
  { name: "Flare Pistol", category: "Light" },
  { name: "Alert Trip Mine", category: "Trap" },
  { name: "Concertina Trip Mine", category: "Trap" },
  { name: "Poison Trip Mine", category: "Trap" },
  { name: "Decoys", category: "Deception" },
  { name: "Blank Fire Decoys", category: "Deception" },
  { name: "Spyglass", category: "Utility" }
];

const consumables = [
  { name: "Vitality Shot", category: "Healing" },
  { name: "Regeneration Shot", category: "Healing" },
  { name: "Stamina Shot", category: "Buff" },
  { name: "Antidote Shot", category: "Buff" },
  { name: "Dynamite Bundle", category: "Explosive" },
  { name: "Frag Bomb", category: "Explosive" },
  { name: "Sticky Bomb", category: "Explosive" },
  { name: "Fire Bomb", category: "Incendiary" },
  { name: "Liquid Fire Bomb", category: "Incendiary" },
  { name: "Poison Bomb", category: "Tactical" },
  { name: "Flash Bomb", category: "Tactical" },
  { name: "Concertina Bomb", category: "Tactical" },
  { name: "Ammo Box", category: "Resupply" }
];

// --- APP TILLSTÅND ---
let hasQuartermaster = false;
let onlyWeapons = false;

// --- FUNKTIONER ---
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomUnique(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function rollLoadout() {
  const maxSlots = hasQuartermaster ? 6 : 5;
  
  // Välj primärt vapen (3 eller 2 slots)
  const validPrimaries = weapons.filter(w => w.slots <= (hasQuartermaster ? 3 : 3));
  const primary = getRandom(validPrimaries);
  
  // Välj sekundärt vapen baserat på kvarvarande slots
  const remainingSlots = maxSlots - primary.slots;
  const validSecondaries = weapons.filter(w => w.slots <= remainingSlots);
  const secondary = getRandom(validSecondaries);

  // Välj melee + tools + consumables
  const melee = getRandom(meleeTools);
  const medkit = { name: "First Aid Kit", category: "Medical" };
  const selectedTools = getRandomUnique(tools.filter(t => t.name !== "First Aid Kit"), 2);
  const selectedConsumables = getRandomUnique(consumables, 4);

  // Uppdatera UI
  document.getElementById("primary-name").textContent = primary.name;
  document.getElementById("primary-slots").textContent = `${primary.slots}-slot`;
  document.getElementById("primary-cat").textContent = primary.category;

  document.getElementById("secondary-name").textContent = secondary.name;
  document.getElementById("secondary-slots").textContent = `${secondary.slots}-slot`;
  document.getElementById("secondary-cat").textContent = secondary.category;

  document.getElementById("slot-counter").textContent = `${primary.slots + secondary.slots} / ${maxCapacity()}`;

  // Rendera ut rustning/utrustning
  const allItems = [melee, medkit, ...selectedTools, ...selectedConsumables];
  const grid = document.getElementById("item-grid");
  grid.innerHTML = "";

  allItems.forEach((item, idx) => {
    let label = `Slot ${idx + 1}`;
    if (idx === 0) label = "Melee";
    else if (idx === 1) label = "Medkit";
    else if (idx < 4) label = `Tool ${idx + 1}`;
    else label = `Consumable ${idx - 3}`;

    const card = document.createElement("div");
    card.className = "flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center";
    card.innerHTML = `
      <div class="text-[10px] font-semibold uppercase tracking-wider text-amber-500/80">${label}</div>
      <div class="my-2 flex flex-col items-center justify-center min-h-[40px]">
        <span class="text-sm font-semibold text-zinc-200 leading-tight">${item.name}</span>
      </div>
      <div class="text-[9px] uppercase tracking-wider text-zinc-500 border-t border-zinc-800/80 pt-1">${item.category}</div>
    `;
    grid.appendChild(card);
  });
}

function maxCapacity() {
  return hasQuartermaster ? 6 : 5;
}

// --- EVENT LISTENERS ---
document.getElementById("roll-btn").addEventListener("click", rollLoadout);
document.getElementById("meme-btn").addEventListener("click", rollLoadout);

document.getElementById("qm-btn").addEventListener("click", (e) => {
  hasQuartermaster = !hasQuartermaster;
  e.target.textContent = `Quartermaster: ${hasQuartermaster ? "ON (6 Slots)" : "OFF (5 Slots)"}`;
  e.target.classList.toggle("border-amber-500", hasQuartermaster);
  e.target.classList.toggle("text-amber-400", hasQuartermaster);
  rollLoadout();
});

document.getElementById("weapons-btn").addEventListener("click", (e) => {
  onlyWeapons = !onlyWeapons;
  document.getElementById("equipment-container").classList.toggle("hidden", onlyWeapons);
  e.target.textContent = `Only Weapons: ${onlyWeapons ? "ON" : "OFF"}`;
  e.target.classList.toggle("border-amber-500", onlyWeapons);
  e.target.classList.toggle("text-amber-400", onlyWeapons);
});

// Kör en första roll vid start
rollLoadout();