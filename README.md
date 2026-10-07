# 🤠 Bayou Arsenal — Hunt: Showdown 1896 Loadout Randomizer

**Bayou Arsenal** is a lightweight web application designed for *Hunt: Showdown 1896* players. It randomly generates a complete loadout—weapons, custom ammo, tools, and consumables—directly in your browser.

---

## 🌐 Live Demo

> **Try it online:** [https://your-username.github.io/bayou-arsenal](https://your-username.github.io/bayou-arsenal)  
*(Replace with your actual website URL if hosted)*

---

## ✨ Web App Features

- 🎯 **Slot-Aware Weapon Randomizer:** Automatically calculates and outputs balanced primary/secondary weapon pairings based on maximum slot capacity.
- 🔀 **Weapon-Specific Custom Ammo:** Matches authentic custom ammunition options (FMJ, Dumdum, High Velocity, Slugs, etc.) to the specific rolled weapon family.
- 🎒 **Full Equipment Loadout:** Fills all 8 gear slots with appropriate Melee, Medkit, Support Tools, and Consumables.
- 🎖️ **Quartermaster Toggle:** Seamlessly switches between 5-slot and 6-slot capacity.
- ⚔️ **Only Weapons Mode:** Dynamic UI toggle to hide tool and consumable cards when you only need weapons.
- 🎰 **Animated Roll Effect:** Fast, slot-machine style rolling animation on click.
- 🙈 **Clean Entry State:** Interactive cards stay hidden until you press "Roll Loadout".

---

## 🛠️ Built With

- **HTML5** & **Vanilla JavaScript (ES6+)**
- **Tailwind CSS** (via CDN for fast styling)
- **CSS3** (Custom typography and glow animations)

---

## 🌐 Browser Compatibility

Tested and supported on all modern desktop and mobile web browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Apple Safari

No installation, build tools, or backend required—it runs 100% client-side in the browser.

---

## 📁 File Structure

```text
├── index.html   # Web page structure
├── style.css    # Web app animations & custom aesthetics
└── script.js    # Data collections, randomizer engine & DOM management
