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

export  function editpatients(patient_id, patients) {
    return ApiService.put('patients/'+patient_id+'/',
    {
        patient_first_name: patients.patient_first_name.value,
        patient_last_name: patients.patient_last_name.value,
        patient_type_blood: patients.patient_type_blood.value,
    })
    .then(res => {
        return res.data
    })}

export  function deletepatients(patient_id) {
    return ApiService.delete('patients/'+patient_id+'/')
    .then(res => {
        return res.data
    })}