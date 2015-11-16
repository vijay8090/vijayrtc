module.exports = function(app, streams) {

  // GET home 
  var index = function(req, res) {
    res.render('index', { 
                          title: 'Ford RTC', 
                          header: 'Ford My View live streaming',
                          username: 'Dealer Name',
                          share: 'Share this link',
                          footer: '2015 @ Ford Motor Company' ,
                          id: req.params.id
                        });
  };

  // GET streams as JSON
  var displayStreams = function(req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = (JSON.parse(JSON.stringify(streamList))); 

    res.status(200).json(data);
  };

  app.get('/streams.json', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
}