const students = []

function addStudent(name) {
  //validar que el nombre no tenga numeros
  if (/\d/.test(name) === true) {
    console.error(`Error: el nombre ${name} no es valido`)
    return
  }

  const id = students.length + 1
  students.push({ id, name })
  console.log(`Alumno ${name} agregado exitosamente con ID ${id}`)
}

function deleteStudentById(id) {
  const index = students.findIndex((student) => student.id === id)

  if (index === -1) {
    console.error("No se encontro alumno con ese id")
    return
  }

  const deletedStudent = students.splice(index, 1)[0]
  console.log(`Alumno ${deletedStudent.name} eliminado con exito`)
}

function showStudents() {
  console.log()
}

addStudent("Ignacio")
addStudent("Carlos2")
addStudent("Luis")
deleteStudentById(1)