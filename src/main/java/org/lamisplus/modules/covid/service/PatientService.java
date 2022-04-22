package org.lamisplus.modules.covid.service;

import lombok.RequiredArgsConstructor;
import org.lamisplus.modules.covid.domain.entity.Patient;
import org.lamisplus.modules.covid.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientService {
    @Autowired
    private PatientRepository repository;

    public Patient SavePatient(Patient patient){
        return repository.save(patient);
    }

    public Patient UpdatePatient(int id, Patient patient){
        return repository.update(id, patient);
    }

    public List<Patient> GetAllPatients() {
        return repository.findAll();
    }

    public String DeletePatient(int id) {
        return repository.delete(id);
    }
}
