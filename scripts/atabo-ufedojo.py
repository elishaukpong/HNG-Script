class Intern:

    intro_format = 'Hello World, this is {} with HNGi7 ID {} and email {} using {} for stage 2 task'

    def __init__(self, name, ID, email, language):
        self.name = name
        self.id = ID
        self.email = email
        self.language = language

    def introduce(self):
        print(self.intro_format.format(self.name, self.id, self.email, self.language))

def main():
    me = Intern('Ufedojo Atabo', 'HNG-00325', 'ufedojoatabo@gmail.com', 'python')
    me.introduce()

if __name__ == "__main__":
    main()
