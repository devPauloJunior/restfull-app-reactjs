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
      
// Doctors

export function getdoctors() {
    return ApiService.get('doctors/')
    .then(res => {
      return res.data
  })}
  
  export function adddoctors(doctors) {
  return ApiService.post('doctors/',
  {
      doctor_id: null,
      doctor_first_name: doctors.doctor_first_name.value,
      doctor_last_name: doctors.doctor_last_name.value,
      doctor_type_blood: doctors.doctor_type_blood.value,
  })
  .then(res => {
      return res.data
  })}
  
  export  function editdoctors(doctor_id, doctors) {
      return ApiService.put('doctors/'+doctor_id+'/',
      {
          doctor_first_name: doctors.doctor_first_name.value,
          doctor_last_name: doctors.doctor_last_name.value,
          doctor_type_blood: doctors.doctor_type_blood.value,
      })
      .then(res => {
          return res.data
      })}
  
  export  function deletedoctors(doctor_id) {
      return ApiService.delete('doctors/'+doctor_id+'/')
      .then(res => {
          return res.data
      })}