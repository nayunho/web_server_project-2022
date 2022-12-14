const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true})) 
var db;
var id = [];
var text = [];
var index=0;
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs');

MongoClient.connect("mongodb+srv://NaYunHo:620457@cluster0.c1vvofm.mongodb.net/?retryWrites=true&w=majority", function(err, client){
  if (err) return console.log(err)
     db = client.db('login');

    console.log('DB connected')

  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})

app.use('/', express.static("./css"))


app.get('/web', function(req, res){
        db.collection('example').find().toArray(function(err, result1){
          db.collection('E_example').find().toArray(function(err, result2){
            db.collection('EN_example').find().toArray(function(err, result3){
              db.collection('K_example').find().toArray(function(err, result4){
                db.collection('M_example').find().toArray(function(err, result5){
                  db.collection('S_example').find().toArray(function(err, result6){
                    db.collection('ETC_example').find().toArray(function(err, result7){
                      db.collection('NOTICE_example').find().toArray(function(err, result8){
              res.render('web.ejs', {loginfo : result1 , loginfo2 : result2,loginfo3:result3, loginfo4:result4,
                 loginfo5:result5,loginfo6:result6,loginfo7:result7,loginfo8:result8})
              })
            })
          })
        })
       })
      })
    })
  })
})

// ------------------------------------------------------------
app.get('/C_tip', function(req, res){
  db.collection('example').find().toArray(function(err, result){
        
        res.render('C_tip.ejs', {loginfo : result})
      })
   })
  app.get('/C_tip_write', function(req, res) { 
    res.sendFile(__dirname +'/CTIP/C_tip_write.html')
  })

  app.get('/C_tip_view', function(req, res) { 
    db.collection('example').find().toArray(function(err, result){
    console.log(result);

    index+=1;
    res.render('C_tip_view.ejs', {loginfo : result,  index1 : index})
  })
   })
   app.get('/post_reply_view', function(req, res) { 
    db.collection('text').find().toArray(function(err, result){
    console.log(result);
    
    return result;
  })
    res.sendFile(__dirname +'/CTIP/C_tip_view.html')
   })


  app.get('/C_tip_edit', function(req, res) { 
    res.sendFile(__dirname +'/CTIP/C_tip_edit.html')
  })

  
// ------------------------------------------------------------
 app.get('/C_qna', function(req, res) { 
  db.collection('example2').find().toArray(function(err, result){
        
    res.render('C_qna.ejs', {loginfo : result})
  })
})
app.get('/C_qna_write', function(req, res) { 
  res.sendFile(__dirname +'/CQNA/C_qna_write.html')
})

app.get('/C_qna_view', function(req, res) { 
  db.collection('example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('C_qna_view.ejs', {loginfo : result,  index1 : index})
})
 })



// ------------------------------------------------------------
app.get('/C_study', function(req, res) { 
  db.collection('example3').find().toArray(function(err, result){
        
    res.render('C_study.ejs', {loginfo : result})
  })
})
app.get('/C_study_write', function(req, res) { 
  res.sendFile(__dirname +'/CSTUDY/C_study_write.html')
})
app.get('/C_study_view', function(req, res) { 
  db.collection('example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('C_study_view.ejs', {loginfo : result,  index1 : index})
})
 })




// ------------------------------------------------------------
app.get('/E_tip', function(req, res) { 
  db.collection('E_example').find().toArray(function(err, result){
        
    res.render('E_tip.ejs', {loginfo : result})
  })
})
app.get('/E_tip_write', function(req, res) { 
  res.sendFile(__dirname +'/ETIP/E_tip_write.html')
})
app.get('/E_tip_view', function(req, res) { 
  db.collection('E_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('E_tip_view.ejs', {loginfo : result,  index1 : index})
})
})


// ------------------------------------------------------------
app.get('/E_qna', function(req, res) { 
  db.collection('E_example2').find().toArray(function(err, result){
        
    res.render('E_qna.ejs', {loginfo : result})
  })
})
app.get('/E_qna_write', function(req, res) { 
res.sendFile(__dirname +'/EQNA/E_qna_write.html')
})
app.get('/E_qna_view', function(req, res) { 
  db.collection('E_example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('E_qna_view.ejs', {loginfo : result,  index1 : index})
})
 })


