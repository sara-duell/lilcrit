
console.log( "ready!" );



function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vR81o1W9Mug9SljUscAvAd84SKpX0z0CiendSNVxtYO4550ulKDkh7CSUFkBoW2zeASs-6O3W0yQKUi/pub?output=csv', {
            download: true,
            header: false,
            complete: function(results) {
              var data = results.data
              console.log(data)

              // Put every timestamp in a div
              // for (var entry of data) {
              //     console.log(entry.Timestamp);
              //     $( ".my-fun-class" ).append( "<p>"+ entry.Timestamp +"</p>" );
              // }

              // Put every response to the invitation question in a div
              var url = ('https://docs.google.com/spreadsheets/d/e/2PACX-1vR81o1W9Mug9SljUscAvAd84SKpX0z0CiendSNVxtYO4550ulKDkh7CSUFkBoW2zeASs-6O3W0yQKUi/pub?output=csv');
              var filename = url.filename;

                 {
              $( ".my-fun-class" ).append( "<h1>"+ filename +"</h1>" )
             }


              for (var entry of data) {
                  //note that it's not as simple to address this value becuase the name of it is not very machine readable, unlike "Timestamp." The name of it is "What ways do you like to invite someone to do something with you?." This can't be used in the same way becuase of all the spaces and punctuation so we need to address it by referring to is as the second key of each object (remember second looks like [1]) for each entry object.
                  var invitationResponse = entry[Object.keys(entry)[1]]
                  console.log(invitationResponse)
                  $( ".my-fun-class" ).append( "<p>"+ invitationResponse +"</p>" );
              }
              for (var entry of data) {
                  //note that it's not as simple to address this value becuase the name of it is not very machine readable, unlike "Timestamp." The name of it is "What ways do you like to invite someone to do something with you?." This can't be used in the same way becuase of all the spaces and punctuation so we need to address it by referring to is as the second key of each object (remember second looks like [1]) for each entry object.
                  var number2Responses = entry[Object.keys(entry)[2]]
                  console.log(number2Responses)
                  $( ".my-fun-class-2" ).append( "<p>"+ number2Responses +"</p>" );
              }

              //// This is the original table code that displays the data similar to the way the spreadsheet looks using a table library
              // var options = {
              //     element: document.getElementById("table"),
              //     data: data
              // };
              //
              // var table = new Table(options);
              // table.view();

            }
          })
        }

  window.addEventListener('DOMContentLoaded', init);
