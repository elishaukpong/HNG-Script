def retjson():
    myDetails = {'firstName': 'Williams', 'lastName': 'Malachy','ID': 'HNG-01302', 'language': 'Python', 'email': 'billmal071@gmail.com'}
    print("Hello World, this is {} {} with HNGi7 ID {} and email {} using {} for stage 2 task.".format(myDetails['lastName'], myDetails['firstName'], myDetails['ID'], myDetails['email'], myDetails['language']))


retjson()