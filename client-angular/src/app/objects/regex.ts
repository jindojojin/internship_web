export function spaceTojoin(str: string) {
    return str.replace(/\ /g, "-");
}
export function calculateDiffDays(job, date) { // chỉ nhận 1 trong 2 tham số => phục vụ overload
    if (job !== undefined) {
        const jobDate = job.endDate.split("-");
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const endDate = new Date(jobDate[0], jobDate[1] - 1, jobDate[2]);
        let today = new Date();
        let diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
        return diffDays;
    } else if( date != null) {
        var date = date.split('-');
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var endDate = new Date(date[0], date[1] - 1, date[2]);
        var today = new Date();
        var diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
        return diffDays;
    }
    return 2;
}

export function isReplyMessage(string) {
    let template = /Re:(.)*/;
    return template.test(string);
}