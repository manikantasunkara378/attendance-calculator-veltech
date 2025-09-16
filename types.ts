
export enum AttendanceStatus {
  ELIGIBLE = 'ELIGIBLE',
  NOT_ELIGIBLE = 'NOT_ELIGIBLE',
  INVALID = 'INVALID',
  IDLE = 'IDLE'
}

export interface AttendanceCalculation {
  percentage: number;
  status: AttendanceStatus;
  classesNeeded: number;
  classesCanSkip: number;
  error: string | null;
}
