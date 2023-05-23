import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://192.168.177.96:8000/',
    headers:{
        'Content-Type': 'application/json'
    }})

export function getpatients() {
  return ApiService.get('patients/')
  .then(res => {
    return res.data
})}

export function addpatients(patients) {
return ApiService.post('patients/',
{
    patient_id: null,
    patient_first_name: patients.patient_first_name.value,
    patient_last_name: patients.patient_last_name.value,
    patient_type_blood: patients.patient_type_blood.value,
})
.then(res => {
    return res.data
})}

// export  function editpatients(id, patients) {
//     return axios.put('http://192.168.177.96:8000/patients/'+id+'/',
//     {
//         username: patients.username.value,
//         email: patients.email.value,
//     })
//     .then(res => {
//         return res.data
//     })}

// export  function deletepatients(id) {
//     return axios.delete('http://192.168.177.96:8000/patients/'+id+'/')
//     .then(res => {
//         return res.data
//     })}