import axios from "axios";

export  function getusers() {
  return axios.get('http://192.168.177.96:8000/users/')
  .then(res => {
    return res.data
  })}

export function adduser(users) {
return axios.post('http://192.168.177.96:8000/users/',
{
    id: null,
    username: users.username.value,
    email: users.email.value,
})
.then(res => {
    return res.data
})}

export  function editusers(id, users) {
    return axios.put('http://192.168.177.96:8000/users/'+id+'/',
    {
        username: users.username.value,
        email: users.email.value,
    })
    .then(res => {
        return res.data
    })}

export  function deleteusers(id) {
    return axios.delete('http://192.168.177.96:8000/users/'+id+'/')
    .then(res => {
        return res.data
    })}