class mydetails:
	def __init__(self, name,iden,language,email):
		self.name = name
		self.iden = iden
		self.language = language
		self.email = email

r = mydetails("Ikubanni Paul", "HNG-03910", "Python","ipom4eva@gmail.com")
print("Hello World, this is "+r.name+" with HNGi7 ID "+r.iden+" and email "+r.email+" using "+r.language+" for stage 2 task")

		