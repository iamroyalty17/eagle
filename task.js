const VAT = 0.18;
const insuranceFee = 0.3

const [r1, r2, r3] = [0.7, 0.4, 0.2]

let [total_rate_per_km_cost, rate_per_day_cost, total_cost_per_day] = [0, 100, 0]



const ratePerKM = (distance) => {
    let [total_r1, total_r2, total_r3, start] = [0, 0, 0, 0]

    if(distance == 0) total_rate_cost = 0

    // Compute R1 cost
    if(distance > 0){
        if (distance < 100) start = distance
        else start += 100
        console.log(start);
        total_r1 = start * r1
    }

    // Compute R2 cost
    if(distance > 101 && distance <= 1000){
        if(distance < 1000) start = distance
        else start = 1000
        console.log(start);
        total_r2 = (start - 100) * r2
    }

    // Compute R3 cost
    if(distance > 1000){
        start = distance
        total_r3 = (start - 1000) * r3
    }

    total_rate_per_km_cost = (total_r1 + total_r2 + total_r3) + insuranceFee + VAT
}


const costperDay = (days) => {
    total_cost_per_day = (rate_per_day_cost + VAT + insuranceFee) * days
}


const Costing = (distance, days) => {
    ratePerKM(distance)
    costperDay(days)

    console.log(`Total Cost Per Rate: ${total_rate_per_km_cost.toFixed(2)}`);
    console.log(`Total Daily Cost: ${total_cost_per_day.toFixed(2)}`);

    if(total_cost_per_day > total_rate_per_km_cost){
        console.log("Per rate cost is advantious to the client.\n\n\n\n\n");
    } else{
        console.log("Daily rate plan is advantious to the client.\n\n\n\n\n");
    }
}


Costing(24500, 2)