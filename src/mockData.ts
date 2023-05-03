export interface ITeam{
name:string,
players:IPlayer[],
}
export interface IPlayer{
    id:number,
    name:string,
    skills:ISkill,
    position:string
}
export interface ISkill{
    defense:number,
    attack:number
}

export const mockTeamOne:ITeam={
    name:'Internacional-RS',
    players:[
        {
            id:0,
            name:'Keiller',
            skills:{
                defense:80,
                attack:10
            },
            position:'goalkeper'
        },
        {
            id:1,
            name:'Bustos',
            skills:{
                defense:50,
                attack:70
            },
            position:'right-defense'
        },
        {
            id:2,
            name:'Vitão',
            skills:{
                defense:80,
                attack:40
            },
            position:'defense'
        },
        {
            id:3,
            name:'Gabriel Mercado',
            skills:{
                defense:77,
                attack:40
            },
            position:'defense'
        },
        {
            id:4,
            name:'Renê',
            skills:{
                defense:70,
                attack:70
            },
            position:'left-defense'
        },
        {
            id:5,
            name:'Gustavo Campanharo',
            skills:{
                defense:67,
                attack:68
            },
            position:'midfielder'
        },
        {
            id:6,
            name:'Jhonny',
            skills:{
                defense:68,
                attack:65
            },
            position:'midfielder'
        },
        {
            id:7,
            name:'Mauricio',
            skills:{
                defense:40,
                attack:78
            },
            position:'midfielder'
        },
        {
            id:8,
            name:'Alan Patrick',
            skills:{
                defense:35,
                attack:90
            },
            position:'midfielder'
        },
        {
            id:9,
            name:'Wanderson',
            skills:{
                defense:29,
                attack:87
            },
            position:'left-winger'
        },
        {
            id:10,
            name:'Alemão',
            skills:{
                defense:50,
                attack:77
            },
            position:'striker'
        }

    ]
}

export const mockTeamTwo:ITeam={
    name:'Grêmio-RS',
    players:[
        {
            id:0,
            name:'Grando',
            skills:{
                defense:80,
                attack:16
            },
            position:'goalkeper'
        },
        {
            id:1,
            name:'João Pedro',
            skills:{
                defense:50,
                attack:67
            },
            position:'right-defense'
        },
        {
            id:2,
            name:'Bruno Alves',
            skills:{
                defense:76,
                attack:40
            },
            position:'defense'
        },
        {
            id:3,
            name:'Kanneman',
            skills:{
                defense:85,
                attack:35
            },
            position:'defense'
        },
        {
            id:4,
            name:'Diogo Barbosa',
            skills:{
                defense:65,
                attack:65
            },
            position:'left-defense'
        },
        {
            id:5,
            name:'Pepê',
            skills:{
                defense:71,
                attack:75
            },
            position:'midfielder'
        },
        {
            id:6,
            name:'Villasanti',
            skills:{
                defense:72,
                attack:68
            },
            position:'midfielder'
        },
        {
            id:7,
            name:'Carballo',
            skills:{
                defense:69,
                attack:70
            },
            position:'midfielder'
        },
        {
            id:8,
            name:'Cristaldo',
            skills:{
                defense:33,
                attack:80
            },
            position:'midfielder'
        },
        {
            id:9,
            name:'Vina',
            skills:{
                defense:25,
                attack:84
            },
            position:'midfielder'
        },
        {
            id:10,
            name:'Luiz Suárez',
            skills:{
                defense:44,
                attack:88
            },
            position:'striker'
        }

    ]
}