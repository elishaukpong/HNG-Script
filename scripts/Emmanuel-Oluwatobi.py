
my_details = {
    'name': 'Oluwatobi Emmanuel',
    'HNG_ID': 'HNG-02167',
    'Language': 'Python',
    'Email': 'emmanueloluwatobi2000@gmail.com'
}

def message(details):
    print('Hello World, this is ' + details['name'] + ' with HNGi7 ID ' + details['HNG_ID'] +
         ' and email ' + details['Email'] + ' using ' + details['Language'] + ' for stage 2 task.')

message(my_details)