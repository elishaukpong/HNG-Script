class Intern:
    
    def __init__(self, name, hng_id, email, lang):
        self.name = name
        self.hng_id = hng_id
        self.email = email
        self.lang = lang
    
    def introduce(self):
        message = 'Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task'.format(self.name, self.hng_id, self.email, self.lang)
        print(message)


geoffery_joseph = Intern('Geoffery Joseph', 'HNG-01065','geofferyjoseph1@gmail.com','Python')

geoffery_joseph.introduce()