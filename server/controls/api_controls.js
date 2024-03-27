import https from 'https';
const http = https;

export const getAllSymbols = async(req, res, next)=>{
    const options = {
        "method": "GET",
        "hostname": "api.twelvedata.com",
        "port": null,
        "path": `https://api.twelvedata.com/stocks?symbol=AAPL`
    };
    let body;
    try {
        const requ = http.request(options, function (resp) {
            const chunks = [];
            resp.on("data", function (chunk) {
                chunks.push(chunk);
            });
        
            resp.on("end", function () {
                body = Buffer.concat(chunks);
                console.log(body.toString());
                res.render("../views/symbols.ejs", JSON.parse(body));
            });
        });
        
        requ.end();
    }catch(e){
        console.log(e);
    }
    return res;
};


export const getTimeseriesdata = async(req, res, next)=>{
    const symbol = req.params.symbol;
    const options = {
        "method": "GET",
        "hostname": "api.twelvedata.com",
        "port": null,
        "path": `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=30min&apikey=${process.env.API_KEY}&source=docs`
    };
    let body;
    try {
        const requ = http.request(options, function (resp) {
            const chunks = [];
        
            resp.on("data", function (chunk) {
                chunks.push(chunk);
            });
        
            resp.on("end", function () {
                body = Buffer.concat(chunks);
                console.log(body.toString());
                res.render("../views/timeseries.ejs", JSON.parse(body));
            });
        });
        
        requ.end();
    }catch(e){
        console.log(e);
    }
    return res;
};