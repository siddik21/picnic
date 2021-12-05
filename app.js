const picnic=[
    {
        id: 111,
        name: 'Abu Bakkar Siddik',
        class: 'Seven',
        gendar: 'Male',
        location: 'Dhaka',
        fee: 700
    },
    {
        id: 112,
        name: 'Pijus Kormokar',
        class: 'Eight',
        gendar: 'Male',
        location: 'Noyakhali',
        fee: 800
    },
    {
        id: 113,
        name: 'Delwar Hossain',
        class: 'Nine',
        gendar: 'Male',
        location: 'Thakurgaon',
        fee: 900
    },
    {
        id: 114,
        name: 'Puja Das',
        class: 'Seven',
        gendar: 'Female',
        location: 'Feni',
        fee: 700
    },
    {
        id: 115,
        name: 'Jakeya Rahman',
        class: 'Eight',
        gendar: 'Female',
        location: 'Dhaka',
        fee: 800
    },
    {
        id: 116,
        name: 'Nurul Hossain',
        class: 'Ten',
        gendar: 'Male',
        location: 'Gazipur',
        fee: 1000
    },
    {
        id: 117,
        name: 'Emon Khan',
        class: 'Seven',
        gendar: 'Male',
        location: 'Kustia',
        fee: 700
    },
    {
        id: 118,
        name: 'Akram',
        class: 'Eight',
        gendar: 'Male',
        location: 'Borishal',
        fee: 800
    },
    {
        id: 119,
        name: 'Jr Akash',
        class: 'Six',
        gendar: 'Male',
        location: 'Meherpur',
        fee: 600
    },
    {
        id: 120,
        name: 'Pollob Hossain',
        class: 'Nine',
        gendar: 'Male',
        location: 'Bogura',
        fee: 900
    }
]

let total=0;

picnic.map(data => { 
    if(data.gendar == 'Male'){
    console.log(`
    ID: ${data.id}
    Name: ${data.name}
    Class: ${data.class}
    Gendar: ${data.gendar}
    Location: ${data.location}
    fee: ${data.fee}Taka
                `);
    total= total + data.fee;
    }
}
);
console.log(`Total Fee From All Male Students Are ${total}Taka`);
console.log(`**********************************************************`)

let totall = 0;

picnic.map(data=>{
    if(data.gendar == 'Female'){
        console.log(`
        ID: ${data.id}
        Name: ${data.name}
        Class: ${data.class}
        Gendar: ${data.gendar}
        Location: ${data.location}
        Fee: ${data.fee}
        `)
    totall= totall + data.fee;
    }
});
console.log(`Total Fee From All Female Students Are ${totall}Taka`);
console.log(`*************************************************************`)


let tottal = 0;
picnic.map(data =>
    (tottal = tottal + data.fee)
);
console.log(`TOTAL FEE FROM ALL STUDENTS ARE ${tottal}Taka`);