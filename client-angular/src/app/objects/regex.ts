export function spaceTojoin(str: string) {
    return str.replace(/\ /g, '-');
}
export function calculateDiffDays(job, date) { // chỉ nhận 1 trong 2 tham số => phục vụ overload
    if (job !== undefined) {
        const jobDate = job.endDate.split('-');
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const endDate = new Date(jobDate[0], jobDate[1] - 1, jobDate[2]);
        const today = new Date();
        const diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
        return diffDays;
    } else if (date != null) {
        let datearr = date.split('-');
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let endDate = new Date(datearr[0], datearr[1] - 1, datearr[2]);
        let today = new Date();
        let diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
        return diffDays;
    }
    return 2;
}

export function isReplyMessage(string) {
    const template = /Re:(.)*/;
    return template.test(string);
}