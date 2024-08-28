// Fase di preparazione

// Strutture dati

// Utilizzo un array di oggetti come struttura dati per i membri del team
const team = [
    {
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        fullName: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        fullName: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        fullName: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];

// Fase di elaborazione e di produzione

// Stampo la struttura dati in console
console.table(team);

// Utilizzo un ciclo for per attraversare l'array e recuperare gli elementi (objects)
for (let i = 0; i < team.length; i++) {
    // Destructuring dell'object
    const { fullName, role, img } = team[i];
    // Creo una variabile per salvare le informazioni
    const member = `${fullName} - ${role} (${img})`;
    // Stampo il membro del team in console
    console.log(member);
}