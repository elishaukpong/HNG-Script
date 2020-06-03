'''The goal of this script should  returns the text "Hello World, this is [full name] with HNGi7 ID [ID] using [language] for stage 2 task". Otherwise it fails'''
#storing info to dict data type
info = {'Full_name':"Mahi Aliyu", 'HNGi7_ID':"HNG-01114",' email':'mahigitalgmail.com', 'Language':"Python"}

#printing my info from the dict value
HNG = "Hello World, this is Mahi Aminu Aliyu with HNGi7 ID HNG-01114 and email mahigital@gmail.com using Python for stage 2 task"
HNG_not = HNG
HNG.split(' ')
for i in HNG:
	if i == "k":
		print(HNG_not)
else:
	pass