// ------------------------------------------------------------
app.get('/E_study', function(req, res) { 
  db.collection('E_example3').find().toArray(function(err, result){
        
    res.render('E_study.ejs', {loginfo : result})
  })
})
app.get('/E_study_write', function(req, res) { 
res.sendFile(__dirname +'/ESTUDY/E_study_write.html')
})
app.get('/E_study_view', function(req, res) { 
  db.collection('E_example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('E_study_view.ejs', {loginfo : result,  index1 : index})
})
 })


// ------------------------------------------------------------
app.get('/M_tip', function(req, res) { 
  db.collection('M_example').find().toArray(function(err, result){
        
    res.render('M_tip.ejs', {loginfo : result})
  })
})
app.get('/M_tip_write', function(req, res) { 
  res.sendFile(__dirname +'/MTIP/M_tip_write.html')
})
app.get('/M_tip_view', function(req, res) { 
  db.collection('M_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('M_tip_view.ejs', {loginfo : result,  index1 : index})
})
})



// ------------------------------------------------------------
app.get('/M_qna', function(req, res) { 
  db.collection('M_example2').find().toArray(function(err, result){
        
    res.render('M_qna.ejs', {loginfo : result})
  })
})
app.get('/M_qna_write', function(req, res) { 
res.sendFile(__dirname +'/MQNA/M_qna_write.html')
})
app.get('/M_qna_view', function(req, res) { 
  db.collection('M_example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('M_qna_view.ejs', {loginfo : result,  index1 : index})
})
 })


// ------------------------------------------------------------
app.get('/M_study', function(req, res) { 
  db.collection('M_example3').find().toArray(function(err, result){
        
    res.render('M_study.ejs', {loginfo : result})
  })
})
app.get('/M_study_write', function(req, res) { 
res.sendFile(__dirname +'/MSTUDY/M_study_write.html')
})
app.get('/M_study_view', function(req, res) { 
  db.collection('M_example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('M_study_view.ejs', {loginfo : result,  index1 : index})
})
 })

// ------------------------------------------------------------
app.get('/K_tip', function(req, res) { 
  db.collection('K_example').find().toArray(function(err, result){
        
    res.render('K_tip.ejs', {loginfo : result})
  })
})
app.get('/K_tip_write', function(req, res) { 
  res.sendFile(__dirname +'/KTIP/K_tip_write.html')
})
app.get('/K_tip_view', function(req, res) { 
  db.collection('K_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('K_tip_view.ejs', {loginfo : result,  index1 : index})
})
})


// ------------------------------------------------------------
app.get('/K_qna', function(req, res) { 
  db.collection('K_example2').find().toArray(function(err, result){
        
    res.render('K_qna.ejs', {loginfo : result})
  })
})
app.get('/K_qna_write', function(req, res) { 
res.sendFile(__dirname +'/KQNA/K_qna_write.html')
})
app.get('/K_qna_view', function(req, res) { 
  db.collection('K_example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('K_qna_view.ejs', {loginfo : result,  index1 : index})
})
 })

// ------------------------------------------------------------
app.get('/K_study', function(req, res) { 
  db.collection('K_example3').find().toArray(function(err, result){
        
    res.render('K_study.ejs', {loginfo : result})
  })
})
app.get('/K_study_write', function(req, res) { 
res.sendFile(__dirname +'/KSTUDY/K_study_write.html')
})
app.get('/K_study_view', function(req, res) { 
  db.collection('K_example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('K_study_view.ejs', {loginfo : result,  index1 : index})
})
 })

// ------------------------------------------------------------
app.get('/EN_tip', function(req, res) { 
  db.collection('EN_example').find().toArray(function(err, result){
        
    res.render('EN_tip.ejs', {loginfo : result})
  })
})
app.get('/EN_tip_write', function(req, res) { 
  res.sendFile(__dirname +'/EN_TIP/EN_tip_write.html')
})
app.get('/EN_tip_view', function(req, res) { 
  db.collection('EN_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('EN_tip_view.ejs', {loginfo : result,  index1 : index})
})
})



