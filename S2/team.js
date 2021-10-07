export class Team {
    constructor() {
        this.teamname = 'Manchester City';
        this.trainername = 'Pep Guardiola';
        this.roster = ['Ruben Dias', 'PHil Foden'];
    }
    describe() {
        return `Team ${this.teamname} with trainer ${this.trainername}
        has the following Pokemons: ${[...this.roster]}     `
    }
}

export default Team;