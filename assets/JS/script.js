function getData() {
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  let subject = document.getElementById("subject").value
  let message = document.getElementById("message").value

  // validation
  if(name == "") {
    return alert("Nama harus diisi")
  } else if(email == "") {
    return alert("Email harus diisi")
  } else if(phone == "") {
    return alert("No telpon harus diisi")
  } else if(subject == "") {
    return alert("Subject harus diisi")
  } else if(message == "") {
    return alert("Pesan harus diisi")
  }

  const destination = "mochammadtaufiq779@gmail.com"

  let a = document.createElement("a")
  a.href = `mailto:${destination}?subject=${subject}&body= Hallo nama saya ${name}, saya ingin ${message}, bisakah anda menghubungi saya di ${phone} dan di email ${email}`

  a.click()

  let data = {
    name: name,
    email: email,
    telp: phone,
    subject: subject,
    pesan: message,
  }
  console.log(data)
}