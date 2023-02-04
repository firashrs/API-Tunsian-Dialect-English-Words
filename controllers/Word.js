
let fs = require('fs');
let f = fs.readFileSync('data/words2.json', 'utf8');

let obj = JSON.parse(f);

exports.getOneWord =  (req, res, next) => {
  try{
    res.status(200).json({word: obj[req.params.id]});
  }catch{
    res.status(400).json({ error });

  }
};

exports.getAllWords = (req, res, next) => {
  
  try{
    res.status(200).json({words: obj});
  }catch{
    res.status(400).json({ error });

  }
};


exports.getWordTnEn =  (req, res, next) => {
  
  let words_list = [];
  try{
    for (var i = 0; i < obj.length; i++){
      if (obj[i].word.includes ( req.params.word) ){
        words_list.push(obj[i]);
      }
    }
    res.status(200).json({words: words_list});
  }catch{
    res.status(400).json({ error });

  }
};

exports.getWordEnTn =  (req, res, next) => {
  let words_list = [];
  try{
    for (var i = 0; i < obj.length; i++){
      if (obj[i].translation.includes ( req.params.word) ){
        words_list.push(obj[i]);
      }
    }
    res.status(200).json({words: words_list});
  }catch{
    res.status(400).json({ error });

  }
};

