let params = new URLSearchParams(location.search);
let giuste = params.get("numDomCorrette");
let sbagliate = params.get("numDomSbagliate");
let totali = params.get("numeroTotaleDomande");
console.log(giuste, sbagliate, totali);
