// function phela(fn){
//   fn(function(fn3){
//     fn3(function(fn5){
//       fn5(function(fn7){
//         fn7();
//       })
//     });
//   });
// }
// phela(function(fn2){
//   fn2(function(fn4){
//     fn4(function(fn6){
//       fn6(function(){
//         console.log("hey");
//       })
//     });
//   });
// })



// function aanda(fn){
//   fn(function(fn1){
//     fn1(function(fn2){
//       fn2();
//     });
//   });
// }
// aanda(function(gunga){
//   gunga(function(kunga){
//     kunga(function(){
//     });
//     })
// });


function no1(fn2){
  fn2(function(fn4){
    fn4(function(fn6){
      fn6(function(fn8){
        fn8(function(fn10){
          fn10();
        });
      });
    })
  });
}
no1(function(fn3){
  fn3(function(fn5){
    fn5(function(fn7){
      fn7(function(fn9){
        fn9(function(){
          console.log("CALLBACK HELL DONE");
        });
      });
    });
  })
});