// ------------------------------------------------------------
app.get('/EN_qna', function(req, res) { 
  db.collection('EN_example2').find().toArray(function(err, result){
        
    res.render('EN_qna.ejs', {loginfo : result})
  })
})
app.get('/EN_qna_write', function(req, res) { 
res.sendFile(__dirname +'/EN_QNA/EN_qna_write.html')
})
app.get('/EN_qna_view', function(req, res) { 
  db.collection('EN_example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('EN_qna_view.ejs', {loginfo : result,  index1 : index})
})
})

// ------------------------------------------------------------
app.get('/EN_study', function(req, res) { 
  db.collection('EN_example3').find().toArray(function(err, result){
        
    res.render('EN_study.ejs', {loginfo : result})
  })
})
app.get('/EN_study_write', function(req, res) { 
res.sendFile(__dirname +'/EN_STUDY/EN_study_write.html')
})
app.get('/EN_study_view', function(req, res) { 
  db.collection('EN_example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('EN_study_view.ejs', {loginfo : result,  index1 : index})
})
})

// ------------------------------------------------------------
app.get('/S_tip', function(req, res) { 
  db.collection('S_example').find().toArray(function(err, result){
        
    res.render('S_tip.ejs', {loginfo : result})
  })
})

app.get('/S_tip_write', function(req, res) { 
  res.sendFile(__dirname +'/STIP/S_tip_write.html')
})
app.get('/S_tip_view', function(req, res) { 
  db.collection('S_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('S_tip_view.ejs', {loginfo : result,  index1 : index})
})
})


// ------------------------------------------------------------
app.get('/S_qna', function(req, res) { 
  db.collection('S_example2').find().toArray(function(err, result){
        
    res.render('S_qna.ejs', {loginfo : result})
  })
})
app.get('/S_qna_write', function(req, res) { 
res.sendFile(__dirname +'/SQNA/S_qna_write.html')
})
app.get('/S_qna_view', function(req, res) { 
  db.collection('S_example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('S_qna_view.ejs', {loginfo : result,  index1 : index})
})
 })
app.get('/S_qna_edit', function(req, res) { 
res.sendFile(__dirname +'/SQNA/S_qna_edit.html')
})

// ------------------------------------------------------------
app.get('/S_study', function(req, res) { 
  db.collection('S_example3').find().toArray(function(err, result){
        
    res.render('S_study.ejs', {loginfo : result})
  })
})
app.get('/S_study_write', function(req, res) { 
res.sendFile(__dirname +'/SSTUDY/S_study_write.html')
})
app.get('/S_study_view', function(req, res) { 
  db.collection('S_example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('S_study_view.ejs', {loginfo : result,  index1 : index})
})
 })

// ------------------------------------------------------------
app.get('/ETC_tip', function(req, res) { 
  db.collection('ETC_example').find().toArray(function(err, result){
        
    res.render('ETC_tip.ejs', {loginfo : result})
  })
})
app.get('/ETC_tip_write', function(req, res) { 
  res.sendFile(__dirname +'/ETCTIP/ETC_tip_write.html')
})
app.get('/ETC_tip_view', function(req, res) { 
  db.collection('ETC_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('ETC_tip_view.ejs', {loginfo : result,  index1 : index})
})
})


// ------------------------------------------------------------
app.get('/ETC_qna', function(req, res) { 
  db.collection('ETC_example2').find().toArray(function(err, result){
        
    res.render('ETC_qna.ejs', {loginfo : result})
  })
})
app.get('/ETC_qna_write', function(req, res) { 
res.sendFile(__dirname +'/ETCQNA/ETC_qna_write.html')
})
app.get('/ETC_qna_view', function(req, res) { 
  db.collection('ETC_example2').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('ETC_qna_view.ejs', {loginfo : result,  index1 : index})
})
 })

