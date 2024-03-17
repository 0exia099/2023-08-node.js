const fs = require('fs').promises

async function topK(fname, limit, k){
    const file = await fs.open(fname, 'r')
    const freq = {}
    for await (const line of file.readLines()){
        let words = line.toLowerCase().split(" ")
        for(let word of words){
            if(word.length < limit)
                continue
            freq[word] = (word in freq) ? freq[word] + 1 : 1
        }
    }
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0,k)
}

topK('./tale.txt', 8, 5)
    .then(result => console.log(result))