const fs = require('fs');

// 生成指定數量的資料
function generateData(numRecords) {
    const data = [];
    const startDate = new Date("2020-01-01");

    for (let i = 0; i < numRecords; i++) {
        startDate.setDate(startDate.getDate() + 1);
        const randomDate = new Date(startDate); // Create a new date object
        const closePrice = Math.floor(Math.random() * 10) + 10; // Random integer between 50 and 149
        data.push({ date: randomDate.toISOString(), close: closePrice });
    }

    return data;
}


// 將資料寫入到 JSON 檔案中
function writeDataToFile(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`資料已寫入至 ${filename}`);
}

// 生成資料並寫入檔案
const numRecords = 1000; // 要生成的記錄數
const outputFilename = 'generated_data2.json';
const data = generateData(numRecords);
writeDataToFile(data, outputFilename);
