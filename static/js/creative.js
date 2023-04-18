d3.csv("/static/data/Kaggle_TwitterUSAirlineSentiment.csv", function(error, data) {
    if (error) throw error;
  
    let american = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let delta = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let southwest = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let usAirways = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let united = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    let virginAmerica = {
        "positive": 0,
        "negative": 0,
        "neutral": 0
    };
    
    for (let i = 0; i < data.length; i++) {
            // American 
            if (data[i]["airline"] === "American" && data[i]["airline_sentiment"] === "positive") {
                american.positive ++
            }
            else if (data[i]["airline"] === "American" && data[i]["airline_sentiment"] === "negative") {
                american.negative ++
            }
            else if (data[i]["airline"] === "American" && data[i]["airline_sentiment"] === "neutral")
                american.neutral ++
            // Delta
            if (data[i]["airline"] === "Delta" && data[i]["airline_sentiment"] === "positive") {
                delta.positive ++
            }
            else if (data[i]["airline"] === "Delta" && data[i]["airline_sentiment"] === "negative") {
                delta.negative ++
            }
            else if (data[i]["airline"] === "Delta" && data[i]["airline_sentiment"] === "neutral")
                delta.neutral ++
            // Southwest
            if (data[i]["airline"] === "Southwest" && data[i]["airline_sentiment"] === "positive") {
                southwest.positive ++
            }
            else if (data[i]["airline"] === "Southwest" && data[i]["airline_sentiment"] === "negative") {
                southwest.negative ++
            }
            else if (data[i]["airline"] === "Southwest" && data[i]["airline_sentiment"] === "neutral")
                southwest.neutral ++
            // US Airways
            if (data[i]["airline"] === "US Airways" && data[i]["airline_sentiment"] === "positive") {
                usAirways.positive ++
            }
            else if (data[i]["airline"] === "US Airways" && data[i]["airline_sentiment"] === "negative") {
                usAirways.negative ++
            }
            else if (data[i]["airline"] === "US Airways" && data[i]["airline_sentiment"] === "neutral")
                usAirways.neutral ++  
            // United
            if (data[i]["airline"] === "United" && data[i]["airline_sentiment"] === "positive") {
                united.positive ++
            }
            else if (data[i]["airline"] === "United" && data[i]["airline_sentiment"] === "negative") {
                united.negative ++
            }
            else if (data[i]["airline"] === "United" && data[i]["airline_sentiment"] === "neutral")
                united.neutral ++  
            // Virgin America
            if (data[i]["airline"] === "Virgin America" && data[i]["airline_sentiment"] === "positive") {
                virginAmerica.positive ++
            }
            else if (data[i]["airline"] === "Virgin America" && data[i]["airline_sentiment"] === "negative") {
                virginAmerica.negative ++
            }
            else if (data[i]["airline"] === "Virgin America" && data[i]["airline_sentiment"] === "neutral")
                virginAmerica.neutral ++

    }

    let americanData = Object.keys(american).map((d) => {return {name: d, value: american[d]}});
    let deltaData = Object.keys(delta).map((d) => {return {name: d, value: delta[d]}});
    let southwestData = Object.keys(southwest).map((d) => {return {name: d, value: southwest[d]}});
    let usAirwaysData = Object.keys(usAirways).map((d) => {return {name: d, value: usAirways[d]}});
    let unitedData = Object.keys(united).map((d) => {return {name: d, value: united[d]}});
    let virginAmericaData = Object.keys(virginAmerica).map((d) => {return {name: d, value: virginAmerica[d]}})
    console.log(americanData, deltaData, southwestData, usAirwaysData, unitedData, virginAmericaData)

    // American airlines data - pie chart
    let svg = d3.select("#american-svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    let pie = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    let path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    let label = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

    let arc = g.selectAll(".arc")
      .data( pie(americanData))
      .enter().append("g")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.name) });

    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name });

    
    // Delta Airlines data - pie chart
    let svgDelta = d3.select("#delta-svg"),
    widthDelta = +svgDelta.attr("width"),
    heightDelta = +svgDelta.attr("height"),
    radiusDelta = Math.min(widthDelta, heightDelta) / 2,
    gDelta = svgDelta.append("g").attr("transform", "translate(" + widthDelta / 2 + "," + heightDelta / 2 + ")");

    let colorDelta = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    let pieDelta = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    let pathDelta = d3.arc()
      .outerRadius(radiusDelta - 10)
      .innerRadius(0);

    let labelDelta = d3.arc()
      .outerRadius(radiusDelta - 40)
      .innerRadius(radiusDelta - 40);

    let arcDelta = gDelta.selectAll(".arc")
      .data( pieDelta(deltaData))
      .enter().append("g")
        .attr("class", "arc");

    arcDelta.append("path")
        .attr("d", pathDelta)
        .attr("fill", function(d) { return colorDelta(d.data.name) });

    arcDelta.append("text")
        .attr("transform", function(d) { return "translate(" + labelDelta.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name });

    
    // Southwest Airlines data
    let svgSouthwest = d3.select("#southwest-svg"),
    widthSouthwest = +svgSouthwest.attr("width"),
    heightSouthwest = +svgSouthwest.attr("height"),
    radiusSouthwest = Math.min(widthSouthwest, heightSouthwest) / 2,
    gSouthwest = svgSouthwest.append("g").attr("transform", "translate(" + widthSouthwest / 2 + "," + heightSouthwest / 2 + ")");

    let colorSouthwest = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    let pieSouthwest = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    let pathSouthwest = d3.arc()
      .outerRadius(radiusSouthwest - 10)
      .innerRadius(0);

    let labelSouthwest = d3.arc()
      .outerRadius(radiusSouthwest - 40)
      .innerRadius(radiusSouthwest - 40);

    let arcSouthwest = gSouthwest.selectAll(".arc")
      .data( pieSouthwest(southwestData))
      .enter().append("g")
        .attr("class", "arc");

    arcSouthwest.append("path")
        .attr("d", pathSouthwest)
        .attr("fill", function(d) { return colorSouthwest(d.data.name) });

    arcSouthwest.append("text")
        .attr("transform", function(d) { return "translate(" + labelSouthwest.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name });

    
    // US Airways data
    let svgUsAirways = d3.select("#usAirways-svg"),
    widthUsAirways = +svgUsAirways.attr("width"),
    heightUsAirways = +svgUsAirways.attr("height"),
    radiusUsAirways = Math.min(widthUsAirways, heightUsAirways) / 2,
    gUsAirways = svgUsAirways.append("g").attr("transform", "translate(" + widthUsAirways / 2 + "," + heightUsAirways / 2 + ")");

    let colorUsAirways = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    let pieUsAirways = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    let pathUsAirways = d3.arc()
      .outerRadius(radiusSouthwest - 10)
      .innerRadius(0);

    let labelUsAirways = d3.arc()
      .outerRadius(radiusUsAirways - 40)
      .innerRadius(radiusUsAirways - 40);

    let arcUsAirways = gUsAirways.selectAll(".arc")
      .data( pieUsAirways(usAirwaysData))
      .enter().append("g")
        .attr("class", "arc");

    arcUsAirways.append("path")
        .attr("d", pathUsAirways)
        .attr("fill", function(d) { return colorUsAirways(d.data.name) });

    arcUsAirways.append("text")
        .attr("transform", function(d) { return "translate(" + labelUsAirways.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name });


    // United Airways data
    let svgUnited = d3.select("#united-svg"),
    widthUnited = +svgUnited.attr("width"),
    heightUnited = +svgUnited.attr("height"),
    radiusUnited = Math.min(widthUnited, heightUnited) / 2,
    gUnited = svgUnited.append("g").attr("transform", "translate(" + widthUnited / 2 + "," + heightUnited / 2 + ")");

    let colorUnited = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    let pieUnited = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    let pathUnited = d3.arc()
      .outerRadius(radiusSouthwest - 10)
      .innerRadius(0);

    let labelUnited = d3.arc()
      .outerRadius(radiusUnited - 40)
      .innerRadius(radiusUnited - 40);

    let arcUnited = gUnited.selectAll(".arc")
      .data( pieUnited(unitedData))
      .enter().append("g")
        .attr("class", "arc");

    arcUnited.append("path")
        .attr("d", pathUnited)
        .attr("fill", function(d) { return colorUnited(d.data.name) });

    arcUnited.append("text")
        .attr("transform", function(d) { return "translate(" + labelUnited.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name });


    // Virgin America data
    let svgVirginAmerica = d3.select("#virginAmerica-svg"),
    widthVirginAmerica = +svgVirginAmerica.attr("width"),
    heightVirginAmerica = +svgVirginAmerica.attr("height"),
    radiusVirginAmerica = Math.min(widthVirginAmerica, heightVirginAmerica) / 2,
    gVirginAmerica = svgVirginAmerica.append("g").attr("transform", "translate(" + widthVirginAmerica / 2 + "," + heightVirginAmerica / 2 + ")");

    let colorVirginAmerica = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c"]);

    let pieVirginAmerica = d3.pie()
      .sort(null)
      .value(function(d) { return d.value; });

    let pathVirginAmerica = d3.arc()
      .outerRadius(radiusSouthwest - 10)
      .innerRadius(0);

    let labelVirginAmerica = d3.arc()
      .outerRadius(radiusVirginAmerica - 40)
      .innerRadius(radiusVirginAmerica - 40);

    let arcVirginAmerica = gVirginAmerica.selectAll(".arc")
      .data( pieVirginAmerica(virginAmericaData))
      .enter().append("g")
        .attr("class", "arc");

    arcVirginAmerica.append("path")
        .attr("d", pathVirginAmerica)
        .attr("fill", function(d) { return colorVirginAmerica(d.data.name) });

    arcVirginAmerica.append("text")
        .attr("transform", function(d) { return "translate(" + labelVirginAmerica.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.name });

});

console.log("test")