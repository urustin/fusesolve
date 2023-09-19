//contact form js
(function($) {
    'use strict';


        // validations start here
        $('#contact_form').validate({

            rules: {

                con_fname: {
                    required: true
                },
                con_lname: {
                    required: true
                },
                con_phone: {
                    required: true
                },
                con_message: {
                    required: true
                },
                con_email: {
                    required: true,
                    email: true
                }
            },

            messages: {

                con_fname: {
                    required: 'First name must be filled out.'
                },
                con_lname: {
                    required: 'Last name must be filled out.'
                },
                con_phone: {
                    required: 'Phone must be filled out.'
                },
                con_message: {
                    required: 'Message must be filled out.'
                },

                con_email: {
                    required: 'Email must be filled out.',
                    email: 'Your email must be valid.'
                }
            },

            submitHandler: function() {

                var con_fname = $('#con_fname').val();
                var con_lname = $('#con_lname').val();
                var con_phone = $('#con_phone').val();
                var con_message = $('#con_message').val();
                var con_email = $('#con_email').val();
            
                $('#btn_sent').val('Sending...');
                $('#error_message').html('');
                $('#btn_sent').attr('disabled', true);
            
                $.ajax({
                    type: 'POST',
                    url: 'https://ec2.fusesolve.com/fuseSolve/python/send_email',
                    data: JSON.stringify({
                        con_email: con_email,
                        con_fname: con_fname,
                        con_lname: con_lname,
                        con_phone: con_phone,
                        con_message: con_message,
                        service_name : "fuseSolve"
                    }),
                    contentType: "application/json",
                    dataType: 'json',
                    

                    success: function(result) {
                        
                        $('#btn_sent').html('Message Sent!');  // Change the button's text
                        $('#btn_sent').prop('disabled', true);
                        $('#btn_sent').css({  // Set the button's colors for success
                            'background-color': 'green',
                            'border-color': 'green',
                            'color': 'white',
                            'opacity': '1',
                        });
                        
                    },
                    error: function() {
                        $('#btn_sent').html('Sorry! Please Mail Directly!');  // Change the button's text back if there's an error
                        $('#btn_sent').css({  // Set the button's colors for success
                            'background-color': 'red',
                            'border-color': 'red',
                            'color': 'white',
                            'opacity': '1',
                        });
                    }
                });
                $('#btn_sent').html('Sending Message...');  // Change the button's text
                $('#btn_sent').css({  // Set the button's colors for sending
                    'background-color': 'orange',
                    'border-color': 'orange',
                    'color': 'black',
                    'opacity': '0.5'
                });
            }
        });
}(jQuery));