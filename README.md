# 🤠 Bayou Roulette — Hunt: Showdown 1896 Loadout Randomizer

**Bayou Roulette** is a lightweight, responsive web application designed for *Hunt: Showdown 1896* players. It randomly generates a complete loadout—weapons, custom ammo, tools, and consumables—directly in your browser, complete with real-time Hunt Dollar cost calculations.

---

## 🌐 Live Demo

Try it online:  
👉 [https://edwinhuberts.github.io/BayouArsenal/](https://edwinhuberts.github.io/BayouArsenal/)

---

## ✨ Key Features

- 🎯 **Slot-Aware Weapon Randomizer:** Automatically generates valid primary and secondary weapon pairings based on maximum slot capacity (including dual-wield pairs).
- 💰 **Hunt Dollar Cost Calculator:** Displays individual item prices and calculates the total cost of your rolled loadout in real-time, including custom ammo fees and SCARCE weapon handling.
- 🔀 **Weapon-Specific Custom Ammo:** Accurately pairs authentic custom ammunition options (FMJ, Dumdum, High Velocity, Slugs, Spitzer, etc.) to the rolled weapon family.
- 🎒 **Full Equipment Loadout:** Fills all 8 gear slots with designated Melee tools, Medical kits, Support Tools, and Consumables.
- 🎖️ **Quartermaster Toggle:** Instantly switches between standard 5-slot and 6-slot capacity.
- ⚔️ **Only Weapons Mode:** Toggleable view to focus strictly on weapon pairings without equipment cards.
- 🎰 **Slot Machine Animation:** Fast, tactile rolling animation when generating a new loadout.
- 🙈 **Clean Entry UI:** Clean initial state that smoothly expands upon your first roll.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure and web components
- **Vanilla JavaScript (ES6+)** — Randomizer logic, slot constraints, and dynamic DOM manipulation
- **Tailwind CSS (CDN)** — Responsive styling and dark theme UI
- **Custom CSS3** — Western-inspired typography and slot machine blur animations

---

## 📁 Project Structure

```text
├── index.html   # Main application interface
├── style.css    # Custom western typography, glow effects & rolling animations
└── script.js    # Weapon & gear databases, randomizer logic & price engine
