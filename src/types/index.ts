export interface FoodCategory {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  summary: string;
  whatToWatchFor: string[];
  whatToAvoid: string[];
  whatToDoInstead: string[];
  idealTemp: string;
  scienceNote: string;
}

export interface ConcernCard {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: string;
  description: string;
  extendedDetails: {
    overview: string;
    chemicalOrBiologicalProcess: string;
    practicalImpact: string;
    actionableAdvice: string;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tip: string;
}

export interface MythFactItem {
  id: string;
  myth: string;
  fact: string;
  explanation: string;
  sourceAuthority: string;
}

export interface WarningSign {
  id: string;
  title: string;
  indicator: string;
  dangerLevel: 'caution' | 'warning' | 'critical';
  sensoryCue: 'Sight' | 'Smell' | 'Texture' | 'Smoke';
  description: string;
  correction: string;
}
