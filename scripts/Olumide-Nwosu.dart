void main() {
   var me = Olumide('Olumide Nwosu', 'HNG-00396', 'Dart', 'niolumi4eva@gmail.com');
   me.message();
}

class Olumide{
  String name, id, language, email;

  Olumide(this.name, this.id, this.language, this.email);

  void message(){
    print('Hello World, this is ${this.name} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task.');
  }
}
