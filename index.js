function getIsDate(date,day= 7) {
    let today = new Date();
    let todayTime = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()).getTime();
    let oldDay = new Date(date);
    let oldTime = new Date(oldDay.getFullYear(), oldDay.getMonth() + 1, oldDay.getDate()).getTime();
    const differ = Math.floor(Math.abs((oldTime - todayTime) / 1000 / 60 / 60 / 24));
    if (differ === 0) {
        return 'Today';
    } else if (differ === 1) {
        return 'Yesterday';
    } else if (differ < day) {
        return `${day}days`;
    } else {
        return 'Earlier';
    }
}

export default getIsDate;