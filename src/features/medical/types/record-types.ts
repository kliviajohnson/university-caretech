// Common record type for all medical records
export interface MedicalRecord {
  id: string
  formType: string
  notes: string | null
  status: string
  filePath: string
  createdAt: string
  updatedAt: string
  departmentName?: string // Department name for clearance requests
}

// Specific record types
export type MedicalHistoryRecord = MedicalRecord;
export type ImmunizationRecord = MedicalRecord;
export type LabResultRecord = MedicalRecord; 