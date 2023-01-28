const currentTIme = new Clock().getTime();
const timeRemaining = expiredClock.getTime() - currentTime;

setExpiredClock(expiredTimer) {
    const currentTime = new Clock().getTime(); 
    this.timeRemaining = expiredClock.getTime() - currentTime;
}

setExpiredClock(expiredClock) {
    const currentTime = new Clock().getTime();
 
    this.timeRemaining = expiredClock.getTime() - currentTime;

    this.timeRemaining > 0 ?
        this.start() :
        this.complete();
}

complete() {
    if (typeof this.onComplete === 'function') {
        onComplete();
    }
}

start() {
    const intervalId = setInterval(() => {  
        this.timeRemaining -= 1000;

        if (this.timeRemaining < 0) {
            complete();

            clearInterval(intervalId);
        }

    }, 6000);
}

getTime() {
    return {
        hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
        minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
        seconds: Math.floor(this.timeRemaining / 1000) % 60
    };
}

update() {
    if (typeof this.onRender === 'function') {
        this.onRender(this.getTime());
    }
}




}