// ------------------------------------------------------------
app.get('/ETC_study', function(req, res) { 
  db.collection('ETC_example3').find().toArray(function(err, result){
        
    res.render('ETC_study.ejs', {loginfo : result})
  })
})
app.get('/ETC_study_write', function(req, res) { 
res.sendFile(__dirname +'/ETCSTUDY/ETC_study_write.html')
})
app.get('/ETC_study_view', function(req, res) { 
  db.collection('ETC_example3').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('ETC_study_view.ejs', {loginfo : result,  index1 : index})
})
 })

//---------------------------------------------------------------------------------
app.get('/NOTICE', function(req, res) { 
  db.collection('NOTICE_example').find().toArray(function(err, result){
        
    res.render('NOTICE.ejs', {loginfo : result})
  })
})
app.get('/NOTICE_write', function(req, res) { 
  res.sendFile(__dirname +'/NOTICE/NOTICE_write.html')
})
app.get('/NOTICE_view', function(req, res) { 
  db.collection('NOTICE_example').find().toArray(function(err, result){
  console.log(result);

  index+=1;
  res.render('NOTICE_view.ejs', {loginfo : result,  index1 : index})
})
})

//---------------------------------------------------------------------------------
  app.get('/script', function(req, res) { 
    res.sendFile(__dirname +'/script.html')
    })
    app.get('/script2', function(req, res) { 
      res.sendFile(__dirname +'/script2.html')
      })
  app.get('/login', function(req, res) { 
    res.sendFile(__dirname +'/login.html')
    })

  app.get('/write', function(req, res) { 
    res.sendFile(__dirname +'/write.html')
    })

  app.get('/log_suc', function(req, res) { 
     res.sendFile(__dirname +'/log_suc.html')
    })
    app.post('/signin',function(req,res){
      db.collection('signup').findOne({email:req.body.email, password: req.body.password}, function(err, result){
          if(err) return console.log("error");
          if(!result) { 
            return  res.sendFile(__dirname +'/script2.html')
          }
          if(result) {
            
            res.sendFile(__dirname +'/log_suc.html')
          }
        })
    })
   
     
    // app.post('/C_add1', function(req, res){
    //   db.collection('text').insertOne({id:req.body.id, text: req.body.text}, function(err, result){
    //     if(err) return console.log("error");
    //     console.log("save complete...");
    //     console.log(req.body.id);
    //     console.log(req.body.text);
    //     id.push(req.body.id);
    //     text.push(req.body.text);
    //   })
    //   res.sendFile(__dirname +'/script3.html')
    //   })
    app.post('/C_add1', function(req, res){
      var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
          
      db.collection('example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
        contents: req.body.contents, date : st_date}, function(err, result){
        if(err) return console.log("error");
        console.log("save complete...");
        console.log(req.body.title);
        console.log(req.body.nickname);
        console.log(req.body.contents);
        console.log(req.body.date);
      })
    
      res.sendFile(__dirname +'/C_script/script3.html')
      })

      app.post('/C_add2', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/C_script/script5.html')
        })

       app.post('/C_add3', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/C_script/script7.html')
        })

      
      app.post('/signup', function(req, res){
        db.collection('signup').insertOne({email:req.body.email, password: req.body.password, sex: req.body.sex
        ,nickname: req.body.nickname , year: req.body.year , month: req.body.month , day: req.body.day}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.email);
          console.log(req.body.password);
          console.log(req.body.sex);
          console.log(req.body.nickname);
          console.log(req.body.year);
          console.log(req.body.month);
          console.log(req.body.day);
        })
        res.sendFile(__dirname +'/script.html')
        
      })

      
      // app.post('/C_add2', function(req, res){
      //   var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
      //   db.collection('contents').insertOne({title:req.body.title, nickname: req.body.nickname, 
      //     contents: req.body.contents, date : st_date}, function(err, result){
      //     if(err) return console.log("error");
      //     console.log("save complete...");
      //     console.log(req.body.title);
      //     console.log(req.body.nickname);
      //     console.log(req.body.contents);
      //     console.log(req.body.date);
      //   })
      //   res.sendFile(__dirname +'/script4.html')
      //   })

      //----------------------------------------------
      app.post('/E_add1', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('E_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/E_script/E_script3.html')
        })
  
        app.post('/E_add2', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('E_example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/E_script/E_script5.html')
          })
  
         app.post('/E_add3', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('E_example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/E_script/E_script7.html')
          })
  //-----------------------------------------------------
  app.post('/EN_add1', function(req, res){
    var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
        
    db.collection('EN_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
      contents: req.body.contents, date : st_date}, function(err, result){
      if(err) return console.log("error");
      console.log("save complete...");
      console.log(req.body.title);
      console.log(req.body.nickname);
      console.log(req.body.contents);
      console.log(req.body.date);
    })
  
    res.sendFile(__dirname +'/EN_script/EN_script3.html')
    })

    app.post('/EN_add2', function(req, res){
      var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
          
      db.collection('EN_example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
        contents: req.body.contents, date : st_date}, function(err, result){
        if(err) return console.log("error");
        console.log("save complete...");
        console.log(req.body.title);
        console.log(req.body.nickname);
        console.log(req.body.contents);
        console.log(req.body.date);
      })
    
      res.sendFile(__dirname +'/EN_script/EN_script5.html')
      })

     app.post('/EN_add3', function(req, res){
      var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
          
      db.collection('EN_example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
        contents: req.body.contents, date : st_date}, function(err, result){
        if(err) return console.log("error");
        console.log("save complete...");
        console.log(req.body.title);
        console.log(req.body.nickname);
        console.log(req.body.contents);
        console.log(req.body.date);
      })
    
      res.sendFile(__dirname +'/EN_script/EN_script7.html')
      })
 //-----------------------------------------------------
      app.post('/K_add1', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('K_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/K_script/K_script3.html')
        })
    
        app.post('/K_add2', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('K_example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/K_script/K_script5.html')
          })
    
         app.post('/K_add3', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('K_example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/K_script/K_script7.html')
          })
          //-----------------------------------------------------
      app.post('/M_add1', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('M_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/M_script/M_script3.html')
        })
    
        app.post('/M_add2', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('M_example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/M_script/M_script5.html')
          })
    
         app.post('/M_add3', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('M_example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/M_script/M_script7.html')
          })

