// Helper function to get image path from card name
function getCardImagePath(cardName) {
  return cardName.toLowerCase().replace(/\s+/g, '').replace('the', '') + '.jpg';
}

const majorArcana = [
  {
    id: 0,
    name: "The Fool",
    number: "0",
    image: "thefool.jpg",
    upright: {
      short: "New beginnings, innocence, spontaneity, free spirit",
      detailed: "The Fool represents the beginning of all creative endeavors and new phases of life. This card encourages you to take a leap of faith and trust in the universe. It signifies unlimited potential and the courage to embark on new journeys without fear of the unknown."
    },
    reversed: {
      short: "Recklessness, negligence, inconsideration, naivety",
      detailed: "Reversed, The Fool warns against reckless decisions and foolish behavior. You may not be taking important matters seriously enough, or you're being taken advantage of due to naivety. Consider the consequences before leaping."
    },
    symbolism: ["White rose: purity and innocence", "Small dog: loyalty and protection", "Mountain: challenges ahead", "Cliff edge: risk and the unknown"],
    history: "The Fool is one of the oldest archetypes in tarot, dating to 15th century Europe. Originally depicted as a jester or beggar, it evolved to represent the spiritual journey and new beginnings.",
    keywords: ["beginnings", "freedom", "innocence", "adventure", "potential"],
    color: "#FFD700"
  },
  {
    id: 1,
    name: "The Magician",
    number: "I",
    image: "themagician.jpg",
    upright: {
      short: "Manifestation, resourcefulness, power, inspired action",
      detailed: "The Magician represents the ability to manifest your desires and turn ideas into reality. You have all the tools and resources you need to succeed. This card signals a time of heightened creative power and the ability to channel universal energy."
    },
    reversed: {
      short: "Manipulation, poor planning, untapped talents, illusion",
      detailed: "Reversed, The Magician suggests manipulation or trickery. You may be using your skills for selfish purposes, or failing to reach your full potential. Beware of illusions and empty promises."
    },
    symbolism: ["Infinity symbol: unlimited potential", "Wand raised: channeling divine energy", "Four suit symbols: mastery of all elements", "Red and white: spiritual and physical balance"],
    history: "The Magician represents the archetypal magus or wizard, symbolizing mastery over the material world through will and knowledge. In medieval times, this card was associated with street performers and tricksters.",
    keywords: ["manifestation", "power", "action", "resourcefulness", "skill"],
    color: "#FF6B6B"
  },
  {
    id: 2,
    name: "The High Priestess",
    number: "II",
    image: "thehighpriestess.jpg",
    upright: {
      short: "Intuition, sacred knowledge, divine feminine, subconscious mind",
      detailed: "The High Priestess represents intuition, sacred knowledge, and the subconscious mind. She encourages you to look beyond the obvious and trust your inner voice. This card signals a time to listen to your intuition and explore your spiritual side."
    },
    reversed: {
      short: "Secrets, disconnected from intuition, withdrawal, silence",
      detailed: "Reversed, The High Priestess suggests you're disconnected from your intuition or ignoring your inner voice. Hidden agendas or secrets may be at play. Reconnect with your spiritual self."
    },
    symbolism: ["Pillars B and J: balance of opposites", "Crescent moon: divine feminine and intuition", "Torah scroll: sacred knowledge", "Pomegranates: fertility and abundance"],
    history: "The High Priestess evolved from the Papess card in early tarot. She represents the feminine principle of wisdom and the mysteries of the subconscious, often associated with moon goddesses across cultures.",
    keywords: ["intuition", "mystery", "subconscious", "wisdom", "spirituality"],
    color: "#4A90E2"
  },
  {
    id: 3,
    name: "The Empress",
    number: "III",
    image: "theempress.jpg",
    upright: {
      short: "Femininity, beauty, nature, nurturing, abundance",
      detailed: "The Empress represents abundance, nurturing, and the beauty of nature. She encourages creativity and connection with the natural world. This card signals a time of growth, fertility, and bringing projects or relationships to fruition."
    },
    reversed: {
      short: "Creative block, dependence, smothering, neglect",
      detailed: "Reversed, The Empress may indicate creative blocks or codependency. You might be smothering others with care or neglecting yourself. Find balance between giving and receiving."
    },
    symbolism: ["Venus symbol: love and beauty", "Wheat: abundance and fertility", "Crown of stars: divine connection", "Cushioned throne: comfort and nurturing"],
    history: "The Empress has roots in ancient mother goddess archetypes. She represents the earth mother, abundance, and the creative force of nature, celebrated in cultures worldwide.",
    keywords: ["abundance", "nurturing", "creativity", "fertility", "nature"],
    color: "#E94B3C"
  },
  {
    id: 4,
    name: "The Emperor",
    number: "IV",
    image: "theemperor.jpg",
    upright: {
      short: "Authority, structure, control, fatherhood, leadership",
      detailed: "The Emperor represents authority, structure, and leadership. He encourages you to take control of your life through discipline and organization. This card signals a time to establish order and assert your power with wisdom."
    },
    reversed: {
      short: "Domination, excessive control, rigidity, inflexibility",
      detailed: "Reversed, The Emperor can indicate tyranny or excessive control. You may be too rigid or facing an authoritarian figure. Consider whether structure is helping or hindering your growth."
    },
    symbolism: ["Rams heads: Aries energy and leadership", "Ankh: life and power", "Orb: dominion over the world", "Mountain throne: solid foundation"],
    history: "The Emperor card evolved from representations of temporal power and earthly authority. In tarot tradition, he represents the father figure and the masculine principle of order and structure.",
    keywords: ["authority", "structure", "leadership", "power", "control"],
    color: "#FF8C42"
  },
  {
    id: 5,
    name: "The Hierophant",
    number: "V",
    image: "thehierophant.jpg",
    upright: {
      short: "Spiritual wisdom, tradition, conformity, institutions, teaching",
      detailed: "The Hierophant represents traditional values, spiritual wisdom, and established institutions. He encourages you to seek knowledge from trusted sources and honor traditions. This card signals a time to follow established systems or seek a mentor."
    },
    reversed: {
      short: "Rebellion, unconventional, freedom, challenging tradition",
      detailed: "Reversed, The Hierophant suggests breaking from tradition or challenging established beliefs. You may be rebelling against conventional systems or seeking your own spiritual path outside traditional structures."
    },
    symbolism: ["Papal cross: religious authority", "Two acolytes: teaching and learning", "Keys: access to sacred knowledge", "Hand gesture: blessing and wisdom"],
    history: "Originally called The Pope, The Hierophant represents religious and spiritual authority. The card evolved to represent any form of traditional teaching and the passing down of wisdom through established systems.",
    keywords: ["tradition", "teaching", "wisdom", "conformity", "institutions"],
    color: "#A8E6CF"
  },
  {
    id: 6,
    name: "The Lovers",
    number: "VI",
    image: "thelovers.jpg",
    upright: {
      short: "Love, harmony, relationships, values alignment, choices",
      detailed: "The Lovers represents deep connections, harmony, and important choices. Beyond romance, this card speaks to alignment of values and the union of opposites. It signals a time to make choices that reflect your true values and beliefs."
    },
    reversed: {
      short: "Disharmony, imbalance, misalignment, poor choices",
      detailed: "Reversed, The Lovers indicates disharmony in relationships or misalignment of values. You may be making choices that don't reflect your true self or experiencing conflict between head and heart."
    },
    symbolism: ["Angel Raphael: divine guidance", "Tree of Knowledge: choice and consequence", "Tree of Life: spiritual connection", "Mountain: challenges overcome through partnership"],
    history: "The Lovers evolved from depicting a man choosing between two women to representing the union of masculine and feminine energies. It symbolizes the power of conscious choice and sacred union.",
    keywords: ["love", "choice", "harmony", "relationships", "values"],
    color: "#FFB6C1"
  },
  {
    id: 7,
    name: "The Chariot",
    number: "VII",
    image: "thechariot.jpg",
    upright: {
      short: "Control, willpower, success, determination, action",
      detailed: "The Chariot represents victory through determination and willpower. You have the strength to overcome obstacles and achieve your goals. This card signals a time of focused action and maintaining control through competing forces."
    },
    reversed: {
      short: "Lack of control, aggression, opposition, scattered energy",
      detailed: "Reversed, The Chariot suggests lack of direction or control. You may be scattered, aggressive, or facing strong opposition. Regain focus and align your energies before moving forward."
    },
    symbolism: ["Black and white sphinxes: opposing forces", "Star crown: divine guidance", "City behind: what you've left behind", "Armor: protection and determination"],
    history: "The Chariot draws from ancient depictions of triumphant military leaders and gods. It represents the triumph of the human will and the ability to direct one's own destiny.",
    keywords: ["willpower", "victory", "determination", "control", "action"],
    color: "#9B59B6"
  },
  {
    id: 8,
    name: "Strength",
    number: "VIII",
    image: "strength.jpg",
    upright: {
      short: "Courage, inner strength, patience, compassion, control",
      detailed: "Strength represents inner fortitude, courage, and compassion. True strength comes from patience and gentle control rather than force. This card signals a time to tame your inner beasts through love and understanding."
    },
    reversed: {
      short: "Self-doubt, weakness, insecurity, lack of confidence",
      detailed: "Reversed, Strength indicates self-doubt or lack of confidence. You may be struggling with inner demons or feeling overwhelmed. Reconnect with your inner courage and compassion for yourself."
    },
    symbolism: ["Woman and lion: taming through love", "Infinity symbol: unlimited inner power", "White robe: purity of intent", "Flowers: gentle approach"],
    history: "Strength card shows the power of gentleness over force, evolving from medieval depictions of virtue conquering vice. It represents the inner strength needed for spiritual growth.",
    keywords: ["courage", "patience", "compassion", "inner strength", "control"],
    color: "#52C41A"
  },
  {
    id: 9,
    name: "The Hermit",
    number: "IX",
    image: "thehermit.jpg",
    upright: {
      short: "Soul searching, introspection, inner guidance, solitude, wisdom",
      detailed: "The Hermit represents introspection, soul searching, and inner wisdom. Sometimes we need solitude to hear our inner voice. This card signals a time to turn inward, seek answers within, and share wisdom gained from experience."
    },
    reversed: {
      short: "Isolation, loneliness, withdrawal, paranoia",
      detailed: "Reversed, The Hermit suggests excessive isolation or withdrawal from the world. You may be lonely or too focused inward. Balance solitude with connection and share your light with others."
    },
    symbolism: ["Lantern with star: inner light and wisdom", "Staff: support and guidance", "Mountain peak: spiritual heights", "Gray robes: neutrality and wisdom"],
    history: "The Hermit evolved from depictions of wise old men and saints seeking enlightenment. The card represents the archetype of the wise sage who has withdrawn to gain deeper understanding.",
    keywords: ["solitude", "wisdom", "introspection", "guidance", "soul-searching"],
    color: "#8B7355"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    number: "X",
    image: "wheeloffortune.jpg",
    upright: {
      short: "Good luck, karma, life cycles, destiny, turning point",
      detailed: "The Wheel of Fortune represents the cycles of life, karma, and destiny. What goes around comes around, and change is inevitable. This card signals a turning point or stroke of luck, reminding you that life is always in motion."
    },
    reversed: {
      short: "Bad luck, resistance to change, breaking cycles",
      detailed: "Reversed, The Wheel suggests resistance to change or a downward turn. You may be experiencing bad luck or struggling against inevitable changes. Accept the cycles and look for lessons in challenges."
    },
    symbolism: ["Wheel: cycles of life", "Four creatures: four elements and evangelists", "Hebrew letters: YHVH (God's name)", "Sphinx: riddles and mysteries"],
    history: "The Wheel of Fortune draws from the medieval concept of Fortune's Wheel, where fate could elevate or humble anyone. It represents the ancient understanding of cyclical time and karma.",
    keywords: ["fate", "change", "cycles", "luck", "destiny"],
    color: "#1890FF"
  },
  {
    id: 11,
    name: "Justice",
    number: "XI",
    image: "justice.jpg",
    upright: {
      short: "Justice, fairness, truth, cause and effect, law",
      detailed: "Justice represents fairness, truth, and the law of cause and effect. Every action has consequences. This card signals a time when justice will be served, decisions must be made fairly, and truth will come to light."
    },
    reversed: {
      short: "Unfairness, lack of accountability, dishonesty, bias",
      detailed: "Reversed, Justice indicates unfairness or lack of accountability. You may be avoiding responsibility or experiencing bias. Examine your actions honestly and seek to make amends where needed."
    },
    symbolism: ["Scales: balance and fairness", "Sword: clarity and truth", "Purple cloak: authority and compassion", "Square: stable foundation"],
    history: "Justice has roots in depictions of the classical goddess Justitia. The card represents the universal law of karma and the principle that all actions have consequences.",
    keywords: ["fairness", "truth", "law", "balance", "accountability"],
    color: "#722ED1"
  },
  {
    id: 12,
    name: "The Hanged Man",
    number: "XII",
    image: "thehangedman.jpg",
    upright: {
      short: "Surrender, letting go, new perspective, pause, sacrifice",
      detailed: "The Hanged Man represents surrender, suspension, and seeing things from a new perspective. Sometimes we must let go and surrender to gain enlightenment. This card signals a time to pause, sacrifice the old, and embrace new viewpoints."
    },
    reversed: {
      short: "Delays, resistance, stalling, indecision",
      detailed: "Reversed, The Hanged Man suggests resistance to necessary change or delays. You may be stalling or refusing to see other perspectives. Let go of what no longer serves you."
    },
    symbolism: ["Upside-down position: new perspective", "Halo: enlightenment", "Serene expression: acceptance", "Tree: living sacrifice"],
    history: "The Hanged Man draws from Norse mythology (Odin) and Christian symbolism. It represents the paradox that sometimes we must surrender to gain power and sacrifice to achieve enlightenment.",
    keywords: ["surrender", "perspective", "sacrifice", "pause", "letting go"],
    color: "#13C2C2"
  },
  {
    id: 13,
    name: "Death",
    number: "XIII",
    image: "death.jpg",
    upright: {
      short: "Endings, transformation, transition, letting go, change",
      detailed: "Death represents transformation, endings, and new beginnings. This is rarely about physical death but rather the end of one phase and the start of another. This card signals profound change and the need to release what no longer serves you."
    },
    reversed: {
      short: "Resistance to change, stagnation, fear of endings",
      detailed: "Reversed, Death suggests resistance to necessary endings or fear of change. You may be clinging to the past or avoiding transformation. Embrace the changes that will lead to growth."
    },
    symbolism: ["Skeleton: what remains when all else falls away", "White rose: purity of transformation", "Rising sun: rebirth", "River: life force and change"],
    history: "Death card has been feared and misunderstood throughout tarot history. It represents the necessary cycle of death and rebirth found in all spiritual traditions and natural cycles.",
    keywords: ["transformation", "endings", "change", "rebirth", "transition"],
    color: "#2F54EB"
  },
  {
    id: 14,
    name: "Temperance",
    number: "XIV",
    image: "temperance.jpg",
    upright: {
      short: "Balance, moderation, patience, purpose, meaning",
      detailed: "Temperance represents balance, moderation, and finding the middle path. Patience and careful blending of opposing elements create harmony. This card signals a time to find balance, practice moderation, and seek higher purpose."
    },
    reversed: {
      short: "Imbalance, excess, lack of harmony, extremes",
      detailed: "Reversed, Temperance suggests imbalance or excess. You may be going to extremes or lacking harmony in your life. Find the middle path and restore balance to your actions."
    },
    symbolism: ["Angel: divine guidance and protection", "Water flowing: blending and balance", "One foot on land, one in water: balance of worlds", "Triangle and square: fire and earth"],
    history: "Temperance evolved from the cardinal virtue of the same name. The card represents the alchemical process of creating gold from base metals, symbolizing spiritual transformation through balance.",
    keywords: ["balance", "moderation", "harmony", "patience", "purpose"],
    color: "#FA8C16"
  },
  {
    id: 15,
    name: "The Devil",
    number: "XV",
    image: "thedevil.jpg",
    upright: {
      short: "Bondage, addiction, materialism, shadow self, attachment",
      detailed: "The Devil represents bondage, addiction, and unhealthy attachments. We are often imprisoned by our own choices and beliefs. This card signals a time to examine what controls you and recognize that the chains are often self-imposed."
    },
    reversed: {
      short: "Release, freedom, breaking chains, enlightenment",
      detailed: "Reversed, The Devil indicates breaking free from bondage or releasing unhealthy attachments. You're recognizing the chains and choosing freedom. Embrace liberation from what has held you back."
    },
    symbolism: ["Chains: bondage and attachment", "Inverted pentagram: material over spiritual", "Horns: animal nature", "Torch: false enlightenment"],
    history: "The Devil draws from Pan, Baphomet, and medieval depictions of Satan. The card represents not evil but the shadow self and our relationship with temptation and material bondage.",
    keywords: ["bondage", "addiction", "materialism", "shadow", "attachment"],
    color: "#8C8C8C"
  },
  {
    id: 16,
    name: "The Tower",
    number: "XVI",
    image: "thetower.jpg",
    upright: {
      short: "Sudden change, upheaval, chaos, revelation, awakening",
      detailed: "The Tower represents sudden upheaval, destruction of false beliefs, and dramatic change. Sometimes structures must fall for truth to emerge. This card signals unexpected change that, while difficult, clears the way for authentic growth."
    },
    reversed: {
      short: "Fear of change, disaster avoided, delaying the inevitable",
      detailed: "Reversed, The Tower suggests avoiding necessary change or disaster narrowly avoided. You may be resisting inevitable transformation or clinging to unstable foundations. Accept that some structures must fall."
    },
    symbolism: ["Lightning: divine intervention", "Falling figures: ego destruction", "Crown falling: false authority", "Gray clouds: darkness before clarity"],
    history: "The Tower represents the Biblical Tower of Babel and divine intervention that destroys human pride. It symbolizes the necessary destruction of false structures and beliefs.",
    keywords: ["upheaval", "sudden change", "revelation", "destruction", "awakening"],
    color: "#F5222D"
  },
  {
    id: 17,
    name: "The Star",
    number: "XVII",
    image: "thestar.jpg",
    upright: {
      short: "Hope, faith, renewal, inspiration, serenity",
      detailed: "The Star represents hope, inspiration, and renewal after darkness. After the storm comes clarity and peace. This card signals a time of healing, renewed faith, and connection to the divine. Your wishes may be fulfilled."
    },
    reversed: {
      short: "Hopelessness, despair, disconnection, lack of faith",
      detailed: "Reversed, The Star suggests loss of faith or feeling disconnected from hope. You may be despairing or lacking inspiration. Reconnect with your spiritual source and remember that dawn follows the darkest night."
    },
    symbolism: ["Eight stars: hope and guidance", "Naked woman: truth and vulnerability", "Water poured: giving and receiving", "Bird: spiritual thoughts"],
    history: "The Star represents the guiding star that leads the way through darkness. It draws from celestial navigation and the hope symbolized by stars in many spiritual traditions.",
    keywords: ["hope", "faith", "inspiration", "renewal", "serenity"],
    color: "#1DA57A"
  },
  {
    id: 18,
    name: "The Moon",
    number: "XVIII",
    image: "themoon.jpg",
    upright: {
      short: "Illusion, fear, anxiety, subconscious, intuition",
      detailed: "The Moon represents illusion, the subconscious, and navigating through uncertainty. Not everything is as it seems. This card signals a time to trust your intuition, face your fears, and explore the deeper truths hidden beneath the surface."
    },
    reversed: {
      short: "Release of fear, clarity, truth revealed, subsiding anxiety",
      detailed: "Reversed, The Moon indicates fears subsiding or illusions clearing. You're seeing through deception and finding clarity. Trust is being restored as truth emerges from the shadows."
    },
    symbolism: ["Moon: subconscious and intuition", "Path: journey through uncertainty", "Dog and wolf: tamed and wild nature", "Crayfish: emergence from depths"],
    history: "The Moon represents the mysterious feminine principle and the realm of dreams and intuition. It draws from lunar mythology across cultures, where the moon governs hidden realms and emotional tides.",
    keywords: ["illusion", "intuition", "anxiety", "subconscious", "mystery"],
    color: "#597EF7"
  },
  {
    id: 19,
    name: "The Sun",
    number: "XIX",
    image: "thesun.jpg",
    upright: {
      short: "Joy, success, celebration, vitality, positivity",
      detailed: "The Sun represents joy, success, and vitality. Everything is illuminated and clear. This card signals a time of celebration, achievement, and pure happiness. Success is yours, and your authentic self shines brightly."
    },
    reversed: {
      short: "Temporary depression, lack of success, pessimism",
      detailed: "Reversed, The Sun suggests temporary setbacks or pessimism. Joy may be delayed but not denied. Look for the positive and remember that clouds cannot block the sun forever."
    },
    symbolism: ["Bright sun: enlightenment and joy", "Child: innocence and authenticity", "White horse: purity", "Sunflowers: life and happiness"],
    history: "The Sun represents the life-giving solar principle found in all cultures. It symbolizes enlightenment, clarity, and the triumph of consciousness over darkness.",
    keywords: ["joy", "success", "vitality", "positivity", "clarity"],
    color: "#FADB14"
  },
  {
    id: 20,
    name: "Judgement",
    number: "XX",
    image: "judgement.jpg",
    upright: {
      short: "Reflection, reckoning, awakening, renewal, purpose",
      detailed: "Judgement represents reflection, absolution, and awakening to your higher calling. It's time to evaluate your life and rise to a higher level of consciousness. This card signals rebirth, forgiveness, and answering your true calling."
    },
    reversed: {
      short: "Self-doubt, refusal to learn, lack of self-awareness",
      detailed: "Reversed, Judgement suggests self-doubt or refusing to learn from the past. You may be avoiding self-reflection or ignoring your calling. Face your truth and embrace transformation."
    },
    symbolism: ["Angel Gabriel: divine calling", "Trumpet: awakening call", "Rising figures: resurrection", "Mountains and water: earth and spirit"],
    history: "Judgement draws from the concept of the Final Judgment and resurrection. It represents the moment of spiritual awakening when we are called to our higher purpose and true self.",
    keywords: ["reflection", "awakening", "renewal", "calling", "absolution"],
    color: "#EB2F96"
  },
  {
    id: 21,
    name: "The World",
    number: "XXI",
    image: "theworld.jpg",
    upright: {
      short: "Completion, accomplishment, travel, fulfillment, wholeness",
      detailed: "The World represents completion, accomplishment, and wholeness. You have reached the end of a cycle and achieved your goals. This card signals success, fulfillment, and the integration of all lessons learned. The world is yours."
    },
    reversed: {
      short: "Incompletion, lack of closure, shortcuts, delays",
      detailed: "Reversed, The World suggests incompletion or lack of closure. You may be taking shortcuts or feeling unfulfilled. Complete what you've started before moving to the next cycle."
    },
    symbolism: ["Wreath: victory and completion", "Four figures: four elements mastered", "Dancing figure: joy of accomplishment", "Infinity: eternal cycles"],
    history: "The World represents the completion of the Fool's journey and the achievement of cosmic consciousness. It draws from the concept of the world soul and the integration of all experiences.",
    keywords: ["completion", "success", "wholeness", "travel", "fulfillment"],
    color: "#52C41A"
  }
];

const spreadConfig = {
  single: {
    name: "Single Card",
    positions: [
      { label: "Your Guidance", context: "guidance for your current situation" }
    ]
  },
  three: {
    name: "Past • Present • Future",
    positions: [
      { label: "Past", context: "influences that have shaped your current situation" },
      { label: "Present", context: "your current circumstances and challenges" },
      { label: "Future", context: "potential outcomes and where you're headed" }
    ]
  },
  problem: {
    name: "Problem • Solution",
    positions: [
      { label: "The Problem", context: "the core issue you're facing" },
      { label: "Current State", context: "where you are now in relation to this issue" },
      { label: "The Solution", context: "the path forward and guidance for resolution" }
    ]
  }
};
