class Time {
    static convertToMs(hrs, min = 0, sec = 0, ms = 0) {
        return (hrs*3600000 + min*60000 + sec*1000 + ms); 
    }

    static parseLengthString(string) {
        let split = string.split(':'); 
        return this.convertToMs(split[0], split[1]); 
    }

    static parseHourString(string) {
        let split = string.split(':'); 
        return new Date().setHours(split[0], split[1]); 
    }

    static formatMs(ms) {
        let sec = Math.floor((ms / (1000) )) % 60; 
        let min = Math.floor((ms / (1000 *60))) % 60; 
        let hrs = Math.floor((ms / (1000 * 60 * 60))) % 60; 

        let formated = [
            hrs.toString().padStart(2, '0'), 
            min.toString().padStart(2, '0'),
            sec.toString().padStart(2, '0')
        ].join(':'); 

        return formated; 

    }
}