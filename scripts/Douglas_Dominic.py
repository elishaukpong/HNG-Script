class teamSentry:
    def __init__(self,name,id,language):
        self.name = name
        self.id = id
        self.language = language
    def Identification(self):
        print ("Hello World, this is",self.name,","
        "with HNGi7 ID",self.id,",",
        "using",self.language,"for stage 2 task")

Name = "Douglas Dominic"
Id = "HNG-01669"
Language = "Python"

p1 = teamSentry(Name,Id,Language)
p1.Identification()