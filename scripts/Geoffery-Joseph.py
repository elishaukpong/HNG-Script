class Intern:
    
    def __init__(self, name, hng_id, email, lang):
        self.name = name
        self.hng_id = hng_id
        self.email = email
        self.lang = lang
    
    def introduce(self):
        message = f'Hello World, this is {self.name} with HNGi7 ID {self.hng_id} and email {self.email} using {self.lang} for stage 2 task'
        print(message)


geoffery_joseph = Intern('Geoffery Joseph', 'HNG-01065','geofferyjoseph1@gmail.com','Python')

geoffery_joseph.introduce()