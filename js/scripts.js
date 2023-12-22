const pluto = {
    name:  'Pluto',
    role: 'GOD',
    image: 'immagine.jpg'
};


console.log('pluto.name', gino.name,typeof gino.name);

const ourTeam = [
    {
        name:  'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'   
    },

    {
        name:  'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'   
    },

    {
        name:  'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'   
    },

    {
        name:  'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'   
    },

    {
        name:  'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'   
    },

    {
        name:  'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'   
    }
]

console.log('oureTeam',ourTeam,typeof ourTeam);

for(let i = 0; i < ourTeam.length;i++){
    console.log(ourTeam[i].name,ourTeam[i].role,ourTeam[i].image);
}

const ourteamlist = document.getElementById('our-team-list');
for(let i = 0 ; i< ourTeam.length;i++){
ourteamlist.innerHTML += `
<li>
    <h2>
        ${ourTeam[i].name}
    </h2>

    <h3>
        ${ourTeam[i].role}
    </h3>

    <h4>
        ${ourTeam[i].image}  
    </h4>

</li>

`;
}
