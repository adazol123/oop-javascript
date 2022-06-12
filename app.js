class Member {

    constructor(Name, DiscordID, DiscordUsername) {
        this.Name = Name;
        this.DiscordID = DiscordID;
        this.DiscordUsername = DiscordUsername
    }

    getInfo() {
        return {
            Name: this.Name,
            DiscordID: this.DiscordID,
            DiscordUsername: this.DiscordUsername
        }
    }
}


class Scholar extends Member {
    constructor(Name, DiscordID, DiscordUsername, MetamaskAddress) {
        super(Name, DiscordID, DiscordUsername)
        this.MetamaskAddress = MetamaskAddress
    }

    getScholarInfo() {
        return {
            Name: this.Name,
            MetamaskAddress: this.MetamaskAddress
        }
    }
}

const scholar = new Scholar("Danyel", "Danyel#5423", "5435fd34", "0x1245sdhdshadh321fdgk")

console.log(scholar.getInfo());