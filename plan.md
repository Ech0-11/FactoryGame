# Game Design: Robo-Scrapyard

## 1. The Core Concept
**Theme:** You run a high-tech scrapyard. Old robots are dumped into your yard. You must break them down, clean the parts, refine the metals, and assemble new high-value consumer electronics to sell.
**Visual Style:** Grimy industrial, rusted metals vs. shiny refined electronics.

---

## 2. Gameplay Loop
1.  **Delivery:** A "Delivery Chute" drops a **Whole Robot** onto the belt.
2.  **Breakdown:** The robot enters a **Scrapper**. It outputs raw trash (Scrap Metal, Dirty Circuits, Broken Glass).
3.  **Processing:**
    * **Wash:** Dirty items -> Clean items (Value increase).
    * **Smelt:** Scrap Metal -> Ingots.
    * **Sort:** Filter items to different processing lines.
4.  **Crafting:** Combine refined materials (e.g., Plastic + Circuit) -> Consumer Goods (e.g., Phone).
5.  **Selling:** Items reach the "Sales Bin" to generate **Credits ($)**.
6.  **Upgrade:** Spend Credits to unlock faster machines, better deliveries, and automation.

---

## 3. Key Mechanics

### A. The "No Waste" Rule
* There is **no delete button** for items.
* Everything must be processed or sold.
* **Waste Processing:** Even "Trash" (slag, rust) sells for $0.01, or can be recycled into low-tier blocks. You cannot just delete the item to make it vanish.

### B. Construction & Refunds
* **Placement:** Grid-based building.
* **Deconstruction:** 100% Refund Policy. If you delete a machine, you get 100% of the materials/money back. Encourages experimentation.

### C. Power Progression
* **Phase 1 (Manual):** Player clicks a "Hand Crank" to generate energy to run the first belt/scrapper.
* **Phase 2 (Burner):** Burn "Combustible Waste" (wood/rubber from robots) to generate power.
* **Phase 3 (Electric):** Automated power grid (Solar/Nuclear).

---

## 4. Machines & Buildings

### Generators (Sources)
* **Delivery Chute:** Spawns "Whole Robots" at intervals.
* **Hand Crank:** Generates 10 Power per click.
* **Bio-Burner:** Burns organic trash for steady power.

### Processors
* **The Scrapper:** Input: Robot -> Output: 3-5 Random Scrap items.
* **Washer:** Input: Dirty Item + Water (optional) -> Output: Clean Item.
* **Smelter:** Input: Metal Scrap -> Output: Ingot.
* **Assembler:** Input: Item A + Item B -> Output: New Product.
* **Recycler:** Input: Any Item -> Output: $ (Low value, used for overflowing trash).

### Logistics
* **Conveyor Belt:** Moves items.
* **Splitter/Merger:** Divides or combines lines.
* **Filter Arm:** Grabs specific items (Essential for sorting the random output of Scrappers).
* **Silo:** Stores large amounts of items (Buffer).
* **Sales Bin:** The final destination. Converts items to Money.

---

## 5. Resources (Items)

**Tier 0: Inputs**
* Security Bot (Low yield)
* Butler Bot (Medium yield)
* War Bot (High yield, dangerous materials)

**Tier 1: Raw Scrap**
* Rusted Iron
* Dirty Circuit
* Shattered Glass
* Rubber Scrap

**Tier 2: Refined**
* Iron Ingot (Smelted Rusted Iron)
* Clean Circuit (Washed Dirty Circuit)
* Glass Pane (Smelted Glass)
* Rubber Bar (Smelted Rubber)

**Tier 3: Consumer Goods (High Value)**
* **Smartphone:** Clean Circuit + Glass Pane + Plastic.
* **Toaster:** Iron Ingot + Heating Element.

---

## 6. Progression System (Milestones)

**Currency:** Credits ($)

**Upgrades to Buy:**
1.  **Delivery Contracts:**
    * Level 1: Slow delivery, rusty bots.
    * Level 2: Faster delivery.
    * Level 3: High-Tech bots (contain Gold/Titanium).

2.  **Scrap Tech:**
    * **Precision Lasers:** Scrappers produce *more* scrap per robot.
    * **Speed Overclock:** Scrappers work 2x faster.

3.  **Unlock Milestones:**
    * **Milestone 1:** Unlocks Belts & Scrapper (Start).
    * **Milestone 2:** Unlocks Washer & Smelter.
    * **Milestone 3:** Unlocks Assembler (Crafting).
    * **Milestone 4:** Unlocks Auto-Power.

---

## 7. Technical Todo List (Development Steps)

- [ ] **Step 1: Item Data Structure**
    * Define items with properties: `name`, `value`, `isDirty`, `canSmelt`.
- [ ] **Step 2: Conveyor Logic**
    * Make items move from tile to tile.
- [ ] **Step 3: The Scrapper Logic**
    * Create a machine that takes 1 item in and spits 3 different items out.
- [ ] **Step 4: Money System**
    * Create UI for Money.
    * Create "Sales Bin" logic (delete item, add money).
- [ ] **Step 5: Construction Menu**
    * UI to select and place buildings.
