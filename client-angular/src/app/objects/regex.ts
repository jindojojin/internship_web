export function spaceTojoin(str:string){
    return str.replace(/\ /g,"-");
}
export function calculateDiffDays(job) {
    var jobDate = job.endDate.split("-");
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var endDate = new Date(jobDate[0], jobDate[1] - 1, jobDate[2]);
    var today = new Date();
    var diffDays = Math.round((endDate.getTime() - today.getTime()) / (oneDay));
    return diffDays;
  }
export function isReplyMessage(string){
    let template =  /Re:(.)*/;
    return template.test(string);        
}