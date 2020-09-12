# NordgarDungeonTestRoom
A role-playing game I am developing to run on command line through Node.js with inquirer.

###1: Game Summery

###2: Character Creation
2.1: Stats
2.2: Races
2.3: Professions
2.4: Buying Equipment

###3: Main Interface
3.1: Venture Forward
3.2: Use an Item
3.3: Cast a Spell
3.4: Rest
3.5: Print Stats

###4: Adventuring
4.1: Combat
4.1.1: Attack
4.1.2: Cast a Spell
4.1.3: Use an Item
4.1.4: Print Stats
4.1.5: Flee
4.2: Traps
4.3: Merchants

###5: Spells
5.1: Blind
5.2: Cure Poison
5.3: Death Ray
5.4: Fire Bolt
5.5: Greater Healing
5.6: Haste
5.7: Ice Lance
5.8: Minor Healing
5.9: Stone Skin
5.10: Vanish

###6: Future Developments



### 1: Game Summery.
Welcome to my repository for Nordgar Dungeon, a CLI game I am developing as a hobby using Node js and the npm package Inquirer.  In this game you start out by writing you name, choosing
a race, choosing a class and buying equipment.  From there you venture into the dungeon killing monsters and avoiding traps while growing stronger and aquireing gold to buy various types of
loot. As your character gains experience their stats will get higher and possibly gain new spells.

### 2: Character Creation.

2.1: Stats
Your character will have four stats: Strength, Agility, Mind and Charisma.  Strength gives you more hit points and increases your chance to hit in combat.  Agility increases your
chance to dodge both attacks from monsters and traps.  Mind increases your Mana Points and once spell caster monsters are added, it will increase your likelihood to resist magic. 
Charisma affects how much you pay for items when you encounter a merchant.

2.2: Races
There are four races you can pick from in Nordgar Dungeon: Human, Elf, Dwarf or Halfling.  Humans are perfectly average, Elves receive an extra point of mind and one less point of strength,
Dwarves receive two extra points of strength and one less point of agility and charisma and Halfling receive an extra point of agility and one less point of strength.

2.3: Professions
There are five Professions you can pick from in Nordgar Dungeon: Warrior, Thief, Mage, Paladin and Bard.  The Warrior has access to all weapons and armor and gains strength at the highest
rate and the cost of having no special abilities.  The Thief is a bit more limited in combat than the Warrior but deals double damage if they strike first in combat and can use Thieves'
Tools to automatically disarm traps.  The Mage has access to every spell in the game but is very weak in melee combat.  The Paladin is almost as good in melee combat as the warrior 
they do not gain strength as fast but they do gain a small amount of spells to compensate.  The Bard is similar but has access to a different set of spells.

2.4: Buying Equipment
After selecting a name, race and profession, you will be brought to a shop where you have 150 Gold Pieces to spend on equipment.  Available to you are six types of Weapons:
(Quarter Staff, Dagger, Mace, Short Sword, Long Sword and Battle Axe), three types of armor: (Leather Armor, Chain Mail and Plate Mail), Thieves' Tools (Which allow you to disarm traps if
you are playing a thief), Camping Supplies (Which allow you to rest for the night), Healing Potions (Which restore ten points of damage), Mana Potions (Which restore ten points of mana) and
Antidotes (Which cure poison).  If you have more gold than the item costs and your character can equip the selected item it is added to your character.

###3: Main Interface


3.1: Venture Forward			
Once the player is ready they can venture into the next room of the dungeon.  See section 4 for more details.

3.2: Use an Item
The Player has the option to drink a potion before continuing into the next room.  Currently there are three different potions available: Healing Potions, Mana Potions and Antidotes. If
the player has a least one item of a certain type, that item type will appear in this menu.

3.3: Cast a Spell
If the player is playing a Mage or Paladin, they have the option to cast spells before continuing forward.  Out of combat spells are restricted to healing, cure aliment (such as cure poison)
and barrier spells (like Stone Skin).  Since spells like fire bolt or blind require a target other than yourself they cannot be used outside of combat.  A Bard is also capable of casting
spells but since all of their spells are currently in-combat only this option is not available on this menu.  Each spell cost the player a certain amount of mana points to use.
If the player has less mana points than the spells MagicPointCost the spell cannot be cast.

