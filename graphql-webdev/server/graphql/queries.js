// mutation ($name: String, $age: Int, $id: ID) {
//     editDirector(name: $name, age: $age, id: $id) {
//       id
//       name
//     }
//   }

//   {
//     "name": "Director Updated",
//     "age": 100,
//     "id": "234342341"
//   }
//   ---
//   mutation ($name: String, $age: Int) {
//     addDirector(name: $name, age: $age) {
//       id
//       name
//     }
//   }

//   {
//     "name": "Serhii",
//     "age": 50
//   }

//   ---
//   mutation ($id: ID) {
//     deleteDirector(id: $id) {
//       id
//       name
//     }
//   }
