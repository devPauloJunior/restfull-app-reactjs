import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://192.168.177.196:8000',
    headers:{
        'Content-Type': 'application/json'
    }})

    export function getpatients() {
        return ApiService.get('/patients/')
        .then(res => {
          return res.data
      })}
      
      export function addpatients(patients) {
        console.log(patients.value)
      return ApiService.post('/patients/',
      {
          patient_id: null,
          patient_first_name: patients.patient_first_name.value,
          patient_last_name: patients.patient_last_name.value,
          patient_type_blood: patients.patient_type_blood.value,
          patient_doctor: patients.patient_doctor.value,
      })
      .then(res => {
          return res.data
      })}
      
      export function editpatients(patient_id, patients) {
          return ApiService.put('/patients/'+patient_id+'/',
          {
              patient_first_name: patients.patient_first_name.value,
              patient_last_name: patients.patient_last_name.value,
              patient_type_blood: patients.patient_type_blood.value,
              patient_doctor: patients.patient_doctor.value,
          })
          .then(res => {
              return res.data
          })}
      
      export function deletepatients(patient_id) {
          return ApiService.delete('/patients/'+patient_id+'/')
          .then(res => {
              return res.data
          })}
      
// Doctors

        export function getdoctors() {
            return ApiService.get('/doctors/')
            .then(res => {
            return res.data
        })}

        export function getspecificdoctor(doctor_id) {
            return ApiService.get('/doctors/'+doctor_id+'/')
            .then(res => { return res.data 
        })}
        
        export function adddoctors(doctors) {
        console.log(doctors.doctor_last_name.value);
        return ApiService.post('/doctors/',
        {
            doctor_id: null,
            doctor_first_name: doctors.doctor_first_name.value,
            doctor_last_name: doctors.doctor_last_name.value,
            doctor_type_blood: doctors.doctor_type_blood.value,
        })
        .then(res => {
            return res.data
        })}
        
        export function editdoctors(doctor_id, doctors) {
            return ApiService.put('/doctors/'+doctor_id+'/',
            {
                doctor_first_name: doctors.doctor_first_name.value,
                doctor_last_name: doctors.doctor_last_name.value,
                doctor_type_blood: doctors.doctor_type_blood.value,
            })
            .then(res => {
                return res.data
            })}
        
        export function deletedoctors(doctor_id) {
            return ApiService.delete('/doctors/'+doctor_id+'/')
            .then(res => {
                return res.data
            })}

// Appointments

        export function getappointments() {
            return ApiService.get('/appointments/')
            .then(res => {
            return res.data
        })}

        export function addappointments(appointments) {
            return ApiService.post('/appointments/',
            {
                appointments_id: null,
                appointments_doctor: appointments.appointments_doctor.value,
                appointments_patient: appointments.appointments_patient.value,
                appointments_title: appointments.appointments_title.value,
                appointments_desc: appointments.appointments_desc.value,
            })
            .then(res => {
                return res.data
            })}
            
            export function editappointments(appointments_id, appointments) {
                return ApiService.put('/appointments/'+appointments_id+'/',
                {
                    appointments_doctor: appointments.appointments_doctor.value,
                    appointments_patient: appointments.appointments_patient.value,
                    appointments_title: appointments.appointments_title.value,
                    appointments_desc: appointments.appointments_desc.value,
                })
                .then(res => {
                    return res.data
                })}
            
            export function deleteappointments(appointments_id) {
                return ApiService.delete('/appointments/'+appointments_id+'/')
                .then(res => {
                    return res.data
                })}