3.4: Rest
If the player has camping supplies available, they may set up camp for the night to restore a random amount of health and mana.  One set of camping supplies is used upon each rest.
Unlike potions camping supplies cannot be used in combat.

3.5: Print Stats
This function shows the player's stats, health, mana, gold, experience, spells known and items available.

###4. Adventuring.


4.1: Combat
The main feature of Nordgar Dungeon. When entering a new room the player has a seventy-five percent chance to fight a random monster.  At the start of each turn the player and monster both
receive a random number between 1 and 12 and add their agility to that number.  If the monster's number is higher the monster goes first otherwise the player goes first.  On the monster's
turn they will try to attack the player, on the player's turn they recieve a list of options list below.  The battle continues until either one character's hit points reach zero or less or
the player flees.

4.1.1: Attack
When attacking the a random number between 1 and 12 is generates for each the monster and the player, the player adds their strength the monster add their agility.  If the player's number
is equal too or greater than the monsters number, the player's attack hits and deals a random amount of damage.  Damage may be reduced by the monster's armor but at least one point of damge
is always dealt.  Everytime the monster is damaged the game checks to see if they are still alive.

4.1.2: Cast a Spell
See 3.3, certain spells can only be cast in combat.

4.1.3: Use an Item
See 3.2

4.1.4: Print Stats
See 3.5, this function is useful for checking the aumount of Hit Points and Mana Points the player has left.

4.1.5: Flee
When this action is selected both the player and the monster generate a random number between 1 and 12 and add their agility stat. The player's total is greater than the monster's the player
escapes and goes back to the main interface.  If not the battle continues and it is the monster's turn.

4.2: Traps
When venturing forward the player has a ten percent chance to encounter a trap.  When encountering a trap a random number between 1 and 12 is generated and the player's agility is added
to that.  If that number is greater than the trap's difficulty the player avoid the trap and gains experience.  If that number is lower the player takes damage from the trap.  If the player
is a Thief and has thieves' tools they may choose the automatically disarm the trap and still get experience. Each disarm attempt consumes a set of tools.
There are four different types of traps that the player can encounter, if they encounter a poison arrow trap they have a chance to become poisoned.

4.3: Merchants
When venturing forward the player has a fifteen percent chance to encounter a merchant.  In addition to the merchant at the beginning, there are five other merchants that you can encounter.
Most of them will have extra powerful but expensive weapons and armor that you buy in addition to the all the potions and supplies available at the beginning.

###5. Spells.

5.1: Blind
A spell Mages and Bards get at Level 5 that if successful will greatly reduced a monster's chance to hit the player.  When it is cast the game generates a random number between 1 and 12 and
add the monsters mind stat.  If the this number is lower than 19 the monster becomes blinded.

5.2: Cure Poison
A spell Mages and Paladins get at Level 3 that instantly removes the poisoned ailment from the player.

5.3: Death Ray
A spell Mages and Bards get at Level 6 that if successful will instantly kill the monster the player is fighting.  When it is cast the game generates a random number between 1 and 12 and
add the monsters strength stat.  If the this number is lower than 22 the monster is defeated.

5.4: Fire Bolt
A spell Mages and Bards start out with that deals seven points of unavoidable damage.

5.5: Greater Healing
A spell Mages and Paladins get at Level 4 that instantly heals the player for sixteen points of damage.

5.6: Haste
A spell Mages and Bards get at Level 2 that increases the players chance to dodge traps and monsters.  Haste lasts until the end of the battle it is cast.

5.7: Ice Lance
A spell Mages and Bards get at Level 4 that deals fourteen points of unavoidable damage.

5.8: Minor Healing
A spell Mages and Paladins start out with that instantly heals the player for eight points of damage.

5.9: Stone Skin
A spell Mages and Paladins get at Level 6 that creates a barrier that will absorb twenty-five points of damage for the player.  If Stone Skin is cast while the player already has extra 
hit points the barrier will be set at twenty-five regardless.

5.10: Vanish
A spell Mages and Bards get at Level 3 that allows the player to instantly leave combat.																					

###6: Future Developments.
In the next updates of Nordgar Dungeon I plan to add new npm packages to enchance the user interface.  I'm planning on adding commander to implement hotkeys, chalk to add color and I want
to find a package that lets me add audio.  I'm also going to see if I can find a way so that the player can encounter multiple monsters at once.  I also might add a Brawler profession that
does even more damage than the warrior but cannot wear armor.