//-----------------------------------------------------
      app.post('/S_add1', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('S_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/S_script/S_script3.html')
        })
    
        app.post('/S_add2', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('S_example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/S_script/S_script5.html')
          })
    
         app.post('/S_add3', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('S_example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/S_script/S_script7.html')
          })

//-----------------------------------------------------
      app.post('/ETC_add1', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('ETC_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/ETC_script/ETC_script3.html')
        })
    
        app.post('/ETC_add2', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('ETC_example2').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/ETC_script/ETC_script5.html')
          })
    
         app.post('/ETC_add3', function(req, res){
          var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
              
          db.collection('ETC_example3').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
            contents: req.body.contents, date : st_date}, function(err, result){
            if(err) return console.log("error");
            console.log("save complete...");
            console.log(req.body.title);
            console.log(req.body.nickname);
            console.log(req.body.contents);
            console.log(req.body.date);
          })
        
          res.sendFile(__dirname +'/ETC_script/ETC_script7.html')
          })

//-----------------------------------------------------
      app.post('/NOTICE_add1', function(req, res){
        var st_date = new Date().toISOString().substr(0, 10).replace('T', ' ');
            
        db.collection('NOTICE_example').insertOne({id:req.body.id, text: req.body.text ,title:req.body.title, nickname: req.body.nickname, 
          contents: req.body.contents, date : st_date}, function(err, result){
          if(err) return console.log("error");
          console.log("save complete...");
          console.log(req.body.title);
          console.log(req.body.nickname);
          console.log(req.body.contents);
          console.log(req.body.date);
        })
      
        res.sendFile(__dirname +'/NOTICE_script3.html')
        })