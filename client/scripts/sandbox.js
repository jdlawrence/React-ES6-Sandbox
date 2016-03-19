console.log('hi mom');

var dummy = () => {
  console.log('hi ddfdfad');
};

dummy();

for (let i = 0; i < 10; i++) {
  setTimeout(function(){
    console.log('i', i);
  }, i * 5000);

}

for (var j = 0; j < 10; j++){
  setTimeout((function(j){
    console.log('j', j);
  }).bind(null, j), j * 500);
}

